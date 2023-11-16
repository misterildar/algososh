import { delay } from '../../utils/delay';
import { IListContainer, IList } from '../../types/types';
import { ElementStates } from '../../types/element-states';

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

export const starterArray: IListContainer[] = Array.from({ length: 4 }, () =>
  createEl(String(Math.round(Math.random() * 100)))
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
  listContainer[0].showAddCircle = true;
  listContainer[0].valueSmall = valueInput;
  listContainer[0].colorSmall = ElementStates.Changing;
  setListContainer([...listContainer]);
  await delay(500);
  listContainer[0].showAddCircle = false;
  listContainer.unshift(element);
  listContainer[0].color = ElementStates.Modified;
  setListContainer([...listContainer]);
  await delay(500);
  listContainer[0].color = ElementStates.Default;
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
  listContainer[listLength - 1].showAddCircle = true;
  listContainer[listLength - 1].valueSmall = valueInput;
  listContainer[listLength - 1].colorSmall = ElementStates.Changing;
  setListContainer([...listContainer]);
  await delay(500);
  listContainer.push(element);
  listContainer[listLength - 1].showAddCircle = false;
  listContainer[listLength].color = ElementStates.Modified;
  setListContainer([...listContainer]);
  await delay(500);
  listContainer[listLength].color = ElementStates.Default;
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
  listContainer[number].showDeleteCircle = true;
  listContainer[number].valueSmall = listContainer[number].value;
  listContainer[number].value = '';
  listContainer[number].colorSmall = ElementStates.Changing;
  setListContainer([...listContainer]);
  await delay(500);
  listContainer[number].showDeleteCircle = false;
  if (number === 0) {
    listContainer.shift();
    list.deleteHead();
  } else {
    listContainer.pop();
    list.deleteTail();
  }
  setListContainer([...listContainer]);
  await delay(500);
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
    listContainer,
    setIsLoader,
    setValueInput,
    setListContainer,
    setValueIndex,
  } = parameters;
  setValueInput('');
  setValueIndex('');
  setIsLoader({ ...isLoader, addByIndex: true });
  list.addByIndex(element, Number(valueIndex));

  for (let i = 0; i < Number(valueIndex); i++) {
    listContainer[i].showAddCircle = true;
    listContainer[i].valueSmall = valueInput;
    listContainer[i].colorSmall = ElementStates.Changing;
    setListContainer([...listContainer]);
    await delay(500);
    listContainer[i].showAddCircle = false;
    listContainer[i].color = ElementStates.Changing;
  }
  listContainer[Number(valueIndex)].showAddCircle = true;
  listContainer[Number(valueIndex)].valueSmall = valueInput;
  listContainer[Number(valueIndex)].colorSmall = ElementStates.Changing;
  setListContainer([...listContainer]);
  await delay(500);
  listContainer[Number(valueIndex)].showAddCircle = false;

  listContainer.splice(Number(valueIndex), 0, element);
  for (let i = 0; i < Number(valueIndex); i++) {
    listContainer[i].color = ElementStates.Default;
  }
  listContainer[Number(valueIndex)].color = ElementStates.Modified;
  setListContainer([...listContainer]);
  await delay(500);
  listContainer[Number(valueIndex)].color = ElementStates.Default;
  setListContainer([...listContainer]);
  setIsLoader({ ...isLoader, addByIndex: false });
};

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

export const deleteByIndexList = async (parameters: IList) => {
  const {
    list,
    isLoader,
    valueIndex,
    listContainer,
    setIsLoader,
    setValueIndex,
    setListContainer,
  } = parameters;
  setValueIndex('');
  setIsLoader({ ...isLoader, deleteByIndex: true });
  list.deleteByIndex(Number(valueIndex));

  for (let i = 0; i < Number(valueIndex); i++) {
    listContainer[i].color = ElementStates.Changing;
    setListContainer([...listContainer]);
    await delay(500);
  }
  setListContainer([...listContainer]);
  await delay(500);

  listContainer[Number(valueIndex)].showDeleteCircle = true;
  listContainer[Number(valueIndex)].colorSmall = ElementStates.Changing;
  listContainer[Number(valueIndex)].valueSmall =
    listContainer[Number(valueIndex)].value;
  listContainer[Number(valueIndex)].value = '';
  setListContainer([...listContainer]);
  await delay(500);

  listContainer.splice(Number(valueIndex), 1);
  for (let i = 0; i < Number(valueIndex); i++) {
    listContainer[i].color = ElementStates.Default;
  }
  setListContainer([...listContainer]);
  await delay(500);
  setIsLoader({ ...isLoader, deleteByIndex: false });
};
