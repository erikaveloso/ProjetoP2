function obterMensagens() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'https://app-p2-aab7c7fdddb8.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    return retorno;
}

// Mensagem

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buttonEnviar").addEventListener("click", function() {

        var mensagem = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            mensagem: document.getElementById("msg").value
        };

        inserirMensagem(mensagem);

        console.log(mensagem);

        document.getElementById("nome").value = '';
        document.getElementById("email").value = '';
        document.getElementById("msg").value = '';

        document.getElementById("mensagemConfirmacao").innerHTML = "Mensagem enviada com sucesso!";
    });
});


function inserirMensagem(mensagem) {

    var inserir = $.ajax({

        url: 'https://app-p2-aab7c7fdddb8.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagem),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
    });
}

// Evento login admin

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buttonLoginAdmin").addEventListener("click", function () {
        
        var objLoginSenha = {
            email: document.getElementById("loginAdmin").value,
            senha: document.getElementById("password").value
        };

        console.log("Dados de login:", objLoginSenha);

        if (validarUsuario(objLoginSenha)) {
            window.location.href = "mensagens.html";
        } else {
            document.getElementById("errorMessage").innerHTML = "E-mail e Senha inválidos";
            document.getElementById("errorMessage").style.display = "block";
            
            document.getElementById("loginAdmin").value = '';
            document.getElementById("password").value = '';
        }
    });
});


function validarUsuario(objLoginSenha) {
   
    var retorno = false;

    var validacao = $.ajax({
        url: 'https://app-p2-aab7c7fdddb8.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
                },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function(){
        return retorno;
    });

    validacao.done(function(data) {
        retorno = data;
    });

    return retorno;
}