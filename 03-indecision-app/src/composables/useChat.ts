import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import type { YesNOResponse } from '@/interfaces/Yes-No-Response-interface';
import { ref } from 'vue';

export const useChat = () => {
  const getResponde = async () => {
    const response = await fetch('https://yesno.wtf/api');
    const data = (await response.json()) as YesNOResponse;

    return data;
  };
  const message = ref<ChatMessage[]>([]);
  const isTyping = ref(false);

  const onNewMessage = async (text: string) => {
    if (text.length === 0) return;
    message.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    if (!text.endsWith('?')) return;
    // aqui puede ir la logica para agregar las burbujas

    isTyping.value = true;
    await sleep(1.5);

    const { answer, image } = await getResponde();
    message.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
    isTyping.value = false;
  };

  return {
    message,
    isTyping,
    onNewMessage,
  };
};
