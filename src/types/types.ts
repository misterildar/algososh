import { ElementStates } from './element-states';
import { Dispatch } from 'react';
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
  push: (item: T) => void;
  pop: () => void;
  peak: () => T | null;
  getSize: () => number;
}

export interface IparametersSorting {
  setNewArray: Dispatch<React.SetStateAction<IvalueColumn[]>>;
  setUpOrderLoader: Dispatch<React.SetStateAction<boolean>>;
  setDownOrderLoader: Dispatch<React.SetStateAction<boolean>>;
}

export interface IparametersStack {
  valueInput: string;
  setValueInput: Dispatch<React.SetStateAction<string>>;
  stack: Stack<IvalueCircle>;
  setStack: Dispatch<React.SetStateAction<Stack<IvalueCircle>>>;
  setStackContainer: Dispatch<React.SetStateAction<IvalueCircle[]>>;
}
