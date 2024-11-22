document.addEventListener("DOMContentLoaded", function() {
    exibirMensagens();
});

function exibirMensagens() {

    const mensagens = obterMensagens();
    console.log(mensagens);
    const tabelaBody = document.querySelector('#tabelaMensagens tbody');

    if (!mensagens || mensagens.length === 0) {
        tabelaBody.innerHTML = "<tr><td colspan='3'>Nenhuma mensagem encontrada.</td></tr>";
        return;
    }

    tabelaBody.innerHTML = mensagens.map(mensagem => `
        <tr>
            <td>${mensagem.nome || "Nome indisponível"}</td>
            <td>${mensagem.email || "Email indisponível"}</td>
            <td>${mensagem.mensagem || "Mensagem indisponível"}</td>
        </tr>
    `).join("");
}