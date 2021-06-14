export class listNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    
    getData() {
        return this.data;
    }

    getNext() {
        return this.next;
    }

    setNext(node) {
        this.next = node;
    }

    setData(data) {
        this.data = data;
    }

}