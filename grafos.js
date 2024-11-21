class Grafo {
    constructor()
    {
        this.adjacencia = {};
    }

    adicionarVertice(vertice)
    {
        if (!this.adjacencia[vertice])
        {
            this.adjacencia[vertice] = [];
        }
    }

    adicionarAresta(vertice1, vertice2)
    {
        if (!this.adjacencia[vertice1])
        {
            this.adicionarVertice(vertice1);
        }

        if (!this.adjacencia[vertice2])
        {
            this.adicionarVertice(vertice2);
        }

        this.adjacencia[vertice1].push(vertice2);
        this.adjacencia[vertice2].push(vertice1);
    }

    removerAresta(vertice1, vertice2)
    {
        this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v !== vertice2);
        this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v !== vertice1);
    }

    removerVertice(vertice)
    {
        while (this.adjacencia[vertice]?.length)
        {
            const adjacente = this.adjacencia[vertice].pop();
            this.removerAresta(vertice, adjacente);
        }

        delete this.adjacencia[vertice];
    }

    imprimirGrafo() {
        for (let vertice in this.adjacencia)
        {
            console.log(`${vertice} -> ${this.adjacencia[vertice].join(', ')}`);
        }
    }
}

// ===========================

const meuGrafo = new Grafo();
meuGrafo.adicionarVertice('A');
meuGrafo.adicionarAresta('A', 'B');
meuGrafo.adicionarAresta('A', 'C');
meuGrafo.adicionarAresta('B', 'D');
meuGrafo.imprimirGrafo();