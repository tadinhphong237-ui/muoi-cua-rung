/* Minh họa
   Tranh thẻ bài, nhân vật toàn thân, chân dung. Hình gốc nằm trong assets/sprite.svg. */
const U=(id,x,y,w,h,cls="")=>`<use href="#${id}" x="${x}" y="${y}" width="${w}" height="${h}" class="${cls}"/>`;
const TREE=(x,y,s,c="#1f5235")=>`<g transform="translate(${x},${y})"><path d="M0 ${-s*2}L${s*.8} 0H${-s*.8}Z" fill="${c}"/><path d="M0 ${-s*2.6}L${s*.6} ${-s*.9}H${-s*.6}Z" fill="${c}"/></g>`;
const ARTS={
 q1:["#3f8a5a","#1d4a30",TREE(-80,100,26)+TREE(-30,100,18,"#2c6b45")+TREE(240,100,24)+TREE(290,100,18,"#2c6b45")+TREE(25,96,22)+TREE(178,100,26,"#2c6b45")+TREE(150,96,14)+`<path d="M40 52 Q100 40 170 56" stroke="#5a3d22" stroke-width="5" fill="none"/>`+U("ch-squirrel",72,10,52,52,"bob")],
 q2:["#93a6b0","#5b707b",`<path d="M0 100 L40 40 L70 62 L110 24 L160 70 L200 50 L200 100Z" fill="#6f8590"/><ellipse cx="100" cy="96" rx="120" ry="16" fill="#fff" opacity=".7"/>`+U("ch-monkey",68,18,64,64,"bob")],
 q3:["#f6d98a","#a7c57f",`<circle cx="100" cy="60" r="60" fill="#fff" opacity=".35"/>`+U("ch-tuhuyen",-120,40,56,56)+U("ch-tuhuyen",-40,50,46,46)+U("ch-tuhuyen",210,48,50,50)+U("ch-tuhuyen",280,40,56,56)+U("ch-tuhuyen",52,2,96,96,"bob")],
 rain:["#6f8fa5","#3e5f72",TREE(30,100,18,"#1c4a34")+TREE(176,100,22,"#1c4a34")+U("ch-rain",55,0,90,90,"bob")],
 mist:["#a6b6be","#6a7f89",U("ch-mist",50,5,100,100,"bob")],
 rocks:["#b9c4ca","#8090a0",U("ch-rocks",50,4,100,100,"bob")],
 stream:["#efe1bb","#cbb68a",U("ch-stream",40,0,120,100,"bob")],
 thorn:["#b6d39d","#7fa865",U("ch-thorn",50,4,100,100,"bob")],
 monkey:["#3f8a5a","#1d4a30",TREE(26,100,20)+TREE(180,100,24)+U("ch-monkey",62,14,76,76,"bob")],
 birds:["#f8e2a2","#e7b765",U("ch-birds",50,0,100,100,"bob")],
 wind:["#a9c8d8","#6d93a8",U("ch-wind",50,0,100,100,"bob")],
 grass:["#dcecc4","#a7c57f",U("ch-grass",55,2,90,96,"bob")],
 release:["#dcecc4","#a7c57f",U("ch-monkey",50,14,76,76)+U("ch-heart",118,4,40,40,"bob")],
 rice:["#f6e7bd","#e2c88a",U("ch-rice",55,4,90,90,"bob")],
 squirrel:["#bfe0a6","#7fa865",`<path d="M0 80 Q100 62 200 82" stroke="#6b4a2a" stroke-width="6" fill="none"/>`+U("ch-squirrel",68,8,70,70,"bob")],
 hoatai:["#e7efe0","#b9cbb0",U("ch-hoatai",40,0,120,100,"bob")],
 family:["#cfe3b0","#8fb46e",U("ch-monkey",22,22,70,70)+U("ch-monkey",108,22,70,70)+U("ch-monkey",76,52,44,44,"bob")+U("ch-heart",84,2,30,30,"bob")],
 end:["#f6d98a","#9cc47a",`<circle cx="100" cy="64" r="70" fill="#fff" opacity=".35"/>`+U("ch-tuhuyen",-190,30,70,70)+U("ch-tuhuyen",320,30,70,70)+U("ch-tuhuyen",-110,46,50,50)+U("ch-tuhuyen",260,46,50,50)+U("ch-monkey",-30,28,70,70)+U("ch-monkey",160,28,70,70)+U("ch-monkey",22,56,40,40,"bob")+U("ch-tuhuyen",62,2,76,94,"bob")+U("ch-heart",142,4,26,26,"bob")]
};
function art(k,h=120){const a=ARTS[k];if(!a) return "";return `<div class="art" style="height:${h}px"><svg viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet" style="overflow:visible" aria-hidden="true"><defs><linearGradient id="ag${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a[0]}"/><stop offset="1" stop-color="${a[1]}"/></linearGradient></defs><rect x="-600" width="1400" height="100" fill="url(#ag${k})"/>${a[2]}</svg></div>`;}
// Nhân vật toàn thân làm quân cờ: gốc toạ độ ở giữa hai bàn chân, cao ~76
function charSVG(i){
  const D=i===0;
  const coat=D?"#6b4a2a":"#4f7a4a",coatHi=D?"#8a6440":"#628f5c",pant=D?"#3b2a1d":"#b49a64",boot=D?"#2a1b10":"#5a3a1e",skin=D?"#f1c9a0":"#e9b98f";
  const leg=(s)=>`<g class="leg ${s<0?"l":"r"}"><rect x="${s<0?-8:2}" y="-24" width="6" height="18" rx="2" fill="${pant}"/><rect x="${s<0?-10:1}" y="-8" width="9" height="8" rx="2.5" fill="${boot}"/></g>`;
  const arm=(s,extra="")=>`<g class="arm ${s<0?"l":"r"}"><path d="M${s*11} -44 Q${s*15} -36 ${s*15} -28" stroke="${coat}" stroke-width="6.5" fill="none" stroke-linecap="round"/><circle cx="${s*15}" cy="-26" r="3.2" fill="${skin}"/>${extra}</g>`;
  const bundle=D?`<ellipse cx="17" cy="-22" rx="6" ry="4.5" fill="#3f8a46"/><ellipse cx="17" cy="-24" rx="4" ry="3" fill="#fbf7ec"/>`:"";
  const pack=D?"":`<rect x="-12" y="-46" width="24" height="22" rx="5" fill="#8a5a2e"/><rect x="-10" y="-30" width="20" height="6" rx="2" fill="#6e4220"/>`;
  const body=D
   ?`<path d="M-13 -20 Q-15 -40 -10 -45 L10 -45 Q15 -40 13 -20Z" fill="${coat}"/><path d="M0 -45 V-20" stroke="${coatHi}" stroke-width="2"/><rect x="-13" y="-28" width="26" height="3" fill="#3b2a1d"/><path d="M-6 -45 L0 -38 L6 -45Z" fill="#a37a52"/>`
   :`<path d="M-12 -22 Q-13 -40 -9 -45 L9 -45 Q13 -40 12 -22Z" fill="${coat}"/><path d="M-12 -26 h24 v4 h-24Z" fill="#7a5c2e"/><path d="M-8 -45 Q0 -38 8 -45 L7 -41 Q0 -35 -7 -41Z" fill="#e05aa0"/><path d="M5 -40 l5 8" stroke="#e05aa0" stroke-width="3" stroke-linecap="round"/>`;
  const head=D
   ?`<rect x="-3" y="-49" width="6" height="5" fill="${skin}"/><ellipse cx="0" cy="-55" rx="8.5" ry="9.5" fill="${skin}"/><path d="M-8 -54 Q-8 -41 0 -38 Q8 -41 8 -54 Q5 -49 0 -49 Q-5 -49 -8 -54Z" fill="#f4f4f0"/><path d="M-4 -50.5 Q0 -53 4 -50.5 Q2 -49 0 -50 Q-2 -49 -4 -50.5Z" fill="#fff"/><circle cx="-3" cy="-56" r="1.2" fill="#2a1d14"/><circle cx="3" cy="-56" r="1.2" fill="#2a1d14"/><path d="M-6 -59 h4 M2 -59 h4" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><path d="M-9 -60 Q-9 -71 0 -71.5 Q9 -71 9 -60Z" fill="#7a4e2c"/><rect x="-10.5" y="-63" width="21" height="5" rx="2.5" fill="#cfa274"/>`
   :`<rect x="-3" y="-49" width="6" height="5" fill="${skin}"/><ellipse cx="0" cy="-55" rx="8" ry="9" fill="${skin}"/><path d="M-8 -56 Q-8 -62 0 -62.5 Q8 -62 8 -56 Q5 -59 0 -59 Q-5 -59 -8 -56Z" fill="#3a2516"/><circle cx="-3" cy="-55" r="1.2" fill="#2a1d14"/><circle cx="3" cy="-55" r="1.2" fill="#2a1d14"/><path d="M-2.5 -51 Q0 -49 2.5 -51" stroke="#8a4b2e" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M-9 -60 Q-8.5 -72 0 -72 Q8.5 -72 9 -60Z" fill="#dcc48e"/><rect x="-8.5" y="-63" width="17" height="2.6" fill="#7a5c2e"/><ellipse cx="0" cy="-60" rx="13.5" ry="2.6" fill="#c9ad72"/>`;
  return `<g class="chr">${pack}${leg(-1)}${leg(1)}${arm(-1)}${body}${arm(1,bundle)}${head}</g>`;
}
function portrait(i){return `<svg viewBox="0 0 100 100" aria-hidden="true"><use href="#${CH[i]}" x="-6" y="4" width="112" height="112"/></svg>`;}
