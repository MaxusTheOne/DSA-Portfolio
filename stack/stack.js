import Node from "../node.js";

export default class Stack {

    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const node = new Node(data);
        if (this.size === 0) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.size++;
    }

    pop() {
        if (this.size === 0) {
            return null;
        }
        const data = this.top.data;
        this.top = this.top.next;
        this.size--;
        return data;
    }

    peek() {
        return this.top.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    size() {
        return this.size;
    }

    toArray() {
        const arr = [];
        let current = this.top;
        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
}