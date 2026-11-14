<template>
  <dialog id="my_modal_1" class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action flex flex-col">
        <!-- se usa prevent para evitar que el formulario recargue la pagina como lo haria normalmente -->
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            placeholder="Nombre del Proyecto"
            class="input input-bordered input-primary w-full flex-1"
            v-model="inputValue"
          />
          <div class="flex justify-end mt-5">
            <button @click="closeModal" type="button" class="btn mr-4">Close</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>

  <div
    v-if="open"
    class="modal-backdrop fixed top-10 left-0 bg-black opacity-50 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  open: boolean;
}

defineProps<Props>();

// definicion de las emits como es que las emite esto es igual que
// interface Emits {
//   close: [void]; cuando presionas close
//   value: [text: string]; cuando presionas aceptar
// }
// defineEmits<Emits>()

const emit = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

const submitValue = () => {
  if (!inputValue.value.trim()) {
    inputRef.value?.focus();
    return;
  }
  console.log({ value: inputValue.value });
  // aqui se emiten las cosas
  emit('value', inputValue.value.trim());
  emit('close');
  inputValue.value = '';
};

const closeModal = () => {
  inputValue.value = '';
  emit('close');
};
</script>
