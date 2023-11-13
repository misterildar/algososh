import React, { ChangeEvent, useEffect, useState } from 'react';
import { SolutionLayout } from '../ui/solution-layout/solution-layout';
import { Input } from '../ui/input/input';
import { Button } from '../ui/button/button';
import { Circle } from '../ui/circle/circle';
import styles from './list.page.module.css';
import { ArrowIcon } from '../ui/icons/arrow-icon';
// import { ElementStates } from '../../types/element-states';
import { starterArray } from './logic-list-page';
import { IstarterArray } from '../../types/types';
import { LinkedList } from './class-list-page';

export const ListPage: React.FC = () => {
  const [list] = useState(new LinkedList());

  const [valueInput, setValueInput] = useState('');

  const [valueIndex, setValueIndex] = useState('');

  const [listContainer, setListContainer] = useState<IstarterArray[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value.trim());
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValueIndex(event.target.value.trim());
  };

  const isArrow = listContainer.length - 1;

  useEffect(() => {
    setListContainer(starterArray);
    starterArray.forEach((el) => {
      list.append(el.value);
    });
  }, []);

  return (
    <SolutionLayout title='Связный список'>
      <div className={styles.container}>
        <div className={styles.box}>
          <Input
            type='text'
            maxLength={4}
            isLimitText={true}
            value={valueInput}
            onChange={handleChange}
            placeholder='Введите значение'
          />
          <Button
            text='Добавить в head'
            // disabled={disabled || downOrderLoader}
            // isLoader={upOrderLoader}
            // onClick={() => selection()}

            style={{ minWidth: '180px' }}
          />
          <Button
            text='Добавить в tail'
            // disabled={disabled || downOrderLoader}
            // isLoader={upOrderLoader}
            // onClick={() => selection()}
            style={{ minWidth: '180px' }}
          />
          <Button
            text='Удалить из head'
            // disabled={disabled || downOrderLoader}
            // isLoader={upOrderLoader}
            // onClick={() => selection()}
            style={{ minWidth: '180px' }}
          />
          <Button
            text='Удалить из tail'
            // disabled={disabled || downOrderLoader}
            // isLoader={upOrderLoader}
            // onClick={() => selection()}
            style={{ minWidth: '180px' }}
          />
        </div>
        <div className={styles.box}>
          <Input
            type='number'
            value={valueIndex}
            onChange={handleChangeInput}
            placeholder='Введите индекс'
          />
          <Button
            text='Добавить по индексу'
            // disabled={disabled || downOrderLoader}
            // isLoader={upOrderLoader}
            // onClick={() => selection()}
            style={{ minWidth: '370px' }}
          />
          <Button
            text='Удалить по индексу'
            // disabled={disabled || downOrderLoader}
            // isLoader={upOrderLoader}
            // onClick={() => selection()}
            style={{ minWidth: '370px' }}
          />
        </div>
      </div>
      <div className={styles.box_circle}>
        {listContainer.map((el, index) => {
          return (
            <div className={styles.circle} key={index}>
              <Circle letter={el.value} key={index} />
              {index < isArrow && <ArrowIcon />}
            </div>
          );
        })}
      </div>
    </SolutionLayout>
  );
};
