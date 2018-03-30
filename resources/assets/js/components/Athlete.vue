<template>
    <tr>
        <td><input type="checkbox" v-model="checked" /></td>
        <td>{{ index + 1 }}</td>
        <column :entry="data" :column="column" :key="column" v-for="column in columns"/>
    </tr>
</template>

<script>
  export default {
    name: "athlete",

    props: {
      columns: null,
      data: null,
      index: null
    },

    computed: {
      checked: {
        get() {
          return this.$store.getters.athleteChecked(this.data.id)
        },
        set(checked) {
          this.$store.commit('checkAthlete', {
            athleteId: this.data.id,
            checked
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>