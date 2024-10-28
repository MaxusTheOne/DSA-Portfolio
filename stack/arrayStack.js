class arrayStack {
    constructor() {
        this.items = [];
        this.head = 0
    }

    push(node){
        this.items[this.head++] = node
    }

    pop(){
        return this.items[--this.head]
    }
}