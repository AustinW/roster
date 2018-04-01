<template>
    <td>
        <input-text v-if="this.textFields.includes(column)" :initial-data="entry[column]" :field="column" :id="entry.id" />
        <input-select v-else-if="this.selectFields.includes(column)" :initial-data="entry[column]" :field="column" :options="fieldOptions(column)" :id="entry.id" />
        <input-date v-else-if="this.dateFields.includes(column)" :initial-data="entry[column]" :field="column" id="entry.id" />

        <span v-else>{{ fieldModifier(column) }}</span>
    </td>
</template>

<script>
  export default {
    name: "column",

    props: {
      entry: null,
      column: null,
    },

    data() {
      return {
        textFields: ['usag_id', 'first_name', 'last_name'],
        selectFields: ['active', 'gender', 'tra_level', 'dmt_level', 'tum_level'],
        dateFields: ['birthdate']
      }
    },

    methods: {
      fieldOptions(key) {
        let options = this.$store.getters.fieldOptions

        if (key === 'tra_level' || key === 'dmt_level' || key === 'tum_level') {
          return options['level']
        } else {
          return options[key]
        }
      },

      fieldModifier(column) {
        if (column === 'age') {
          return this.entry['competitive_age']
        } else {
          return this.entry[column]
        }
      }
    }
  }
</script>