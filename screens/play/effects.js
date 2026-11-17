/* Màn chơi · Hiệu ứng
   Gợn sóng, điểm bay lên, mưa, sương, đá lở, gió, chim, hoa rơi. */
/* ---------- hiệu ứng ---------- */
function ripple(n,small){
  if(RM) return;const [x,y]=PTS[n];const c=document.createElementNS("http://www.w3.org/2000/svg","circle");
  c.setAttribute("cx",x);c.setAttribute("cy",y);c.setAttribute("r",small?18:32);c.setAttribute("class","rip"+(small?" s":""));
  $("fxg").append(c);setTimeout(()=>c.remove(),800);
}
function pawnXY(i){const r=$("pw"+i).getBoundingClientRect(),a=$("fxl").getBoundingClientRect();return [r.left+r.width/2-a.left,r.top-a.top];}
function el(cls,css,html=""){const d=document.createElement("div");d.className=cls;Object.assign(d.style,css);d.innerHTML=html;$("fxl").append(d);return d;}
function floatText(i,txt,good){const [x,y]=pawnXY(i);const d=el("floater",{left:x+"px",top:y+"px",color:good?"#b6f5a8":"#ffb3a6"},txt);setTimeout(()=>d.remove(),1400);}
function burst(i,kind){
  if(RM||!kind) return;const [x,y]=pawnXY(i);
  for(let k=0;k<16;k++){const a=k/16*Math.PI*2,r=60+Math.random()*50;
    const d=el("ptc",{left:x+"px",top:(y+20)+"px","--dx":Math.cos(a)*r+"px","--dy":Math.sin(a)*r-30+"px",color:kind==="heart"?"#ff6b85":"#ffe08a"},kind==="heart"?"❤":"✦");
    setTimeout(()=>d.remove(),1100);}
}
function weather(kind){
  if(RM||!kind) return;const W=$("fxl").clientWidth,H=$("fxl").clientHeight,bag=[];
  if(kind==="rain"||kind==="splash"){for(let k=0;k<(kind==="rain"?110:45);k++) bag.push(el("drop",{left:Math.random()*W+"px",animationDelay:Math.random()*1.2+"s",animationDuration:(.45+Math.random()*.35)+"s"}));bag.push(el("tint",{background:"rgba(40,70,100,.25)"}));}
  if(kind==="mist"){for(let k=0;k<5;k++) bag.push(el("mistfx",{top:(10+k*17)+"%",animationDelay:k*.15+"s"}));}
  if(kind==="rocks"){const a=document.querySelector(".arena");a.classList.remove("shake");void a.offsetWidth;a.classList.add("shake");
    for(let k=0;k<16;k++) bag.push(el("rock",{left:Math.random()*W+"px",width:(10+Math.random()*22)+"px",height:(8+Math.random()*16)+"px",animationDelay:Math.random()*.6+"s"}));}
  if(kind==="wind"){for(let k=0;k<26;k++) bag.push(el("leaf",{top:Math.random()*H+"px",animationDelay:Math.random()*1+"s"}));}
  if(kind==="birds"){bag.push(el("tint",{background:"rgba(255,240,200,.35)"}));for(let k=0;k<12;k++) bag.push(el("fbird",{left:(W*.3+Math.random()*W*.4)+"px",top:(H*.4+Math.random()*H*.3)+"px","--dx":(Math.random()*600-300)+"px",animationDelay:Math.random()*.4+"s"},`<svg viewBox="-10 -6 20 8" width="34" height="14"><path d="M-8 0 q4 -6 8 0 q4 -6 8 0" stroke="#1f2a24" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`));}
  if(kind==="hit"){bag.push(el("tint hitv",{}));}
  setTimeout(()=>bag.forEach(b=>b.remove()),2600);
}


/* ---------- cánh hoa khi thắng ---------- */
function petals(){
  if(RM) return;
  const c=$("fx"),x=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;
  const ps=[...Array(140)].map(()=>({x:Math.random()*c.width,y:-Math.random()*c.height,r:4+Math.random()*6,v:1.5+Math.random()*2.5,a:Math.random()*6,s:.02+Math.random()*.04,col:Math.random()<.75?"#fff":"#f2c14e"}));
  let t=0;(function f(){x.clearRect(0,0,c.width,c.height);
    ps.forEach(p=>{p.y+=p.v;p.a+=p.s;p.x+=Math.sin(p.a)*1.2;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillStyle=p.col;x.beginPath();x.ellipse(0,0,p.r,p.r*.55,0,0,Math.PI*2);x.fill();x.restore();});
    if(++t<360) requestAnimationFrame(f);else x.clearRect(0,0,c.width,c.height);})();
}
