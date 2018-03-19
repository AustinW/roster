<template>
    <div>
        <vuetable ref="vuetable"
                  api-url="/api/athletes"
                  :fields="fields"
        ></vuetable>
    </div>
</template>

<script>
  import Vuetable from 'vuetable-2';
  import axios from 'axios';

  export default {
    name: "roster",

    data() {
      return {
        fields: [
          {
            name: 'active',
            sortField: 'active',
            title: 'Active',
            callback: (value) => {
              return (value === 1) ? 'Yes' : 'No'
            },
            __component: 'input-select'
          },
          { name: 'usag_id', sortField: 'usag_id', title: 'USAG #' },
          { name: '__component:first-name-column', sortField: 'first_name', title: 'First Name' },
          { name: '__component:last-name-column', sortField: 'last_name', title: 'Last Name' },
          { name: '__component:gender-column', sortField: 'gender', title: 'Gender' },
          { name: 'birthdate', sortField: 'birthdate', title: 'Birthday' },
          { name: 'competitive_age', sortField: 'competitive_age', title: 'Age' },
          { name: 'tra_level', sortField: 'tra_level', title: 'TRA' },
          { name: 'dmt_level', sortField: 'dmt_level', title: 'DMT' },
          { name: 'tum_level', sortField: 'tum_level', title: 'TUM' },
          { name: 'notes', sortField: 'notes', title: 'Notes' },
          { name: 'sync_partner', sortField: 'sync_partner', title: 'Sync Partner' },
        ]
      }
    },

    components: {Vuetable}
  }
</script>

<style scoped>

</style>