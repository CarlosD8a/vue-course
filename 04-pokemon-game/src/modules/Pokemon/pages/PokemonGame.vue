<template>
  <section v-if="false" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere un momento</h1>
    <h3 class="animate-pulse">Cargando Pokemones . . .</h3>
  </section>

  <section class="flex flex-col justify-center items-center w-screen h-screen">
    <h1>¿Quien es ese pokemon?</h1>

    <!-- Imagen de pokemon  -->
    <PokemonPicture />
    <!-- Opciones del pokemon  -->
    <PokemonOptions />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
</script>

<style lang="scss" scoped></style>
