const criarTarefa = (evento) => { 
    evento.preventDefault();

    const input = document.querySelector('[data-form-input]');
    const lista = document.querySelector('[data-list]');
    const valor = input.value;

    const conteudo = document.createElement("p");
    conteudo.textContent = valor; 

    const tarefa = document.createElement("li");
    tarefa.classList.add('task');

    tarefa.appendChild(conteudo); 
    tarefa.appendChild(BotaoConclui()); 

    lista.appendChild(tarefa);

    input.value = ""; 
}

const novaTarefa = document.querySelector('[data-form-button]'); 
novaTarefa.addEventListener('click', criarTarefa);

const BotaoConclui = () => { 
    const botaoConclui = document.createElement("button");
    botaoConclui.textContent = "Concluir"; // Adicionando texto ao botão
    botaoConclui.classList.add("form-button"); // Adicionando classe 

    botaoConclui.addEventListener("click", function() {
        console.log(concluirTarefa())
    });

    return botaoConclui;
}


const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement();

    tarefaCompleta.classList.toggle("done");
}