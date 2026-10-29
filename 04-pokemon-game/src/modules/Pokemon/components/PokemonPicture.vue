<template>
  <section class="picture">
    <img v-if="!showImage" class="silhouette" :src="pokemonImage" />
    <img v-else class="fade-in" :src="pokemonImage" />
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
.picture {
  height: min(40vh, 22rem);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

img {
  height: 90%;
  image-rendering: pixelated; /* Para Chrome, Edge, Safari */
  image-rendering: crisp-edges; /* Para Firefox */
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.silhouette {
  filter: brightness(0);
}

/* Celular en vertical: la imagen se apila sobre las opciones, la hacemos más baja */
@media (max-width: 700px) {
  .picture {
    height: 22dvh;
  }
}

/* Celular en horizontal: poco alto disponible */
@media (max-height: 500px) and (orientation: landscape) {
  .picture {
    height: 45dvh;
  }
}
</style>
