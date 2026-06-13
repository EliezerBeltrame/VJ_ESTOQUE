const modal = document.getElementById('modal');
const lista = document.getElementById('listaColaboradores');
function abrirModal(){
    modal.style.display = 'flex';
}

function fecharModal(){
    modal.style.display = 'none';
}

function cadastrarColaborador(){
    const nome = document.getElementById('nome').value.trim();
    const cargo = document.getElementById('cargo').value;
    if(nome === ''){
        alert('Digite o nome do colaborador');
        return;
    }

    let classeCargo = 'estoque';
    if(cargo === 'Administrador'){
        classeCargo = 'admin';
    }

    if(cargo === 'Gerente'){
        classeCargo = 'gerente';
    }

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="icone">
            👤
        </div>
        <div>
            <h2>${nome}</h2>
            <span class="cargo ${classeCargo}">
                ${cargo}
            </span>
        </div>
    `;

    lista.appendChild(card);
    fecharModal();
    document.getElementById('nome').value = '';
    document.getElementById('cargo').value = 'Administrador';
}