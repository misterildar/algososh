import { Dispatch } from 'react';
import { delay } from '../../utils/delay';

export const fibonacciNumber = async (
  valueInput: number,
  setValueCircle: React.Dispatch<React.SetStateAction<number[]>>,
  setLoader: Dispatch<React.SetStateAction<boolean>>
) => {
  setLoader(true);

  const arr: number[] = [1];

  await delay(500);
  setValueCircle([...arr]);

  arr.push(1);
  await delay(500);
  setValueCircle([...arr]);

  for (let i = 2; i <= valueInput + 1; i++) {
    setValueCircle([...arr]);
    await delay(500);
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  setLoader(false);
};
