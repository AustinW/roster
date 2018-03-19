<template>
    <div>
        <input type="text" class="form-control" :name="field" v-model="temporaryData" v-show="editing" />
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
      field: null
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