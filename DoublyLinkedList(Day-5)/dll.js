class Node{
    constructor(data, prev=null, next=null){
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        //Link the new node to the last node(tail)
        this.tail.next = newNode;
        newNode.prev = this.tail;
        
        // Update tail
        this.tail = newNode;
    }

    // Add a node at the beginning
    prepend(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        // Link the new node before the current head
        newNode.next = this.head;
        this.head.prev = newNode;
        
        // Update head
        this.head = newNode;
    }

    // Insert after a specific value
    insertAfter(targetData, newData){
        let current = this.head;

        // Traverse the list to find the target node
        while(current){
            if(current.data === targetData){
                const newNode = new Node(newData);

                newNode.next = current.next;
                newNode.prev = current;
                
                if(current.next){
                    current.next.prev = newNode;
                }else{
                    // If inserting after tail, update tail
                    this.tail = newNode;
                }

                current.next = newNode;
                return;
            }
            current = current.next;
        }
        console.log(`Node with value ${targetData} nt found.`);
    }

    // Delete a node by value
     delete(data){
        let current = this.head;

        while(current){
            if(current.data === data){
                // If it's the only node
                if(current === this.head && current === this.tail){
                    this.head = null;
                    this.tail = null;
                }

                // If deleting head
                else if(current === this.head){
                    this.head = current.next;
                    this.head.prev = null;
                }

                // if deleting tail
                else if(current === this.tail){
                    this.tail = current.prev;
                    this.tail.next = null;
                }
                else{
                    // if deleting a middle node
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                return;
            }
            current = current.next;
        }
        console.log(`Nide withvalue ${data} not found.`);
     }

     // 🔵 Display list from head to tail
     printForward(){
        let current = this.head;
        let result = "";

        while(current){
            result += current.data + "⇄";
            current = current.next;
        }
        console.log("Forword:", result + "null");
     }

     // 🟠 Display list from tail to head
     printBackward(){
        let current = this.tail;
        let result = "";

        while(current){
            result += current.data + "⇄";
            current = current.prev;
        }
        console.log("Backward:", result + "null");
        
    }
}

const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.insertAfter(20, 25);

list.printForward();   // Forword: 5⇄10⇄20⇄25⇄30⇄null
list.printBackward();  // Backward: 30⇄25⇄20⇄10⇄5⇄null

list.delete(25);
list.printForward();   // Forword: 5⇄10⇄20⇄30⇄null

