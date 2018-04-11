<template>
    <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="addAthleteGroup" label="First Name" label-for="firstName">
            <b-form-input id="firstName" v-model="form.firstName" required placeholder="First Name"></b-form-input>
        </b-form-group>
    </b-form>
</template>

<script>
  export default {
    name: 'AddAthleteForm',

    data() {
      return {
        form: {
          firstName: null
        }
      }
    },

    methods: {
      onSubmit() {

      },

      onReset() {

      }
    }
  }
</script>

<style scoped>

</style>