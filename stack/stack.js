
class stack {
    push(node){
        node.next = head
        head = node

    }

    pop(){
        const node = head
        head = head.next
        return node
    }

    peek(){
        return head
    }
}

