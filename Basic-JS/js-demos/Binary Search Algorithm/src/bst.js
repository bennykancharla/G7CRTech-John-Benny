class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
 
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
 
    isEmpty() {
        return this.root === null;
    }
 
    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
 
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else if(newNode.value > root.value) {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
 
    search(root, value) {
        if (!root) {
            return false;
        } else if (root.value === value) {
            return true;
        } else if (value < root.value) {
            return this.search(root.left, value);
        } else {
            return this.search(root.right, value);
        }
    }
 
    // Pre-order traversal: root -> left -> right
    preOrder(root, result = []) {
        if (root) {
            result.push(root.value);
            this.preOrder(root.left, result);
            this.preOrder(root.right, result);
        }
        return result;
    }
 
    // In-order traversal: left -> root -> right
    inOrder(root, result = []) {
        if (root) {
            this.inOrder(root.left, result);
            result.push(root.value);
            this.inOrder(root.right, result);
        }
        return result;
    }
 
    // Post-order traversal: left -> right -> root
    postOrder(root, result = []) {
        if (root) {
            this.postOrder(root.left, result);
            this.postOrder(root.right, result);
            result.push(root.value);
        }
        return result;
    }
}
 


module.exports.BinarySearchTree = BinarySearchTree;