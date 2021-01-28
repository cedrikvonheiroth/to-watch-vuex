import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [
      {
        title: 'Pulp Fiction',
        comment: 'Do not skip this movie. I dare you, I double dare you!',
        recommendedBy: 'Samuel L. Jackson',
        timestamp: '2018-01-21 14:09:19'
      },

      {
        title: 'Hata Göteborg',
        comment: 'The best Swedish movie of all times!',
        recommendedBy: 'Jonas Mitander',
        timestamp: '2008-01-20 19:10:19'
      },

      {
        title: 'Så Som I Himmelen',
        comment: 'One of the best Swedish movies that I have seen!',
        recommendedBy: 'Michael Nyqvist',
        timestamp: '2005-01-19 14:09:19'
      },

      {
        title: 'Die Hard 2',
        comment: 'No bullshit just some good old action. Yippee-ki-yay, motherfucker!',
        recommendedBy: 'Bruce Willis',
        timestamp: '1990-07-04 13:37:00'
      },
    ]

  },
  mutations: {
    addMovie(state, movie){
      state.movies.unshift(movie)
    },
    removeMovie(state, movieToRemove) {
      state.movies = state.movies.filter((movie) => movieToRemove !== movie);
    },
  },
  
  actions: {
  },
  modules: {
  }
})
