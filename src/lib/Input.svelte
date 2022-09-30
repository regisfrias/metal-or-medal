<script lang="ts">
  import type { TuneType } from "./tunes";
  export let sheets: Array<TuneType>;
  export let currentSheet: number;
	const defaultFavicon = 'favicon.png';

  let didAnswer = false;
  let answerRight = false;
  let done = false;
  let score = 0;
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
        <button class="choice" on:click={() => submitAnswer('METAL')} disabled={didAnswer} aria-label="Vote for metal">🤘</button>
        <div class="score_wrapper">
          <p class="score">Your score: { score } / {sheets.length}</p>
        </div>
        <button class="choice" on:click={() => submitAnswer('MEDAL')} disabled={didAnswer} aria-label="Vote for medal">🥇</button>
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
<div class="feedback">
  <div>
    <p>{answerRight ? 'Very good!': 'You have been fooled!'}</p>
    <p>This piece is:</p>
    <p><strong>{ sheets[currentSheet].name }</strong><br>by { sheets[currentSheet].composer }</p>
    <p>
      <button class="feedback-btn" on:click={() => next()} disabled={!didAnswer} aria-label="Next">Next</button>
    </p>
  </div>
</div>
{/if}

<style>
  .input {
    border-top: 1px solid rgb(55, 55, 55);
    max-width: 600px;
    margin: auto;
  }

  .input .buttons {
    display: flex;
    justify-content: space-between
  }

  .input .buttons .choice {
    font-size: 3rem;
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  .feedback {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
  }

  .feedback-btn {
    border: 0;
    background-color: white;
    padding: 0.5rem 2rem;
  }

  .score_wrapper {
    text-align: center;
  }
</style>
