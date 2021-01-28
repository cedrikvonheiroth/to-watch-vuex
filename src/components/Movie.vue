<template>
  <div class="movie-card">
      <h3>{{ movie.title }}</h3>
      <p>"{{ movie.comment }}"</p>
      <p>Recommended by: {{ movie.recommendedBy }}</p>
      <p>{{ movie.timestamp | formatDate }}   </p>
      <button class="delete-btn" @click="deleteMovie">Delete</button>
  </div>
</template>

<script>
export default {
    props: ['movie'],

    methods: {
        deleteMovie() {
            this.$store.commit("removeMovie", this.movie);
        },
    },
}
</script>

<style scoped>
    div.movie-card {
        border: 1px solid rgb(202, 56, 19);
        border-radius: 5px;
        margin: 1.5rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    div.movie-card h3 {
        padding: 0.5rem;
        color: rgb(202, 56, 19);
    }

    div.movie-card p {
        padding: 0.5rem;
    }

    button.delete-btn {
        color: rgb(202, 56, 19);
        padding: 0.2rem;
        margin: 0.5rem;
        border-radius: 3px;
        cursor: pointer;
        width: 50px;
    }

</style>