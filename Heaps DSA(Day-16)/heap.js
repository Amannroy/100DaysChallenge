// Heap Data Structure - Complete Notes
// What is a Heap?
// A heap is a special tree-based data structure that is implemented using an array. It's one of the few tree structures that we can efficiently store in a linear array format.
// Prerequisites: Understanding Binary Trees
// Binary Tree Basics

// A binary tree is a tree where each node has at most 2 children
// Trees have levels starting from 0:

// Level 0: 1 node (root)
// Level 1: 2 nodes maximum
// Level 2: 4 nodes maximum
// Level n: 2^n nodes maximum



// Complete Binary Tree

// All levels are completely filled with nodes
// Example: A tree with levels 0, 1, and 2 all having maximum possible nodes

// Almost Complete Binary Tree

// All levels are completely filled except possibly the last level
// If the last level is not full, nodes must be left-aligned (no gaps in between)
// This is the key property heaps must satisfy!

// Heap Properties
// A heap must satisfy TWO conditions:
// 1. Heap Order Property
// Min Heap (what we'll implement):

// Every node's value is smaller than or equal to its children's values
// Formula: parent ≤ left_child AND parent ≤ right_child
// The minimum value is always at the root

// Max Heap:

// Every node's value is greater than or equal to its children's values
// The maximum value is always at the root

// 2. Structure Property

// Must be an almost complete binary tree

// How Heaps are Stored in Arrays
// Since heaps are almost complete binary trees, they can be efficiently stored in arrays using level-order traversal.
// Parent-Child Index Relationships
// Given a node at index i:
// Parent Index:
// parent_index = Math.floor((i - 1) / 2)
// ```

// **Left Child Index:**
// ```
// left_child_index = 2 * i + 1
// ```

// **Right Child Index:**
// ```
// right_child_index = 2 * i + 2
// ```

// ### Example:
// ```
// Array: [12, 25, 40, 50, 60, 30, 35, 70, 65]
// Indices: 0   1   2   3   4   5   6   7   8

// Tree representation:
//            12 (0)
//           /      \
//        25(1)     40(2)
//       /    \     /    \
//     50(3) 60(4) 30(5) 35(6)
//    /  \
//  70(7) 65(8)

// Core Operations
// 1. Bubble Up (Heapify Up)
// Used during insertion:

// Add new element at the end of array
// Compare with parent
// If smaller than parent, swap
// Repeat until node is in correct position or reaches root

// 2. Sink Down (Heapify Down)
// Used during deletion:

// Replace root with last element
// Compare with both children
// Swap with the smaller child (for min heap)
// Repeat until node is in correct position or becomes a leaf

// 3. Insert

// Push new value to end of array
// Bubble up to maintain heap property

// 4. Extract Min (Delete)

// Swap root with last element
// Remove last element (this is the minimum)
// Sink down the new root to maintain heap property

// Key Insights

// Time Complexity:

// Insert: O(log n) - bubble up through height of tree
// Extract Min: O(log n) - sink down through height of tree
// Peek: O(1) - just return root
// Build Heap: O(n)


// Space Complexity: O(n) - array storage
// Use Cases:

// Priority Queues
// Heap Sort algorithm
// Finding k smallest/largest elements
// Dijkstra's shortest path algorithm
// Huffman coding


// Min Heap vs Max Heap:

// To convert to Max Heap, simply reverse comparison operators
// Change < to > in bubbleUp and sinkDown



// This implementation is clean, efficient, and ready to use in real applications! 🚀RetryClaude does not have the ability to run the code it generates yet.



class MinHeap{
    constructor(){
        this.heap = [];
    }
    size(){
        return this.heap.length;
    }
    getParentIndex(index){
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index){
        return 2*index+1;
    }
    getRightChildIndex(index){
        return 2*index+2;
    }
    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    bubbleUp(index){
        let currentIndex = index;
        while(currentIndex > 0){
            const parentIndex = this.getParentIndex(currentIndex);
            if(this.heap[currentIndex] < this.heap[parentIndex]){
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            }
            else{
                break;
            }
        }
    }

    sinkDown(index){
        let currentIndex = index;
        const lastIndex = this.heap.length - 1;

        while(true){
            const leftChildIndex = this.getLeftChildIndex(currentIndex);
            const rightChildIndex = this.getRightChildIndex(currentIndex);

            let swapIndex = null;
            if(leftChildIndex <= lastIndex){
                if(this.heap[leftChildIndex] < this.heap[currentIndex]){
                    swapIndex = leftChildIndex;
                }
            }
            if(rightChildIndex <= lastIndex){
                if(swapIndex === null && this.heap[rightChildIndex] < this.heap[currentIndex]){
                    swapIndex = rightChildIndex;
                }
                else if(swapIndex !== null && this.heap[rightChildIndex] < this.heap[swapIndex]){
                    swapIndex = rightChildIndex;
                }
            }
            if(swapIndex === null){
                break;
            }

            this.swap(currentIndex, swapIndex);
            currentIndex = swapIndex;
        }
    }

    insert(value){
        this.heap.push(value);
        this.bubbleUp(this.heap.length-1);
    }

    extractMin(){
        if(this.heap.length === 0){
            return null;
        }
        if(this.heap.length === 1){
            return this.heap.pop();
        }
        this.swap(0, this.heap.length-1);
        const minValue = this.heap.pop();
        this.sinkDown(0);
        return minValue;
    }

    peek(){
        return this.heap.length === 0 ? null : this.heap[0];
    }
}

const minHeap = new MinHeap();
minHeap.insert(12);
minHeap.insert(40);
minHeap.insert(25);
minHeap.insert(50);
minHeap.insert(60);
minHeap.insert(30);
minHeap.insert(35);
minHeap.insert(70);
minHeap.insert(65);
let newMin;
while(minHeap.size() > 0){
    newMin = minHeap.extractMin();
    console.log('Extracted value:'+newMin+'| New Root: ' +minHeap.peek());
}
