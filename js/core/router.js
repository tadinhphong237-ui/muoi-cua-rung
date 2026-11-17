/* Chuyển màn hình
   show('home'|'mode'|'play'|'end') */
/* ---------- chuyển màn hình ---------- */
let SCREEN="home";
function show(name){
  SCREEN=name;
  document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("on",s.id==="scr-"+name));
  window.scrollTo(0,0);
  const f={home:"btnPlay",mode:"pick1",play:"roll",end:"endAgain"}[name];
  setTimeout(()=>$(f)?.focus(),50);
}
