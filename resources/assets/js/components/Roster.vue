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
          { name: '__component:usag-id-column', sortField: 'usag_id', title: 'USAG #' },
          { name: '__component:first-name-column', sortField: 'first_name', title: 'First Name' },
          { name: '__component:last-name-column', sortField: 'last_name', title: 'Last Name' },
          { name: '__component:gender-column', sortField: 'gender', title: 'Gender' },
          { name: '__component:birthdate-column', sortField: 'birthdate', title: 'Birthday' },
          { name: 'competitive_age', sortField: 'competitive_age', title: 'Age' },
          { name: '__component:tra-level-column', sortField: 'tra_level', title: 'TRA' },
          { name: '__component:dmt-level-column', sortField: 'dmt_level', title: 'DMT' },
          { name: '__component:tum-level-column', sortField: 'tum_level', title: 'TUM' },
          { name: '__component:notes-column', sortField: 'notes', title: 'Notes' },
          { name: '__component:sync-partner-column', sortField: 'sync_partner', title: 'Sync Partner' },
        ]
      }
    },

    components: {Vuetable}
  }
</script>

<style scoped>

</style>