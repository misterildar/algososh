import { Input } from '../ui/input/input';
import styles from './list.page.module.css';
import { Button } from '../ui/button/button';
import { Circle } from '../ui/circle/circle';
import { LinkedList } from './class-list-page';
import { IListContainer } from '../../types/types';
import { ArrowIcon } from '../ui/icons/arrow-icon';
import { MAX_LENGHT } from '../../constants/constans';
import { ElementStates } from '../../types/element-states';
import { SolutionLayout } from '../ui/solution-layout/solution-layout';
import React, { ChangeEvent, useEffect, useState, useMemo } from 'react';
import {
  createEl,
  addHeadList,
  addTailList,
  starterArray,
  addByIndexList,
  deleteElementList,
  deleteByIndexList,
} from './logic-list-page';

export const ListPage: React.FC = () => {
  const [valueInput, setValueInput] = useState('');

  const [valueIndex, setValueIndex] = useState('');

  const list = useMemo(() => new LinkedList<IListContainer>(), []);

  const [listContainer, setListContainer] = useState<IListContainer[]>([]);

  const [isLoader, setIsLoader] = useState({
    addHead: false,
    addTail: false,
    deleteHead: false,
    deleteTail: false,
    addByIndex: false,
    deleteByIndex: false,
  });

  useEffect(() => {
    starterArray.forEach((elem) => {
      list.append(elem);
    });
    setListContainer(getListElements());
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value.trim());
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValueIndex(event.target.value.replace(/\D/g, ''));
  };

  const getListElements = () => {
    const listElements = list.toArray();
    const arrElements = listElements.map((el) => {
      return {
        valueSmall: '',
        value: el.value.value,
        color: el.value.color,
        showAddCircle: false,
        showDeleteCircle: false,
        colorSmall: ElementStates.Default,
      };
    });
    return arrElements;
  };

  const element = createEl(valueInput);

  const listLength = listContainer.length;

  const parameters = {
    list,
    element,
    isLoader,
    listLength,
    valueInput,
    valueIndex,
    listContainer,
    setIsLoader,
    setValueIndex,
    setValueInput,
    setListContainer,
  };

  const addHead = () => {
    addHeadList(parameters);
  };

  const addTail = () => {
    addTailList(parameters);
  };

  const deleteElement = async (number: number) => {
    deleteElementList(parameters, number);
  };

  const addByIndex = () => {
    addByIndexList(parameters);
  };

  const deleteByIndex = () => {
    deleteByIndexList(parameters);
  };

  const isArrow = listContainer.length - 1;

  const isEmpty = list.isEmpty();

  const isDisabletInput = function () {
    return (
      true == isLoader.addTail ||
      isLoader.addHead ||
      isLoader.deleteHead ||
      isLoader.deleteTail ||
      isLoader.addByIndex ||
      isLoader.deleteByIndex
    );
  };

  const addHeadTail = function () {
    return !!!valueInput || !!valueIndex;
  };

  const disabledDeleteHead = () => {
    return (
      isLoader.addTail ||
      isLoader.addHead ||
      isLoader.deleteTail ||
      isLoader.addByIndex ||
      isLoader.deleteByIndex ||
      !!valueIndex ||
      !!valueInput ||
      isEmpty
    );
  };

  const disabledDeleteTail = () => {
    return (
      isLoader.addTail ||
      isLoader.addHead ||
      isLoader.deleteHead ||
      isLoader.addByIndex ||
      isLoader.deleteByIndex ||
      !!valueIndex ||
      !!valueInput ||
      isEmpty
    );
  };

  const isFill = (el: IListContainer) => {
    return el.color === ElementStates.Changing ? '#D252E1' : '#0032FF';
  };

  const isHead = (el: IListContainer, index: number) => {
    return index === 0 && !el.showAddCircle ? 'head' : '';
  };

  const isTail = (el: IListContainer, index: number) => {
    return listLength - 1 === index && !el.showDeleteCircle ? 'tail' : '';
  };

  return (
    <SolutionLayout title='Связный список'>
      <div className={styles.container}>
        <div className={styles.box}>
          <Input
            type='text'
            maxLength={MAX_LENGHT}
            isLimitText={true}
            value={valueInput}
            onChange={handleChange}
            disabled={isDisabletInput() || isEmpty}
            placeholder='Введите значение'
          />
          <Button
            text='Добавить в head'
            disabled={addHeadTail()}
            isLoader={isLoader.addHead}
            onClick={addHead}
            style={{ minWidth: '180px' }}
          />
          <Button
            text='Добавить в tail'
            disabled={addHeadTail()}
            isLoader={isLoader.addTail}
            onClick={addTail}
            style={{ minWidth: '180px' }}
          />
          <Button
            text='Удалить из head'
            disabled={disabledDeleteHead()}
            isLoader={isLoader.deleteHead}
            onClick={() => deleteElement(0)}
            style={{ minWidth: '180px' }}
          />
          <Button
            text='Удалить из tail'
            disabled={disabledDeleteTail()}
            isLoader={isLoader.deleteTail}
            onClick={() => deleteElement(listLength - 1)}
            style={{ minWidth: '180px' }}
          />
        </div>
        <div className={styles.box}>
          <Input
            type='number'
            pattern='^[0-9]'
            value={valueIndex}
            onChange={handleChangeInput}
            disabled={isDisabletInput() || isEmpty}
            placeholder='Введите индекс'
          />
          <Button
            text='Добавить по индексу'
            disabled={
              !!!valueInput || !!!valueIndex || Number(valueIndex) > isArrow
            }
            isLoader={isLoader.addByIndex}
            onClick={addByIndex}
            style={{ minWidth: '370px' }}
          />
          <Button
            text='Удалить по индексу'
            disabled={
              !!!valueIndex || !!valueInput || Number(valueIndex) > isArrow
            }
            isLoader={isLoader.deleteByIndex}
            onClick={deleteByIndex}
            style={{ minWidth: '370px' }}
          />
        </div>
      </div>
      <div className={styles.container_circle}>
        {listContainer.map((el, index) => {
          return (
            <div className={styles.circle} key={index}>
              {el.showAddCircle && (
                <Circle
                  isSmall
                  state={el.colorSmall}
                  letter={el.valueSmall}
                  extraClass={styles.circle_top}
                />
              )}
              <Circle
                letter={el.value}
                key={index}
                index={index}
                state={el.color}
                head={isHead(el, index)}
                tail={isTail(el, index)}
              />
              {index < isArrow && <ArrowIcon fill={isFill(el)} />}

              {el.showDeleteCircle && (
                <Circle
                  isSmall
                  state={el.colorSmall}
                  letter={el.valueSmall}
                  extraClass={styles.circle_bottom}
                />
              )}
            </div>
          );
        })}
      </div>
    </SolutionLayout>
  );
};
