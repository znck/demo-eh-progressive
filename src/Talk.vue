<template>
  <div class="card">
    <h1>The Progressive Framework</h1>

    <Timer />
  </div>
</template>

<script>
import Timer from './Timer'

export default {
  components: { Timer }
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px 32px;
  height: 412px;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: rgba(0, 0, 0, .74);
}

h1 {
  color: rgba(66, 184, 131, 1);
  margin: 100px 0;
}
</style>
