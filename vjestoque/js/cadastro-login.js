function cadastrar(){

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if(nome === '' || email === '' || senha === ''){

        alert('Preencha todos os campos');
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const existe = usuarios.find(
        usuario => usuario.email === email
    );

    if(existe){

        alert('Esse e-mail já existe');
        return;
    }

    const novoUsuario = {
        nome:nome,
        email:email,
        senha:senha
    };

    usuarios.push(novoUsuario);

    localStorage.setItem(
        'usuarios',
        JSON.stringify(usuarios)
    );

    alert('Conta criada com sucesso');

    window.location.href = 'login.html';
}