class NodeElement {
  value: any;
  next: NodeElement | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: NodeElement | null;

  constructor() {
    this.head = null;
  }

  append(value: any) {
    const newNode = new NodeElement(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(value: any) {
    const newNode = new NodeElement(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      const value = this.head.value;
      this.head = null;
      return value;
    }
    let previous = this.head;
    let current = this.head;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    return current.value;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append('any next value');
linkedList.append(2);
linkedList.append('new value');
linkedList.print();
