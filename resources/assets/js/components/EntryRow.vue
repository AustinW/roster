<template>
    <td>
        <input-text v-if="this.textFields.includes(column)" :initial-data="entry[column]" :field="column" :id="entry.id" />
        <input-select v-else-if="this.selectFields.includes(column)" :initial-data="entry[column]" :field="column" :options="fieldOptions(column)" :id="entry.id" />
        <span v-else>{{ entry[column] }}</span>
    </td>
</template>

<script>
  export default {
    name: "entry-row",

    props: {
      entry: null,
      column: null,
    },

    data() {
      return {
        textFields: ['usag_id', 'first_name', 'last_name'],
        selectFields: ['active', 'gender', 'tra_level', 'dmt_level', 'tum_level']
      }
    },

    methods: {
      fieldOptions(key) {
        return this.$store.getters.fieldOptions[key]
      }
    }
  }
</script>