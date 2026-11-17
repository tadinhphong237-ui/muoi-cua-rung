/* Co giãn giao diện theo kích thước màn hình
   Đặt biến CSS --k: 1 ở khung 1280×720; to hơn trên màn lớn/máy chiếu (tối đa 2.4),
   nhỏ hơn trên điện thoại ngang (tối thiểu 0.7). Điện thoại dọc giữ 1 vì có bố cục riêng. */
function applyScale(){
  const W=innerWidth,H=innerHeight;
  let k=Math.min(W/1280,H/720);
  if(W<=760&&H>W) k=1;
  k=Math.max(.7,Math.min(2.4,k));
  document.documentElement.style.setProperty("--k",k.toFixed(3));
}
applyScale();
addEventListener("resize",applyScale);
