// Módulo de banco de dados em memória
const Banco = (function () {
    let produtos = [];
    let proximoId = 1;

    // Funções internas
    function encontrarProdutoPorId(id) {
        return produtos.find(produto => produto.id === id);
    }

    function validarProduto(produto) {
        if (!produto.descricao || produto.descricao.trim() === '') {
            throw new Error('Descrição é obrigatória');
        }

        if (produto.preco === undefined || produto.preco === null || produto.preco < 0) {
            throw new Error('Preço deve ser um número não negativo');
        }

        if (produto.estoque === undefined || produto.estoque === null || produto.estoque < 0) {
            throw new Error('Estoque deve ser um número não negativo');
        }
    }

    // Funções expostas
    return {
        cadastrar: function (produto) {
            validarProduto(produto);

            const novoProduto = {
                id: proximoId++,
                descricao: produto.descricao.trim(),
                preco: parseFloat(produto.preco),
                estoque: parseInt(produto.estoque)
            };

            produtos.push(novoProduto);
            return novoProduto.id;
        },

        consultar: function () {
            return [...produtos];
        },

        consultarPorId: function (id) {
            const produto = encontrarProdutoPorId(id);
            if (!produto) {
                throw new Error(`Produto com ID ${id} não encontrado`);
            }
            return { ...produto };
        },

        editar: function (id, novosDados) {
            const produto = encontrarProdutoPorId(id);
            if (!produto) {
                throw new Error(`Produto com ID ${id} não encontrado`);
            }

            // Validar dados parciais
            if (novosDados.descricao !== undefined && novosDados.descricao.trim() === '') {
                throw new Error('Descrição não pode ser vazia');
            }

            if (novosDados.preco !== undefined && novosDados.preco < 0) {
                throw new Error('Preço deve ser um número não negativo');
            }

            if (novosDados.estoque !== undefined && novosDados.estoque < 0) {
                throw new Error('Estoque deve ser um número não negativo');
            }

            // Atualizar produto
            if (novosDados.descricao !== undefined) {
                produto.descricao = novosDados.descricao.trim();
            }

            if (novosDados.preco !== undefined) {
                produto.preco = parseFloat(novosDados.preco);
            }

            if (novosDados.estoque !== undefined) {
                produto.estoque = parseInt(novosDados.estoque);
            }

            return true;
        },

        excluir: function (id) {
            const index = produtos.findIndex(produto => produto.id === id);
            if (index === -1) {
                throw new Error(`Produto com ID ${id} não encontrado`);
            }

            produtos.splice(index, 1);
            return true;
        },

        // Função para limpar banco (apenas para testes)
        limpar: function () {
            produtos = [];
            proximoId = 1;
        }
    };
})();

// Exportar para uso em Node.js (se aplicável)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Banco;
}