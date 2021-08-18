<template>
    <main>
        <h1>Playlist</h1>
            <Song
            v-for="song in songs"
            v-bind:key="song.id"
            :title ="song.title"
            :artist="song.artist"
            :id="song.id"
            :isSonglist="false"
            />
    </main>
</template>

<script>
import Song from './Song.vue'
    export default {
        name : 'Playlist',
        components : {
            Song
        },
        computed : {
            songs : function(){
                return this.$store.state.playlistSongs;
            }
    }
    }
</script>

<style scoped>
main{
    border: 2px rgb(62, 124, 124) solid;
    background-color: rgb(226, 255, 255);
}
</style>