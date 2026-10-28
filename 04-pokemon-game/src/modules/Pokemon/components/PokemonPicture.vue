<template>
  <section class="h-60 flex justify-center items-center">
    <img
      class="brightness-0 h-125"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/132.png"
    />
  </section>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
img {
  image-rendering: pixelated; /* Para Chrome, Edge, Safari */
  image-rendering: crisp-edges; /* Para Firefox */
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
