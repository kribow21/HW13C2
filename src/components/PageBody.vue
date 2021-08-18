<template>
    <body>
        <Songlist/>
        <Playlist/>
    </body>
</template>

<script>
import Playlist from './Playlist.vue'
import Songlist from './Songlist.vue'
    export default {
        name : 'PageBody',
        components : {
            Playlist,
            Songlist
        }
    }
</script>

<style scoped>
body{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>