function enviarMensagem() {
    let input = document.getElementById("userInput");
    let mensagem = input.value;
    
    if (mensagem.trim() === "") return;

    let chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<p><b>Você:</b> ${mensagem}</p>`;

    let resposta = gerarResposta(mensagem);
    chatbox.innerHTML += `<p><b>Bot:</b> ${resposta}</p>`;

    input.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}

function gerarResposta(mensagem) {
    mensagem = mensagem.toLowerCase();

    if (mensagem.includes("oi") || mensagem.includes("olá")) {
        return "Oi! Como posso te ajudar?";
    } else if (mensagem.includes("tudo bem")) {
        return "Estou bem, obrigado por perguntar!";
    } else {
        return "Desculpe, não entendi.";
    }
}
