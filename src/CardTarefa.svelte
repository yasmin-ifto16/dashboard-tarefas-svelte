<script>
  // Importando recursos nativos de animação do Svelte
  import { fade, fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { tarefas } from './tarefasStore.js';

  // Recebe o objeto da tarefa através de propriedades (props)
  export let item;

  function alternarStatus() {
    tarefas.update(lista => 
      lista.map(t => t.id === item.id ? { ...t, concluida: !t.concluida } : t)
    );
  }

  function remover() {
    tarefas.update(lista => lista.filter(t => t.id !== item.id));
  }
</script>

<!-- 
  animate:flip reordena os itens suavemente se a lista mudar.
  in:fly faz a tarefa entrar voando de lado.
  out:fade faz a tarefa sumir com esmaecimento.
-->
<!-- Removemos o animate:flip daqui para não dar conflito com a estrutura do loop -->
<div 
  class="card {item.concluida ? 'concluida' : ''}"
  in:fly={{ x: -200, duration: 500 }}
  out:fade={{ duration: 300 }}
>
  <div class="conteudo">
    <input type="checkbox" checked={item.concluida} on:change={alternarStatus} />
    <span>{item.texto}</span>
  </div>
  <button on:click={remover} class="btn-deletar">🗑️</button>
</div>

<style>
  .card {
    background: #ffffff;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border-left: 5px solid #ff3e00;
    transition: all 0.3s;
  }

  .card hover {
    background: #d2d9fe;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .card.concluida {
    border-left-color: #4caf50;
    opacity: 0.6;
  }
  .card.concluida span {
    text-decoration: line-through;
  }
  .conteudo {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .btn-deletar {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
  }
</style>
