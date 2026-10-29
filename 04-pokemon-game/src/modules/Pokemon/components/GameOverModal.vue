<template>
  <div class="modal-overlay">
    <div class="framed danger exclude-border modal-box">
      <h2>¡Perdiste!</h2>
      <p>Score final: {{ score }}</p>
      <ul class="buttons">
        <li>
          <button @click="$emit('newGame')">New Game</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  score: number;
}

defineProps<Props>();

defineEmits({
  newGame: [], // corchetes vacios solo envia que se hizo interaccion pero no envia datos solo que se ejecuto o se hizo clic
});
</script>

<style lang="css" scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
.modal-box {
  width: 90%;
  max-width: 22rem;
  text-align: center;
  color: #ffffff;
}
.modal-box .buttons {
  margin-top: 1rem;
  align-items: center;
}
</style>
