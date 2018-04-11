<template>
    <b-modal id="addAthlete" :title="title">
        <add-athlete-form></add-athlete-form>
    </b-modal>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  export default {
    name: 'AddAthleteModal',

    computed: {
      title() {
        let name = this.$store.getters['AddAthleteForm/name']
        return name ? name : 'Add Athlete'
      },
    }
  }
</script>

<style scoped>

</style>