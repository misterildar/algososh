import { useState } from 'react';
import { Input } from '../ui/input/input';
import React, { ChangeEvent } from 'react';
import { Circle } from '../ui/circle/circle';
import { Button } from '../ui/button/button';
import { getFibonacciNumbers } from './utils';
import styles from './fibonacci-page.module.css';
import { showFibonacciNimber } from './logic-fibonacci';
import { MAX_LENGHT_FIBONACCI } from '../../constants/constans';
import { SolutionLayout } from '../ui/solution-layout/solution-layout';

export const FibonacciPage: React.FC = () => {
  const [loader, setLoader] = useState(false);

  const [disabledButton, setDisabledButton] = useState(true);

  const [valueInput, setValueInput] = useState<string>('');

  const [valueCircle, setValueCircle] = useState<number[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value);
    const num = Number(event.target.value);
    setDisabledButton(false);
    if (num <= 0 || num > MAX_LENGHT_FIBONACCI) {
      setDisabledButton(true);
    }
  };

  const array = getFibonacciNumbers(valueInput);

  const onClick = () => {
    showFibonacciNimber(array, setValueInput, setValueCircle, setLoader);
  };

  return (
    <SolutionLayout title='Последовательность Фибоначчи'>
      <div className={styles.container}>
        <div className={styles.box_input}>
          <Input
            max={MAX_LENGHT_FIBONACCI}
            type='number'
            isLimitText={true}
            value={valueInput}
            onChange={handleChange}
            placeholder='Введите число'
          />
          <Button
            text='Рассчитать'
            onClick={onClick}
            isLoader={loader}
            disabled={disabledButton}
          />
        </div>
      </div>
      <div className={styles.box_circle}>
        {valueCircle.map((el, index) => (
          <Circle letter={`${el}`} key={index} index={index} />
        ))}
      </div>
    </SolutionLayout>
  );
};
