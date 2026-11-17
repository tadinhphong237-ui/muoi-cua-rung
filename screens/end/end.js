/* Màn tổng kết
   Thống kê kết quả từng người chơi. */
function showEnd(){
  const order=S.players.map((p,i)=>i).sort((a,b)=>(b===S.winner)-(a===S.winner)||S.players[b].pts-S.players[a].pts);
  const w=S.players[S.winner];
  const title=S.mode===1?`Ông Diểu đã chạm tới Khóm hoa tử huyền sau ${w.turns} lượt!`:`${w.name} về đích trước và giành chiến thắng!`;
  const pawn=i=>`<span class="ava sm" style="--pc:${PCOL[i]}">${portrait(i)}</span>`;
  $("endpanel").innerHTML=`${art("end",150)}
    <h2>🌼 ${title}</h2>
    <p class="moral">Rừng chỉ kết muối khi lòng người đủ lương tri. Mỗi câu trả lời đúng là một bước gần hơn với hoa tử huyền.</p>
    <div class="results">${order.map(i=>{const p=S.players[i],tot=p.ok+p.ng;return `
      <div class="res ${i===S.winner?"win":""}">
        <div class="res-h">${pawn(i)}<div><b>${p.name}</b><br><small style="color:#5b6b62">${p.tag}</small></div>${i===S.winner?`<span class="tag">${S.mode===1?"Về đích":"🏆 Chiến thắng"}</span>`:""}</div>
        <div class="stats">
          <div class="stat"><b>${p.pts}</b><span>Điểm Lương tri</span></div>
          <div class="stat"><b>${p.turns}</b><span>Lượt đã đi</span></div>
          <div class="stat"><b>${p.ok}/${tot}</b><span>Câu trả lời đúng${tot?` (${Math.round(p.ok/tot*100)}%)`:""}</span></div>
          <div class="stat"><b>${p.tr}</b><span>Báu vật nhặt được</span></div>
          <div class="stat"><b>${p.ev}</b><span>Biến cố gặp phải</span></div>
          <div class="stat"><b>${p.back}</b><span>Lần bị đưa về ô ${BACK}</span></div>
        </div>
        <div style="color:#5b6b62;font-size:.85rem">Vị trí cuối: ô ${p.pos} · ${CELLS[p.pos][0]}</div>
      </div>`;}).join("")}</div>
    <div class="endbtns">
      <button class="go primary" id="endAgain">🔄 Chơi lại</button>
      <button class="go" id="endMode">Chọn chế độ khác</button>
      <button class="go" id="endHome">🏠 Màn hình chính</button>
    </div>`;
  $("endAgain").onclick=()=>{newGame(S.mode);show("play");};
  $("endMode").onclick=()=>show("mode");
  $("endHome").onclick=()=>show("home");
  show("end");
}
