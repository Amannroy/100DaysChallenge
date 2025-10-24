/* What is a Set?

A well-defined collection of unique objects/elements
No duplicate values allowed
No order preservation (unlike arrays)
Based on mathematical Set Theory

Implementation Overview

Uses Map internally for efficient operations
Both key and value store the same element (element as key, element as value)
This ensures uniqueness automatically


Core Methods
1. add(element)

Adds element to set
Returns false if element already exists
Returns true if successfully added

2. has(element)

Checks if element exists in set
Returns boolean (true/false)

3. remove(element)

Deletes element from set
Uses Map's delete() method

4. size()

Returns count of elements in set
Uses Map's size property

5. values()

Returns all elements as an array
Uses spread operator: [...this.items.keys()]


Set Operations (from Math)
6. union(otherSet)

Combines two sets
Common elements appear only once
Example: {1,2,3} ∪ {3,4,5} = {1,2,3,4,5}

7. intersection(otherSet)

Returns only common elements
Performance optimization: Iterate through smaller set
Example: {1,2,3,4} ∩ {3,4,5,6} = {3,4}


Key Concepts
✅ No Duplicates: Automatic duplicate prevention
✅ Efficient Search: Map-based implementation
✅ No Indexing: Can't access by position
✅ Key = Value: Same element stored as both

javascriptconst setA = new CustomSet();
setA.add(2); // true
setA.add(4); // true
setA.add(2); // false (duplicate)

const setB = new CustomSet();
setB.add(4);
setB.add(7);

// Union: All unique elements from both sets
const unionSet = setA.union(setB); // {2, 4, 7}

// Intersection: Only common elements
const intersectionSet = setA.intersection(setB); // {4}

Why Use Map Internally?

✅ Fast lookups (O(1))
✅ Keys can't duplicate
✅ Built-in has(), delete(), size methods
✅ Efficient performance

*/

// Implementation

class CustomSet{
    constructor(){
        this.items = new Map();
    }
    add(element){
        if(this.items.has(element)){
            return false;
        }
        this.items.set(element, element);
        return true;
    }
    has(element){
        return this.items.has(element);
    }
    remove(element){
        this.items.delete(element);
    }
    size(){
        return this.items.size;
    }
    values(){
        return [...this.items.keys()];
    }
    union(otherSet){
        const unionSet = new CustomSet();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }
    intersectionSet(otherSet){
        const intersectionSet = new CustomSet();

        const smallerSet = this.size() < otherSet.size() ? this : otherSet;
        const largerSet = this.size() < otherSet.size() ? otherSet : this;

        smallerSet.values().forEach(value => {
            if(largerSet.has(value)){
                intersectionSet.add(value);
            }
        })
        return intersectionSet;
    }
}
const setA = new CustomSet();
setA.add(2);
setA.add(4);
setA.add(6);
setA.add(8);
const setB = new CustomSet();
setB.add(1);
setB.add(4);
setB.add(7);
setB.add(8);

console.log(setA);
console.log(setB);

setC = setA.union(setB);
console.log(setC);

setD = setA.intersectionSet(setB);
console.log(setD);

setA.remove(2);
console.log(setA);


