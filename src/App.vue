<template>
  <div id="app">
    <Navbar />
    <!-- <Home />
    <Movies /> -->
    <router-view/>

  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Vue from 'vue';
import VueFilterDateFormat from 'vue-filter-date-format';

Vue.use(VueFilterDateFormat);
// import Home from './views/Home.vue'
// import Movies from './views/Movies.vue'

export default {
  components: { 
    Navbar,
    // Home,
    // Movies,
  },
}
</script>





<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Poppins;
}

</style>
