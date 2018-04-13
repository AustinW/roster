<template>
    <b-modal id="addAthlete" :title="title" @ok="handleOk" ref="modal">
        <add-athlete-form></add-athlete-form>
    </b-modal>
</template>

<script>

  export default {
    name: 'AddAthleteModal',

    computed: {
      title() {
        let name = this.$store.getters['AddAthleteForm/name']
        return name ? name : 'Add Athlete'
      },
    },

    methods: {
      handleOk(event) {
        event.preventDefault()

        this.$store.dispatch('AddAthleteForm/addAthlete').then((response) => {
          this.$refs.modal.hide()
        }).catch((response) => {
          console.log(response)

        })
      }
    }
  }
</script>

<style scoped>

</style>