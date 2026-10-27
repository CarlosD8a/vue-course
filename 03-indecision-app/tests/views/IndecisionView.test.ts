import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';

const mockChatMessages = {
  template: '<div data-testing="mock-messages">Moc de ChatMessages</div>',
};

describe('<IndesicionView/>', () => {
  test('renders chat messages and messageBox correctly', () => {
    const wrapper = mount(IndecisionView);

    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
  });

  test('calls onMessages when sendin a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: mockChatMessages,
        },
      },
    });

    const messageBoxComponent = wrapper.findComponent(MessageBox);
    messageBoxComponent.vm.$emit('sendMessageEmit', 'Hola mundo');

    await new Promise((response) => setTimeout(response, 150));

    // console.log(wrapper.html());
    expect(wrapper.html()).toMatchSnapshot();
  });
});
