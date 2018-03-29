<template>
    <div>
        <select class="form-control" :name="field" v-model="temporaryData" v-show="editing">
            <option v-for="option in options" :value="option.key">{{ option.value }}</option>
        </select>
        <button type="button" class="btn btn-default" @click="save" v-show="editing">✔️</button>
        <button type="button" class="btn btn-default" @click="cancel" v-show="editing">✖️</button>
        <span @click="toggleEditing" v-show="!editing">{{ changeableData }}</span>
    </div>
</template>

<script>
  import BackendMixin from './backend-mixin'

  export default {
    name: 'input-select',

    props: {
      options: null
    },

    mixins: [BackendMixin]
  }
</script>

<style scoped>

</style>