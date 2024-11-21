class Node {
    constructor(value)
    {
        this.value = value;
        this.left = null; // Nó filho à esquerda
        this.right = null; // Nó filgo à direita
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Inserir valor na árvore
    insert(value)
    {
        const newNode = new Node(value);
        if(this.root === null)
        {
            this.root = newNode;
        }
        else
        {
            this._insertNode(this.root, newNode);
        }
    }

    // Método auxiliar para encontrar a posição correta e inserir na árvore
    _insertNode(node, newNode)
    {
        if(newNode.value < node.value)
        {
            if(node.left === null)
            {
                node.left = newNode;
            }
            else
            {
                this._insertNode(node.left, newNode);
            }
        }
        else
        {
            if(node.right === null)
            {
                node.right = newNode;
            }
            else
            {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Percurso em ordem: visita a subárvore a esquerda, o nó atual e a subárvore a direita
    inOrder(node = this.root)
    {
        if(node !== null)
        {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    // Percurso pré-ordem: visita o nó atual, a subárvore à esquerda e a subárvore à direita    
    preOrder(node = this.root)
    {
        if(node !== null)
        {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // Percurso pós-ordem: visita a subárvore à esquerda, a subárvore à direita e o nó atual
    postOrder(node = this.root)
    {
        if(node !== null)
        {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }

    // Buscar um valor na árvore
    search(value)
    {
        return this._searchNode(this.root, value);
    }

    // Método auxiliar para realizar a busca recursivamente
    _searchNode(node, value)
    {
        if(node === null)
        {
            return false;
        }

        if(value === node.value)
        {
            return true;
        }
        else if(value < node.value)
        {
            return this._searchNode(node.left, value);
        }
        else
        {
            return this._searchNode(node.right, value);
        }
    }

    // Método para remover um valor específico
    remove(value)
    {
        this.root = this._removeNode(this.root, value);
    } 

    // Método auxiliar para remover o nó recursivamente
    _removeNode(node, value)
    {
        if(node === null)
        {
            return null;
        }

        if(value < node.value)
        {
            node.left = this._removeNode(node.left, value);
            return node;
        }
        else if(value > node.value)
        {
            node.right = this._removeNode(node.right, value);
            return node;
        }
        else
        {
            if(node.left === null && node.right === null)
            {
                node = null;
                return node;
            }

            if(node.left === null)
            {
                node = node.right;
                return node;
            }
            else if(node.right === null)
            {
                node = node.left;
                return node;
            }

            const aux = this._findMinNode(node.right);
            node.value = aux.value;
            node.right = this._removeNode(node.right, aux.value);
            return node;
        }
    }

    // Método auxiliar para encontrar o nó com menor valor
    _findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

// ===============================

const tree = new BinaryTree();

tree.insert(15);
tree.insert(10);
tree.insert(20);
tree.insert(8);
tree.insert(12);
tree.insert(18);
tree.insert(25);

console.log("Percurso em ordem");
tree.inOrder();

console.log("Buscar valor 18");
console.log(tree.search(18) ? "Encontrado" : "Não encontrado");

console.log("Remover valor 10");
tree.remove(10);
tree.inOrder();