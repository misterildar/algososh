import { ElementStates } from '../../types/element-states';

export class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T, next?: Node<T> | null) {
    this.value = value;
    this.next = next === undefined ? null : next;
  }
}

interface ILinkedList<T> {
  append: (element: T) => void;
  toArray: () => Node<T>[];
  prepend: (element: T) => void;
  deleteHead: () => void;
  deleteTail: () => void;
  addByIndex: (element: T, index: number) => void;
  deleteByIndex: (index: number) => void;
}

export class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(element: T) {
    const node = new Node(element);
    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(element: T) {
    const node = new Node(element, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.length++;
    return this;
  }

  toArray() {
    let currentNode = this.head;
    const nodes = [];
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  deleteHead() {
    if (!this.head) {
      return console.log('head not found');
    }
    this.head = this.head.next;
    this.length--;
  }

  deleteTail() {
    if (!this.tail) {
      console.log('tail not found');
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    if (this.head) {
      let currentNode = this.head;
      while (currentNode.next) {
        if (!currentNode.next.next) {
          currentNode.next = null;
        } else {
          currentNode = currentNode.next;
        }
      }
      this.tail = currentNode;
    }
    this.length--;
  }

  addByIndex(element: T, index: number) {
    if (index < 0 || index > this.length) {
      console.log('index not found');
    }
    const node = new Node(element);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else if (index === this.length) {
      this.tail!.next = node;
      this.tail = node;
    } else {
      let prev = null;
      let current = this.head;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current!.next;
      }
      prev!.next = node;
      node.next = current;
    }

    this.length++;
  }

  deleteByIndex(index: number) {
    if (index < 0 || index > this.length) {
      console.log('index not found');
    }
    if (!this.head || index === 0) {
      return this.deleteHead();
    } else {
      let prev = this.head;
      while (index - 1 && prev.next && prev.next.next) {
        prev = prev.next;
      }
      prev.next = prev.next!.next;
    }
    this.length--;
  }
}
