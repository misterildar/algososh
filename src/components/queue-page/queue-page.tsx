import { Queue } from './class-queue';
import { Input } from '../ui/input/input';
import React, { ChangeEvent, useState } from 'react';
import { Button } from '../ui/button/button';
import styles from './quene-page.module.css';
import { Circle } from '../ui/circle/circle';
import { IvalueCircle } from '../../types/types';
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value.trim());
  };

  const parameters = {
    queue,
    valueInput,
    queueContainer,
    setValueInput,
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
            maxLength={4}
            isLimitText={true}
            value={valueInput}
            onChange={handleChange}
            placeholder='Введите текст'
          />
          <Button
            text='Добавить'
            onClick={addElementQueue}
            disabled={!!!valueInput || queue.isFull()}
          />
          <Button
            text='Удалить'
            onClick={deleteElementQueue}
            disabled={queue.isEmpty()}
          />
        </div>
        <div>
          <Button
            text='Очистить'
            onClick={clearQueue}
            disabled={queue.isEmpty()}
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
