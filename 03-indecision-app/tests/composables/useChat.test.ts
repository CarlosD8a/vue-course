import { useChat } from '@/composables/useChat';

describe('useChat', () => {
  test('add message correctly when onMessage is callet', async () => {
    const text = 'Hola mundo';
    const text2 = 'segundo hola mundo';
    const { message, onNewMessage } = useChat();
    await onNewMessage(text); // llama a la funcion y agrega un nuevo mensaje
    await onNewMessage(text2); // llama a la funcion y agrega un nuevo mensaje

    console.log(message.value);
    expect(message.value.length).toBe(2);
    expect(message.value[0]?.itsMine).toBe(true); // con esto se accede a las propiedasdes del objeto
    expect(message.value[1]?.message).toBe(text2); // posicion del arreglo es el objeto
    expect(message.value[1]).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text2,
    });
  });

  test('add nothing if text is empty', async () => {
    const text = '';
    const { message, onNewMessage } = useChat();
    await onNewMessage(text); // llama a la funcion y agrega un nuevo mensaje

    expect(message.value.length).toBe(0);
  });

  test('gets her response correctly when message ends with "?"', async () => {
    const text = 'Quieres cafe?';
    const { message, onNewMessage } = useChat();
    await onNewMessage(text); // llama a la funcion y agrega un nuevo mensaje

    await new Promise((response) => setTimeout(response, 2000));

    const [myMessage, herMessage] = message.value;

    expect(message.value.length).toBe(2);
    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: expect.any(String),
      itsMine: false,
      message: expect.any(String),
    });
    expect(myMessage).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });

  test('mock response - fetch api', async () => {
    const mockResponse = { answer: 'yes', image: 'example.gif' }; // el cascaron que se usara de ejemplo
    window.fetch = vi.fn(async () => ({
      // se injecta o le dice al fetch que use mejor el mock sin salir a internet
      json: async () => mockResponse,
    })) as unknown as typeof fetch;

    const text = 'hola mundo?';

    const { message, onNewMessage } = useChat();
    await onNewMessage(text);

    await new Promise((response) => setTimeout(response, 1600));
    const [, herMessage] = message.value;
    expect(herMessage).toEqual({
      id: expect.any(Number),
      image: mockResponse.image,
      itsMine: false,
      message: mockResponse.answer,
    });
  });
});
