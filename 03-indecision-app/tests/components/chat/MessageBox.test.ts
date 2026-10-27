import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';

describe('<MessageBox', () => {
  test('render input and button element correctly', () => {
    const wrapper = mount(MessageBox);
    console.log(wrapper.html());
  });
});
