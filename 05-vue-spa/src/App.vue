<template>
  <nav>
    <a href="/" class="ml-2">HomePage</a>
    <a href="/features" class="ml-2">FeaturePages</a>
    <a href="/contac" class="ml-2">ContacPage</a>
    <a href="/pricing" class="ml-2">PricingPage</a>

  </nav>
  <main class="bg-gray-200">
    <RouterView/>
  </main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';


</script>
