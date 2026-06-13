const usuario =
localStorage.getItem('usuarioLogado');

const tabela =
document.getElementById('estoqueTabela');

let produtos =
JSON.parse(
    localStorage.getItem(
        'produtos_' + usuario
    )
) || [];

mostrarProdutos();

function mostrarProdutos(){

    tabela.innerHTML = '';

    produtos.forEach((produto, index) => {

        let status = 'ok';
        let texto = 'Em estoque';

        if(produto.quantidade < produto.minimo){

            status = 'baixo';
            texto = 'Baixo';
        }

        tabela.innerHTML += `

        <tr>

            <td>${produto.nome}</td>

            <td>${produto.categoria}</td>

            <td>${produto.quantidade}</td>

            <td>

                <span class="${status}">
                    ${texto}
                </span>

            </td>

            <td>

                <button
                class="editar"
                onclick="editarProduto(${index})">

                    Editar

                </button>

                <button
                class="excluir"
                onclick="excluirProduto(${index})">

                    Excluir

                </button>

            </td>

        </tr>

        `;
    });
}

function excluirProduto(index){

    const confirmar =
    confirm('Deseja excluir o produto?');

    if(confirmar){

        produtos.splice(index, 1);

        localStorage.setItem(
            'produtos_' + usuario,
            JSON.stringify(produtos)
        );

        mostrarProdutos();
    }
}

function editarProduto(index){

    const novoNome = prompt(
        'Novo nome:',
        produtos[index].nome
    );

    if(novoNome == null){

        return;
    }

    produtos[index].nome = novoNome;

    localStorage.setItem(
        'produtos_' + usuario,
        JSON.stringify(produtos)
    );

    mostrarProdutos();
}

const busca =
document.querySelector('input');

busca.addEventListener('keyup', () => {

    const valor =
    busca.value.toLowerCase();

    const linhas =
    document.querySelectorAll('tbody tr');

    linhas.forEach((linha) => {

        linha.style.display =

        linha.textContent
        .toLowerCase()
        .includes(valor)

        ? ''

        : 'none';
    });
});

const vendas =
JSON.parse(
    localStorage.getItem(
        'vendas_' + usuario
    )
) || [];

document.getElementById(
    'totalVendas'
).innerHTML = vendas.length;

const nomeUsuario =
localStorage.getItem(
    'nomeUsuario'
);

document.getElementById(
    'nomeUsuario'
).innerHTML = nomeUsuario;

function sair(){

    window.location.href =
    'login.html';
}