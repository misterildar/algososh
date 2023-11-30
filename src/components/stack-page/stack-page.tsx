import { useState } from 'react';
import { Stack } from './class-stack';
import { Input } from '../ui/input/input';
import React, { ChangeEvent } from 'react';
import { Button } from '../ui/button/button';
import styles from './stack-page.module.css';
import { Circle } from '../ui/circle/circle';
import { IvalueCircle } from '../../types/types';
import { MAX_LENGHT } from '../../constants/constans';
import { SolutionLayout } from '../ui/solution-layout/solution-layout';
import { addElement, deleteElement, clearElements } from './logic-stack';

export const StackPage: React.FC = () => {
  const [stack] = useState(new Stack<IvalueCircle>());

  const [valueInput, setValueInput] = useState('');

  const [stackContainer, setStackContainer] = useState<IvalueCircle[]>([]);

  const [isDisabled, setIsDisabled] = useState({
    addButton: false,
    deleteButton: false,
    clearButton: false,
  });

  const parameters = {
    stack,
    valueInput,
    isDisabled,
    setValueInput,
    setIsDisabled,
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
            maxLength={MAX_LENGHT}
            isLimitText={true}
            value={valueInput}
            onChange={handleChange}
            placeholder='Введите текст'
            disabled={
              isDisabled.addButton ||
              isDisabled.clearButton ||
              isDisabled.deleteButton
            }
          />
          <Button
            text='Добавить'
            data-cy='stack-add'
            onClick={addElementStack}
            disabled={
              !!!valueInput || isDisabled.deleteButton || isDisabled.clearButton
            }
            isLoader={isDisabled.addButton}
          />
          <Button
            text='Удалить'
            data-cy='stack-delete'
            onClick={deleteElementStack}
            disabled={
              !!!stackLength || isDisabled.addButton || isDisabled.clearButton
            }
            isLoader={isDisabled.deleteButton}
          />
        </div>
        <div>
          <Button
            text='Очистить'
            data-cy='stack-clear'
            onClick={clearStack}
            disabled={
              !!!stackLength || isDisabled.addButton || isDisabled.deleteButton
            }
            isLoader={isDisabled.clearButton}
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
