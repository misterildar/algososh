import { Dispatch } from 'react';
import { delay } from '../../utils/delay';
import { IvalueCircle } from '../../types/types';
import { ElementStates } from '../../types/element-states';

export const reverseString = async (
  valueInput: string,
  setValueCircle: Dispatch<React.SetStateAction<IvalueCircle[]>>,
  setLoader: Dispatch<React.SetStateAction<boolean>>
) => {
  setLoader(true);

  const arrayString = valueInput
    .split('')
    .map((value) => ({ value, color: ElementStates.Default }));

  setValueCircle(arrayString);
  await delay(600);

  let start = 0;
  let end = arrayString.length - 1;

  while (start <= end) {
    arrayString[start].color = ElementStates.Changing;
    arrayString[end].color = ElementStates.Changing;
    setValueCircle([...arrayString]);

    let temp = arrayString[start];
    arrayString[start] = arrayString[end];
    arrayString[end] = temp;

    arrayString[start].color = ElementStates.Modified;
    arrayString[end].color = ElementStates.Modified;

    await delay(1000);
    start++;
    end--;
  }
  setLoader(false);
  return arrayString;
};
