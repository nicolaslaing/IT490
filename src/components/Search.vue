<template>
  <div style="text-align: center; margin-top:25px;">
      <form @submit.prevent="search">
        <select id="select" v-model="entityType">
            <option value=null disabled>Select Entity</option>
            <option value="artist">Artist</option>
            <option value="performance">Performance</option>
        </select>
        <input id="search" type="text" v-model.lazy="query" placeholder="Artist, Performance" :disabled="entityType == null">
      </form>
  </div>
</template>

<script>
import axios from 'axios'
import { EventBus } from '@/plugins/event-bus.js'

export default {
  /* eslint-disable */
  name: 'Search',
  data () {
    return {
        entityType: null,
        query: null,
        parameters: {
            "queue_to_publish": "",
            "api_route": "",
            "api_params": "",
        },
    }
  },
  created() {

  },
  methods: {
    search(){
      let query = {
        "entityType": this.entityType,
        "params": "commonName=" + this.query
      }
      let self = this
  console.log(query)
      axios.post('http://localhost/search', query)
      .then(function(response){
          EventBus.$emit("search-results", response.data)
          // self.searchResults = response.data
      })
      .catch(function(error){
          console.log(error.response.data)
      })
    },
    searchPublish() {
        console.log(this.entityType, this.query)

        this.parameters.queue_to_publish = "artist"
        this.parameters.api_params = "?format=json&commonName=" + this.query
        this.parameters.api_route = "search/" + this.entityType + this.parameters.api_params
          console.log(this.parameters)
        let self = this
        axios.post('http://127.0.0.1:5000/publish/' + this.entityType, {headers:{"Content-Type": "application/json", "Accept": "application/json"}}, this.parameters)
          .then(function(response){
              console.log(response.data)
          })
          .catch(function(error){
              console.log(error.response.data)
          })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #select {
        /* float:right */
        height: 35px;
        width: 130px;
    }
    #search {
        /* float: right; */
        margin-right: 20px;
        height: 30px;
        width: 600px;
    }
</style>
