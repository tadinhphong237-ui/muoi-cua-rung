/* Màn chơi · Bàn cờ
   Vẽ bản đồ, con đường, 30 ô, quân cờ và cho quân cờ di chuyển. */
/* ---------- bàn cờ ---------- */
function buildPath(){
  // Hành trình theo cốt truyện: cổng rừng (dưới trái) → rừng dâu da, suối cạn → leo vách đá men miệng vực → sườn đồi → đỉnh hoa tử huyền (trên phải)
  const P=[[70,630],[170,655],[275,620],[375,648],[475,628],[570,600],[660,632],[765,648],[868,618],[935,548],
           [890,470],[790,440],[690,458],[590,420],[490,398],[390,420],[290,440],[195,410],[118,348],
           [150,272],[250,240],[350,262],[450,232],[545,190],[640,210],[735,170],[828,128],[910,82]];
  const pts=[];const n=P.length;
  for(let i=0;i<n-1;i++){
    const p0=P[Math.max(i-1,0)],p1=P[i],p2=P[i+1],p3=P[Math.min(i+2,n-1)];
    for(let s=0;s<30;s++){const t=s/30,t2=t*t,t3=t2*t;
      pts.push([0,1].map(k=>.5*((2*p1[k])+(-p0[k]+p2[k])*t+(2*p0[k]-5*p1[k]+4*p2[k]-p3[k])*t2+(-p0[k]+3*p1[k]-3*p2[k]+p3[k])*t3)));}
  }
  pts.push(P[n-1]);
  const cum=[0];for(let i=1;i<pts.length;i++) cum.push(cum[i-1]+Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]));
  const total=cum.at(-1);
  const at=d=>{let i=1;while(i<cum.length-1&&cum[i]<d) i++;const u=(d-cum[i-1])/((cum[i]-cum[i-1])||1);return [pts[i-1][0]+(pts[i][0]-pts[i-1][0])*u,pts[i-1][1]+(pts[i][1]-pts[i-1][1])*u];};
  return {at,total};
}
const MEADOW_EDGE=x=>370-x*.12;   // ranh giới đồi hoa / vách đá
const FOREST_EDGE=x=>535+Math.sin(x/90)*10; // ranh giới vách đá / rừng
function drawBoard(){
  const P=buildPath(),svg=$("board");
  PTS=[null];for(let i=0;i<30;i++) PTS.push(P.at(P.total*i/29));
  const dense=[];for(let d=0;d<=P.total;d+=8) dense.push(P.at(d));
  const near=(x,y,m)=>dense.some(([a,b])=>Math.hypot(a-x,b-y)<m);
  const R=rng(7);let h="";
  h+=`<defs>
   <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fb3c9"/><stop offset=".55" stop-color="#f7d79a"/><stop offset="1" stop-color="#fbe6b4"/></linearGradient>
   <linearGradient id="gM" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe39a"/><stop offset="1" stop-color="#93bf6e"/></linearGradient>
   <linearGradient id="gPeak" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8f0b5"/><stop offset="1" stop-color="#a9cc78"/></linearGradient>
   <linearGradient id="gC" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9aa9ad"/><stop offset="1" stop-color="#5c6f74"/></linearGradient>
   <linearGradient id="gF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f6a45"/><stop offset="1" stop-color="#173a27"/></linearGradient>
   <radialGradient id="gAbyss" cx=".5" cy=".55" r=".6"><stop offset="0" stop-color="#0d1417"/><stop offset=".7" stop-color="#2b383d"/><stop offset="1" stop-color="#5c6f74" stop-opacity="0"/></radialGradient>
   <radialGradient id="glow"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
   <radialGradient id="sun"><stop offset="0" stop-color="#fff6d8"/><stop offset=".35" stop-color="#ffe08a" stop-opacity=".8"/><stop offset="1" stop-color="#ffe08a" stop-opacity="0"/></radialGradient>
   <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9"/></filter>
   <clipPath id="pcl"><circle cy="-46" r="17"/></clipPath>
   <filter id="sh" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-opacity=".45"/></filter></defs>`;

  /* ---- nền: bầu trời xuân, núi xa, đồi hoa, vách đá, rừng ---- */
  h+=`<rect x="-3000" y="-3000" width="7000" height="3300" fill="url(#gSky)"/>
      <circle cx="930" cy="40" r="170" fill="url(#sun)"/>
      <path d="M-3000 200 L-200 120 L60 40 L180 110 L330 30 L480 120 L600 60 L700 100 L1200 20 L4000 160 L4000 400 L-3000 400Z" fill="#a9c3c4" opacity=".75"/>
      <path d="M-3000 240 L0 160 L140 100 L300 170 L420 120 L560 190 L4000 230 L4000 400 L-3000 400Z" fill="#8fb0a8" opacity=".8"/>`;
  // đồi hoa + đỉnh núi nơi hoa tử huyền nở
  h+=`<path d="M-3000 420 L-3000 260 Q-200 250 0 280 Q200 210 420 205 Q620 180 760 110 Q880 30 940 40 Q1000 50 1060 120 Q1300 220 4000 260 L4000 420Z" fill="url(#gM)"/>
      <path d="M700 260 Q780 120 900 52 Q960 30 1010 70 Q1080 140 1120 280Z" fill="url(#gPeak)" opacity=".85"/>`;
  // vách đá (khối đá xám có vân)
  const top=x=>MEADOW_EDGE(x);
  let cliff=`M-3000 ${FOREST_EDGE(0)+40}`;for(let x=-200;x<=1200;x+=50) cliff+=` L${x} ${FOREST_EDGE(x)+ (x%100?12:-6)}`;
  cliff+=` L4000 600 L4000 ${top(1000)}`;for(let x=1200;x>=-200;x-=40) cliff+=` L${x} ${top(x)+(x%80?0:10)}`;cliff+=` L-3000 ${top(0)}Z`;
  h+=`<path d="${cliff}" fill="url(#gC)"/>`;
  for(let k=0;k<26;k++){const x=-100+R()*1200,y=top(x)+20+R()*(FOREST_EDGE(x)-top(x)-30);if(near(x,y,40)) continue;
    h+=`<path d="M${x.toFixed(0)} ${y.toFixed(0)} l${(8+R()*20).toFixed(0)} ${(18+R()*20).toFixed(0)}" stroke="#4d5e63" stroke-width="2" opacity=".6"/>`;}
  // miệng vực sâu giữa vách đá và đồi hoa, sương mù cuộn
  h+=`<path d="M270 330 Q360 292 470 312 Q560 300 640 318 Q740 300 830 330 Q760 372 640 362 Q540 382 440 364 Q340 376 270 330Z" fill="url(#gAbyss)"/>
      <path d="M270 330 Q360 292 470 312 Q560 300 640 318 Q740 300 830 330" stroke="#3f4d52" stroke-width="5" fill="none" stroke-linecap="round"/>
      <g filter="url(#blur)" opacity=".8" pointer-events="none">${[[330,345,70,14,9],[470,352,90,16,12],[620,348,80,14,10],[760,340,70,12,11]].map(([x,y,rx,ry,d])=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#fff"><animate attributeName="cy" values="${y};${y-26};${y}" dur="${d}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".4;.95;.4" dur="${d}s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;40 0;0 0" dur="${d*1.7}s" repeatCount="indefinite"/></ellipse>`).join("")}</g>`;
  // rừng
  let forest=`M-3000 3000 L-3000 ${FOREST_EDGE(0)}`;for(let x=-200;x<=1200;x+=25) forest+=` L${x} ${FOREST_EDGE(x)}`;forest+=` L4000 ${FOREST_EDGE(1000)} L4000 3000Z`;
  h+=`<path d="${forest}" fill="url(#gF)"/><rect x="-3000" y="700" width="7000" height="3000" fill="#173a27"/>`;
  // suối cạn uốn lượn dưới chân rừng + mó nước đầu nguồn
  h+=`<path d="M-60 700 Q120 676 260 694 T560 690 T860 676 Q940 668 985 640" stroke="#cdb98d" stroke-width="22" fill="none" stroke-linecap="round" opacity=".9"/>
      <path d="M-60 700 Q120 676 260 694 T560 690 T860 676 Q940 668 985 640" stroke="#9cc3dd" stroke-width="4" fill="none" stroke-dasharray="14 12" stroke-linecap="round"><animate attributeName="stroke-dashoffset" values="0;-52" dur="2.5s" repeatCount="indefinite"/></path>
      <ellipse cx="985" cy="632" rx="34" ry="13" fill="#7fb7d8" stroke="#cdb98d" stroke-width="5"/><ellipse cx="978" cy="628" rx="12" ry="3" fill="#fff" opacity=".6"><animate attributeName="rx" values="8;16;8" dur="3s" repeatCount="indefinite"/></ellipse>`;

  /* ---- trang trí theo vùng ---- */
  let deco="";
  for(let i=0;i<1100;i++){
    const x=-800+R()*2600,y=-200+R()*1200;if(near(x,y,56)) continue;
    if(x>255&&x<845&&y>285&&y<385) continue; // miệng vực
    if(y>FOREST_EDGE(x)+12){const s=12+R()*16,c=R()<.5?"#1f5235":"#2c6b45";
      deco+=`<g transform="translate(${x|0},${y|0})"><rect x="-2" y="0" width="4" height="${s*.5}" fill="#3b2a1a"/><g>${(i%3===0&&x>-100&&x<1100)?`<animateTransform attributeName="transform" type="rotate" values="-3;3;-3" dur="${(3+R()*3).toFixed(1)}s" repeatCount="indefinite"/>`:""}<path d="M0 ${-s*1.6}L${s*.7} 0H${-s*.7}Z" fill="${c}"/><path d="M0 ${-s*2.1}L${s*.55} ${-s*.7}H${-s*.55}Z" fill="${c}"/></g></g>`;}
    else if(y>top(x)+14&&y<FOREST_EDGE(x)-10){if(R()<.55) continue;const s=8+R()*16;
      deco+=`<path transform="translate(${x|0},${y|0})" d="M${-s} 0L${-s*.4} ${-s*.9}L${s*.3} ${-s*.7}L${s} 0Z" fill="${R()<.5?"#6d7f86":"#b3bfc3"}"/>`;}
    else if(y<top(x)-8&&y>Math.max(60,top(x)-260)){if(R()<.35) continue;const c=R()<.6?"#fff":"#f2a93b";
      deco+=`<g transform="translate(${x|0},${y|0})">${[0,72,144,216,288].map(a=>`<circle cx="${(Math.cos(a*Math.PI/180)*3.5).toFixed(1)}" cy="${(Math.sin(a*Math.PI/180)*3.5).toFixed(1)}" r="2.6" fill="${c}"/>`).join("")}<circle r="1.8" fill="#e0a21a"/></g>`;}
  }
  h+=deco;

  /* ---- địa danh theo truyện ---- */
  // bản làng & cổng rừng ở điểm xuất phát
  const house=(x,y,s)=>`<g transform="translate(${x},${y}) scale(${s})"><path d="M-22 -18 L0 -38 L22 -18Z" fill="#8a5a2e"/><rect x="-18" y="-18" width="36" height="16" fill="#d9b98a"/><rect x="-5" y="-14" width="9" height="12" fill="#6b4a2a"/><path d="M-16 -2 V8 M16 -2 V8 M0 -2 V8" stroke="#6b4a2a" stroke-width="3"/><path d="M8 -36 v-8" stroke="#888" stroke-width="3"/><circle cx="8" cy="-50" r="5" fill="#ddd" opacity=".7"><animate attributeName="cy" values="-48;-70" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values=".7;0" dur="3s" repeatCount="indefinite"/></circle></g>`;
  h+=house(-60,590,1.1)+house(-10,560,.85);
  const [gx,gy]=PTS[1];
  h+=`<g transform="translate(${gx},${gy})"><path d="M-44 10 V-92 M44 10 V-92" stroke="#6b4a2a" stroke-width="8" stroke-linecap="round"/><path d="M-54 -92 Q0 -114 54 -92" stroke="#6b4a2a" stroke-width="9" fill="none" stroke-linecap="round"/><rect x="-38" y="-106" width="76" height="20" rx="4" fill="#e8cf9c" stroke="#6b4a2a" stroke-width="2"/><text y="-92" text-anchor="middle" font-family="Baloo 2" font-weight="800" font-size="12" fill="#5a3d22">CỔNG RỪNG</text></g>`;
  // rừng dâu da (tán cây có hoa li ti) với khỉ đu dây
  const dauda=(x,y,s)=>`<g transform="translate(${x},${y}) scale(${s})"><rect x="-4" y="0" width="8" height="34" fill="#5a3d22"/><circle cx="-16" cy="-4" r="20" fill="#2f6a45"/><circle cx="16" cy="-6" r="22" fill="#357a4f"/><circle cx="0" cy="-20" r="22" fill="#3f8a5a"/>${[[-20,-8],[10,-22],[18,-2],[-4,-4],[-10,-24]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="2.6" fill="#f2c14e"/>`).join("")}</g>`;
  h+=dauda(330,520,1)+dauda(705,522,1.05);
  [[330,530,3.2],[705,532,3.8]].forEach(([x,y,d])=>{h+=`<g transform="translate(${x+14},${y})"><g><animateTransform attributeName="transform" type="rotate" values="-16;16;-16" keyTimes="0;.5;1" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" dur="${d}s" repeatCount="indefinite"/><path d="M0 0 Q3 10 0 20" stroke="#3f7a46" stroke-width="3" fill="none"/>${U("ch-monkey-hang",-13,16,26,31)}</g></g>`;});
  // sóc nhảy trên cành dâu da
  h+=`<path d="M470 548 Q520 538 570 548" stroke="#5a3d22" stroke-width="5" fill="none" stroke-linecap="round"/><g transform="translate(476,522)"><g><animateTransform attributeName="transform" type="translate" values="0 0;35 -14;70 0;70 0;35 -14;0 0;0 0" keyTimes="0;.1;.2;.5;.6;.7;1" dur="5s" repeatCount="indefinite"/>${U("ch-squirrel",0,0,26,26)}</g></g>`;
  // mỏm đá với con khỉ bị thương, bãi đá lở
  h+=`<path d="M560 395 L585 352 L620 345 L650 372 L640 398Z" fill="#7d8f99" stroke="#4d5e63" stroke-width="2"/>${U("ch-monkey",590,320,36,36)}`;
  h+=`<g fill="#6d7f86">${[[190,470,10],[214,478,7],[172,482,6],[236,468,5]].map(([x,y,r])=>`<polygon points="${x-r},${y} ${x},${y-r*1.2} ${x+r},${y} ${x+r*.4},${y+r*.6}"/>`).join("")}</g>`;
  // bụi gai trên lối rẽ, hoa vàng rủ, khóm tử huyền quanh đỉnh
  h+=U("ch-thorn",60,250,44,44)+U("ch-thorn",388,184,36,36);
  h+=U("ch-hoatai",600,240,60,50)+U("ch-hoatai",760,210,54,45);
  h+=U("ch-tuhuyen",950,70,58,58)+U("ch-tuhuyen",820,60,46,46)+U("ch-tuhuyen",860,150,40,40);
  // cánh hoa tử huyền bay quanh đỉnh
  h+=[...Array(10)].map((_,k)=>{const x=760+R()*240,d=6+R()*6;return `<ellipse rx="3" ry="1.8" fill="#fff" opacity=".9"><animateMotion path="M${x.toFixed(0)} ${(10+R()*40).toFixed(0)} q-40 60 -120 ${(120+R()*80).toFixed(0)}" dur="${d.toFixed(1)}s" begin="-${(R()*d).toFixed(1)}s" repeatCount="indefinite" rotate="auto"/></ellipse>`;}).join("");
  // đàn chim bay ngang trời
  h+=`<g pointer-events="none"><animateMotion path="M-250 60 C150 0 500 110 1250 20" dur="26s" repeatCount="indefinite"/>${[[0,0],[26,-12],[30,14],[56,0]].map(([x,y],k)=>`<g transform="translate(${x},${y})"><path d="M-8 0 q4 -6 8 0 q4 -6 8 0" stroke="#3a3326" stroke-width="2.5" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="scale" values="1 1;1 .3;1 1" dur="${(.5+k*.08).toFixed(2)}s" repeatCount="indefinite"/></path></g>`).join("")}</g>`;

  /* ---- con đường ---- */
  const d="M"+dense.map(p=>p.map(v=>v.toFixed(1)).join(" ")).join(" L");
  h+=`<path d="${d}" fill="none" stroke="#5a3d22" stroke-width="52" stroke-linecap="round" stroke-linejoin="round" opacity=".5"/>
      <path d="${d}" fill="none" stroke="#c9a46a" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="${d}" fill="none" stroke="#e8cf9c" stroke-width="3" stroke-dasharray="2 14" stroke-linecap="round"/>`;

  /* ---- biển gỗ đánh dấu chặng ---- */
  const sign=(x,y,a,b)=>`<g transform="translate(${x},${y})" filter="url(#sh)"><rect x="-3" y="-6" width="6" height="40" fill="#6b4a2a"/><path d="M-86 -34 H70 L84 -20 L70 -6 H-86Z" fill="#e8cf9c" stroke="#6b4a2a" stroke-width="3"/><text x="-4" y="-15" text-anchor="middle" font-family="Baloo 2" font-weight="800" font-size="14" fill="#5a3d22">${a} · ${b}</text></g>`;
  h+=sign(222,548,"CHẶNG 1","RỪNG THẲM")+sign(925,420,"CHẶNG 2","VÁCH ĐÁ")+sign(150,200,"CHẶNG 3","HOA NỞ");

  /* ---- ô ---- */
  for(let n=1;n<=30;n++){
    const [x,y]=PTS[n],[nm,t]=CELLS[n],[ic,col]=TYPE[t];
    if(n===GOAL){
      h+=`<g transform="translate(${x.toFixed(1)},${y.toFixed(1)})" filter="url(#sh)"><circle r="62" fill="url(#glow)"><animate attributeName="r" values="58;80;58" dur="3s" repeatCount="indefinite"/></circle><g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="40s" repeatCount="indefinite"/>${[...Array(8)].map((_,i)=>`<ellipse rx="13" ry="28" cy="-22" fill="#fff" stroke="#e7e2d0" transform="rotate(${i*45})"/>`).join("")}</g><circle r="19" fill="#f2c14e"/><text class="cellnum" y="6" text-anchor="middle">30</text></g>
          <text class="cellname" x="${(x-70).toFixed(1)}" y="${(y+6).toFixed(1)}" text-anchor="end" style="font-size:15px">Khóm hoa tử huyền</text>`;
      continue;}
    h+=`<g transform="translate(${x.toFixed(1)},${y.toFixed(1)})" filter="url(#sh)">
      ${n===BACK?`<circle r="40" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 6"/>`:""}
      <ellipse cy="5" rx="31" ry="29" fill="rgba(0,0,0,.35)"/>
      <circle r="31" fill="${col}" stroke="#fff" stroke-width="4"/>
      <circle r="25" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="2"/>
      <text y="9" text-anchor="middle" font-size="24">${ic}</text>
      <circle cx="22" cy="-22" r="12" fill="#fff"/><text class="cellnum" x="22" y="-17" text-anchor="middle" style="font-size:13px">${n}</text></g>
      <text class="cellname" x="${x.toFixed(1)}" y="${(y+50).toFixed(1)}" text-anchor="middle">${nm}${n===BACK?" ↩":""}</text>`;
  }
  h+=`<g id="fxg"></g>`;
  // quân cờ: nhân vật toàn thân
  [0,1].forEach(i=>{h+=`<g class="pawn" id="pw${i}" style="display:none"><g class="hop"><ellipse class="ring" rx="22" ry="8" cy="1" fill="none" stroke="${PCOL[i]}" stroke-width="4"/><ellipse rx="15" ry="5" cy="1" fill="rgba(0,0,0,.4)"/><g transform="scale(1.05)">${charSVG(i)}</g><path class="mark" d="M-7 -92 L7 -92 L0 -83Z" fill="#f2c14e" stroke="#fff" stroke-width="2"/></g></g>`;});
  svg.innerHTML=h;
  if(RM) svg.pauseAnimations?.();
}
function placePawns(){
  S.players.forEach((p,i)=>{
    const g=$("pw"+i);g.style.display="";
    const shared=S.players.length===2&&S.players[0].pos===S.players[1].pos;
    const [x,y]=PTS[p.pos];const dx=shared?(i?14:-14):0;
    g.style.transform=`translate(${x+dx}px,${y-6}px)`;
    g.classList.toggle("turn",i===S.cur&&!S.over);
  });
  if(S.players.length===1) $("pw1").style.display="none";
}
function hop(i){const h=$("pw"+i).querySelector(".hop");h.style.animation="none";void h.getBBox();h.style.animation="";}
async function walkTo(i,to,ms=CONFIG.speed.walkStep){
  const p=S.players[i];const dir=to>p.pos?1:-1;const g=$("pw"+i);g.classList.add("walking");
  while(p.pos!==to){p.pos+=dir;hop(i);SFX.step();placePawns();ripple(p.pos,true);await sleep(RM?20:ms);}
  g.classList.remove("walking");
}
