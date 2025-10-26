// HashTable Class to store data in Key-Value form
class HashTable {
    constructor(size = 50) {
        // Create an empty array (table) of given size
        this.table = new Array(size);
        // Keeps track of how many key-value pairs are stored
        this.size = 0;
    }

    // Hash Function → Converts a string key into a valid index number
    _hashFunction(key) {
        let hash = 0;
        // Add ASCII value of each character of the key
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        // Use modulo to keep the index within table size
        return hash % this.table.length;
    }

    // Insert or Update a (key, value) pair
    set(key, value) {
        const index = this._hashFunction(key);

        // If this index is empty, create an empty array (for chaining)
        if (this.table[index] === undefined) {
            this.table[index] = [];
        }

        const chain = this.table[index];

        // If key already exists, update the value
        for (let i = 0; i < chain.length; i++) {
            if (chain[i][0] === key) {
                chain[i][1] = value;  // update old value
                return;
            }
        }

        // Otherwise, add new key-value pair
        chain.push([key, value]);
        this.size++;
    }

    // Retrieve the value using the key
    get(key) {
        const index = this._hashFunction(key);
        const chain = this.table[index];

        // If something exists at index, search for key in the chain
        if (chain) {
            for (let i = 0; i < chain.length; i++) {
                if (chain[i][0] === key) {
                    return chain[i][1]; // return value if found
                }
            }
        }
        // If key doesn't exist
        return undefined;
    }

    // Remove a (key, value) pair from the table
    remove(key) {
        const index = this._hashFunction(key);
        const chain = this.table[index];

        if (chain) {
            for (let i = 0; i < chain.length; i++) {
                if (chain[i][0] === key) {
                    chain.splice(i, 1); // Remove this key-value pair
                    this.size--;
                    return true; // Successfully removed
                }
            }
        }
        return false; // Key not found
    }

    // Returns how many key-value pairs are stored
    count() {
        return this.size;
    }
}

// ---------------------------
// Testing the HashTable Class
// ---------------------------
const ht = new HashTable(10);

ht.set("Arjun", 49);
ht.set("Deepak", 40);
ht.set("Sameer", 73);
ht.set("Rajesh", 81);
ht.set("Priya", 90);

// Key "Saurabh" doesn't exist → returns undefined
console.log(ht.get("Sameer")); // 73
