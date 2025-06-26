class Node {
    constructor(data){
        this.data = data;
        this.leftChild = null;
        this.righttChild =  null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }


    // traversal 

    preorder(root){
    }


    inorder(root){
        if(root===null) return;
        this.inorder(this.root.leftChild);
        console.log(this.root.data);
        this.inorder(this.root.rightChild)
    }
}

