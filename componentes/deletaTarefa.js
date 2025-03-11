const BotaoDeleta = () => {
    const botaoDeletar = document.createElement("button");
    botaoDeletar.textContent = "Deletar";
    botaoDeletar.classList.add("botao-deletar"); // Você pode ajustar a classe para estilização específica
    botaoDeletar.addEventListener("click", deletarTarefa);
    return botaoDeletar;
  };
  
  function deletarTarefa(evento) {
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();
  }
  
  export default BotaoDeleta;