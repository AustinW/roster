<template>
    <div>
        <select class="form-control" :name="field" v-model="temporaryData" v-show="editing">
            <option v-for="option in options" :value="option.value">{{ option.title }}</option>
        </select>
        <button type="button" class="btn btn-default" @click="save" v-show="editing">✔️</button>
        <button type="button" class="btn btn-default" @click="cancel" v-show="editing">✖️</button>
        <span @click="toggleEditing" v-show="!editing">{{ changeableData }}</span>
    </div>
</template>

<script>
  export default {
    name: "input-text",

    data() {
      return {
        changeableData: null,
        editing: false,
        temporaryData: null,
      }
    },

    props: {
      initialData: null,
      field: null,
      options: null
    },

    mounted() {
      this.temporaryData = this.initialData
      this.changeableData = this.initialData
      console.log(this)
    },

    methods: {
      toggleEditing() {
        this.editing = !this.editing
      },

      save() {
        console.log('saving')
        this.editing = false
      },

      cancel() {
        console.log('cancel')
        this.editing = false
      }
    }
  }
</script>

<style scoped>

</style>