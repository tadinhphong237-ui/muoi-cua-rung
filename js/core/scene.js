/* Cảnh nền
   Cảnh rừng dùng cho màn hình chính, chọn chế độ, tổng kết. */
/* ---------- cảnh nền cho các màn hình ---------- */
function drawScene(svg,seed){
  const R=rng(seed),id="s"+seed;let h=`<defs>
   <linearGradient id="${id}sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b2219"/><stop offset=".45" stop-color="#2d5a46"/><stop offset=".72" stop-color="#e8b765"/><stop offset="1" stop-color="#f6dc9a"/></linearGradient>
   <radialGradient id="${id}glow"><stop offset="0" stop-color="#fff8e0" stop-opacity=".95"/><stop offset=".4" stop-color="#f2c14e" stop-opacity=".35"/><stop offset="1" stop-color="#f2c14e" stop-opacity="0"/></radialGradient></defs>
   <rect width="1600" height="900" fill="url(#${id}sky)"/><circle cx="800" cy="600" r="460" fill="url(#${id}glow)"/>`;
  const ridge=(base,amp,col,n)=>{let d=`M0 900 L0 ${base}`;for(let i=0;i<=n;i++){const x=i*1600/n;d+=` L${x.toFixed(0)} ${(base-R()*amp).toFixed(0)}`;}return `<path d="${d} L1600 900Z" fill="${col}"/>`;};
  h+=ridge(560,170,"#5d7e7b",9)+ridge(640,150,"#3e5f57",12);
  // rừng thông trải khắp chân cảnh (lớp tiền cảnh riêng ở màn hình chính vẽ đè lên giữa)
  for(let i=0;i<190;i++){
    const x=R()*1600,y=700+R()*230,s=26+R()*60*(y-650)/250,c=["#0e2a1c","#14382a","#1c4a34"][Math.floor(R()*3)];
    h+=`<g transform="translate(${x.toFixed(0)},${y.toFixed(0)})"><path d="M0 ${-s*2.4}L${s*.75} 0H${-s*.75}Z" fill="${c}"/><path d="M0 ${-s*3}L${s*.55} ${-s*1.1}H${-s*.55}Z" fill="${c}"/></g>`;}
  // chim bay
  h+=`<g><animateMotion path="M-200 260 C300 160 900 300 1800 180" dur="20s" repeatCount="indefinite"/>${[[0,0],[34,-16],[40,18],[74,0],[100,-10]].map(([x,y],k)=>`<g transform="translate(${x},${y})"><path d="M-12 0 q6 -8 12 0 q6 -8 12 0" stroke="#1f2a24" stroke-width="3" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="scale" values="1 1;1 .3;1 1" dur="${(.5+k*.07).toFixed(2)}s" repeatCount="indefinite"/></path></g>`).join("")}</g>`;
  svg.innerHTML=h;if(RM) svg.pauseAnimations?.();
}
/* Tiền cảnh màn hình chính: đồi hoa tử huyền, hai nhân vật, gia đình khỉ, sóc.
   Vẽ trong khung 600×360 neo đáy, luôn hiện trọn vẹn trên mọi màn hình. */
function drawHomeFg(svg){
  const R=rng(5);let h="";
  h+=`<ellipse cx="300" cy="372" rx="760" ry="112" fill="#7fa865"/>`;
  for(let i=0;i<260;i++){const x=-300+R()*1200,y=280+R()*80;if(y<372-112*Math.sqrt(Math.max(0,1-((x-300)/760)**2))+6) continue;
    h+=`<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(1.5+R()*2.2).toFixed(1)}" fill="${R()<.8?"#fff":"#f2c14e"}"/>`;}
  h+=`<path d="M300 380 C270 350 340 320 300 285" fill="none" stroke="#c9a46a" stroke-width="26" stroke-linecap="round"/>`;
  h+=`<use href="#ch-tuhuyen" x="250" y="232" width="100" height="100"/><use href="#ch-tuhuyen" x="150" y="270" width="70" height="70"/><use href="#ch-tuhuyen" x="380" y="266" width="76" height="76"/>`;
  // cây dâu da bên trái với gia đình nhà khỉ trên cành
  h+=`<rect x="14" y="196" width="16" height="170" fill="#5a3d22"/><circle cx="8" cy="176" r="40" fill="#2f6a45"/><circle cx="44" cy="168" r="34" fill="#3f8a5a"/>
      <path d="M26 214 Q110 200 196 210" stroke="#4a3220" stroke-width="9" fill="none" stroke-linecap="round"/>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="3s" repeatCount="indefinite"/><use href="#ch-monkey" x="56" y="146" width="62" height="62"/><use href="#ch-monkey" x="128" y="142" width="66" height="66"/><use href="#ch-monkey" x="104" y="174" width="38" height="38"/></g>`;
  // cây bên phải với khỉ đu dây
  h+=`<rect x="572" y="186" width="16" height="180" fill="#5a3d22"/><circle cx="586" cy="166" r="40" fill="#2f6a45"/><circle cx="552" cy="176" r="30" fill="#3f8a5a"/>
      <g transform="translate(548,190)"><g><animateTransform attributeName="transform" type="rotate" values="-18;18;-18" keyTimes="0;.5;1" calcMode="spline" keySplines=".45 0 .55 1;.45 0 .55 1" dur="3.4s" repeatCount="indefinite"/><path d="M0 0 Q5 26 0 50" stroke="#2f6a45" stroke-width="4" fill="none"/><use href="#ch-monkey-hang" x="-22" y="42" width="44" height="53"/></g></g>`;
  // sóc nhảy trên đồi
  h+=`<g transform="translate(430,300)"><g><animateTransform attributeName="transform" type="translate" values="0 0;28 -16;56 0;56 0;28 -16;0 0;0 0" keyTimes="0;.1;.2;.5;.6;.7;1" dur="5s" repeatCount="indefinite"/><use href="#ch-squirrel" width="40" height="40"/></g></g>`;
  // ông Diểu và Nhà thám hiểm đi trên lối mòn
  h+=`<g class="hero-chr" transform="translate(236,350) scale(1.45)">${charSVG(0)}</g><g class="hero-chr" transform="translate(318,356) scale(1.35)">${charSVG(1)}</g>`;
  svg.innerHTML=h;if(RM) svg.pauseAnimations?.();
}
function makePetals(){
  if(RM) return;
  $("petals").innerHTML=[...Array(22)].map(()=>`<span class="petal${Math.random()<.25?" g":""}" style="left:${(Math.random()*100).toFixed(1)}%;--dx:${(Math.random()*160-80).toFixed(0)}px;animation-duration:${(7+Math.random()*8).toFixed(1)}s;animation-delay:-${(Math.random()*12).toFixed(1)}s"></span>`).join("");
}
