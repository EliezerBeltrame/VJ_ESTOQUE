const usuario = localStorage.getItem('usuarioLogado');

const tabela = document.getElementById('tabelaProdutos');

let produtos = JSON.parse(
    localStorage.getItem('produtos_' + usuario)
) || [];

mostrarProdutos();

function cadastrarProduto(){

    const nome = document.getElementById('nome').value;

    const categoria = document.getElementById('categoria').value;

    const quantidade = parseInt(
        document.getElementById('quantidade').value
    );

    const minimo = parseInt(
        document.getElementById('minimo').value
    );

    if(
        nome === '' ||
        categoria === '' ||
        isNaN(quantidade) ||
        isNaN(minimo)
    ){

        alert('Preencha todos os campos');
        return;
    }

    const produto = {
        nome:nome,
        categoria:categoria,
        quantidade:quantidade,
        minimo:minimo
    };

    produtos.push(produto);

    localStorage.setItem(
        'produtos_' + usuario,
        JSON.stringify(produtos)
    );

    mostrarProdutos();

    limparCampos();

    alert('Produto cadastrado!');
}

function mostrarProdutos(){

    tabela.innerHTML = '';

    produtos.forEach((produto) => {

        tabela.innerHTML += `

        <tr>
            <td>${produto.nome}</td>
            <td>${produto.categoria}</td>
            <td>${produto.quantidade}</td>
            <td>${produto.minimo}</td>
        </tr>

        `;
    });
}

function limparCampos(){

    document.getElementById('nome').value = '';

    document.getElementById('categoria').value = '';

    document.getElementById('quantidade').value = '';

    document.getElementById('minimo').value = '';
}

function voltar(){

    window.location.href = 'index.html';
}