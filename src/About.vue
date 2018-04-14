<template>
<div class="about">
  <img src="https://github.com/znck.png" alt="">
    <h1>Rahul Kadyan</h1>
    <h3>@ TheDevTheory</h3>
    <Timer />
  </div>  
</template>

<script>
import Timer from './Timer'

export default {
  components: {
    Timer
  }
}
</script>

<style>
img {
  display: block;
  margin: 16px auto;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  box-shadow: 0 0 10px rgba(43, 61, 79, 1), 0 0 5px rgba(66, 184, 131, 1);
}

h1,
h3 {
  text-align: center;
}

.about {
  box-sizing: border-box;
  padding: 16px 32px;
  width: 300px;
  height: 412px;
}
</style>
