/* Âm thanh
   Âm thanh tạo bằng Web Audio, không cần file mp3. */
/* ---------- âm thanh ---------- */
let AC=null,soundOn=CONFIG.sound.enabled;
function tone(f,d=.12,type="triangle",vol=.08,delay=0){
  if(!soundOn) return;
  try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();
    const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime+delay;
    o.type=type;o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);
    o.connect(g).connect(AC.destination);o.start(t);o.stop(t+d+.02);}catch(e){}
}
const SFX={
  step:()=>tone(520+Math.random()*80,.07,"sine",.05),
  right:()=>[523,659,784].forEach((f,i)=>tone(f,.18,"triangle",.08,i*.09)),
  wrong:()=>[300,220].forEach((f,i)=>tone(f,.22,"sawtooth",.04,i*.12)),
  card:()=>tone(880,.08,"sine",.05),
  win:()=>[523,659,784,1046,784,1046].forEach((f,i)=>tone(f,.25,"triangle",.08,i*.12))
};
