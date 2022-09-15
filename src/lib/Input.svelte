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
      <p>
        <button class="choice" on:click={() => placeAnswer('METAL')} disabled={didAnswer} aria-label="Vote for metal">🤘</button>
        <button class="choice" on:click={() => placeAnswer('MEDAL')} disabled={didAnswer} aria-label="Vote for medal">🥇</button>
      </p>
      <p>
        <button on:click={() => next()} disabled={!didAnswer} aria-label="Next">{sheets.length - 2 < currentSheet ? 'Finish' : 'Next'}</button>
      </p>
    </div>
  {/if}

  {#if didAnswer}
    <p>{answerRight ? 'Very good!': 'You have been fooled!'}</p>
    <p>This piece is:</p>
    <p><strong>{ sheets[currentSheet].name }</strong>,<br>by { sheets[currentSheet].composer }</p>
  {/if}

  <div class="score">
    <h2>Your score</h2>
    <p>{ score }</p>
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

  .score {
    border: 1px solid rgb(194, 194, 194);
  }
</style>
