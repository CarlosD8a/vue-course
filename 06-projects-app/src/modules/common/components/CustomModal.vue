<template>
  <!-- Open the modal using ID.showModal() method -->
  <dialog class="modal" :open="openVar">
    <div class="modal-box">
      <div class="border-b border-blue-500">
        <slot name="header"></slot>
      </div>

      <div class="my-5">
        <slot name="body"></slot>
      </div>

      <div class="border-t border-t-blue-500">
        <slot name="actions"></slot>
      </div>
    </div>
  </dialog>

  <div
    v-if="openVar"
    class="modal-backdrop fixed top-10 left-0 bg-black opacity-50 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
interface Props {
  openVar?: boolean;
}

withDefaults(defineProps<Props>(), {
  openVar: false,
});
</script>
