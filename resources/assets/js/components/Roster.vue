<template>
    <table v-if="roster">
        <thead>
            <tr>
                <th v-for="key in columns"
                    @click="sortBy(key)"
                    :class="{ active: sortKey == key }">
                    {{ key | title }}
                    <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in filteredData">
                <td v-for="key in columns">
                    <input-text v-if="['usag_id', 'first_name', 'last_name'].includes(key)" :initial-data="entry[key]" field="key"></input-text>
                    <input-select v-else-if="['active', 'gender', 'tra_level', 'dmt_level', 'tum_level'].includes(key)" :initial-data="entry[key]" field="key"></input-select>
                    <span v-else>{{ entry[key] }}</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
  import Vuetable from 'vuetable-2'
  import axios from 'axios'
  import { mapGetters } from 'vuex'

  export default {
    name: 'roster',

    props: {
      columns: Array,
      filterKey: String
    },

    computed: {

      ...mapGetters(['roster']),

      filteredData() {
        let sortKey = this.sortKey
        let filterKey = this.filterKey && this.filterKey.toLowerCase()
        let order = this.sortOrders[sortKey] || 1
        let data = this.roster.data

        if (filterKey) {
          data = data.filter((row) => {
            return Object.keys(row).some((key) => {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }

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

</style>