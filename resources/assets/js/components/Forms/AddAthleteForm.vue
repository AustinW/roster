<template>
    <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group label="First Name" label-for="firstName">
            <b-form-input id="firstName" v-model="firstName" required placeholder="First Name"></b-form-input>
        </b-form-group>

        <b-form-group label="Last Name" label-for="lastName">
            <b-form-input id="lastName" v-model="lastName" required placeholder="Last Name"></b-form-input>
        </b-form-group>
    </b-form>
</template>

<script>
  export default {
    name: 'AddAthleteForm',

    data() {
      return {

      }
    },

    methods: {
      onSubmit() {

      },

      onReset() {

      }
    },

    created() {
      // this.$store.registerModule('AddAthleteForm')
    },

    computed: {
      title() {
        let name = this.$store.getters['AddAthleteForm/name']
        return name ? name : 'Add Athlete'
      },
      firstName: {
        get() {
          return this.$store.getters['AddAthleteForm/form'].firstName
        },
        set(value) {
          this.$store.dispatch('AddAthleteForm/updateFormField', { field: 'firstName', value })
        }
      },

      lastName: {
        get() {
          return this.$store.getters['AddAthleteForm/form'].lastName
        },
        set(value) {
          this.$store.dispatch('AddAthleteForm/updateFormField', { field: 'lastName', value })
        }
      },
    }
  }
</script>

<style scoped>

</style>