import { useState } from 'react';
import styles from './string.module.css';
import { Input } from '../ui/input/input';
import React, { ChangeEvent } from 'react';
import { Button } from '../ui/button/button';
import { Circle } from '../ui/circle/circle';
import { reverseString } from './logic-string';
import { IvalueCircle } from '../../types/types';
import { SolutionLayout } from '../ui/solution-layout/solution-layout';

export const StringComponent: React.FC = () => {
  const [loader, setLoader] = useState(false);

  const [valueInput, setValueInput] = useState('');

  const [valueCircle, setValueCircle] = useState<IvalueCircle[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value.trim());
  };

  const onClick = () => {
    reverseString(valueInput, setValueCircle, setLoader);
    setValueInput('');
  };

  return (
    <SolutionLayout title='Строка'>
      <div className={styles.container}>
        <div className={styles.box_input}>
          <Input
            maxLength={11}
            isLimitText={true}
            onChange={handleChange}
            value={valueInput}
          />
          <Button
            text='Развернуть'
            onClick={onClick}
            disabled={!!!valueInput}
            isLoader={loader}
          />
        </div>
      </div>
      <div className={styles.box_circle}>
        {valueCircle.map((el, index) => (
          <Circle
            key={index}
            index={index}
            letter={el.value}
            state={el.color}
          />
        ))}
      </div>
    </SolutionLayout>
  );
};
