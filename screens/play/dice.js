/* Màn chơi · Xúc xắc
   Ném 1 viên xúc xắc ra vị trí ngẫu nhiên trên bàn. */
/* ---------- xúc xắc ---------- */
const FACE={1:[0,0],2:[-90,0],3:[0,-90],4:[0,90],5:[90,0],6:[0,180]};
let spins=0;
async function rollDie(){
  const v=1+Math.floor(Math.random()*6);spins+=2;
  const st=$("diceStage"),A=$("bdA"),lift=A.querySelector(".lift"),cube=A.querySelector(".cube"),shd=A.querySelector(".shd"),badge=$("dbadge");
  if(!cube.innerHTML) cube.innerHTML=$("cube").innerHTML;
  [A,lift,cube,shd].forEach(e=>e.getAnimations().forEach(x=>x.cancel()));
  badge.classList.remove("on");
  const W=st.clientWidth,H=st.clientHeight;
  const tx=(Math.random()-.5)*W*.55,ty=(Math.random()-.5)*H*.45;   // điểm dừng ngẫu nhiên trên bàn
  const sx=W*.42,sy=H*.4,rz=(Math.random()<.5?-1:1)*(40+Math.random()*80);
  const [fx,fy]=FACE[v],k=360*spins;
  const D=RM?1:CONFIG.speed.dice;
  // cỡ xúc xắc theo cạnh ngắn của màn hình: 13%, tối thiểu 56px, tối đa 140px (gốc 110px)
  const K=Math.max(56,Math.min(140,Math.min(innerWidth,innerHeight)*.13))/110;
  badge.style.setProperty("--k",K.toFixed(3));
  st.classList.add("on");
  if(!RM){[0,.06,.12].forEach(s=>tone(200+Math.random()*180,.05,"square",.03,s));[.56,.97,1.2].forEach((s,i)=>tone(130,.09,"sine",.09-i*.025,s));}
  // di chuyển ngang: ném từ góc nút Tung, chậm dần đến điểm dừng
  A.animate([{transform:`translate(${sx}px,${sy}px) rotate(0deg) scale(${.55*K})`},{transform:`translate(${tx}px,${ty}px) rotate(${rz}deg) scale(${K})`}],{duration:D,easing:"cubic-bezier(.18,.7,.28,1)",fill:"forwards"});
  // nảy lên xuống, mỗi lần thấp dần
  const B=[[0,0,"ease-out"],[.2,-130,"ease-in"],[.42,0,"ease-out"],[.58,-52,"ease-in"],[.72,0,"ease-out"],[.81,-16,"ease-in"],[.89,0,"linear"],[1,0]];
  lift.animate(B.map(([o,y,e])=>({offset:o,transform:`translateY(${y}px)`,easing:e||"linear"})),{duration:D,fill:"forwards"});
  shd.animate(B.map(([o,y,e])=>({offset:o,transform:`scale(${1+y/260})`,opacity:1+y/200,easing:e||"linear"})),{duration:D,fill:"forwards"});
  // xúc xắc lộn vòng rồi dừng đúng mặt
  await cube.animate([{transform:`rotateX(${fx+k-900}deg) rotateY(${fy+k-720}deg)`},{transform:`rotateX(${fx+k}deg) rotateY(${fy+k}deg)`}],{duration:RM?1:D*.86,easing:"cubic-bezier(.2,.65,.3,1)",fill:"forwards"}).finished;
  $("cube").style.transform=`rotateX(${fx+k}deg) rotateY(${fy+k}deg)`;
  await sleep(RM?0:D*.14+120);
  if(!RM) lift.animate([{transform:"translateY(0) scale(1)"},{transform:"translateY(-6px) scale(1.14)"},{transform:"translateY(0) scale(1.08)"}],{duration:360,easing:"ease-out",fill:"forwards"});
  badge.style.left=`calc(50% + ${tx.toFixed(0)}px)`;badge.style.top=`calc(50% + ${(ty+88*K).toFixed(0)}px)`;
  badge.innerHTML=`Đi <b>${v}</b> ô`;badge.classList.add("on");tone(660,.15,"triangle",.07);tone(880,.18,"triangle",.07,.1);
  await sleep(RM?300:1050);
  st.classList.remove("on");badge.classList.remove("on");
  await sleep(RM?0:300);
  return v;
}
