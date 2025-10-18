class Deque {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  isEmpty() {
    return this.head === this.tail;
  }

  addHead(element) {
    this.head--;
    this.items[this.head] = element;
  }

  addTail(element) {
    this.items[this.tail] = element;
    this.tail++;
  }

  removeHead() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.head];
    delete this.items[this.head];
    this.head++;

    if (this.isEmpty()) {
      this.head = 0;
      this.tail = 0;
    }
    return result;
  }

  removeTail() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.tail--;
    const result = this.items[this.tail];
    delete this.items[this.tail];

    if (this.isEmpty()) {
      this.head = 0;
      this.tail = 0;
    }
    return result;
  }

  peekHead() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.head];
  }

  peekTail() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.tail - 1];
  }

  size() {
    return this.tail - this.head;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return;
    }

    let output = "";
    for (let i = this.head; i < this.tail; i++) {
      output += this.items[i];

      output += i < this.tail - 1 ? " <-> " : "";
    }
    console.log(output);
  }
}

// Create deque instance
const d = new Deque();

// Add elements
d.addTail(10);   // [10]
d.addTail(20);   // [10, 20]
d.addTail(30);   // [10, 20, 30]
d.addHead(40);   // [40, 10, 20, 30]
d.addHead(50);   // [50, 40, 10, 20, 30]

d.print();       // Output: 50 <-> 40 <-> 10 <-> 20 <-> 30

// Remove elements
d.removeHead();  // Removes 50: [40, 10, 20, 30]
d.removeTail();  // Removes 30: [40, 10, 20]

d.print();       // Output: 40 <-> 10 <-> 20

// Check size
console.log(d.size());      // Output: 3

// Peek operations
console.log(d.peekHead());  // Output: 40
console.log(d.peekTail());  // Output: 20