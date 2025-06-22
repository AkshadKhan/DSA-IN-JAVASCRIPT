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

    insertAtEnd(data) {
        const temp = new Node(data);
        if (!this.head) {
            this.head = temp;
        } else {
            let temp2 = this.head;
            while (temp2.next != null) {
                temp2 = temp2.next;
            }
            temp2.next = temp;
            temp.prev = temp2;
            

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
                temp.prev = temp2;
                temp.next = temp3;
                temp3.prev = temp;
            }
        }
    }

    print(){
        let temp = this.head;
        while(temp){
            console.log(temp.value);
            temp = temp.next;
        }
    }
}



