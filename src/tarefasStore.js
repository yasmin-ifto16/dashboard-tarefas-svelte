import { writable } from 'svelte/store';

// 1. Criamos a store reativa contendo a lista inicial de tarefas
export const tarefas = writable([
  { id: 1, texto: 'Estudar arquitetura de microsserviços', concluida: true },
  { id: 2, texto: 'Codificar o mini-SPA em Svelte', concluida: false }
]);

// 2. Simulador de consumo de Microsserviço em Tempo Real
export function iniciarConexaoMicrosservico() {
  const tarefasFalsas = [
    'Subir container Docker da API',
    'Rodar testes unitários no pipeline',
    'Apresentar trabalho de Svelte na faculdade'
  ];

  let index = 0;

  // Envia um evento em tempo real a cada 6 segundos simulando push do microsserviço
  const intervalo = setInterval(() => {
    if (index < tarefasFalsas.length) {
      const novaTarefa = {
        id: Date.now(),
        texto: `${tarefasFalsas[index]} (Microsserviço v1)`,
        concluida: false
      };

      // Corrigido aqui: mudamos para 'lista' sem espaços ou letras maiúsculas quebradas
      tarefas.update((lista) => [novaTarefa, ...lista]);
      index++;
    } else {
      clearInterval(intervalo);
    }
  }, 6000);
}