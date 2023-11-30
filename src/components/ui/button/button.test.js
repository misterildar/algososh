import { Button } from './button';
import { render, screen, fireEvent } from '@testing-library/react';


describe('Тестирование компонента Button', () => {
  it('кнопки с текстом', () => {
    const buttonWithOutText = render(<Button text='text' />);
    expect(buttonWithOutText).toMatchSnapshot();
  });

  it('кнопки без текста', () => {
    const button = render(<Button />);
    expect(button).toMatchSnapshot();
  });

  it('заблокированной кнопки', () => {
    const buttonDisabled = render(<Button disabled={true} />);
    expect(buttonDisabled).toMatchSnapshot();
  });

  it('кнопки с индикацией загрузки', () => {
    const buttonLoader = render(<Button isLoader={true} />);
    expect(buttonLoader).toMatchSnapshot();
  });

  it('Проверяем корректность вызова колбека при клике на кнопку', () => {
    const testClick = jest.fn();
    render(<Button onClick={testClick} text='test-click' />);
    const buttonClick = screen.getByText('test-click');
    fireEvent.click(buttonClick);
    expect(testClick).toHaveBeenCalledTimes(1)
  });
});
