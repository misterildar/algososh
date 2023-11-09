import styles from './sorting-page.module.css';
import { SolutionLayout } from '../ui/solution-layout/solution-layout';
import { RadioInput } from '../ui/radio-input/radio-input';
import { Direction } from '../../types/direction';
import { Button } from '../ui/button/button';
import { getRandomArray } from './logic-sorting';
import React, { useState } from 'react';
import { Column } from '../ui/column/column';
import { selectionSort } from './logic-sorting';
import { IvalueColumn } from '../../types/types';
import { ElementStates } from '../../types/element-states';
import { bubbleSort } from './logic-sorting';

export const SortingPage: React.FC = () => {
  const [newArray, setNewArray] = useState<IvalueColumn[]>([]);

  const [upOrderLoader, setUpOrderLoader] = useState(false);

  const [downOrderLoader, setDownOrderLoader] = useState(false);

  const [disabledButton, setDisabledButton] = useState(true);

  const [checked, setChecked] = useState(true);

  const returnArray = () => {
    const randomArr = getRandomArray();
    const randomArray = randomArr.map((value) => ({
      value,
      color: ElementStates.Default,
    }));
    setNewArray(randomArray);
    setDisabledButton(false);
  };

  const parameter = {
    setNewArray,
    setUpOrderLoader,
    setDownOrderLoader,
  };

  const selection = (text: string = 'min') => {
    checked
      ? selectionSort(text, newArray, parameter)
      : bubbleSort(text, newArray, parameter);
  };

  const disabled = newArray.length === 0 || disabledButton;

  return (
    <SolutionLayout title='Сортировка массива'>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.box_radio_button}>
            <RadioInput
              label='Выбор'
              checked={checked}
              onChange={() => setChecked(!checked)}
              disabled={upOrderLoader || downOrderLoader}
            />
            <RadioInput
              label='Пузырёк'
              checked={!checked}
              onChange={() => setChecked(!checked)}
              disabled={upOrderLoader || downOrderLoader}
            />
          </div>
          <div className={styles.box_button}>
            <Button
              text='По возрастанию'
              sorting={Direction.Ascending}
              disabled={disabled || downOrderLoader}
              isLoader={upOrderLoader}
              onClick={() => selection()}
              style={{ width: '210px' }}
            />
            <Button
              text='По убыванию'
              sorting={Direction.Descending}
              disabled={disabled || upOrderLoader}
              isLoader={downOrderLoader}
              onClick={() => selection('max')}
              style={{ width: '210px' }}
            />
          </div>
          <Button
            text='Новый массив'
            onClick={returnArray}
            disabled={upOrderLoader || downOrderLoader}
          />
        </div>
        <div className={styles.diagram}>
          {newArray.map((el, index) => (
            <Column index={el.value} key={index} state={el.color} />
          ))}
        </div>
      </div>
    </SolutionLayout>
  );
};
