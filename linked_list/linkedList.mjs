import { listNode } from './listNode.mjs';

export class linkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.head == null;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    add(data) {
        let newNode = new listNode(data);
        if (this.isEmpty()) {
            this.head = this.tail = newNode;
            return true;
        } else {
            let tailNode = this.tail;
            tailNode.setNext(newNode);
            this.tail = newNode;
        }
    }

    search(data) {
        let node = this.head;
        while (node.getNext() != null) {
            if (node.getData() == data || node.getNext().getData() == data) {
                return true;
            }
            node = node.getNext();
        }
        return false;
    }

    
}