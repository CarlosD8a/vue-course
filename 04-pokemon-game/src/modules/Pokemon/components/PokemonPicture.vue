<template>
  <section class="h-90 flex justify-center items-center overflow-hidden">
    <img v-if="!showImage" class="brightness-0 h-90" :src="pokemonImage" />
    <img v-else class="fade-in h-90" :src="pokemonImage" />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  pokemonId: number;
  showImage?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showImage: false,
});

const pokemonImage = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${props.pokemonId}.png`,
);
</script>

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
