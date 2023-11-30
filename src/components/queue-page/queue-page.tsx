import { Queue } from './class-queue';
import { Input } from '../ui/input/input';
import React, { ChangeEvent, useState } from 'react';
import { Button } from '../ui/button/button';
import styles from './quene-page.module.css';
import { Circle } from '../ui/circle/circle';
import { IvalueCircle } from '../../types/types';
import { MAX_LENGHT } from '../../constants/constans';
import {
  emptyArray,
  addElement,
  clearElement,
  deleteElement,
} from './logic-queue';
import { SolutionLayout } from '../ui/solution-layout/solution-layout';

export const QueuePage: React.FC = () => {
  const [queue] = useState(new Queue<IvalueCircle>(7));

  const [valueInput, setValueInput] = useState('');

  const [queueContainer, setQueueContainer] =
    useState<IvalueCircle[]>(emptyArray);

  const [isDisabled, setIsDisabled] = useState({
    addButton: false,
    deleteButton: false,
    clearButton: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value.trim());
  };

  const parameters = {
    queue,
    valueInput,
    isDisabled,
    queueContainer,
    setValueInput,
    setIsDisabled,
    setQueueContainer,
  };

  const addElementQueue = () => addElement(parameters);

  const deleteElementQueue = () => deleteElement(parameters);

  const clearQueue = () => clearElement(parameters);

  const isHead = (el: IvalueCircle, index: number) => {
    return index === queue.getHeadIndex() || el.head ? 'head' : '';
  };

  const isTail = (index: number) => {
    return index === queue.getTail() && !queue.isEmpty() ? 'tail' : '';
  };

  return (
    <SolutionLayout title='Очередь'>
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
            data-cy='queue-add'
            onClick={addElementQueue}
            isLoader={isDisabled.deleteButton && isDisabled.clearButton}
            disabled={!!!valueInput || queue.isFull()}
          />
          <Button
            text='Удалить'
            data-cy='queue-delete'
            onClick={deleteElementQueue}
            isLoader={isDisabled.addButton && isDisabled.clearButton}
            disabled={queue.isEmpty() || isDisabled.deleteButton}
          />
        </div>
        <div>
          <Button
            text='Очистить'
            data-cy='queue-clear'
            onClick={clearQueue}
            isLoader={isDisabled.addButton && isDisabled.deleteButton}
            disabled={
              isDisabled.addButton || isDisabled.deleteButton || queue.isEmpty()
            }
          />
        </div>
      </div>
      <div className={styles.box_circle}>
        {queueContainer.map((el, index) => (
          <Circle
            letter={el ? el.value : ''}
            key={index}
            index={index}
            state={el.color}
            head={isHead(el, index)}
            tail={isTail(index)}
          />
        ))}
      </div>
    </SolutionLayout>
  );
};
