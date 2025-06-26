class Stack {
    constructor() {
        this.arr = [];
        this.limit = 10;
        this.front = -1;
        this.rear = -1;
    }

    isEmpty() {
        if (this.front === -1) {
            return 1
        } else {
            return 0;
        }
    }

    enqueue(data) {
        if (this.isEmpty()) {
            this.arr[++this.rear] = data;
            this.front = 0;
        } else if (this.rear === this.limit - 1) {
            console.log("Queue is Full");
        } else {
            this.arr[++this.rear] = data;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is already empty");
            return -1;
        } 
        if(this.front === this.rear){
            this.front = this.rear = -1;
        } else {
            this.front++;
        }
    }


    print(){
        for(let i=this.front;i<=this.rear;i++){
            console.log(this.arr[i]);
        }
    }

}


let s = new Stack();
s.enqueue(1);
// console.log(s.front)
s.enqueue(2);
s.enqueue(3);
s.enqueue(4);
s.enqueue(5);

s.dequeue()
s.dequeue()
s.dequeue()
s.dequeue()
s.dequeue()
s.dequeue()
s.enqueue(1);
s.enqueue(1);
s.print();