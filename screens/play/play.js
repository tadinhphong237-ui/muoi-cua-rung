/* Màn chơi · Gắn nút
   Các nút điều khiển ở hai góc dưới. */
function initPlay(){
  $("roll").onclick=roll;
  $("restart").onclick=()=>newGame(S.mode);
  $("toHome").onclick=()=>show("home");
  $("logBtn").onclick=()=>{const on=$("drawer").classList.toggle("on");$("logBtn").setAttribute("aria-expanded",on);};
  $("fs").onclick=async()=>{try{if(document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen();}catch(e){toast("Trình duyệt chưa cho phép toàn màn hình ở đây. Hãy mở game bằng link GitHub Pages.");}};
  $("snd").onclick=()=>{soundOn=!soundOn;$("snd").setAttribute("aria-pressed",soundOn);$("snd").textContent=soundOn?"🔊":"🔇";};
  $("snd").textContent=soundOn?"🔊":"🔇";$("snd").setAttribute("aria-pressed",soundOn);
  $("demoNote").textContent=CONFIG.demoNote||"";
  drawBoard();
}
