import Node from "../node.js";

export default class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data) {
        const node = new Node(data);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    dequeue() {
        if (this.size === 0) {
            return null;
        }
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }

    size() {
        return this.size;
    }

    toArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
}