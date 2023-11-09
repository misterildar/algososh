//TODO
import { IvalueColumn, IvalueCircle } from '../types/types';

export const swap = (
  arr: IvalueColumn[] | IvalueCircle[],
  firstIndex: number,
  secondIndex: number
) => {
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};
