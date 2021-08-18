<template>
    <main>
        <h1>Song List</h1>
            <Song 
            v-for="song in songs"
            v-bind:key="song.id"
            :title ="song.title"
            :artist="song.artist"
            :id="song.id"
            :isSonglist="true"
            />
    </main>
</template>

<script>
import Song from './Song.vue'
    export default {
        name : 'Songlist',
        components : {
            Song
        },
        data : function(){
            return {
                removed : []
            } 
        
        },
        computed : {
            songs : function(){
                return this.$store.state.songs;
            }
        },
        methods : {
            removeFromlist : function(){ 
                
            }
        }
    }
</script>

<style scoped>
main{
    border: 2px rgb(62, 124, 124) solid;
    background-color: paleturquoise;
}
</style>