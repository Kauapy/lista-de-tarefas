import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

function criarTarefa(evento) {
  evento.preventDefault();

  const input = document.querySelector('[data-form-input]');
  const lista = document.querySelector('[data-list]');
  const valor = input.value.trim();

  if (!valor) return;

  const tarefa = document.createElement("li");
  tarefa.classList.add('task');

  const conteudo = document.createElement("p");
  conteudo.textContent = valor;

  tarefa.appendChild(conteudo);
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  lista.appendChild(tarefa);
  input.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const novaTarefa = document.querySelector('[data-form-button]');
  if (novaTarefa) {
    novaTarefa.addEventListener('click', criarTarefa);
  } else {
    console.error("Botão não encontrado");
  }
});
