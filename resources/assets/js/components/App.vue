<template>
    <roster :columns="columns"></roster>
</template>

<script>
  export default {
    name: 'app',

    data() {
      return {
        columns: [
          'active',
          'usag_id',
          'first_name',
          'last_name',
          'gender',
          'birthdate',
          'tra_level',
          'dmt_level',
          'tum_level'
        ]
      }
    }
  }
</script>

<style scoped>

</style>