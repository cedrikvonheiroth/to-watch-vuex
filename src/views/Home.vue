<template>
  <div class="home">
    <div class="wrapper">
      <h1>Home</h1>
      <p>This is your current watchlist. Want to add movies? Go to Add Movies!</p>
    </div>
  <MovieWatchlist />
  </div>
</template>

<script>
import MovieWatchlist from '../components/MovieWatchlist.vue'

export default {
  components: {
    MovieWatchlist
  }
}

</script>

<style scoped>
  div.home {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to bottom right, rgb(9, 9, 49), rgb(20, 20, 20));
    min-height: 100vh;
  }

  div.wrapper {
    height: 20vh;
    width: 50vw;
    margin: 1rem auto;
    color: white;
  }

  div.wrapper h1 {
    text-align: center;
    padding: 1rem;
  }

  div.wrapper p {
    padding: 1rem;
    line-height: 2;
    text-align: center;
  }

</style>