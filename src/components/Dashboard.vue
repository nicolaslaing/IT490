<template>
  <div class="main-body">
    <!-- <button type="button" v-on:click.stop.prevent="sendLog">Send Audit Log</button><br><br> -->
    <Results v-if="searchResults != null" :getArtistDetails="getArtistDetails" :artistDetails="artistDetails" :searchResults="searchResults"></Results>
  </div>
</template>

<script>
import axios from 'axios'
import Results from './Results'
import { EventBus } from '@/plugins/event-bus.js'

export default {
  /* eslint-disable */
  name: 'Dashboard',
  components:{
    "Results": Results,
  },
  data () {
    return {
      user: '',
      searchResults: null,
      artistDetails: null,
    }
  },
  created() {
    this.user = this.$cookies.get("User")
    EventBus.$on('search-results', this.populateResults)
  },
  beforeDestroy(){
    EventBus.$off('search-results', this.populateResults)
  },
  methods: {
    populateResults(results){
      this.searchResults = results
      this.artistDetails = null
    },
    getArtistDetails(entityId){
      this.artistDetails = null
      let self = this
      axios.get('http://localhost/artist/'+entityId)
      .then(function(response){
          self.artistDetails = response.data
      })
      .catch(function(error){
          console.log(error)
      })
    },
    sendLog() {
      let self = this
      let logData = {
        'userid': this.user.id
      }
      axios.post('http://localhost/log', logData)
      .then(function(response){
        console.log(response)
        
      })
      .catch(function(error){
        console.log(error)
      })
    },
    getData() {
      axios.get('http://localhost/api')
      .then(function(response){
        console.log(response)
      })
      .catch(function(error){
        console.log(error)
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dashboard {
    height: 100vh;
    width: 100vh;
    margin: auto;
    /* color: white; */
    background-color: rgb(219, 245, 245);
    text-align: center;
  }
</style>
