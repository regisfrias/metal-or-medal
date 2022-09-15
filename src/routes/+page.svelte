<script lang="ts">
  import Input from '../lib/Input.svelte';
  import Sheet from '../lib/Sheet.svelte';

  import { tunes } from '../lib/tunes'
  let sheets = [...tunes]
  let currentSheet = 0
</script>

<h1>Metal or Medal</h1>
<Sheet sheet={sheets[currentSheet]} />
<Input bind:sheets={sheets} bind:currentSheet={currentSheet} />
