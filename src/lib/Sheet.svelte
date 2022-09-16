<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';
  import abcjs from 'abcjs';
  import 'abcjs/abcjs-audio.css';
  import type { TuneType } from './tunes';
  export let sheet: TuneType;

  let synthControl: abcjs.SynthObjectController;

  const setupVisualObj = (): abcjs.TuneObject => {
    const paperSize = window.innerWidth - 100 <= 750 ? window.innerWidth - 100 : 750;
    const visualObjs = abcjs.renderAbc('paper', sheet.sheet, {
      staffwidth: paperSize,
      viewportVertical: true,
      scale: 0.75,
      wrap: {
        preferredMeasuresPerLine: 4,
        minSpacing: 1,
        maxSpacing: 2.5,
        lastLineLimit: 3,
      }
    });

    return visualObjs[0];
  }

  function loadAudio() {
    const visualObj = setupVisualObj();
    const controlOptions = {
      displayRestart: true,
      displayPlay: true,
      displayProgress: true,
      displayClock: true
    };

    if (synthControl) {
      synthControl.load('#audio', null, controlOptions);
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
      loadAudio();
    } else {
      console.log('audio is not supported on this browser');
    }
  }

  afterUpdate(() => loadAudio());
</script>

<div class="sheet_wrapper">
  <div id="paper" />
  <div id="audio" />
  <button class="activate-audio" on:click={enableAudio}>Activate Audio</button>
</div>

<style>
  #paper {
    margin: auto;
    text-align: center;
  }
  .sheet_wrapper {
    width: 100%;
  }
</style>
