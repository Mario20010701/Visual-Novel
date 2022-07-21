const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext = null;

const sounds = ['Drillcommentary.wav', 'Nachrichten 1.wav', 'Nachrichten 2.wav', 'MariosSuite123.mp3', 'Störgeräusch.mp3'];
const hasLoop = [true, true, true, true];
const audioBuffers = [];
const sources = [];

let currentStationIndex = null;
const radioFreqElem = document.getElementById("radio-freq");
radioFreqElem.addEventListener('input', onRadioFreq);
window.addEventListener('click', onClick);

// load audio buffers (samples)
for (let i = 0; i < sounds.length; i++) {
  const request = new XMLHttpRequest();
  request.responseType = 'arraybuffer';
  request.open('GET', 'sounds/' + sounds[i]);
  request.addEventListener('load', () => {
    const ac = new AudioContext();
    ac.decodeAudioData(request.response, (buffer) => audioBuffers[i] = buffer);
  });

  request.send();
}

// synthesize a single grain
function synthGrain(context, destination, buffer, time, offset, duration, gain, cutoffFreq = Infinity, resLevel = 0) {
  const fadeTime = 0.5 * duration;

  const env = context.createGain();
  env.connect(destination);
  env.gain.value = 0;
  env.gain.setValueAtTime(0, time);
  env.gain.linearRampToValueAtTime(gain, time + fadeTime);
  env.gain.setValueAtTime(gain, time + duration - fadeTime);
  env.gain.linearRampToValueAtTime(0, time + duration);
  destination = env;

  // if (cutoffFreq < Infinity) {
  //   const lowpass = context.createBiquadFilter();
  //   lowpass.connect(env);
  //   lowpass.type = 'lowpass';
  //   lowpass.frequency.value = cutoffFreq;
  //   lowpass.Q.value = resLevel;
  //   destination = lowpass;
  // }

  const source = context.createBufferSource();
  source.connect(destination);
  source.buffer = buffer;
  source.start(time, offset);
  source.stop(time + duration);
}



/**************************************************************************
 *
 *  slider input
 * 
 */
function onRadioFreq(evt) {
  if (audioContext === null) {
    audioContext = new AudioContext();
  }

  const time = audioContext.currentTime;
  const duration = 0.500;
  const buffer = audioBuffers[audioBuffers.length - 1];
  const offset = Math.random() * (buffer.duration - duration);
  const gain = 0.1;
  synthGrain(audioContext, audioContext.destination, buffer, time, offset, duration, gain);

  const stationWidth = 1 / (audioBuffers.length - 1);
  const stationIndex = Math.floor(radioFreqElem.value / stationWidth);
  if (stationIndex !== currentStationIndex) {
    if (currentStationIndex !== null) {
      stopSound(currentStationIndex);
    }
    startSound(stationIndex);
    currentStationIndex = stationIndex
  }

}


// play buffer by index
function startSound(index) {

  const time = audioContext.currentTime;

  const loop = hasLoop[index];
  const source = audioContext.createBufferSource();
  const buffer = audioBuffers[index];
  let offset = 0;

  if (loop) {
    offset = time % (buffer.duration / 16);
  }

  source.connect(audioContext.destination);
  source.buffer = buffer;
  source.loop = loop;
  source.start(time, offset);

  if (loop) {
    sources[index] = source;
  }
}

function stopSound(index) {
  const source = sources[index];

  if (source) {
    source.stop(audioContext.currentTime);
    sources[index] = null;
  }
}

// play audio buffer (loop)
function onClick(evt) {
  const target = evt.target;
  const index = target.dataset.index;

  // create audio context on first mouse-press/click/touch and keep it
  if (audioContext === null) {
    audioContext = new AudioContext();
  }
}