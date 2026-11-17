/* =====================================================================
   CẤU HÌNH TRÒ CHƠI "MUỐI CỦA RỪNG"
   Sửa file này để đổi luật, người chơi, tên ô, thẻ bài, tốc độ, âm thanh.
   Không cần động vào code ở thư mục screens/ hay core/.
   Bộ câu hỏi nằm riêng ở data/questions.js.
   ===================================================================== */
const CONFIG = {

  /* ---------- Luật chơi ---------- */
  rules: {
    goal: 30,          // ô đích (Khóm hoa tử huyền)
    need: 10,          // số Điểm Lương tri tối thiểu để về đích
    back: 15,          // chưa đủ điểm khi tới đích thì quay về ô này
    startPoints: 5,    // điểm khởi đầu của mỗi người chơi
    minPoints: 0,      // điểm thấp nhất (không cho âm)
    scoreRight: 2,     // trả lời đúng
    scoreWrong: -1,    // trả lời sai hoặc hết giờ
    stageEnds: [10, 20] // ô cuối của chặng 1 và chặng 2 (chặng 3 là phần còn lại)
  },

  /* Thời gian trả lời mỗi câu (giây) theo chế độ. 0 = không giới hạn */
  timer: { 1: 0, 2: 30 },

  /* ---------- Người chơi ---------- */
  // character: tên hình nhân vật trong assets/sprite.svg (ch-dieu, ch-explorer)
  players: [
    { name: "Ông Diểu",      tag: "Người chơi 1", color: "#3b82c4", character: "ch-dieu" },
    { name: "Nhà thám hiểm", tag: "Người chơi 2", color: "#e05aa0", character: "ch-explorer" }
  ],

  /* ---------- Loại ô ---------- */
  // V = Văn học, B = Biến cố, T = Báu vật, E = Ô nghỉ, S = Xuất phát, G = Đích
  cellTypes: {
    V: { icon: "📚", color: "#4f97d6", label: "Văn học" },
    B: { icon: "⛈️", color: "#d0654c", label: "Biến cố" },
    T: { icon: "✨", color: "#f2c14e", label: "Báu vật" },
    E: { icon: "🌿", color: "#8fb59a", label: "Ô nghỉ" },
    S: { icon: "🚪", color: "#c9a46a", label: "Xuất phát" },
    G: { icon: "🌼", color: "#ffffff", label: "Đích" }
  },

  /* ---------- 30 ô trên bàn cờ (theo thứ tự từ ô 1) ---------- */
  cells: [
    { name: "Cổng rừng",     type: "S" }, { name: "Mưa xuân",    type: "V" }, { name: "Rừng ẩm",     type: "V" },
    { name: "Suối cạn",      type: "B" }, { name: "Cành dâu da", type: "V" }, { name: "Bãi cỏ",      type: "E" },
    { name: "Bầy khỉ",       type: "V" }, { name: "Nắm xôi nếp", type: "T" }, { name: "Mó nước",     type: "V" },
    { name: "Khỉ đầu đàn",   type: "B" }, { name: "Chân vách",   type: "V" }, { name: "Tiếng súng",  type: "V" },
    { name: "Sương mù",      type: "B" }, { name: "Miệng vực",   type: "V" }, { name: "Mỏm đá",      type: "E" },
    { name: "Khỉ bị thương", type: "V" }, { name: "Cỏ Lào",      type: "T" }, { name: "Núi lở",      type: "B" },
    { name: "Khỉ cái",       type: "V" }, { name: "Đường xuống", type: "V" }, { name: "Gai rừng",    type: "B" },
    { name: "Lối rẽ",        type: "V" }, { name: "Phóng sinh",  type: "T" }, { name: "Trách nhiệm", type: "V" },
    { name: "Gió lạnh",      type: "B" }, { name: "Thảm lá",     type: "E" }, { name: "Hoa vàng",    type: "V" },
    { name: "Hoa tai",       type: "T" }, { name: "Bụi gai",     type: "B" }, { name: "Hoa tử huyền", type: "G" }
  ],

  /* ---------- Thẻ Biến cố ----------
     pts: cộng/trừ điểm · move: tiến (+) / lùi (−) số ô · skip: mất lượt
     art: tranh minh họa (rain, mist, rocks, stream, thorn, monkey, birds, wind)
     fx: hiệu ứng màn hình (rain, splash, mist, rocks, hit, birds, wind) */
  events: [
    { t: "Mưa xuân trơn trượt", d: "Lối mòn ướt sũng, bạn trượt chân.", move: -2, art: "rain", fx: "rain" },
    { t: "Sương mù dưới vực", d: "Sương cuồn cuộn dâng lên, bạn phải lùi lại tìm đường.", move: -3, art: "mist", fx: "mist" },
    { t: "Núi lở", d: "Đá lở chắn lối, bạn bám chặt vào tảng đá chờ yên.", skip: 1, art: "rocks", fx: "rocks" },
    { t: "Lạc theo suối cạn", d: "Đi nhầm nhánh suối, vừa mất sức vừa mất đường.", move: -1, pts: -1, art: "stream", fx: "splash" },
    { t: "Gai rừng cào xước", d: "Bụi gai ngáng đường làm bạn nản lòng.", pts: -1, art: "thorn", fx: "hit" },
    { t: "Bị khỉ cái bám theo", d: "Bạn thấy tự ái vì bị theo dõi, lương tri dao động.", pts: -1, art: "monkey", fx: "hit" },
    { t: "Nổ súng vào bầy khỉ", d: "Tiếng súng làm cả khu rừng im bặt.", pts: -2, art: "birds", fx: "birds" },
    { t: "Gió lạnh đầu núi", d: "Phải dừng lại sưởi ấm.", skip: 1, art: "wind", fx: "wind" }
  ],

  /* ---------- Thẻ Báu vật ----------
     art: grass, release, rice, squirrel, hoatai, family · fx: star, heart */
  treasures: [
    { t: "Nắm cỏ Lào", d: "Bạn nhai cỏ Lào đắp lên vết thương cho con khỉ.", pts: 2, art: "grass", fx: "star" },
    { t: "Phóng sinh", d: "“Thôi tao phóng sinh cho mày!”, lòng nhẹ bẫng.", pts: 3, art: "release", fx: "heart" },
    { t: "Nắm xôi nếp", d: "Ăn lót dạ, sức lực hồi lại.", pts: 1, move: 2, art: "rice", fx: "star" },
    { t: "Con sóc nhỏ", d: "Cú nhảy của con sóc rũ sạch mọi phiền muộn.", pts: 1, move: 1, art: "squirrel", fx: "star" },
    { t: "Hoa vàng như hoa tai", d: "Bạn dừng lại ngắm hoa, lòng thanh thản.", pts: 2, art: "hoatai", fx: "star" },
    { t: "Thả khỉ về rừng", d: "Gia đình nhà khỉ đoàn tụ, rừng như mở lối cho bạn.", pts: 2, move: 2, art: "family", fx: "heart" }
  ],

  /* ---------- Tốc độ hoạt ảnh (mili giây) ---------- */
  speed: {
    walkStep: 230,   // mỗi bước quân cờ
    backStep: 70,    // mỗi bước khi bị đưa về ô quay lại
    dice: 1350,      // thời gian xúc xắc lăn
    toast: 3200,     // thời gian hiện dòng thông báo
    winDelay: 2200   // chờ hoa rơi trước khi sang màn tổng kết
  },

  /* ---------- Âm thanh ---------- */
  sound: { enabled: true },

  /* Dòng ghi chú cuối nhật ký (để trống "" nếu không muốn hiện) */
  demoNote: "Bản demo: câu hỏi, tên ô và thẻ Biến cố/Báu vật đang dùng tạm, chờ duyệt."
};
