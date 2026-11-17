/* Màn hình chính
   Nút Chơi dẫn sang màn chọn chế độ. */
function initHome(){
  $("btnPlay").onclick=()=>{tone(660,.12,"triangle",.06);show("mode");};
  makePetals();
  drawHomeFg($("homeFg"));
}
