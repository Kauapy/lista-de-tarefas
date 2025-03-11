const BotaoConclui = () => { 
    const botaoConclui = document.createElement("button");
    botaoConclui.textContent = "Concluir"; 
    botaoConclui.classList.add("botao-concluir"); 
  
    botaoConclui.addEventListener("click", (evento) => {
      concluirTarefa(evento);
    });
  
    return botaoConclui;
  };
  
  function concluirTarefa(evento) {
    const botaoConclui = evento.target;
    const tarefaCompleta = botaoConclui.parentElement; 
  
    if (tarefaCompleta) {
      tarefaCompleta.classList.toggle("done"); 
    }
  }
  
  export default BotaoConclui;
  