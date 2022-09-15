<script lang="ts">
	import Sheet from "./Sheet.svelte";
  import type { TuneType } from "./tunes";
  export let sheets: Array<TuneType>;
  export let currentSheet: number;

  let didAnswer = false;
  let answerRight = false;
  let done = false;
  let score = 0;

  function placeAnswer(answer: string) {
    didAnswer = true;
    answerRight = answer === sheets[currentSheet].rightAnswer;
    if (answerRight && !done) {
      score++;
    }
  }

  function next() {
    didAnswer = false;
    if (currentSheet < sheets.length - 1) {
      currentSheet++;
    } else {
      done = true;
    }
  }
</script>

<div class="input">
  {#if !done && currentSheet < sheets.length}
    <div class="buttons">
      <button on:click={() => placeAnswer('METAL')} disabled={didAnswer} aria-label="Vote for metal">🤘</button>
      <button on:click={() => placeAnswer('MEDAL')} disabled={didAnswer} aria-label="Vote for medal">🥇</button>
      <button on:click={() => next()} disabled={!didAnswer} aria-label="Next">{sheets.length - 2 < currentSheet ? 'Finish' : 'Next'}</button>
    </div>
  {/if}

  {#if didAnswer}
    <p>{answerRight ? 'Very good!': 'You have been fooled!'}</p>
		<p>This piece is:</p>
    <p><strong>{ sheets[currentSheet].name }</strong>,<br>by { sheets[currentSheet].composer }</p>
  {/if}

  <h2>Your score</h2>
  <p>{ score }</p>
</div>

<style>
  .input {
    max-width: 400px;
    margin: auto;
    text-align: center;
  }
</style>
