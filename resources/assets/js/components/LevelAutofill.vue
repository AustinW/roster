<template>
    <pre>
        <code v-if="rosterLoaded">
            var athleteIds = {{ athleteIds }};
            $('#participantsWomen tr, #participantsMen tr').each((index, athlete) => {
                let included = athleteIds.includes($(athlete).find('td:nth-child(4)').text())
                $(athlete).find('td:nth-child(1) input').prop('checked', included);
            });
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

      athletes() {
        let instructions = [];
        this.$store.getters.checkedAthletes.each((athlete) => {
          if (athlete.tra_level) {
            instructions.push(`$('select[name="Apparatus[${athlete.usag_id}][${TRA}]"]\').val(${this.levelMap(athlete.tra_level)})`)
          }
        })
      },

      levelMap(level) {
        const levels = {
          '': '',
          'level_1': '73',
          'level_2': "74",
          'level_3': "75",
          'level_4': "76",
          'level_5': "77",
          'level_6': "78",
          'level_7': "79",
          'level_8': "80",
          'level_9': "81",
          'level_10': "82",
          'youth_11_12': "134",
          'youth_13_14': "131",
          'junior_elite': "99",
          'open_elite': "101",
          'senior_elite': "100",
        }

        if (levels.hasOwnProperty(level)) {
          return levels[level]
        }
      }
    }
  }
</script>