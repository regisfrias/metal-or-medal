<script lang="ts">
  import { beforeUpdate, afterUpdate } from 'svelte';
  import abcjs from 'abcjs';
  import 'abcjs/abcjs-audio.css';
  import type { TuneType } from './tunes';
  export let sheet: TuneType;

  function renderSheet(tune: string) {
    const paperSize = window.innerWidth - 100 <= 750 ? window.innerWidth - 100 : 750;

    var visualObj = abcjs.renderAbc('paper', tune, {
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
    const activateAudio = document.querySelector('.activate-audio');

    if (activateAudio) {
      activateAudio.addEventListener('click', activate);
      activateAudio?.removeAttribute('disabled');
      function activate() {
        activateAudio?.setAttribute('disabled', '');
        if (abcjs.synth.supportsAudio()) {
          var controlOptions = {
            displayRestart: true,
            displayPlay: true,
            displayProgress: true,
            displayClock: true
          };
          var synthControl = new abcjs.synth.SynthController();
          synthControl.load('#audio', null, controlOptions);
          synthControl.disable(true);
          var midiBuffer = new abcjs.synth.CreateSynth();
          midiBuffer
            .init({
              visualObj: visualObj[0],
              options: {}
            })
            .then(function () {
              synthControl.setTune(visualObj[0], true).then(function () {
                const inlineAudio = document.querySelector('.abcjs-inline-audio');
                if (inlineAudio) {
                  inlineAudio.classList.remove('disabled');
                }
              });
            });
        } else {
          console.log('audio is not supported on this browser');
        }
      }
    }
  }

  beforeUpdate(() => {
    renderSheet(sheet.sheet);
  });
  
  afterUpdate(() => {
  });
</script>

<div class="sheet_wrapper">
  <div id="paper" />
  <div id="audio" />
  <button class="activate-audio">Activate Audio</button>
</div>

<style>
  #paper {
    margin: auto;
    text-align: center;
  }
  .sheet_wrapper {
    width: 100%;
  }
  /* .abcjs-highlight {
    fill: #0a9ecc;
  }
  .abcjs-cursor {
    stroke: red;
  } */
</style>
