class treeNode {
    constructor(key) {
        this.key = key;
        this.left = this.right = null;
    }

    getKey() {
        return this.key;
    }

    getLeftChild() {
        return this.left;
    }

    getRightChild() {
        return this.right;
    }

    setRightChild(node) {
        this.right = node;
    }

    setLeftChild(node) {
        this.left = node;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }

    getRoot() {
        return this.root;
    }

    isEmpty() {
        return this.root == null;
    }

    search(key) {
        let current = this.root;
        while (current != null) {
            if (current.getKey() == key) {
                return true;
            }
            current = (key < current.getKey()) ? current.getLeftChild() : current.getRightChild();
        }
        return false;
    }

    insert(key) {
        const newNode = new treeNode(key);
        if (this.isEmpty()) {
            this.root = newNode;
            return true;
        } else {
            let parent = null, current = this.root;
            while (current != null) {
                if (current.getKey() == key) {
                    return false;
                }
                parent = current;
                current = (key < current.getKey()) ? current.getLeftChild() : current.getRightChild();
            }

            if (key < parent.getKey()) {
                parent.setLeftChild(newNode);
            } else {
                parent.setRightChild(newNode);
            }

            return true;
        }
    }

    delete(key) {

    }

    #inorder(node) {
        if (node != null) {
            this.#inorder(node.getLeftChild());
            console.log(node.getKey());
            this.#inorder(node.getRightChild());
        }
    }

    #preorder(node) {
        if (node != null) {
            console.log(node.getKey());
            this.#inorder(node.getLeftChild());
            this.#inorder(node.getRightChild());
        }
    }

    #postorder() {
        if (node != null) {
            this.#inorder(node.getLeftChild());
            this.#inorder(node.getRightChild());
            console.log(node.getKey());
        }
    }

    inorderTraversal() { this.#inorder(this.root) }
    preorderTraversal() { this.#preorder(this.root) }
    postorderTraversal() { this.#postorder(this.root) }
}

const tree = new binarySearchTree();

tree.insert(5);
tree.insert(2);
tree.insert(6);

console.log(tree.search(6));