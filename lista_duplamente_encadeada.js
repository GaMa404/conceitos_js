class Node {
    constructor(value)
    {
        this.value = value;
        this.next = null; // Próximo nó
        this.prev = null; // Nó anterior
    }
}

class DoublyLinkedList {
    constructor()
    {
        this.head = null; // Primeiro nó
        this.tail = null; // Último nó
        this.length = 0;
    }

    // Adiciona um nó ao fim da lista
    append(value)
    {
        const newNode = new Node(value);

        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    // Adiciona um nó ao início da lista
    prepend(value)
    {
        const newNode = new Node(value);

        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    // Remove o nó do final da lista
    removeLast()
    {
        if(!this.tail) return null;

        const removedNode = this.tail;
        if(this.tail === this.head)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return removedNode.value;
    }

    // Remove o nó do início da lista
    removeFirst()
    {
        if(!this.head) return null;

        const removeNode = this.head;
        if(this.head === this.tail)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return removeNode.value;
    }

    // Percorre a lista do início ao fim
    traverse()
    {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

    // Percorre a lista do fim ao início
    traverseReverse()
    {
        let current = this.tail;
        while(current)
        {
            console.log(current.value);
            current = current.prev;
        }
    }
}

// ============================

let list = new DoublyLinkedList();

list.append(20);
list.append(30);
list.append(40);

console.log("Início ao fim");
list.traverse();

list.append(5);

console.log("Início após adicionar");
list.traverse();

list.removeLast();
console.log("Percorrendo após remover ultimo nó");
list.traverse();

list.removeFirst();
console.log("Percorrendo após remover o primeiro nó");
list.traverse();

console.log("Percorrendo em ordem inversa");
list.traverseReverse();
