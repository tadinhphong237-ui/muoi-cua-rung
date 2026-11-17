/* Màn chọn chế độ
   Chọn 1 người hoặc 2 người; tóm tắt luật lấy từ config.js. */
function initMode(){
  $("backHome").onclick=()=>show("home");
  $("pick1").onclick=()=>{newGame(1);show("play");};
  $("pick2").onclick=()=>{newGame(2);show("play");};
  const T=CONFIG.timer;
  $("ruleChips").innerHTML=`
    <span class="chip">🎯 Tới <b>ô ${GOAL}</b> với ít nhất <b>${NEED} Điểm Lương tri</b></span>
    <span class="chip">⚠️ Chưa đủ điểm: về <b>ô ${BACK}</b></span>
    <span class="chip">📚 Đúng <b>${fmtPts(SCORE_R)}</b> · sai <b>${fmtPts(SCORE_W)}</b></span>
    <span class="chip">⛈️ Biến cố · ✨ Báu vật</span>`;
  $("mode1Desc").textContent=T[1]?`Mỗi câu hỏi có ${T[1]} giây. `:"Trả lời không giới hạn thời gian. ";
  $("mode2Desc").textContent=T[2]?`Mỗi câu hỏi có ${T[2]} giây. `:"Trả lời không giới hạn thời gian. ";
  $("p1name").textContent=CONFIG.players[0].name;$("p2name").textContent=CONFIG.players[1].name;
  [["m1a",0],["m2a",0],["m2b",1]].forEach(([id,i])=>{$(id).style.setProperty("--pc",PCOL[i]);$(id).innerHTML=portrait(i);});
}
