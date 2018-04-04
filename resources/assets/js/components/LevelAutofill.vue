<template>
    <pre>
        <code v-if="rosterLoaded">
            {{ instructions.join(';') }}
        </code>
    </pre>
</template>

<script>
  import { mapGetters } from 'vuex'

  const TRA = 5;
  const TUM = 6;
  const DMT = 7;

  export default {
    name: 'level-autofill',

    computed: {
      ...mapGetters(['rosterLoaded']),

      instructions() {
        let instructions = [];

        this.$store.getters.checkedAthletes.forEach((athlete) => {
          if (athlete.tra_level) {
            let tra_mapped = this.levelMap(athlete.tra_level, athlete.competitive_age)
            let dmt_mapped = this.levelMap(athlete.dmt_level, athlete.competitive_age)
            let tum_mapped = this.levelMap(athlete.tum_level, athlete.competitive_age)

            if (tra_mapped) instructions.push(`$('select[name="Apparatus[${athlete.usag_id}][${TRA}]"]\').val(${tra_mapped})`)
            if (dmt_mapped) instructions.push(`$('select[name="Apparatus[${athlete.usag_id}][${DMT}]"]\').val(${dmt_mapped})`)
            if (tum_mapped) instructions.push(`$('select[name="Apparatus[${athlete.usag_id}][${TUM}]"]\').val(${tum_mapped})`)
          }
        })

        return instructions
      },

      athleteIds() {
        return JSON.stringify(this.$store.getters.checkedAthletes.map((athlete) => {
          return String(athlete.usag_id)
        }))
      }
    },

    methods: {

      levelMap(level, age) {
        const levels = {
          '': '',
          '1': '73',
          '2': "74",
          '3': "75",
          '4': "76",
          '5': "77",
          '6': "78",
          '7': "79",
          '8': "80",
          '9': "81",
          '10': "82",
          'YE': () => {
            if (age >= 11 && age <= 12) {
              return '134'
            } else if (age >= 13 && age <= 14) {
              return '131'
            }
          },
          'youth-11-12': "134",
          'youth-13-14': "131",
          'JR': "99",
          'OE': "101",
          'SR': "100",
        }

        if (levels.hasOwnProperty(level)) {
          let test = (typeof levels[level] !== 'function') ? levels[level] : levels[level]()
          console.log(test);
          return test
        } else {
          console.log(level, age);
        }
      }
    }
  }
</script>