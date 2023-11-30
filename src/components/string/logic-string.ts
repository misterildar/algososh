import { Dispatch } from 'react';
import { delay } from '../../utils/delay';
import { IvalueCircle } from '../../types/types';
import { ElementStates } from '../../types/element-states';
import { SHORT_DELAY_IN_MS, DELAY_IN_MS } from '../../constants/delays';

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
  await delay(SHORT_DELAY_IN_MS);

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

    await delay(DELAY_IN_MS);
    start++;
    end--;
  }
  setValueCircle([...arrayString]);
  setLoader(false);
  return arrayString;
};
