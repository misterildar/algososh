import { Dispatch } from 'react';
import { ElementStates } from './element-states';
import { Stack } from '../components/stack-page/class-stack';

export interface IvalueCircle {
  value: string;
  color: ElementStates;
}
[];

export interface IvalueColumn {
  value: number;
  color: ElementStates;
}
[];

export interface IStack<T> {
  pop: () => void;
  peak: () => T | null;
  getSize: () => number;
  push: (item: T) => void;
}

export interface IparametersSorting {
  setUpOrderLoader: Dispatch<React.SetStateAction<boolean>>;
  setNewArray: Dispatch<React.SetStateAction<IvalueColumn[]>>;
  setDownOrderLoader: Dispatch<React.SetStateAction<boolean>>;
}

export interface IparametersStack {
  valueInput: string;
  stack: Stack<IvalueCircle>;
  setValueInput: Dispatch<React.SetStateAction<string>>;
  setStackContainer: Dispatch<React.SetStateAction<IvalueCircle[]>>;
}
