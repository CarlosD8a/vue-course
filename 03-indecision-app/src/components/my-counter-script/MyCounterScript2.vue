<template>
  <section class="w-64 bg-rose-400 rounded-2xl p-8 text-center text-white">
    <h3 class="text-xl font-bold">Counter: {{ counter }}</h3>
    <h3 class="text-xl font-bold">Square: {{ squareCounter }}</h3>

    <div class="mt-6 flex justify-center gap-2">
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts"></script>

<style scoped>
h1 {
  color: purple;
}
</style>
