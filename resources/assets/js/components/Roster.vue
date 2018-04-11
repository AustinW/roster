<template>
    <div>
        <div class="row">
            <div class="table-responsive">
                <table v-if="roster" class="table table-striped">
                    <thead>
                        <tr>
                            <th><label><input type="checkbox" v-model="checkAll"/></label></th>
                            <th>#</th>
                            <th v-for="key in columns"
                                @click="sortBy(key)"
                                :class="{ active: sortKey == key }">
                                {{ key | title }}
                                <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <filter-bar></filter-bar>
                        <athlete :columns="columns" :data="entry" :index="$index" :key="entry.id"
                                 v-for="(entry, $index) in rowData" v-show="entry.visible" v-if="entry"></athlete>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row">
            <registration-autofill></registration-autofill>
        </div>
        <div class="row">
            <level-autofill></level-autofill>
        </div>
    </div>
</template>

<script>
  import Vuetable from 'vuetable-2'
  import { mapGetters } from 'vuex'

  export default {
    name: 'roster',

    props: {
      columns: Array,
      filterKey: String
    },

    computed: {

      ...mapGetters(['roster']),

      checkAll: {
        get() {
          return this.$store.state.checkAll
        },

        set(value) {
          this.$store.dispatch('checkAll', value)
        }
      },

      rowData() {
        let sortKey = this.sortKey
        let order = this.sortOrders[sortKey] || 1
        let data = this.$store.getters.filteredData

        if (sortKey) {
          data = data.slice().sort((a, b) => {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }

        return data
      }
    },

    filters: {
      title: function (value) {
        const titles = {
          active: 'Active',
          usag_id: 'USAG #',
          first_name: 'First',
          last_name: 'Last',
          gender: 'Gender',
          birthdate: 'Birthdate',
          age: 'Age',
          tra_level: 'TRA',
          dmt_level: 'DMT',
          tum_level: 'TUM'
        }

        return titles[value]
      }
    },

    methods: {
      sortBy(key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      }
    },

    data() {
      let sortOrders = {}

      this.columns.forEach((key) => {
        sortOrders[key] = 1
      })

      return {
        sortKey: '',
        sortOrders: sortOrders
      }
    },

    mounted() {
      this.$store.dispatch('loadRoster', { table: this.$refs.vuetable })
    },

    components: { Vuetable }
  }
</script>

<style scoped>
    #app {
        margin: 10px;
    }

    .datatable {
        width: 100%
    }

    .column-controls {
        cursor: pointer;
        float: right;
        margin-top: 4px;
    }

    .column-controls .fa-sort {
        opacity: 0.4;
    }

    .container-full {
        margin: 0 auto;
        width: 100%;
    }

    th, td {
        min-width: 0;
    }
</style>