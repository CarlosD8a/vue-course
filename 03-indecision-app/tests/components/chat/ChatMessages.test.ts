import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import { mount } from '@vue/test-utils';

const messages: ChatMessage[] = [
  { id: 1, message: 'Hola', itsMine: true },
  { id: 2, message: 'Mundo', itsMine: false, image: 'Http://Hola-mundo.jpg' },
];

describe('<ChatMessage/>', () => {
  const wrapper = mount(ChatMessages, {
    props: {
      messages: messages,
      isTyping: false,
    },
  });
  test('renders chat messages correctly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });
    // console.log(chatBubbles.length);
    expect(chatBubbles.length).toBe(messages.length);
  });

  test('scroll down to the bottom after messages update', async () => {
    // un mock o un spy sirve para estar al pendiente de si se llama a una funcion que es lo que necesitamos aqui
    // ya que no se puede simular el scroll pero podemos saber si si se llama que eso es lo importante
    const scrolltoMock = vi.fn(); // practicamente va antes de mandar la properti por que desde este momento esta pendiente de si se llamo a una funcion
    // buscamos el div o cosa que va a llamar al scroll que en este caso es divmessages que es el ref del div
    const divMessages = wrapper.vm.$refs.divMessages as HTMLDivElement;

    divMessages.scrollTo = scrolltoMock; // importante aqui se inyecta el espia dentro del div para que cuando se llame al scrol to el espia mande la informacion
    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'Hola que hace', itsMine: true }],
      isTyping: false,
    });

    await new Promise((response) => setTimeout(response, 150)); // es importante que se haga la espera ya que el test es muy rapido para que se ejecute el scroll

    expect(scrolltoMock).toHaveBeenCalled(); // si ha sido llamado
    expect(scrolltoMock).toHaveBeenCalledTimes(1); // cuantas veces  ha sido llamado
    expect(scrolltoMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: 0, // el cero no es correcto se debe esperar un numero o divmessages.scrollHeight o expec.any(Number)
    }); // con que atributos ha sido llamado
  });
});
