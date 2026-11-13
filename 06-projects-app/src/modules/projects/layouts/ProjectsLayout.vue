<template>
  <div class="flex flex-col">
    <!-- Top menu -->
    <top-menu />

    <main class="flex flex-row">
      <!-- side menu -->
      <side-menu />

      <!-- Router view -->
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';
</script>

<style scoped></style>
