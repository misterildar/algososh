import { delay } from '../../utils/delay';
import { IListContainer, IList } from '../../types/types';
import { ElementStates } from '../../types/element-states';
import { SHORT_DELAY_IN_MS } from '../../constants/delays';
import { MAX_LENGHT, MAX_RANDOM_NUMBER } from '../../constants/constans';

export const createEl = (value: string) => {
  return {
    valueSmall: '',
    value: value,
    showAddCircle: false,
    showDeleteCircle: false,
    color: ElementStates.Default,
    colorSmall: ElementStates.Default,
  };
};

export const starterArray: IListContainer[] = Array.from(
  { length: MAX_LENGHT },
  () => createEl(String(Math.round(Math.random() * MAX_RANDOM_NUMBER)))
);

export const addHeadList = async (parameters: IList) => {
  const {
    list,
    element,
    isLoader,
    valueInput,
    listContainer,
    setIsLoader,
    setValueInput,
    setListContainer,
  } = parameters;
  setValueInput('');
  setIsLoader({ ...isLoader, addHead: true });
  list.prepend(element);
  let listArray = listContainer;
  listArray[0].showAddCircle = true;
  listArray[0].valueSmall = valueInput;
  listArray[0].colorSmall = ElementStates.Changing;
  setListContainer([...listArray]);
  await delay(SHORT_DELAY_IN_MS);
  listArray = listContainer;
  listArray[0].showAddCircle = false;
  listContainer.unshift(element);
  listArray[0].color = ElementStates.Modified;
  setListContainer([...listArray]);
  await delay(SHORT_DELAY_IN_MS);
  listArray = listContainer;
  listArray[0].color = ElementStates.Default;
  setListContainer([...listArray]);
  setIsLoader({ ...isLoader, addHead: false });
};

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

export const addTailList = async (parameters: IList) => {
  const {
    list,
    element,
    isLoader,
    valueInput,
    listLength,
    listContainer,
    setIsLoader,
    setValueInput,
    setListContainer,
  } = parameters;
  setValueInput('');
  setIsLoader({ ...isLoader, addTail: true });
  list.append(element);
  let listArray = listContainer;
  listArray[listLength - 1].showAddCircle = true;
  listArray[listLength - 1].valueSmall = valueInput;
  listArray[listLength - 1].colorSmall = ElementStates.Changing;
  setListContainer([...listArray]);
  await delay(SHORT_DELAY_IN_MS);
  listContainer.push(element);
  listArray = listContainer;
  listArray[listLength - 1].showAddCircle = false;
  listArray[listLength].color = ElementStates.Modified;
  setListContainer([...listArray]);
  await delay(SHORT_DELAY_IN_MS);
  listArray = listContainer;
  listArray[listLength].color = ElementStates.Default;
  setIsLoader({ ...isLoader, addTail: false });
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const deleteElementList = async (parameters: IList, number: number) => {
  const {
    list,
    isLoader,
    listContainer,
    setIsLoader,
    setValueInput,
    setListContainer,
  } = parameters;
  setValueInput('');
  if (number === 0) {
    setIsLoader({ ...isLoader, deleteHead: true });
  } else {
    setIsLoader({ ...isLoader, deleteTail: true });
  }
  let listArray = listContainer;
  listArray[number].showDeleteCircle = true;
  listArray[number].valueSmall = listContainer[number].value;
  listArray[number].value = '';
  listArray[number].colorSmall = ElementStates.Changing;
  setListContainer([...listArray]);
  await delay(SHORT_DELAY_IN_MS);
  listArray = listContainer;
  listArray[number].showDeleteCircle = false;
  if (number === 0) {
    listContainer.shift();
    list.deleteHead();
  } else {
    listContainer.pop();
    list.deleteTail();
  }
  setListContainer([...listArray]);
  await delay(SHORT_DELAY_IN_MS);
  if (number === 0) {
    setIsLoader({ ...isLoader, deleteHead: false });
  } else {
    setIsLoader({ ...isLoader, deleteTail: false });
  }
};

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

export const addByIndexList = async (parameters: IList) => {
  const {
    list,
    element,
    isLoader,
    valueInput,
    valueIndex,
    listLength,
    listContainer,
    setIsLoader,
    setValueInput,
    setListContainer,
    setValueIndex,
  } = parameters;

  setValueInput('');
  setValueIndex('');
  setIsLoader({ ...isLoader, addByIndex: true });

  if (Number(valueIndex) >= listLength) return;

  list.addByIndex(element, Number(valueIndex));

  for (let i = 0; i < Number(valueIndex); i++) {
    let listArray = listContainer;
    listArray[i].showAddCircle = true;
    listArray[i].valueSmall = valueInput;
    listArray[i].colorSmall = ElementStates.Changing;
    setListContainer([...listArray]);
    await delay(SHORT_DELAY_IN_MS);
    listArray = listContainer;
    listArray[i].showAddCircle = false;
    listArray[i].color = ElementStates.Changing;
  }
  let listArray = listContainer;
  listArray[Number(valueIndex)].showAddCircle = true;
  listArray[Number(valueIndex)].valueSmall = valueInput;
  listArray[Number(valueIndex)].colorSmall = ElementStates.Changing;
  setListContainer([...listArray]);
  await delay(SHORT_DELAY_IN_MS);
  listArray = listContainer;
  listArray[Number(valueIndex)].showAddCircle = false;
  listArray.splice(Number(valueIndex), 0, element);
  for (let i = 0; i < Number(valueIndex); i++) {
    listArray[i].color = ElementStates.Default;
  }
  listArray[Number(valueIndex)].color = ElementStates.Modified;
  setListContainer([...listArray]);
  await delay(SHORT_DELAY_IN_MS);
  listArray = listContainer;
  listArray[Number(valueIndex)].color = ElementStates.Default;
  setListContainer([...listArray]);
  setIsLoader({ ...isLoader, addByIndex: false });
};

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

export const deleteByIndexList = async (parameters: IList) => {
  const {
    list,
    isLoader,
    valueIndex,
    listLength,
    listContainer,
    setIsLoader,
    setValueIndex,
    setListContainer,
  } = parameters;

  setValueIndex('');
  setIsLoader({ ...isLoader, deleteByIndex: true });
  if (Number(valueIndex) >= listLength) return;

  list.deleteByIndex(Number(valueIndex));

  for (let i = 0; i < Number(valueIndex); i++) {
    let listArray = listContainer;
    listArray[i].color = ElementStates.Changing;
    setListContainer([...listArray]);
    await delay(SHORT_DELAY_IN_MS);
  }
  setListContainer([...listContainer]);
  await delay(SHORT_DELAY_IN_MS);
  let listArray = listContainer;
  listArray[Number(valueIndex)].showDeleteCircle = true;
  listArray[Number(valueIndex)].colorSmall = ElementStates.Changing;
  listArray[Number(valueIndex)].valueSmall =
    listArray[Number(valueIndex)].value;
  listArray[Number(valueIndex)].value = '';
  setListContainer([...listArray]);
  await delay(SHORT_DELAY_IN_MS);
  listArray = listContainer;
  listArray.splice(Number(valueIndex), 1);
  for (let i = 0; i < Number(valueIndex); i++) {
    listArray[i].color = ElementStates.Default;
  }
  setListContainer([...listArray]);
  await delay(SHORT_DELAY_IN_MS);
  setIsLoader({ ...isLoader, deleteByIndex: false });
};
