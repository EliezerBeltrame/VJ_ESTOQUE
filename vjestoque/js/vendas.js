const usuario =
    localStorage.getItem('usuarioLogado');

const tabela =
    document.getElementById('tabelaVendas');

let produtos =
    JSON.parse(
        localStorage.getItem(
            'produtos_' + usuario
        )
    ) || [];

let vendas =
    JSON.parse(
        localStorage.getItem(
            'vendas_' + usuario
        )
    ) || [];

mostrarProdutos();

mostrarVendas();

function mostrarProdutos() {

    const select =
        document.getElementById('produto');

    select.innerHTML =
        '<option value="">Selecione</option>';

    produtos.forEach((produto, index) => {

        select.innerHTML += `

<option value="${index}">
${produto.nome}
</option>

`;

    });
}

function registrarVenda() {

    const indexProduto =
        document.getElementById('produto').value;

    const quantidadeVenda =
        parseInt(
            document.getElementById('quantidade').value
        );

    if (
        indexProduto === '' ||
        quantidadeVenda <= 0
    ) {

        alert('Preencha os campos');

        return;
    }

    let produto =
        produtos[indexProduto];

    if (
        quantidadeVenda > produto.quantidade
    ) {

        alert('Estoque insuficiente');

        return;
    }

    produto.quantidade =
        produto.quantidade - quantidadeVenda;

    const venda = {

        produto: produto.nome,

        quantidade: quantidadeVenda
    };

    vendas.push(venda);

    localStorage.setItem(
        'vendas_' + usuario,
        JSON.stringify(vendas)
    );

    localStorage.setItem(
        'produtos_' + usuario,
        JSON.stringify(produtos)
    );

    mostrarVendas();

    document.getElementById(
        'quantidade'
    ).value = '';

    alert('Venda registrada');
}

function mostrarVendas() {

    tabela.innerHTML = '';

    vendas.forEach((venda) => {

        const produtoEncontrado =
            produtos.find(

                produto =>
                    produto.nome === venda.produto
            );

        let estoqueAtual = 0;

        if (produtoEncontrado) {

            estoqueAtual =
                produtoEncontrado.quantidade;
        }

        tabela.innerHTML += `

<tr>

<td>
${venda.produto}
</td>

<td>
${venda.quantidade}
</td>

<td>
${estoqueAtual}
</td>

</tr>

`;

    });
}

function voltar() {

    window.location.href =
        'index.html';
}