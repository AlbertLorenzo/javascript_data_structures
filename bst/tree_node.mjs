export class treeNode {
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