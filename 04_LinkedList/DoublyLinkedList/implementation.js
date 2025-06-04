class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLL{

    constructor(){
        this.head=null;
    }

    insertAtBeginning(val){
        const temp = new Node(val);
        if(!this.head) {
            this.head=temp;
            return;
        }
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }

}

let l = new DoublyLL();
l.insertAtBeginning(1);
l.insertAtBeginning(2);

console.log(l.head.value);
console.log(l.head.next.prev.value);

