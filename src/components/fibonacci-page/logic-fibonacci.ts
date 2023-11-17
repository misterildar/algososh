import { Dispatch } from 'react';
import { delay } from '../../utils/delay';
import { SHORT_DELAY_IN_MS } from '../../constants/delays';

export const showFibonacciNimber = async (
  arr: number[],
  setValueInput: React.Dispatch<React.SetStateAction<string>>,
  setValueCircle: React.Dispatch<React.SetStateAction<number[]>>,
  setLoader: Dispatch<React.SetStateAction<boolean>>
) => {
  setLoader(true);

  for (let i = 0; i < arr.length - 1; i++) {
    setValueCircle(arr.slice(0, i + 1));
    await delay(SHORT_DELAY_IN_MS);
  }
  setLoader(false);
  setValueInput('');
};
