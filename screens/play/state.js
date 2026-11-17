/* Màn chơi · Trạng thái ván
   Bộ thẻ không lặp, tạo ván mới. */
/* ---------- trạng thái ---------- */
function draw(key,src){if(!S.decks[key]||!S.decks[key].length) S.decks[key]=shuffle(src.map((_,i)=>i));return src[S.decks[key].pop()];}
function left(key,n){return S.decks[key]?S.decks[key].length:n;}
function newGame(mode,restore){
  if(S&&S.timer) clearInterval(S.timer);
  const mk=(name,tag)=>({name,tag,pos:1,pts:START_PTS,skip:0,turns:0,ok:0,ng:0,ev:0,tr:0,back:0});
  const players=CONFIG.players.slice(0,mode).map(p=>mk(p.name,p.tag));
  S=restore||{mode,players,cur:0,over:false,decks:{},logs:[]};S.busy=false;S.timer=null;
  $("modeLbl").textContent=S.mode===1?"Chế độ 1 người · Tự khám phá":"Chế độ 2 người · Thi đấu";
  if(!restore) log(S.mode===1?"Bắt đầu hành trình một mình. Chúc Ông Diểu thượng lộ bình an!":"Bắt đầu thi đấu 2 người. Ông Diểu đi trước.");
  closeCard();render();
}
