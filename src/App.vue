<template>
  <div class="app">
    <div class="links">
      <router-link to="/">About</router-link>
      <router-link to="/talk">Talk</router-link>
    </div>
    <Flip>
      <router-view />
    </Flip>
  </div>
</template>

<script>
import Flip from './Flip.vue'

export default {
  components: {
    Flip
  }
}
</script>

<style>
html {
  min-height: 100%;
  font-family: sans-serif;
}

body {
  min-height: 100%;
  margin: 0;
}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(66, 184, 131, 1) 0%,
    rgba(43, 61, 79, 1) 100%
  );

  color: white;
  text-shadow: 2px 2px 10px rgba(43, 61, 79, 1),
    2px 2px 5px rgba(66, 184, 131, 1);
}

a {
  color: white;
  display: inline-block;
  padding: 8px 32px;
  text-decoration: none;
}
</style>