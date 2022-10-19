<script lang="ts">
  import Sheet from '../lib/Sheet.svelte';
  import '../app.css';

  let intro = true;

  function goPlay() {
    intro = false;
  }
</script>

<svelte:head>
	<title>Metal or Medal</title>
</svelte:head>

{#if intro}
  <div class="intro">
    <h1>Metal or Medal</h1>
    <p>Is it metal? Is it not? Decide if the music sheet you see represents a piano reduction of a western classical music pantheon medal-winning masterpiece or a transcription from hell.</p>
    <p>Wondering what this is? Read the <a href="/faqe">Faqe</a>.</p>

    <p class="play">
      <button class="button--volume" on:click={goPlay}>Play ▶</button>
    </p>
  </div>
  {:else}
  <Sheet />
{/if}

<style>
  .intro {
    max-width: 400px;
    margin: auto;
    padding: 1px;
  }

  .play {
    text-align: center;
  }

  h1 {
    text-align: center;
  }
</style>
