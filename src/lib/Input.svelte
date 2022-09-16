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
  {#if !done && currentSheet < sheets.length && currentSheet < sheets.length - 1}
    <div class="buttons">
			<p>
				<button class="choice" on:click={() => submitAnswer('METAL')} disabled={didAnswer} aria-label="Vote for metal">🤘</button>
				<button class="choice" on:click={() => submitAnswer('MEDAL')} disabled={didAnswer} aria-label="Vote for medal">🥇</button>
			</p>
			<p>
				<button on:click={() => next()} disabled={!didAnswer} aria-label="Next">Next</button>
			</p>
    </div>
  {/if}

  {#if didAnswer}
    <p>{answerRight ? 'Very good!': 'You have been fooled!'}</p>
    <p>This piece is:</p>
    <p><strong>{ sheets[currentSheet].name }</strong>,<br>by { sheets[currentSheet].composer }</p>
  {/if}

  <div class="score_wrapper">
    <h2>Your score</h2>
    <p class="score">{ score }</p>
  </div>
</div>

<style>
  .input {
    max-width: 400px;
    margin: auto;
    text-align: center;
  }

  .input .buttons .choice {
    font-size: 3rem;
  }

  .score_wrapper {
    border: 1px solid rgb(194, 194, 194);
  }

  .score_wrapper h2 {
    font-size: 1rem;
  }

	.score {
		font-size: 4rem;
	}
</style>
