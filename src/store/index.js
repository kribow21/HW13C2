import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playlistSongs : [],
    songs : [
      {
        title : "Disappearer",
        artist : "Born without Bones",
        id : 1,
      },
      {
        title : "Twenty Something",
        artist : "Nightly",
        id : 2,
      },
      {
        title : "Up to Me",
        artist : "LANY",
        id : 3,
      },
      {
        title : "1984",
        artist : "Nightly Traveller",
        id : 4,
      },
      {
        title : "Bleach",
        artist : "Hurtwave",
        id : 5,
      },
      {
        title : "Will your heart have room",
        artist : "Shybeast",
        id : 6,
      }
    ]
  },
  mutations: {
    removeSong : function(state,id){
      for(let i = 0 ; i < state.songs.length; i++){
        if(state.songs[i].id == id){
          state.playlistSongs.push(state.songs.splice(i , 1)[0]);
          console.log(state.playlistSongs);
        }
      }
    }
  },
  actions: {},
  getters: {},
});
