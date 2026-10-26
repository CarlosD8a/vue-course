<template>
  <div class="bg-green-200 mb-4">
    <div class="flex justify-center">
      <h1 class="text-3xl">Mi Primer App en Vue</h1>
    </div>
  </div>
  <div class="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
    <MyCounter :numberValue="4" />
    <MyCounterScript :numberValue="5" />
    <MyCounterScript2 :numberValue="6" />
  </div>
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>
