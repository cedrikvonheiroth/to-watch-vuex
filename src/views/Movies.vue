// The ADD MOVIES-page
<template>
  <div class="movies">
    <div class="wrapper">
      <h1>Movies</h1>
      <p>Let's add some movies to your watchlist! </p>

      <form @submit.prevent="addMovie" >
        <label for="movie-title">Title: </label>
        <input v-model="movie" type="text" id="movie-title" placeholder="The title of the movie">

        <br>
        <label for="comment">Comment: </label>
        <textarea v-model="comment" name="" id="comment" cols="100" rows="10" placeholder="Please explain in a few words why the movie is a must see"></textarea>

        <br>
        <label for="recommended by">Recommended by: </label>
        <input v-model="recommendedBy" type="text" id="recommended-by" placeholder="Let everybody know who is recommending this movie">

        <br>
        
        <button>Add to watchlist</button>
        
      </form>
    
      <MovieWatchlist />
    </div>
  </div>
</template>


<script>
import MovieWatchlist from '../components/MovieWatchlist.vue'
export default {
    data(){
      return{
        movie:'',
        comment:'',
        recommendedBy:''
      }
    },

    components: {
        MovieWatchlist
    },

    methods: {
      addMovie(){
        let newMovie = {
        title: this.movie,
        comment: this.comment,
        recommendedBy: this.recommendedBy,
        timestamp: Date.now(),
      }

      this.$router.push('/');
      this.$store.commit('addMovie', newMovie); 
      }
    }
  }

</script>

<style scoped>
  div.wrapper {
    width: 50vw;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
  }

  form {
    border: 1px dashed rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    width: 55vw;
  }

  form input, textarea, label {
    margin: 0.5rem;
  }

  form button {
    width: 150px;
    margin: 0.5rem auto;
  }

  div.movies {
    display: flex;
    /* background-color: rgb(5, 5, 32); */
    background-image: linear-gradient(to bottom right, rgb(9, 9, 49), rgb(20, 20, 20));
    min-height: 100vh;
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