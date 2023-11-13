import { IQueue } from '../../types/types';

export class Queue<T> implements IQueue<T> {
  private container: T[] = [];
  private head = 0;
  private tail = 0;
  private readonly size: number = 0;
  private length: number = 0;

  constructor(size: number) {
    this.size = size;
    this.container = Array(size);
  }

  enqueue = (item: T) => {
    if (this.length >= this.size) {
      throw new Error('Maximum length exceeded');
    }
    this.container[this.tail % this.size] = item;
    this.tail++;
    this.length++;
  };

  dequeue = () => {
    if (this.isEmpty()) {
      throw new Error('No elements in the queue');
    }
    delete this.container[this.head % this.size];
    this.head++;
    this.length--;
  };

  getHead = () => this.head - 1;

  getHeadIndex = () => this.head;

  getTail = () => this.tail - 1;

  isEmpty = () => this.length === 0;

  isFull = (): boolean => {
    return this.tail === this.size;
  };

  end = () => {
    return this.getHead() === 7 && this.getTail() === 6 && this.isEmpty();
  };

  clear = () => {
    this.head = 0;
    this.tail = 0;
    this.length = 0;
    this.container = Array(this.size);
  };
}
