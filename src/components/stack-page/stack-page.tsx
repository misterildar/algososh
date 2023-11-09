import React, { ChangeEvent } from 'react';
import { Input } from '../ui/input/input';
import { Button } from '../ui/button/button';
import styles from './stack-page.module.css';
import { Circle } from '../ui/circle/circle';
import { useState } from 'react';
import { Stack } from './class-stack';
import { IvalueCircle } from '../../types/types';
import { ElementStates } from '../../types/element-states';
import { addElement, deletElement, clearElements } from './logic-stack';
import { SolutionLayout } from '../ui/solution-layout/solution-layout';

export const StackPage: React.FC = () => {
  const [stack, setStack] = useState(new Stack<IvalueCircle>());

  const [valueInput, setValueInput] = useState('');

  const [stackContainer, setStackContainer] = useState<IvalueCircle[]>([]);

  const parameters = {
    stack,
    setStack,
    valueInput,
    setValueInput,
    setStackContainer,
  };

  const addElementStack = () => {
    addElement(parameters);
  };

  const deletElementStack = () => {};

  const clearStack = () => {};

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value.trim());
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
            onClick={deletElementStack}
            // disabled={disabledButton}
          />
        </div>
        <div>
          <Button
            text='Очистить'
            onClick={clearStack}
            // disabled={disabledButton}
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
          />
        ))}
      </div>
    </SolutionLayout>
  );
};
