class Stack {
    constructor() {
        this.items = [];
    }
    //pushes new element on top
    push(element) {
        this.items.push(element);
    }
    //removes top most element 
    pop() {
        if (this.isEmpty())
            return undefined;
        return this.items.pop();
    }
    //returns the top most element
    peek() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.items.length - 1];
    }
    //returns true if empty
    isEmpty() {
        return this.items.length == 0;
    }
    //returns the size of stack
    size() {
        return this.items.length;
    }
}
/*****************STACK Data Structure End****************/




/**
 * @param {string} exp
 * @return {number}
 */


// TODO: Implement this method
function postfixExpression(exp) {
    let stack = new Stack();
    let arr = exp.split(' ');
    console.log(arr)
    for (let s of arr) {
        let n1, n2;
        switch (s) {
            case '+':
                n1 = stack.pop();
                n2 = stack.pop();
                console.log("added",n1,n2);
                stack.push(n1 + n2)
                break;
            case '*':
                n1 = stack.pop();
                n2 = stack.pop();
                console.log(n1*n2);
                stack.push(n1 * n2)
                break;
           
            case '-':
                n1 = stack.pop();
                n2 = stack.pop();
                console.log(n2-n1);
                stack.push(n2 - n1)
                break;
            default:
                stack.push(Number(s));
                break
        }
    }
   console.log(stack); 
}

postfixExpression("2 3 +")