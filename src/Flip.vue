<template>
  <div class="flipper">
    <transition name="flip">
      <slot />
    </transition>
  </div>
</template>

<style>
.flipper {
  position: relative;
  height: 412px;
  width: 300px;
  perspective: 800px;
}
.flipper > * {
  top: 0;
  left: 0;
  position: absolute;
}

.flip-enter {
  transform: rotateY(-180deg);
}
.flip-leave-to {
  transform: rotateY(180deg);
}
.flip-enter-active,
.flip-leave-active {
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: transform 1s cubic-bezier(0.75, -1.05, 0.08, 1.81);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.34);
}
</style>
