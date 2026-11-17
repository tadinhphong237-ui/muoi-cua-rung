/* Khởi động
   Nạp HTML từng màn hình, gắn sự kiện, vẽ cảnh rồi vào màn hình chính. */
const SCREENS=["home","mode","play","end"];
async function loadPartials(){
  const get=u=>fetch(u).then(r=>{if(!r.ok) throw new Error(u);return r.text();});
  const [sprite,...parts]=await Promise.all(["assets/sprite.svg",...SCREENS.map(n=>`screens/${n}/${n}.html`)].map(get));
  $("sprite").innerHTML=sprite;
  $("app").innerHTML=parts.join("\n");
}
function start(data){
  if(data&&data.players){
    newGame(data.mode,{...data,players:data.players.map(p=>({...p}))});
    if(data.screen==="end"&&S.over) showEnd(); else show(data.screen||"play");
  } else {newGame(2);show("home");}
}
(async()=>{
  try{await loadPartials();}
  catch(e){
    document.body.innerHTML=`<div style="padding:40px;font:16px system-ui;color:#fff;background:#0c1f17;min-height:100vh"><h2>Không nạp được các màn hình</h2><p>Trình duyệt chặn đọc file khi mở trực tiếp bằng cách bấm đúp vào index.html.</p><p>Hãy mở qua máy chủ: dùng link GitHub Pages, hoặc tiện ích <b>Live Server</b> trong VS Code, hoặc chạy lệnh <code>python -m http.server</code> trong thư mục game rồi vào <code>http://localhost:8000</code>.</p></div>`;
    return;
  }
  initHome();initMode();initPlay();
  document.querySelectorAll("svg.scene").forEach((s,k)=>drawScene(s,11+k));
  window.claude?.hot?.snapshot?.(()=>({screen:SCREEN,mode:S.mode,players:S.players,cur:S.cur,over:S.over,winner:S.winner,decks:S.decks,logs:S.logs}));
  window.claude?.hot?.ready?window.claude.hot.ready(start):start(window.claude?.hot?.data??{});
})();
