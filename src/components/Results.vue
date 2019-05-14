<template>
    <div style="padding-top: 20px;">
        <table v-if="searchResults != null" style="margin: auto;">
            <thead>
                <tr>
                    <td v-if="searchResults.resultPage[0].entityType == 'artist'">Name</td>
                    <td v-if="searchResults.resultPage[0].entityType == 'performance'">Title</td>
                    <td v-if="searchResults.resultPage[0].entityType == 'performance'">Singer</td>
                    <td>API URI</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="result in searchResults.resultPage">
                    <td v-if="result.commonName != undefined" style="cursor: pointer;" @click="getArtistDetails(result.entityId)">{{result.commonName}}</td>
                    <td v-if="result.title != undefined">{{result.title}}</td>
                    <td v-if="result.title != undefined">{{result.performer.name}}</td>
                    <td><a target="_blank" :href="result.uri">{{result.uri}}</a></td>
                </tr>
            </tbody>
        </table><br><br>
        <div v-if="artistDetails != null">
            <table style="margin: auto;">
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
            </table><br>
            <table v-if="artistDetails.relations.length > 0" style="margin: auto;">
                <thead>
                    <tr>
                        <td>Band Members</td>
                        <td>Comments</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="member in artistDetails.relations">
                        <td>{{member.artist.commonName}}</td>
                        <td v-if="member.comments != null">{{member.comments}}</td>
                        <td v-else>No data</td>
                    </tr>
                </tbody>
            </table><br><br>
        </div>
        <button v-if="searchResults != null || artistDetails != null" style="margin: auto;" type="button" @click="clearResults">Reset</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  /* eslint-disable */
  name: 'Dashboard',
  props: ["entityType", "searchResults", "artistDetails", "getArtistDetails"],
  data () {
    return {

    }
  },
  created() {
    // console.log(this.searchResults)
  },
  methods: {
      clearResults(){
        this.searchResults = null
        this.artistDetails = null
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
    thead td {
        font-weight: bold;
        background-color: rgb(151, 190, 190);
    }
    tbody tr:hover {
        background-color: rgb(197, 184, 184);
    }
</style>
