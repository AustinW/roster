<template>
    <div>
        <flat-pickr
            :id="field"
            placeholder="mm/dd/yyyy"
            v-model="temporaryData"
            v-show="editing"
            class="form-control"
            :config="flatPickrConfig"
        />
        <button type="button" class="btn btn-default" @click="save" v-show="editing">✔</button>
        <button type="button" class="btn btn-default" @click="cancel" v-show="editing">✖</button>
        <span @click="toggleEditing" v-show="!editing">{{ changeableData | dateFormat }}</span>
    </div>
</template>

<script>
  import flatpickr from 'vue-flatpickr-component'
  import 'flatpickr/dist/flatpickr.css'
  import moment from 'moment'
  import BackendMixin from './backend-mixin'

  export default {
    name: 'input-date',

    data() {
      return {
        flatPickrConfig: null
      }
    },

    filters: {
      dateFormat(value) {
        if (value) {
          const momentDate = moment(value).format('M/D/YY')
          return (momentDate) ? momentDate : ''
        } else {
          return value
        }
      }
    },

    created() {
      if (this.temporaryData) {
        this.temporaryData = moment(this.temporaryData, 'YYYY-MM-DD').format('MM/DD/YYYY')
      }

      this.flatPickrConfig = {
        dateFormat: 'm/d/Y',
        allowInput: true,
        onClose: function (selectedDates, dateStr, instance) {
          let momentDate = moment(dateStr, ['MM/DD/YY', 'M/D/YYYY', 'M/D/YY', 'MM-DD-YY', 'M-D-YYYY', 'M-D-YY'])
          if (!momentDate.isValid()) {
            instance.clear()
          } else {
            instance.setDate(momentDate.format('MM/DD/YYYY'), true)
            self.value = self.internalDate
          }
        },
        disable: [date => self.allowFuture ? false : date > moment()]
      };
    },

    mixins: [BackendMixin]
  }
</script>

<style scoped>

</style>