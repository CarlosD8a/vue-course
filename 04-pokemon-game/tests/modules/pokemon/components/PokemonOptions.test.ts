import PokemonOptions from '@/modules/Pokemon/components/PokemonOptions.vue';
import { mount } from '@vue/test-utils';

const options = [
  { id: 1, name: 'Charmander' },
  { id: 2, name: 'Charmeleon' },
  { id: 3, name: 'Charizard' },
];

describe('<PokemonOptions/>', () => {
  test('should render buttons with correct text', () => {
    const wrapper = mount(PokemonOptions, {
      props: {
        options,
        answer: 3,
        blockSelection: false,
      },
    });
    const buttons = wrapper.findAll('button');
    expect(buttons.length).toEqual(options.length);

    buttons.forEach((button, index) => {
      expect(button.text()).toBe(options[index]?.name);
    });
  });

  test('should  emit selectedOption event when a button is clicked', async () => {
    const wrapper = mount(PokemonOptions, {
      props: {
        options,
        blockSelection: false,
        answer: 2,
      },
    });
    const [b1, b2, b3] = wrapper.findAll('button');

    await b1?.trigger('click');
    await b2?.trigger('click');
    await b3?.trigger('click');

    // console.log(wrapper.emitted('selectedOption'));
    // console.log(wrapper.emitted().selectedOption); // dos maneras imprimen lo mismo
    // se sigue usando wrapper por que es en el componente queremos saber si emitio
    expect(wrapper.emitted().selectedOption?.[0]).toEqual([1]);
    // misma manera de hacer la prueba
    expect(wrapper.emitted('selectedOption')?.[1]).toEqual([2]);
  });

  test('should disable buttons when blockSelection prop is true', () => {
    const wrapper = mount(PokemonOptions, {
      props: {
        options,
        blockSelection: true,
        answer: 2,
      },
    });

    // obtenemos los botones
    const buttons = wrapper.findAll('button');
    buttons.forEach((button) => {
      const attributes = Object.keys(button.attributes());
      // console.log(attributes);
      expect(attributes).toContain('disabled');
    });
  });

  test('shold apply correct styling to buttons based on correct/incorrect answer', () => {
    const correctAnswer = 3;
    const wrapper = mount(PokemonOptions, {
      props: {
        options,
        blockSelection: true,
        answer: correctAnswer,
      },
    });

    const buttons = wrapper.findAll('button');
    buttons.forEach((button, index) => {
      const isCorrect = options[index]?.id === correctAnswer;
      const expectedClass = isCorrect ? 'correct' : 'incorrect';
      expect(button.classes()).toContain(expectedClass);
    });
  });
});
