function login(){

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuario = usuarios.find(

        usuario =>

        usuario.email === email &&

        usuario.senha === senha
    );

    if(usuario){

        localStorage.setItem(
            'usuarioLogado',
            usuario.email
        );

        localStorage.setItem(
            'nomeUsuario',
            usuario.nome
        );

        window.location.href = 'index.html';

    }else{

        alert('E-mail ou senha incorretos');
    }
}