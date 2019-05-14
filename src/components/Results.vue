<template>
    <div class="x_panel">
        <table>
            <thead>

            </thead>
            <tbody>
                <tr v-for="result in searchResults">
                    <td>{{result}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  /* eslint-disable */
  name: 'Dashboard',
  props: ["searchResults"],
  data () {
    return {

    }
  },
  created() {
    
  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
