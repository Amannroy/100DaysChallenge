class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add node at the front
  addFront(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Add node at the end
  addEnd(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Add node at a specific position
  addAtPosition(data, position) {
    const newNode = new Node(data);

    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let index = 1;

    while (current !== null && index < position - 1) {
      current = current.next;
      index++;
    }

    if (current === null) {
      console.log("Position out of range");
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  // Remove node from a secific position
  removeFromPosition(position) {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    if (position === 1) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let index = 1;

    while (current !== null && index < position - 1) {
      current = current.next;
      index++;
    }

    if (current === null || current.next === null) {
      console.log("Position out of range");
      return;
    }

    current.next = current.next.next;
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

const list = new LinkedList();

list.addEnd(10);
list.addEnd(20);
list.addEnd(30);
list.addFront(5);
list.addAtPosition(15, 3);
list.printList(); // 5 -> 10 -> 15 -> 20 -> 30 -> null

list.removeFromPosition(3);
list.printList(); // 5 -> 10 -> 20 -> 30 -> null
