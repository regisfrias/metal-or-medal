<script lang="ts">
  import Input from '../lib/Input.svelte';
  import Sheet from '../lib/Sheet.svelte';
	import '../app.css';

  import { tunes } from '../lib/tunes';
	import { shuffle } from '../lib/utils';

  let sheets = shuffle(tunes);
  let currentSheet = 0
</script>

<h1>Metal or Medal</h1>

<p>Is it metal? Is it not? Decide if the sheet below represents a piano reduction of a classical masterpiece or a transcription from hell.</p>

<Sheet sheet={sheets[currentSheet]} />
<Input bind:sheets={sheets} bind:currentSheet={currentSheet} />
