/* Màn chơi · Lượt chơi
   Tung, đi, rút thẻ, trả lời câu hỏi, về đích. */
/* ---------- lượt chơi ---------- */
async function roll(){
  if(S.busy||S.over) return;
  const i=S.cur,p=S.players[i];
  if(p.skip>0){p.skip--;log(`${p.name} bị mất lượt này.`);return endTurn();}
  S.busy=true;render();
  const v=await rollDie();p.turns++;
  const from=p.pos,to=Math.min(GOAL,p.pos+v);
  log(`${p.name} tung được ${v}: ô ${from} → ô ${to} (${CELLS[to][0]}).`);
  await walkTo(i,to);ripple(p.pos);render();
  if(p.pos===GOAL) return reachGoal(p,i);
  const t=CELLS[p.pos][1];
  if(t==="V") return askQuestion(p);
  if(t==="B") return showCard(p,i,"B",draw("B",EVENTS));
  if(t==="T") return showCard(p,i,"T",draw("T",TREASURES));
  log(`${p.name} nghỉ chân tại ${CELLS[p.pos][0]}.`);endTurn();
}
async function reveal(col,icon,deckId){
  const d=$(deckId);if(d){d.classList.remove("draw");void d.offsetWidth;d.classList.add("draw");}
  SFX.card();
  $("slot").innerHTML=`<div class="cardback" style="--c:${col}">${icon}</div>`;$("ov").classList.add("show");
  await sleep(RM?50:650);
}
function openCard(col,html){$("slot").innerHTML=`<div class="card" style="--c:${col}">${html}</div>`;$("ov").classList.add("show");}
function closeCard(){$("ov").classList.remove("show");$("slot").innerHTML="";}

async function askQuestion(p){
  const st=stageOf(p.pos);const q=draw("Q"+st,QUESTIONS.filter(x=>x.chang===st));
  await reveal("#4f97d6","📚","dV");
  const TIME=CONFIG.timer[S.mode]||0,timed=TIME>0;
  openCard("#4f97d6",`${art("q"+st,96)}<span class="kind">📚 Thử thách Văn học · Chặng ${st}</span>
    <h3>${q.cau_hoi}</h3>
    ${timed?`<div class="timer"><span class="bar"><i id="tbar" style="width:100%"></i></span><span id="ttxt">${TIME}s</span></div>`:""}
    <div class="opts">${Object.entries(q.dap_an).map(([k,v])=>`<button class="opt" data-k="${k}"><b>${k}</b><span>${v}</span></button>`).join("")}</div>
    <div id="res" style="display:grid;gap:8px"></div>`);
  document.querySelectorAll(".opt").forEach(o=>o.onclick=()=>answer(p,q,o.dataset.k));
  document.querySelector(".opt").focus();
  if(timed){let l=TIME;S.timer=setInterval(()=>{l--;$("tbar").style.width=(l/TIME*100)+"%";$("ttxt").textContent=l+"s";if(l<=5&&l>0) tone(900,.05,"sine",.04);if(l<=0) answer(p,q,null);},1000);}
}
function answer(p,q,k){
  clearInterval(S.timer);S.timer=null;const ok=k===q.dung;
  document.querySelectorAll(".opt").forEach(o=>{o.disabled=true;if(o.dataset.k===q.dung)o.classList.add("right");else if(o.dataset.k===k)o.classList.add("wrong");});
  const before=p.pts;p.pts=clampPts(p.pts+(ok?SCORE_R:SCORE_W));ok?p.ok++:p.ng++;
  ok?SFX.right():SFX.wrong();
  log(`${p.name} ${k===null?"hết giờ":ok?"trả lời đúng":"trả lời sai"}: ${before} → ${p.pts} điểm.`);
  $("res").innerHTML=`<div class="verdict" style="color:${ok?"#2f8a4b":"#c0503a"}">${k===null?"Hết giờ!":ok?"Chính xác!":"Chưa đúng!"} ${fmtPts(ok?SCORE_R:SCORE_W)} Lương tri</div><p class="explain">${q.giai_thich}</p><button class="go" id="ok">Tiếp tục hành trình →</button>`;
  render();const pi=S.players.indexOf(p);$("ok").onclick=()=>{closeCard();floatText(pi,fmtPts(ok?SCORE_R:SCORE_W),ok);if(ok) burst(pi,"star"); else weather("hit");endTurn();};$("ok").focus();
}
async function showCard(p,i,kind,c){
  const isB=kind==="B",col=isB?"#d0654c":"#e0a92e";
  await reveal(col,isB?"⛈️":"✨",isB?"dB":"dT");
  const parts=[];
  if(c.pts) parts.push(`${c.pts>0?"+":"−"}${Math.abs(c.pts)} Lương tri`);
  if(c.move) parts.push(c.move>0?`Tiến ${c.move} ô`:`Lùi ${-c.move} ô`);
  if(c.skip) parts.push(`Mất ${c.skip} lượt`);
  openCard(col,`${art(c.art)}<span class="kind">${isB?"⛈️ Biến cố Rừng xanh":"✨ Báu vật Lương tri"}</span><h3>${c.t}</h3><p>${c.d}</p>
    <div class="effect">${parts.map(x=>`<span>${x}</span>`).join("")}</div><button class="go" id="ok">Tiếp tục hành trình →</button>`);
  isB?SFX.wrong():SFX.right();
  $("ok").focus();
  $("ok").onclick=async()=>{
    closeCard();
    if(c.pts) p.pts=clampPts(p.pts+c.pts);
    if(c.skip) p.skip+=c.skip;
    isB?p.ev++:p.tr++;
    log(`${isB?"⛈️":"✨"} ${p.name} gặp “${c.t}”: ${parts.join(", ")}.`);render();
    if(isB) weather(c.fx); else burst(i,c.fx);
    if(c.pts) floatText(i,fmtPts(c.pts),c.pts>0);
    if(c.skip) floatText(i,"Mất lượt",false);
    await sleep(RM?50:700);
    if(c.move){await walkTo(i,Math.max(1,Math.min(GOAL,p.pos+c.move)));render();if(p.pos===GOAL) return reachGoal(p,i);}
    endTurn();
  };
}
async function reachGoal(p,i){
  if(p.pts>=NEED){
    S.over=true;S.busy=false;S.winner=i;log(`🌼 ${p.name} chạm tới Khóm hoa tử huyền với ${p.pts} điểm!`);render();SFX.win();petals();burst(i,"star");burst(i,"heart");
    await sleep(RM?100:CONFIG.speed.winDelay);showEnd();return;
  }
  p.back++;
  log(`⚠️ ${p.name} tới ô 30 nhưng mới có ${p.pts}/${NEED} điểm. Rừng xanh đưa về ô ${BACK}.`);
  SFX.wrong();
  openCard("#d0654c",`<span class="kind">⚠️ Chưa đủ Lương tri</span><h3>Hoa tử huyền chưa nở cho bạn</h3><p>Cần ít nhất ${NEED} Điểm Lương tri, bạn đang có ${p.pts}. Rừng xanh đưa bạn về ô ${BACK} (Mỏm đá) để tiếp tục tu dưỡng.</p><button class="go" id="ok">Quay về ô ${BACK} →</button>`);
  $("ok").focus();
  $("ok").onclick=async()=>{closeCard();weather("mist");floatText(i,`↩ Về ô ${BACK}`,false);await sleep(RM?50:500);await walkTo(i,BACK,CONFIG.speed.backStep);render();endTurn();};
}
function endTurn(){S.busy=false;if(S.mode===2&&!S.over) S.cur=1-S.cur;render();}
