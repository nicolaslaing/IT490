<template>
    <div>
        <table v-if="showArtists" style="margin: auto; padding-top: 10px;">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>API URI</td>
                </tr>
            </thead>
            <tbody>
                <tr v-if="searchResults != null" v-for="result in searchResults.resultPage">
                    <td style="cursor: pointer;" @click="getArtistDetails(result.entityId)">{{result.commonName}}</td>
                    <td><a target="_blank" :href="result.uri">{{result.uri}}</a></td>
                </tr>
            </tbody>
        </table><br><br>
        <table v-if="showArtistDetails" style="margin: auto; padding-top: 10px;">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Comments</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{artistDetails.commonName}}</td>
                    <td>{{artistDetails.comments}}</td>
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
        showArtists: true,
        showArtistDetails: false,
        artistDetails: null,
    }
  },
  created() {
    // console.log(this.searchResults)
  },
  methods: {
      getArtistDetails(entityId){
        this.artistDetails = null
        this.showArtistDetails = false
        let self = this
        axios.get('http://localhost/artist/'+entityId)
        .then(function(response){
            console.log(response.data)
            self.artistDetails = response.data
            self.showArtistDetails = true
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
    table {
        border-collapse: collapse;
        width: 95%;
    }
    table, th, td {
        border: 1px solid black;
    }
</style>
