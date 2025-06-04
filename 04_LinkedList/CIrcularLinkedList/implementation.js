class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class CircularLL{

    constructor(){
        this.head=null;
        this.tail=null;
    }

    insertAtBeginning(val){
        const temp = new Node(val);
        if(!this.head && !this.tail) {
            this.head=temp;
            this.head.next = this.head;
            this.head.prev = this.head;
            return;
        }
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
        while(head){
            this.head = this.head.next;
        }
        temp.prev = this.head;
        this.head.next = temp;
    }

    insertAtEnd(data) {
        const temp = new Node(data);
        if (!this.head) {
            this.head = temp;
            this.head.next = this.head;
            this.head.prev = this.head;
            return;
        } else {
            let temp2 = this.head;
            while (temp2.next != null) {
                temp2 = temp2.next;
            }
            temp2.next = temp;
            temp.prev = temp2;
            temp.next = this.head;
            this.head.prev = temp;
            

        }
    }

}



