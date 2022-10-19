<script lang="ts">
  import type { TuneType } from "./tunes";
  export let sheets: Array<TuneType>;
  export let currentSheet: number;
  export let done = false;
	const defaultFavicon = 'favicon.png';

  let didAnswer = false;
  let answerRight = false;
  export let score = 0;
	let icon = defaultFavicon;

  function submitAnswer(answer: string) {
    didAnswer = true;
    answerRight = answer === sheets[currentSheet].rightAnswer;
    if (answerRight) {
			if (!done) {
				score++;
			}
    }
		icon = sheets[currentSheet].rightAnswer === 'METAL' ? 'metal.png' : 'medal.png';
  }

  function next() {
    didAnswer = false;
		icon = defaultFavicon;
    if (currentSheet < sheets.length - 1) {
      currentSheet++;
    } else {
      done = true;
    }
  }
</script>

<svelte:head>
	<link rel="shortcut icon" href={icon} type="image/x-icon">
</svelte:head>

<div class="input">
  <div class="buttons">
    {#if !done}
      {#if currentSheet < sheets.length}
        <button class="button--volume choice metal" on:click={() => submitAnswer('METAL')} disabled={didAnswer} aria-label="Vote for metal">🤘</button>
        <div class="score_wrapper">
          <p class="score">Your score: { score } / {sheets.length}</p>
        </div>
        <button class="button--volume choice medal" on:click={() => submitAnswer('MEDAL')} disabled={didAnswer} aria-label="Vote for medal">🥇</button>
      {/if}
    {:else}
    <div></div>
    <div class="score_wrapper">
      <p class="score">Final score: { score } / {sheets.length}</p>
    </div>
    <div></div>
    {/if}
  </div>

</div>

{#if didAnswer}
<div class="modal">
  <div class="modal-card">
    <div class="modal-card-header {answerRight ? 'success' : 'error'}">
      {#if answerRight}
      <p class="success text-lg">Very good!</p>
      {:else}
      <p class="failure text-lg">You have been fooled!</p>
      {/if}
    </div>

    <p>This piece is:</p>
    <p>
      <strong>
        <a href="{sheets[currentSheet].link}" target="_blank" class="external_link">{ sheets[currentSheet].name }</a>
      </strong><br>by { sheets[currentSheet].composer }</p>
    <p>
      <button class="button--volume" on:click={() => next()} disabled={!didAnswer} aria-label="Next">Next</button>
    </p>
  </div>
</div>
{/if}

<style>
  .input {
    border-top: 1px solid var(--light-gray);
    max-width: 600px;
    margin: auto;
  }

  .input .buttons {
    display: flex;
    justify-content: space-between
  }

  .input .buttons .choice {
    font-size: 2.5rem;
    padding: calc(var(--padding-sm) / 3) var(--padding-sm);
  }

  .score_wrapper {
    text-align: center;
    display: flex;
    align-items: center;
  }
</style>
