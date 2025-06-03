// JS code to create a linked list and insert a new node at the end

class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

class LinkedList {


    // constructor to initialise head
    constructor() {
        this.head = null;
    }


    // deleting head
    shift(){
        if(!this.head) return;
        else this.head = this.head.next;
    }
    

    // deleting last node
    

    pop(){
        if(!this.head) return;
        let temp = this.head;
        while(temp.next.next){
            temp = temp.next;
        }

        temp.next=null;    
    }


    // deleting at a certain position
    
    
   delete(pos){
    if(pos===1){
        if(!this.head) return;
        else this.head = this.head.next;
    }
    else {
        let temp = this.head;
        while(pos!=2 && !temp.next){
            temp=temp.next;
            pos--;
        }
        if(pos===2){
            const temp2 = temp.next.next;
            temp.next=temp2;
        }
        

    }
   }



    // code to insert at beggining of linked list
    insertAtBeggining(data) {
        const temp = new node(data);
        // temp.data = data;
        temp.next = this.head;
        this.head = temp;
    }


    // inserting at the end of linkedlist
    insertAtEnd(data) {
        const temp = new node(data);
        if (!this.head) {
            this.head = temp;
        } else {
            let temp2 = this.head;
            while (temp2.next != null) {
                temp2 = temp2.next;
            }
            temp2.next = temp;
        }
    }

    insertAtPosition(pos, data) {
        let temp = new node(data);
        if (pos === 1) this.insertAtBeggining(data);
        else {
            let temp2 = this.head;
            while (pos != 2 && temp2.next != null) {
                temp2 = temp2.next;
                pos--;
            }
            if (pos != 2) return;
            else {
                let temp3 = temp2.next;
                temp2.next = temp;
                temp.next = temp3;
            }
        }
    }


    // printing each and every node
    print() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

}

const l = new LinkedList();

l.insertAtBeggining(10);
l.insertAtBeggining(20);
l.insertAtBeggining(30);
l.insertAtBeggining(40);
l.insertAtBeggining(50);

// l.insertAtEnd(5);
// l.insertAtEnd(5);
l.insertAtEnd(5);
l.insertAtPosition(4,25);

l.print();

l.shift();


console.log(" \n")

l.print();

l.pop();

console.log("\n")

l.delete(0);

l.print();




