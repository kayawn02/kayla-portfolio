// Modern High-Precision Web Audio API Click Synthesizer
// Provides instantaneous, zero-latency tactile click feedback without external assets

let audioCtx = null;
let soundEnabled = true;

export function isSoundEnabled() {
  return soundEnabled;
}

export function toggleSound() {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    playNavClickSound();
  }
  return soundEnabled;
}

export function playNavClickSound() {
  if (!soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const t = audioCtx.currentTime;

    // 1. Primary resonant click oscillator (fast pitch drop for tactile feel)
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    // Frequency sweeps from 1100Hz down to 220Hz over 30ms (like a modern Apple/mechanical switch)
    osc.frequency.setValueAtTime(1100, t);
    osc.frequency.exponentialRampToValueAtTime(220, t + 0.035);

    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.035);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(t);
    osc.stop(t + 0.04);

    // 2. High-frequency crisp transient snap (haptic click)
    const snapOsc = audioCtx.createOscillator();
    const snapGain = audioCtx.createGain();

    snapOsc.type = 'triangle';
    snapOsc.frequency.setValueAtTime(2400, t);
    snapOsc.frequency.exponentialRampToValueAtTime(600, t + 0.015);

    snapGain.gain.setValueAtTime(0.16, t);
    snapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.015);

    snapOsc.connect(snapGain);
    snapGain.connect(audioCtx.destination);

    snapOsc.start(t);
    snapOsc.stop(t + 0.02);
  } catch (e) {
    // Graceful fallback for non-supported browsers
  }
}
