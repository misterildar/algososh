import { useState } from 'react';
import { Stack } from './class-stack';
import { Input } from '../ui/input/input';
import React, { ChangeEvent } from 'react';
import { Button } from '../ui/button/button';
import styles from './stack-page.module.css';
import { Circle } from '../ui/circle/circle';
import { IvalueCircle } from '../../types/types';
import { SolutionLayout } from '../ui/solution-layout/solution-layout';
import { addElement, deleteElement, clearElements } from './logic-stack';

export const StackPage: React.FC = () => {
  const [stack] = useState(new Stack<IvalueCircle>());

  const [valueInput, setValueInput] = useState('');

  const [stackContainer, setStackContainer] = useState<IvalueCircle[]>([]);

  const parameters = {
    stack,
    valueInput,
    setValueInput,
    setStackContainer,
  };

  const addElementStack = () => {
    addElement(parameters);
  };

  const deleteElementStack = () => {
    deleteElement(parameters);
  };

  const clearStack = () => {
    clearElements(parameters);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value.trim());
  };

  const stackLength = stackContainer.length;

  const tailElement = (index: number) => {
    return index === stackLength - 1 ? 'top' : '';
  };

  return (
    <SolutionLayout title='Стек'>
      <div className={styles.container}>
        <div className={styles.box_input}>
          <Input
            type='text'
            maxLength={4}
            isLimitText={true}
            value={valueInput}
            onChange={handleChange}
            placeholder='Введите текст'
          />
          <Button
            text='Добавить'
            onClick={addElementStack}
            disabled={!!!valueInput}
          />
          <Button
            text='Удалить'
            onClick={deleteElementStack}
            disabled={!!!stackLength}
          />
        </div>
        <div>
          <Button
            text='Очистить'
            onClick={clearStack}
            disabled={!!!stackLength}
          />
        </div>
      </div>
      <div className={styles.box_circle}>
        {stackContainer.map((el, index) => (
          <Circle
            letter={el.value}
            key={index}
            index={index}
            state={el.color}
            head={tailElement(index)}
          />
        ))}
      </div>
    </SolutionLayout>
  );
};
