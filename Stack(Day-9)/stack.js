// What is a Stack?
// A Stack is a linear data structure that follows the LIFO (Last In First Out) principle. This means:

// The data inserted first goes to the bottom
// The data inserted last stays on top
// You can only remove the most recently added element first

// Visual Representation
// Think of a stack like a container that:

// Is open only at the top
// Allows insertion and deletion from the same end (top)
// Elements pile up one on top of another

// Stack Terminology

// Push: Add/insert an element to the stack
// Pop: Remove the top element from the stack
// Peek: View the top element without removing it
// isEmpty: Check if the stack is empty
// getSize: Get the number of elements in the stack

// When to Use Stack?
// Stack is ideal when you need to:

// Store data sequentially
// Access the most recently added data first
// Follow LIFO order for processing


class Stack{
    constructor(){
        this.items = [];
    }

    // Add element to stack
    push(element){
        this.items.push(element);
    }

    // View top element without removing
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.items.length-1];
    }

    // Remove and return top element
    pop(){
        if(this.isEmpty()){
            return null;
        }
        const removedElement = this.items.pop();
        return removedElement;
    }

    // Check if stack is empty
    isEmpty(){
        return this.items.length === 0;
    }

    // Get number of elements
    getSize(){
        return this.items.length;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log("Top Element:", stack.peek()); // Top Elemetn: 40

const x = stack.pop();
console.log("Removed Element:", x);  // Removed Element: 40


console.log("Top Element:", stack.peek());  // Top Element: 30





// Stack operations work on a single end (top)
// Array's last index represents the top of stack
// Time Complexity: O(1) for all operations
// Space Complexity: O(n) where n is number of elements