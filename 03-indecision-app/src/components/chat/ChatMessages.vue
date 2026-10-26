<template>
  <div ref="divMessages" class="flex-1 overflow-y-auto p-4">
    <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
    <!-- :its-mine="message.itsMine"
      :message="message.message"
      :image="message.image"
      usar el v-bind version corta de lo comentado
      -->

    <div v-show="isTyping" class="flex mt-2">
      <div
        class="bg-gray-300 text-black p-2 rounded-lg max-w-xs animate-pulse font-bold tracking-widest"
      >
        . . .
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message-interface.ts';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';
interface Props {
  messages: ChatMessage[];
  isTyping: boolean;
}
const { messages, isTyping } = defineProps<Props>();
const divMessages = ref<HTMLDivElement | null>(null);

watch(
  [() => messages, () => isTyping],
  () => {
    setTimeout(() => {
      divMessages.value?.scrollTo({
        top: divMessages.value.scrollHeight,
        behavior: 'smooth',
      });
    }, 100);
  },
  { deep: true },
);
</script>
