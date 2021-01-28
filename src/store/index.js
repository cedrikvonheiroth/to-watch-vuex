import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [
      {
        title: 'Pulp Fiction',
        comment: 'A very good movie, you have to watch it!',
        recommendedBy: 'Cedrik',
        timestamp: ''
      },

      {
        title: 'Hata Göteborg',
        comment: 'The best Swedish movie of all times!',
        recommendedBy: 'Cedrik',
        timestamp: ''
      },

      {
        title: 'Så Som I Himmelen',
        comment: 'Another great Swedish movie, highly recommended!',
        recommendedBy: 'Cedrik',
        timestamp: ''
      },

      {
        title: 'Die Hard 2',
        comment: 'Some good old action!',
        recommendedBy: 'Cedrik',
        timestamp: ''
      },
    ]

  },
  mutations: {
    addMovie(state, movie){
      state.movies.unshift(movie)
    }
  },
  
  actions: {
  },
  modules: {
  }
})
