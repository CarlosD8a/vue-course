import MyCounter from '@/components/MyCounter.vue';
import { mount } from '@vue/test-utils';

describe('<MyCouter/>', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        numberValue: 10,
      },
    });
    expect(wrapper.html()).matchSnapshot();
  });

  test('renders the counter value correctly', () => {
    const valueProps = 5;
    const wrapper = mount(MyCounter, {
      props: {
        numberValue: valueProps,
      },
    });

    const [counterLabel, squareLbale] = wrapper.findAll('h3');
    // console.log(wrapper.find('h3').text());
    // expect(wrapper.find('h3').text()).toContain(`Counter: ${valueProps}`);
    // expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
    //   `Square: ${valueProps * valueProps}`,
    // );

    expect(counterLabel?.text()).toContain(`Counter: ${valueProps}`);
    expect(squareLbale?.text()).toContain(`Square: ${valueProps * valueProps}`);

    // console.log(wrapper.html());
  });

  test('increments the counter when +1 buttoas was clicked', async () => {
    // preparacion
    const valueProps = 5;
    const wrapper = mount(MyCounter, {
      props: {
        numberValue: valueProps,
      },
    });
    const [counterLabel, squareLbale] = wrapper.findAll('h3');
    const btnIncrement = wrapper.find('button');

    //estimulo
    await btnIncrement.trigger('click'); // un triger al ser una promesa debes esperar por tanto se usa await

    // valor esperado
    // se tiene que usar por que no ocupamos el valor si no el valor despues de precionar el boton
    expect(counterLabel?.text()).toContain(`Counter: ${valueProps + 1}`);
    expect(squareLbale?.text()).toContain(`Square: ${(valueProps + 1) * (valueProps + 1)}`);
  });

  test('decrements the counter when -1 button was clicked twice', async () => {
    // preparacion
    const valueProps = 5;
    const wrapper = mount(MyCounter, {
      props: {
        numberValue: valueProps,
      },
    });
    const [counterLabel, squareLbale] = wrapper.findAll('h3');
    const [, btnDecrement] = wrapper.findAll('button');

    //estimulo
    await btnDecrement?.trigger('click');
    await btnDecrement?.trigger('click');

    expect(counterLabel?.text()).toContain(`Counter: ${valueProps - 2}`);
    expect(squareLbale?.text()).toContain(`Square: ${(valueProps - 2) * (valueProps - 2)}`);
  });
});
