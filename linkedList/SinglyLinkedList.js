class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    add(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;

        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }

    }

    remove(data){
        if(this.head === null){
            return;
        }
        if(this.head.value === data){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next !== null){
            if(current.next.value === data){
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }

    }

    getFirst(){

        if (this.next === null) {
            return this.head;
        }else {
            return this.next.getFirst();
        }

    }

    getLast(){

    }

    getFirstNode(){

    }

    getNodeWith(data){

    }

    removeFirstNode(){

    }

}
export default SinglyLinkedList;