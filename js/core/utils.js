/* Tiện ích & hằng số dùng chung
   Đọc luật từ config.js, các hàm nhỏ dùng ở mọi màn hình. */
/* Hằng số dùng chung, lấy từ config.js */
const R_=CONFIG.rules;
const GOAL=R_.goal,NEED=R_.need,BACK=R_.back,START_PTS=R_.startPoints,MIN_PTS=R_.minPoints;
const SCORE_R=R_.scoreRight,SCORE_W=R_.scoreWrong;
const CELLS=[null,...CONFIG.cells.map(c=>[c.name,c.type])];
const TYPE=Object.fromEntries(Object.entries(CONFIG.cellTypes).map(([k,v])=>[k,[v.icon,v.color,v.label]]));
const EVENTS=CONFIG.events,TREASURES=CONFIG.treasures;
const PCOL=CONFIG.players.map(p=>p.color);
const CH=CONFIG.players.map(p=>p.character);
const fmtPts=n=>(n>0?"+":"−")+Math.abs(n);
const clampPts=n=>Math.max(MIN_PTS,n);
const $=id=>document.getElementById(id);
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
let S,PTS=[];
function rng(seed){return()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const stageOf=n=>n<=R_.stageEnds[0]?1:n<=R_.stageEnds[1]?2:3;
