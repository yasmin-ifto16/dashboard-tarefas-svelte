<script>
  import { tarefas } from './tarefasStore.js';
  let novoTexto = '';

  function adicionar() {
    if (!novoTexto.trim()) return;

    const nova = {
      id: Date.now(),
      texto: novoTexto,
      concluida: false
    };

    tarefas.update(lista => [nova, ...lista]);
    novoTexto = ''; // Limpa o input
  }
</script>

<form on:submit|preventDefault={adicionar}>
  <input 
    type="text" 
    bind:value={novoTexto} 
    placeholder="Digite uma nova tarefa acadêmica..." 
  />
  <button type="submit">Adicionar</button>
</form>

<style>
  form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
  }
  button {
    background: #ff3e00;
    color: white;
    border: none;
    padding: 0 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
  }
  button:hover {
    background: #e03700;
  }
</style>
