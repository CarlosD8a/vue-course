import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';

describe('<MessageBox', () => {
  const wrapper = mount(MessageBox);

  test('render input and button element correctly', () => {
    // console.log(wrapper.html());

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('emits sendMessage event when button is clicked witch message value', async () => {
    const message = 'Hola Mundo';

    await wrapper.find('input[type="text"]').setValue(message); // lo que haces es ponerle a la caja de texto un mensaje
    await wrapper.find('button').trigger('click'); // lo que haces es precionar el boton solamente

    //despues de eso ya se hizo el estimulo entonces ahora se puede comprar si si emitio ese mensaje

    // console.log(wrapper.emitted());
    expect(wrapper.emitted('sendMessageEmit')?.[0]).toEqual([message]); // el emit se debe llamar igual que se tiene en el componente
    expect((wrapper.vm as unknown as { message: string }).message).toBe('');
  });

  test('emits sendMessage event when keypress.enter is clicked witch message value', async () => {
    const message = 'Hola Mundo';

    const input = wrapper.find('input');
    await input.setValue(message);
    await input.trigger('keypress.enter');

    //despues de eso ya se hizo el estimulo entonces ahora se puede comprar si si emitio ese mensaje

    // console.log(wrapper.emitted());
    expect(wrapper.emitted('sendMessageEmit')?.[0]).toEqual([message]);
    expect((wrapper.vm as unknown as { message: string }).message).toBe('');
  });

  test('emits sendMessage event when keypress.enter is clicked witch message value', async () => {
    const wrapper = mount(MessageBox); // se creo de nuevo para poder limpiar ya que las pruebas anteriores generaban basura

    const input = wrapper.find('input'); // se crea una variable que ya tiene el input
    await input.trigger('keypress.enter'); // se hizo enter en la caja de texto
    await wrapper.find('button').trigger('click'); // se hizo clic en el boton pero esta vacia la caja de texto

    //despues de eso ya se hizo el estimulo entonces ahora se puede comprar si si emitio ese mensaje

    // console.log(wrapper.emitted());
    // debe regresar nada ya que hay una validacion para eso
    expect(wrapper.emitted('sendMessageEmit')).toBeFalsy();
  });
});
