<template>
<div class="timer">
  Going good for <br> {{ elapsed }} seconds
  </div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(['elapsed']),

  mounted() {
    this.startTimer()
  },

  methods: mapActions({
    startTimer: 'start'
  })
}
</script>

<style>
.timer {
  cursor: pointer;
  font-size: 0.75rem;
  letter-spacing: 1px;
  opacity: 0.75;
  padding-bottom: 16px;
  text-align: center;
  text-transform: uppercase;
}
</style>
