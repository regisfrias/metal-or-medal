<script lang="ts">
  import Sheet from '../lib/Sheet.svelte';
  import '../app.css';
</script>

<svelte:head>
	<title>Metal or Medal</title>
</svelte:head>

<header>
  <h1>Metal or Medal</h1>
  <p>Is it metal? Is it not? Decide if the sheet below represents a piano reduction of a western classical music pantheon medal-winning masterpiece🥇 or a transcription from hell🤘.</p>
</header>

<Sheet />

<style>
  header {
    max-width: 400px;
    margin: auto 40px;
    padding: 1px;
  }

  h1 {
    text-align: center;
  }
</style>
