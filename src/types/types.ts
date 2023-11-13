import { Dispatch } from 'react';
import { ElementStates } from './element-states';
import { Stack } from '../components/stack-page/class-stack';
import { Queue } from '../components/queue-page/class-queue';

export interface IvalueCircle {
  value: string;
  color: ElementStates;
  head?: string;
}

export interface IvalueColumn {
  value: number;
  color: ElementStates;
}

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

export interface IparametersQueune {
  queue: Queue<IvalueCircle>;
  valueInput: string;
  queueContainer: IvalueCircle[];
  setValueInput: Dispatch<React.SetStateAction<string>>;
  setQueueContainer: Dispatch<React.SetStateAction<IvalueCircle[]>>;
}

export interface IQueue<T> {
  enqueue: (item: T) => void;
  dequeue: () => void;
  getHead: () => number;
  getTail: () => number;
  getHeadIndex: () => number;
  clear: () => void;
}

export interface IstarterArray {
  value: string;
  color: ElementStates;
}

export interface Iinput {
  index: number;
  value: string;
}
