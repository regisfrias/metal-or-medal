<script lang="ts">
	export let sheets: Array<{
    name: string,
    rightAnswer: string,
  }>;
	export let currentSheet: number;
	let score = 0;
	let done = false;

	function handleClick(answer: string) {
		if (answer === sheets[currentSheet].rightAnswer && !done) {
			score++;
		}
		if (currentSheet < sheets.length - 1) {
			currentSheet++;
		} else {
			done = true;
		}
	}
</script>

<div>
  <p>currentSheet: {currentSheet}</p>

	{#if !done && currentSheet < sheets.length}
		<div class="buttons">
			<button on:click={() => handleClick('METAL')} aria-label="Decrease the score by one">🤘</button>
			<button on:click={() => handleClick('MEDAL')} aria-label="Increase the score by one">🥇</button>
		</div>
	{/if}

	{#if sheets[currentSheet]}
		<p>{sheets[currentSheet].name}</p>
	{/if}

	{#each sheets as sheet, i}
		<div>{i}: {sheet.name}, {sheet.rightAnswer} {currentSheet === i ? ' <=' : ''}</div>
	{/each}

  <h2>Your score</h2>
  <p>{ score }</p>
</div>