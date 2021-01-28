<template>
  <div class="movie-card">
      <h3>{{ movie.title }}</h3>
      <p>"{{ movie.comment }}"</p>
      <p>Recommended by: {{ movie.recommendedBy }}</p>
      <!-- <p>ms since 1 jan 1970: {{ movie.timestamp }}</p> -->
      <!-- <p>{{ new Date() | dateFormat('YYYY-MM-DD hh:mm:s') }}</p> -->
      <p>{{ movie.timestamp | formatDate }}   </p>
  </div>
</template>

<script>
export default {
    props: ['movie'],
}
</script>

<style scoped>
    div.movie-card {
        border: 1px solid rgb(202, 56, 19);
        border-radius: 5px;
        margin: 1.5rem;
        padding: 1.5rem;
    }

    div.movie-card h3 {
        padding: 0.5rem;
        color: rgb(202, 56, 19);
    }

    div.movie-card p {
        padding: 0.5rem;
    }

</style>