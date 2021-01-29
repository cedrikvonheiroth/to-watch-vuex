<template>
  <div class="navbar">
      <h1>To watch</h1>
      <div class="logo-wrapper">
          <img src="@/assets/to-watch-logo.png" alt="">
      </div>
    
      <div class="link-wrapper">      
        <router-link to="/">Home</router-link>
        <router-link to="/movies">Add Movies</router-link>
        <router-link to="/about">About</router-link>

      </div>

    </div>
</template>




<script>
export default {

}
</script>




<style scoped>
    div.navbar {
        padding: 1rem 1rem;
        display: flex;
        background-color: black;
        color: rgb(202, 56, 19);
        max-width: 100vw;

    }

    div.navbar a {
        position: relative;
        top: 1rem;
        margin-left: 3rem;
        color: white;
        text-decoration: none;
    }

    div.navbar a:hover {
        color: rgb(202, 56, 19);
    }

    h1 {
        text-transform: uppercase;
    }

    div.logo-wrapper {
        padding: 0.5rem;
        width: 45px;
    }

    img {
        width: 100%;
    }


</style>