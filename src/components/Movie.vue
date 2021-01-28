<template>
  <div class="movie-card">
      <div class="flex-container">
        <h3>{{ movie.title }}</h3>
        <button class="delete-btn" @click="deleteMovie">Delete</button>
      </div>
      <p>"{{ movie.comment }}"</p>

      <div class="timestamp-wrapper">
      <p class="recommended-by">Recommended by: {{ movie.recommendedBy }}</p>
        <p class="timestamp">{{ movie.timestamp | formatDate }}</p>
      </div>
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
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
    }

    div.flex-container {
        display: flex;
        justify-content: space-between;
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

    div.timestamp-wrapper {
        display: flex;
        justify-content: space-between;
    }

    p.timestamp {
        font-size: 0.8rem;
    }

    p.recommended-by {
        font-size: 0.8rem;
    }

</style>