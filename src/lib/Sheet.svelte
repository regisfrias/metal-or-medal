<script lang="ts">
  import { afterUpdate } from 'svelte';
  import abcjs from 'abcjs';
  import 'abcjs/abcjs-audio.css';
  import type { TuneType } from './tunes';
  import Input from '../lib/Input.svelte';

  import { tunes } from '../lib/tunes';
  import { shuffle } from '../lib/utils';
  let done = false;
  let score = 0;

  let sheets = shuffle(tunes);
  let currentSheet = 0
  let synthControl: abcjs.SynthObjectController;

  const setupVisualObj = (sheet: TuneType): abcjs.TuneObject => {
    const isMobile = window.innerWidth - 100 <= 600;
    const paperSize = isMobile ? window.innerWidth - 100 : 600;
    const visualObjs = abcjs.renderAbc('paper', sheet.sheet, {
      staffwidth: paperSize,
      viewportVertical: true,
      scale: isMobile ? 0.6 : 0.9,
      wrap: {
        preferredMeasuresPerLine: 4,
        minSpacing: isMobile ? 1 : 1.5,
        maxSpacing: 2.5,
        lastLineLimit: 3,
      }
    });

    return visualObjs[0];
  }

  // const cursorControl: abcjs.CursorControl = {
  //   onStart: function () {
  //     console.log('start');
  //   },
  //   onEvent: function (ev) {
  //     if (ev && ev.elements) {
  //       ev.elements.map( noteGroup => {
  //         noteGroup.map( note => {
  //           note.classList.add('abcjs-highlight');
  //         })
  //       })
  //     }
  //   }
  // }

  function loadAudio(sheet: TuneType) {
    const visualObj = setupVisualObj(sheet);
    const controlOptions = {
      displayRestart: true,
      displayPlay: true,
      displayProgress: true,
      displayClock: true
    };

    if (synthControl) {
      synthControl.load('#audio', null, controlOptions);
      // synthControl.load('#audio', cursorControl, controlOptions);
      synthControl.disable(true);
      const midiBuffer = new abcjs.synth.CreateSynth();
      midiBuffer
        .init({
          visualObj,
          options: {}
        })
        .then(function () {
          synthControl.setTune(visualObj, true).then(function () {
            document.querySelector('.abcjs-inline-audio')?.classList.remove('disabled');
          });
        });
    }
  }

  function enableAudio(evt: MouseEvent) {
    const activateAudioBtn = (evt.target as HTMLButtonElement);
    activateAudioBtn.remove();

    if (abcjs.synth.supportsAudio()) {
      synthControl = new abcjs.synth.SynthController();
      loadAudio(sheets[currentSheet]);
    } else {
      console.log('audio is not supported on this browser');
    }
  }

  afterUpdate(() => {
    loadAudio(sheets[currentSheet])
  });
</script>

<svelte:window on:resize={() => setupVisualObj(sheets[currentSheet])} />

{#if !done}
  <div id="paper" />
{:else}
  <div class="replay">
    <p class="">Game Over!</p>
    <p>Your score: { score } / {sheets.length}</p>
    <button on:click={() => window.location.reload()}>Play again ↺</button>
  </div>
{/if}

<footer class="footer">
  <div id="audio" />
  <button class="activate-audio" on:click={enableAudio}>Activate Audio</button>
  <Input bind:sheets={sheets} bind:currentSheet={currentSheet} bind:done={done} bind:score={score} />
</footer>

<style>
  #paper {
    margin: auto;
    text-align: center;
    padding-top: var(--padding);
    padding-bottom: 180px;
  }

  .replay {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .activate-audio {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
