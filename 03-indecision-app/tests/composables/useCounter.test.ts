import { useCounter } from '@/composables/useCounter';

describe('useCounter', () => {
  test(' initializes counter with provided initial value', () => {
    const initualValue = 10;
    const { counter, squareCounter } = useCounter(initualValue);

    expect(counter.value).toBe(initualValue);
    expect(squareCounter.value).toBe(initualValue * initualValue);
  });

  test('initializes counter with default value', () => {
    const { counter, squareCounter } = useCounter();
    expect(counter.value).toBe(10);
    expect(squareCounter.value).toBe(100);
  });

  test('increments counter correctly', () => {
    const { counter, squareCounter } = useCounter();

    counter.value++;

    expect(counter.value).toBe(11);
    expect(squareCounter.value).toBe(121);
  });
});
