import { delay } from '../../utils/delay';
import { IparametersSorting } from '../../types/types';
import { IvalueColumn } from '../../types/types';
import { ElementStates } from '../../types/element-states';

const getRandomInt = (min = 3, max = 17) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateArray = (minLengthFunc: number, maxLength = 100) =>
  [...new Array(minLengthFunc)].map(() =>
    Math.round(Math.random() * maxLength)
  );

export const getRandomArray = () => {
  const randomNumber = getRandomInt();
  return generateArray(randomNumber);
};

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

export const selectionSort = async (
  minMax: string,
  arr: IvalueColumn[],
  parameter: IparametersSorting
) => {
  const { setNewArray, setUpOrderLoader, setDownOrderLoader } = parameter;

  minMax === 'max' ? setDownOrderLoader(true) : setUpOrderLoader(true);

  const { length } = arr;

  for (let i = 0; i < length - 1; i++) {
    let maxInd = i;
    for (let j = i + 1; j < length; j++) {
      arr[i].color = ElementStates.Changing;
      arr[j].color = ElementStates.Changing;
      setNewArray([...arr]);
      await delay(500);

      if (
        minMax === 'max'
          ? arr[maxInd].value < arr[j].value
          : arr[maxInd].value > arr[j].value
      )
        maxInd = j;

      arr[i].color = ElementStates.Default;
      arr[j].color = ElementStates.Default;
      setNewArray([...arr]);
    }

    let temp = arr[maxInd].value;
    arr[maxInd].value = arr[i].value;
    arr[i].value = temp;
    arr[i].color = ElementStates.Modified;
    setNewArray([...arr]);
  }
  arr[length - 1].color = ElementStates.Modified;

  minMax === 'max' ? setDownOrderLoader(false) : setUpOrderLoader(false);
};

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

export const bubbleSort = async (
  minMax: string,
  arr: IvalueColumn[],
  parameter: IparametersSorting
) => {
  const { setNewArray, setUpOrderLoader, setDownOrderLoader } = parameter;

  minMax === 'max' ? setDownOrderLoader(true) : setUpOrderLoader(true);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      arr[j].color = ElementStates.Changing;
      arr[j + 1].color = ElementStates.Changing;
      setNewArray([...arr]);
      await delay(500);

      if (
        minMax === 'max'
          ? arr[j].value < arr[j + 1].value
          : arr[j].value > arr[j + 1].value
      ) {
        let temp = arr[j].value;
        arr[j].value = arr[j + 1].value;
        arr[j + 1].value = temp;
      }
      arr[j].color = ElementStates.Default;
      arr[j + 1].color = ElementStates.Default;
      await delay(500);
      setNewArray([...arr]);
    }
    arr[arr.length - i - 1].color = ElementStates.Modified;
    setNewArray([...arr]);
  }
  minMax === 'max' ? setDownOrderLoader(false) : setUpOrderLoader(false);
  setNewArray([...arr]);
};
