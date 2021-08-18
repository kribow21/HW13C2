<template>
    <div>
        <h3>{{title}}</h3>
        <h4>{{artist}}</h4>
        <button v-if="isSonglist == true" @click="removeSongFromSonglist">Add to playlist</button>
    </div>
</template>

<script>
    export default {
        name : "Song",
        props : {
            title : String,
            artist : String,
            id : Number,
            isSonglist : Boolean,
        },
        methods : {
            removeSongFromSonglist : function(){
                this.$store.commit('removeSong', this.id)
            }
        }
    }
</script>

<style scoped>

</style>