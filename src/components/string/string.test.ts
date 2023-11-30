import { reverseStringFunction } from './utils';

describe('Тестирование алгоритма разворота строки', () => {
  it('Корректно разворачивает строку с чётным количеством символов', () => {
    expect(reverseStringFunction('1 2 3 4')).toEqual('4 3 2 1');
  });

  it('Корректно разворачивает строку с нечетным  количеством символов', () => {
    expect(reverseStringFunction('1 2 3')).toEqual('3 2 1');
  });

  it('Корректно разворачивает строку с одним символом', () => {
    expect(reverseStringFunction('1')).toEqual('1');
  });

  it('Корректно разворачивает пустую строку', () => {
    expect(reverseStringFunction('')).toEqual('');
  });

  it('проверка на ошибки', () => {
    expect(reverseStringFunction('1234')).not.toEqual('1234');
    expect(reverseStringFunction('1234')).not.toEqual('');
    expect(reverseStringFunction('1234')).not.toEqual('4231');
    expect(reverseStringFunction('1234')).not.toEqual('54321');
    expect(reverseStringFunction('1234')).not.toEqual('4231');
    expect(reverseStringFunction('o0')).not.toEqual('o0');
  });
});
