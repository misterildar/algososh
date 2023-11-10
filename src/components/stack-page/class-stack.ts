import { IStack } from '../../types/types';

export class Stack<T> implements IStack<T> {
  container: T[] = [];

  push = (item: T): void => {
    this.container.push(item);
  };

  pop = (): void => {
    this.container.pop();
  };

  peak = (): T | null => {
    if (this.container.length < 1) {
      return null;
    } else {
      return this.container[this.container.length - 1];
    }
  };

  getStack = () => this.container;

  clear = () => (this.container = []);

  getSize = () => this.container.length;
}
