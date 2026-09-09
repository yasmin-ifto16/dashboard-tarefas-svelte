<script>
  import { onMount } from 'svelte';
  import { tarefas, iniciarConexaoMicrosservico } from './tarefasStore.js';
  import FormTarefa from './FormTarefa.svelte';
  import CardTarefa from './CardTarefa.svelte';

  onMount(() => {
    iniciarConexaoMicrosservico();
  });
</script>

<main class="dashboard">
  <header>
    <h1>🚀 Mini-SPA: Dashboard de Tarefas</h1>
    <p class="status">Total de tarefas no sistema: {$tarefas.length}</p>
  </header>

  <FormTarefa />

  <section class="lista">
    {#each $tarefas as t (t.id)}
      <CardTarefa item={t} />
    {:else}
      <p class="vazio">Nenhuma tarefa pendente.</p>
    {/each}
  </section>
</main>

<style>
  :global(body) {
    background-color: #f3f4f6;
    font-family: system-ui, -apple-system, sans-serif;
    margin: 0;
    padding: 0;
  }
  .dashboard {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    background: #fdfdfd;
    border-radius: 12px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  header h1 {
    color: #333;
    font-size: 1.8rem;
    margin-bottom: 5px;
  }
  .status {
    color: #666;
    margin-bottom: 25px;
    font-weight: 500;
  }
  .vazio {
    text-align: center;
    color: #999;
    padding: 20px;
  }
</style>
