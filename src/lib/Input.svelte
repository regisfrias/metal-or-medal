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
  {#if !done && currentSheet < sheets.length}
    <div class="buttons">
      <button class="choice" on:click={() => submitAnswer('METAL')} disabled={didAnswer} aria-label="Vote for metal">🤘</button>
      <div class="score_wrapper">
        <p class="score">Your score: { score }</p>
      </div>
      <button class="choice" on:click={() => submitAnswer('MEDAL')} disabled={didAnswer} aria-label="Vote for medal">🥇</button>
    </div>
  {/if}

</div>

{#if didAnswer}
<div class="feedback">
  <div>
    <p>{answerRight ? 'Very good!': 'You have been fooled!'}</p>
    <p>This piece is:</p>
    <p><strong>{ sheets[currentSheet].name }</strong><br>by { sheets[currentSheet].composer }</p>
    <p>
      <button on:click={() => next()} disabled={!didAnswer} aria-label="Next">Next</button>
    </p>
  </div>
</div>
{/if}



<style>
  .input {
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    color: white;
  }

  .input .buttons {
    display: flex;
    justify-content: space-between
  }

  .input .buttons .choice {
    font-size: 3rem;
    background-color: black;
    border: 0;
    cursor: pointer;
  }

  .score_wrapper {
  }

  .score_wrapper h2 {
    font-size: 1rem;
  }

	.score {
	}

  .feedback {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.9);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
