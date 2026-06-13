const modal =
document.getElementById('modal');

const lista =
document.getElementById(
    'listaFornecedores'
);

function abrirModal(){

    modal.style.display = 'flex';
}

function fecharModal(){

    modal.style.display = 'none';
}

function cadastrarFornecedor(){

    const nome =
    document.getElementById('nome').value;

    const produto =
    document.getElementById('produto').value;

    const telefone =
    document.getElementById('telefone').value;

    if(
        nome === '' ||
        produto === '' ||
        telefone === ''
    ){

        alert('Preencha todos os campos');

        return;
    }

    lista.innerHTML += `

    <tr>

        <td>${nome}</td>

        <td>${produto}</td>

        <td>${telefone}</td>

        <td>

            <button
            class="excluir"
            onclick="excluirFornecedor(this)">

                Excluir

            </button>

        </td>

    </tr>

    `;

    fecharModal();

    document.getElementById('nome').value = '';

    document.getElementById('produto').value = '';

    document.getElementById('telefone').value = '';
}

function excluirFornecedor(botao){

    const confirmar =
    confirm(
        'Deseja excluir o fornecedor?'
    );

    if(confirmar){

        botao.parentElement
        .parentElement.remove();
    }
}

function voltar(){

    window.location.href =
    'index.html';
}