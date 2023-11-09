import { useState } from 'react';
import { Input } from '../ui/input/input';
import React, { ChangeEvent } from 'react';
import { Circle } from '../ui/circle/circle';
import { Button } from '../ui/button/button';
import styles from './fibonacci-page.module.css';
import { fibonacciNumber } from './logic-fibonacci';
import { SolutionLayout } from '../ui/solution-layout/solution-layout';

export const FibonacciPage: React.FC = () => {
  const [loader, setLoader] = useState(false);

  const [disabledButton, setDisabledButton] = useState(true);

  const [valueInput, setValueInput] = useState<number | string>('');

  const [valueCircle, setValueCircle] = useState<number[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let num = Number(event.target.value);
    setValueInput(num);
    setDisabledButton(false);
    if (num <= 0 || num > 19) {
      setDisabledButton(true);
    }
  };

  const onClick = () => {
    fibonacciNumber(valueInput as number, setValueCircle, setLoader);
    setValueInput('');
  };

  return (
    <SolutionLayout title='Последовательность Фибоначчи'>
      <div className={styles.container}>
        <div className={styles.box_input}>
          <Input
            max={19}
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
