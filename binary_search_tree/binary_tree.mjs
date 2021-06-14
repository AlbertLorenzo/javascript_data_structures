import { treeNode } from './tree_node.mjs';

export class binarySearchTree {
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
        let parent = null, current = this.root;

        while (current != null && current.getKey() != key) {
            parent = current;
            current = (key < current.getKey()) ? current.getLeftChild() : current.getRightChild();
        }

        if (current == null) {
            return false;
        }

        if (current.getRightChild() == null && current.getLeftChild() == null) {
            console.log(current);
            console.log(parent);
            if (parent != null) {
                if (parent.getLeftChild().getKey() == current.getKey()) {
                    parent.setRightChild(null);
                } else {
                    parent.setLeftChild(null);
                }
            } else {
                this.root = null;
            }
            return true;
        }

        // TODO        
        


    }

    externalPower() {
        let sum = 0, level = 0, node, queue = new Array();
        queue.push(this.root);

        while (queue.length != 0) {
            let count = queue.length;
            while (count > 0) {
                node = queue.shift();

                if (node.isLeaf()) {
                    sum += 2**level;
                }

                if (node.getLeftChild()) {
                    queue.push(node.getLeftChild());
                }

                if (node.getRightChild()) {
                    queue.push(node.getRightChild())
                }
                count--;
            }
            level++;
        }
        console.log(`Suma potencia externa: ${sum}`);
    }

    #levelorder() {
        let node;
        let queue = new Array();
        queue.push(this.root);

        while (queue.length != 0) {
            node = queue.shift();
            console.log(node.getKey());

            if (node.getLeftChild() != null) {
                queue.push(node.getLeftChild());
            }

            if (node.getRightChild() != null) {
                queue.push(node.getRightChild());
            }
        }
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
            this.#preorder(node.getLeftChild());
            this.#preorder(node.getRightChild());
        }
    }

    #postorder() {
        if (node != null) {
            this.#postorder(node.getLeftChild());
            this.#postorder(node.getRightChild());
            console.log(node.getKey());
        }
    }

    inorderTraversal() { this.#inorder(this.root) }
    preorderTraversal() { this.#preorder(this.root) }
    postorderTraversal() { this.#postorder(this.root) }
    levelOrderTraversal() { this.#levelorder() }
}