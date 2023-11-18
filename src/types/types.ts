import { Dispatch } from 'react';
import { ElementStates } from './element-states';
import { Stack } from '../components/stack-page/class-stack';
import { Queue } from '../components/queue-page/class-queue';
import { LinkedList } from '../components/list-page/class-list-page';

export interface IvalueCircle {
  value: string;
  head?: string;
  color: ElementStates;
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

export interface IQueue<T> {
  clear: () => void;
  dequeue: () => void;
  getHead: () => number;
  getTail: () => number;
  enqueue: (item: T) => void;
  getHeadIndex: () => number;
}

export interface Iinput {
  index?: number;
  value?: string;
}

export interface IListContainer {
  value: string;
  color: ElementStates;
  showAddCircle: boolean;
  showDeleteCircle: boolean;
  colorSmall: ElementStates;
  valueSmall: string;
}

export interface IsetIsLoader {
  addHead: boolean;
  addTail: boolean;
  deleteHead: boolean;
  deleteTail: boolean;
  addByIndex: boolean;
  deleteByIndex: boolean;
}

export interface IElement {
  value: string;
  valueSmall: string;
  color: ElementStates;
  showAddCircle: boolean;
  showDeleteCircle: boolean;
  colorSmall: ElementStates;
}

interface IStackIsDisabled {
  addButton: boolean;
  deleteButton: boolean;
  clearButton: boolean;
}

export interface IparametersSorting {
  setUpOrderLoader: Dispatch<React.SetStateAction<boolean>>;
  setNewArray: Dispatch<React.SetStateAction<IvalueColumn[]>>;
  setDownOrderLoader: Dispatch<React.SetStateAction<boolean>>;
}

export interface IparametersStack {
  valueInput: string;
  stack: Stack<IvalueCircle>;
  isDisabled: IStackIsDisabled;
  setValueInput: Dispatch<React.SetStateAction<string>>;
  setIsDisabled: Dispatch<React.SetStateAction<IStackIsDisabled>>;
  setStackContainer: Dispatch<React.SetStateAction<IvalueCircle[]>>;
}

export interface IparametersQueune {
  valueInput: string;
  isDisabled: IStackIsDisabled;
  queue: Queue<IvalueCircle>;
  queueContainer: IvalueCircle[];
  setValueInput: Dispatch<React.SetStateAction<string>>;
  setIsDisabled: Dispatch<React.SetStateAction<IStackIsDisabled>>;
  setQueueContainer: Dispatch<React.SetStateAction<IvalueCircle[]>>;
}

export interface IList {
  valueInput: string;
  valueIndex: string;
  listLength: number;
  element: IElement;
  isLoader: IsetIsLoader;
  listContainer: IListContainer[];
  list: LinkedList<IListContainer>;
  setValueIndex: Dispatch<React.SetStateAction<string>>;
  setValueInput: Dispatch<React.SetStateAction<string>>;
  setIsLoader: Dispatch<React.SetStateAction<IsetIsLoader>>;
  setListContainer: Dispatch<React.SetStateAction<IListContainer[]>>;
}
