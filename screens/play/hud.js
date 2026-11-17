/* Màn chơi · HUD
   Thanh Lương tri hai góc, thông báo, nhật ký, cập nhật giao diện. */
/* ---------- HUD: thanh Lương tri hai góc ---------- */
const PAWN_PATH="M-14 0 Q-14 -10 -7 -14 L-5 -26 Q-12 -30 -12 -38 A12 12 0 1 1 12 -38 Q12 -30 5 -26 L7 -14 Q14 -10 14 0Z";
let HUDKEY="",PREV=[];
function hpBox(i){return `<div style="display:contents">
  <div class="ava" style="--pc:${PCOL[i]}">${portrait(i)}</div>
  <div class="hpmain"><div class="hpname"><b id="hn${i}"></b><span id="hl${i}"></span></div>
  <div class="hpbar" id="hb${i}"><i id="hf${i}"></i><em id="hv${i}"></em></div>
  <div class="hpsub" id="hs${i}"></div></div></div>`;}
function renderHud(){
  const key=S.mode+":"+S.players.length;
  if(key!==HUDKEY){
    HUDKEY=key;PREV=S.players.map(p=>p.pts);
    $("hudL").innerHTML=hpBox(0);
    $("hudR").className="hud hud-r"+(S.mode===1?" solo":"");
    $("hudR").innerHTML=S.mode===2?hpBox(1):`<div class="soloin"><b id="soloT">0</b><span>lượt đã đi</span></div>`;
  }
  S.players.forEach((p,i)=>{
    const host=i===0?$("hudL"):$("hudR");
    host.classList.add("hpbox");host.classList.toggle("active",i===S.cur&&!S.over&&S.mode===2);
    $("hn"+i).textContent=p.name;
    $("hl"+i).textContent=`Ô ${p.pos} · ${CELLS[p.pos][0]}`;
    $("hf"+i).style.width=Math.min(100,p.pts/NEED*100)+"%";
    $("hb"+i).classList.toggle("full",p.pts>=NEED);
    $("hv"+i).textContent=`${p.pts} / ${NEED}`;
    $("hs"+i).textContent=p.pts>=NEED?"Đủ Lương tri để về đích":`Cần thêm ${NEED-p.pts} Điểm Lương tri${p.skip?" · mất "+p.skip+" lượt":""}`;
    if(PREV[i]!==undefined&&p.pts!==PREV[i]){const c=p.pts>PREV[i]?"gain":"hit";host.classList.remove("gain","hit");void host.offsetWidth;host.classList.add(c);}
    PREV[i]=p.pts;
  });
  if(S.mode===1) $("soloT").textContent=S.players[0].turns;
}
let toastT=null;
function toast(t){const e=$("toast");e.textContent=t;e.classList.add("on");clearTimeout(toastT);toastT=setTimeout(()=>e.classList.remove("on"),CONFIG.speed.toast);}
function log(t){S.logs.unshift(t);S.logs=S.logs.slice(0,80);renderLog();if(SCREEN==="play")toast(t);}
function renderLog(){$("log").innerHTML=S.logs.map(t=>`<li>${t}</li>`).join("");}
function render(){
  renderHud();
  const p=S.players[S.cur];
  $("turnName").textContent=S.over?"Ván đã kết thúc":p.name;
  $("roll").disabled=S.busy||S.over;
  const st=stageOf(S.players[S.cur].pos);
  $("cV").textContent=left("Q"+st,QUESTIONS.filter(q=>q.chang===st).length);
  $("cB").textContent=left("B",EVENTS.length);$("cT").textContent=left("T",TREASURES.length);
  placePawns();renderLog();
}
