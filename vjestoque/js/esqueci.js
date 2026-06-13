function redefinirSenha(){

    const email = document.getElementById('email').value;
    const novaSenha = document.getElementById('novaSenha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const index = usuarios.findIndex(
        usuario => usuario.email === email
    );

    if(index === -1){

        alert('E-mail não encontrado');
        return;
    }

    if(novaSenha === ''){

        alert('Digite a nova senha');
        return;
    }

    if(novaSenha !== confirmarSenha){

        alert('As senhas não coincidem');
        return;
    }

    usuarios[index].senha = novaSenha;

    localStorage.setItem(
        'usuarios',
        JSON.stringify(usuarios)
    );

    alert('Senha alterada com sucesso');

    window.location.href = 'login.html';
}