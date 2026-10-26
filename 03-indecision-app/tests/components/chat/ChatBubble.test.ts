import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';

describe('<ChatBubble/>', () => {
  test('Renders own message correctly', () => {
    const message = 'Hola mundo';
    const wrapper = mount(ChatBubble, {
      props: {
        message: message,
        itsMine: true,
      },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  test('renders received message correctly', () => {
    const message = 'Hola mundo';
    const wrapper = mount(ChatBubble, {
      props: {
        message: message,
        itsMine: false,
      },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-gray-200').exists()).toBeFalsy();
    expect(wrapper.find('img').exists()).toBe(false);
  });

  test('renders received message correctly with image', () => {
    const message = 'Hola mundo';
    const image = 'example.jpg';
    const wrapper = mount(ChatBubble, {
      props: {
        message: message,
        itsMine: false,
        image: image,
      },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-gray-200').exists()).toBeFalsy();
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(image);
  });
});
