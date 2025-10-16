// What is a Queue?
// A Queue is a linear data structure that follows the FIFO (First In First Out) principle. Think of it like a real-world queue/line at a ticket counter - the person who arrives first gets served first.
// Key Characteristics:

// Linear data structure with two open ends
// Rear end: Where elements are inserted (enqueue)
// Front end: Where elements are removed (dequeue)
// Elements can only be accessed from the front or rear, not from the middle
// FIFO principle: First element inserted is the first to be removed

// Queue vs Stack:

// Stack: One open end (LIFO - Last In First Out)
// Queue: Two open ends (FIFO - First In First Out)


// Queue Operations

// enqueue(element) - Insert element at the rear
// dequeue() - Remove element from the front
// getFront() - View the front element
// getRear() - View the rear element
// isEmpty() - Check if queue is empty
// getSize() - Get number of elements in queue



//   // Remove element from the f
// Important Array Methods Used

// push(element) - Adds element at the end of array (used for enqueue)
// shift() - Removes first element from array and shifts all elements left (used for dequeue)
// pop() - Removes last element (NOT used in queue, but used in stack)

// Why shift() for dequeue?

// We need to remove the element at index 0 (oldest element)
// shift() removes the first element and automatically shifts remaining elements
// After shift(), element at index 1 becomes index 0, element at index 2 becomes index 1, etc.


// Time Complexity
// OperationTime Complexity
// enqueue()       O(1)
// dequeue()       O(n) - due to shifting 
// getFront()      O(1)
// getRear()       O(1)
// isEmpty()       O(1)
// getSize()       O(1)
// Note: For better performance (O(1) dequeue), you can implement queue using a linked list instead of an array.

// Real-World Applications

// Task scheduling in operating systems
// Print queue management
// Breadth-First Search (BFS) in graphs
// Request handling in web servers
// Call center systems - first caller gets served first
// Keyboard buffer - keystrokes processed in order


// Key Takeaways
// ✅ Queue follows FIFO principle
// ✅ Two ends: Rear (insertion) and Front (deletion)
// ✅ Cannot access middle elements directly
// ✅ Opposite of Stack (LIFO)
// ✅ Uses push() for enqueue and shift() for dequeue in JavaScript



// Implementation
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift(); // remove and return front element
    }

    getFront() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    getRear() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getSize() {
        return this.items.length;
    }

    printQueue() {
        console.log(this.items.join(" <- "));
    }
}

// --- Testing the Queue ---
const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

console.log("===== Initial Queue State ======");
console.log("Front value:", q.getFront());
console.log("Rear value:", q.getRear());
console.log("Queue size:", q.getSize());
console.log("Queue elements:");
q.printQueue();  // 10 <- 20 <- 30 <- 40 <- 50

// Test dequeue
console.log("\nDequeued:", q.dequeue());
console.log("Queue after dequeue:");
q.printQueue(); // 20 <- 30 <- 40 <- 50
