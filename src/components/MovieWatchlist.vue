<template>
  <div class="movie-watchlist">
      <Movie v-for="(movie, index) of movies"
      :key="index"
      :movie="movie" />
 </div>
</template>

<script>
import Movie from './Movie.vue'

export default {
    components: {Movie},

    computed: {
        movies() {
            return this.$store.state.movies
        }
    }
}
</script>

<style scoped>
    div.movie-watchlist {
        display: flex;
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 5px;
        /* height: 50vh; */
        width: 55vw;
        margin: 2rem auto;
        flex-direction: column;
    }
</style>