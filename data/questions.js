/* Bộ câu hỏi Văn học. Mỗi câu: id, chang (1-3), muc_do, cau_hoi, dap_an {A,B,C,D}, dung, giai_thich */
const QUESTIONS = [
 {
  "id": "C1-01",
  "chang": 1,
  "muc_do": "nhan_biet",
  "cau_hoi": "Truyện ngắn “Muối của rừng” là sáng tác của nhà văn nào?",
  "dap_an": {
   "A": "Nguyễn Minh Châu",
   "B": "Ma Văn Kháng",
   "C": "Nguyễn Huy Thiệp",
   "D": "Kim Lân"
  },
  "dung": "C",
  "giai_thich": "Truyện ngắn “Muối của rừng” là một trong những tác phẩm tiêu biểu của nhà văn Nguyễn Huy Thiệp.",
  "can_kiem_tra": false
 },
 {
  "id": "C1-02",
  "chang": 1,
  "muc_do": "nhan_biet",
  "cau_hoi": "Nhân vật chính trong truyện ngắn “Muối của rừng” tên là gì?",
  "dap_an": {
   "A": "Ông Đạt",
   "B": "Ông Điền",
   "C": "Ông Diểu",
   "D": "Ông Lịch"
  },
  "dung": "C",
  "giai_thich": "Nhân vật chính thực hiện cuộc đi săn trong truyện là ông Diểu, một người đàn ông sáu mươi tuổi.",
  "can_kiem_tra": false
 },
 {
  "id": "C1-03",
  "chang": 1,
  "muc_do": "nhan_biet",
  "cau_hoi": "Nhân vật ông Diểu bao nhiêu tuổi khi đi săn trong truyện?",
  "dap_an": {
   "A": "Năm mươi tuổi",
   "B": "Bảy mươi tuổi",
   "C": "Sáu mươi lăm tuổi",
   "D": "Sáu mươi tuổi"
  },
  "dung": "D",
  "giai_thich": "Văn bản nêu rõ: “Ở tuổi sáu mươi, với khẩu súng mới, đi săn trong rừng vào một ngày xuân kể cũng đáng sống.”",
  "can_kiem_tra": false
 },
 {
  "id": "C1-04",
  "chang": 1,
  "muc_do": "nhan_biet",
  "cau_hoi": "Khẩu súng ông Diểu mang đi săn do ai gửi về biếu ông?",
  "dap_an": {
   "A": "Đồng nghiệp cùng cơ quan",
   "B": "Người bạn cũ trong quân ngũ",
   "C": "Con trai học ở nước ngoài",
   "D": "Đứa cháu nội ở thành phố"
  },
  "dung": "C",
  "giai_thich": "Văn bản nêu: “Ý nghĩ đi săn nảy sinh khi thằng con học ở nước ngoài gửi về biếu ông khẩu súng hai nòng.”",
  "can_kiem_tra": false
 },
 {
  "id": "C1-05",
  "chang": 1,
  "muc_do": "nhan_biet",
  "cau_hoi": "Thời điểm ông Diểu đi săn trong truyện diễn ra vào mùa nào?",
  "dap_an": {
   "A": "Mùa thu",
   "B": "Mùa hạ",
   "C": "Mùa xuân",
   "D": "Mùa đông"
  },
  "dung": "C",
  "giai_thich": "Văn bản cho biết: “Rừng xanh ngắt và ẩm ướt... đi săn trong rừng vào một ngày xuân kể cũng đáng sống.”",
  "can_kiem_tra": false
 },
 {
  "id": "C1-06",
  "chang": 1,
  "muc_do": "nhan_biet",
  "cau_hoi": "Trang phục của ông Diểu khi chuẩn bị đi săn gồm những gì?",
  "dap_an": {
   "A": "Mặc áo khoác gió, đội mũ len, đi giày thể thao",
   "B": "Mặc quần áo ấm, đội mũ lông, dận giày cao cổ",
   "C": "Mặc quần áo vải thô, đội mũ tai bèo, đi giày vải",
   "D": "Mặc áo tơi lá, đội nón lá, đi dép cao su"
  },
  "dung": "B",
  "giai_thich": "Văn bản miêu tả: “Ông Diểu nai nịt, mặc quần áo ấm, đội mũ lông và dận đôi giày cao cổ.”",
  "can_kiem_tra": false
 },
 {
  "id": "C1-07",
  "chang": 1,
  "muc_do": "nhan_biet",
  "cau_hoi": "Để cẩn thận cho chuyến đi săn, ông Diểu còn mang theo thứ gì để ăn?",
  "dap_an": {
   "A": "Một nắm xôi nếp",
   "B": "Một cái bánh chưng",
   "C": "Một bắp ngô luộc",
   "D": "Một củ khoai nướng"
  },
  "dung": "A",
  "giai_thich": "Văn bản ghi rõ: “Để cho cẩn thận, ông còn mang theo cả nắm xôi nếp.”",
  "can_kiem_tra": false
 },
 {
  "id": "C1-08",
  "chang": 1,
  "muc_do": "nhan_biet",
  "cau_hoi": "Khi đi ngược lên mó nước đầu nguồn, ông Diểu đi men theo loại địa hình nào?",
  "dap_an": {
   "A": "Đường nhựa",
   "B": "Sườn đồi trọc",
   "C": "Suối cạn",
   "D": "Thung lũng sâu"
  },
  "dung": "C",
  "giai_thich": "Văn bản viết: “Ông đi men theo suối cạn, cứ thế ngược lên mó nước đầu nguồn.”",
  "can_kiem_tra": false
 },
 {
  "id": "C1-09",
  "chang": 1,
  "muc_do": "nhan_biet",
  "cau_hoi": "Loại cây nào mọc ở khu vực có hàng bầy khỉ xuất hiện trong rừng?",
  "dap_an": {
   "A": "Cây dâu da",
   "B": "Cây dẻ gai",
   "C": "Cây hoa gạo",
   "D": "Cây thông đỏ"
  },
  "dung": "A",
  "giai_thich": "Văn bản miêu tả: “Ở rừng dâu da, khỉ có hàng bầy. Việc bắn được một chú khỉ với ông không khó.”",
  "can_kiem_tra": false
 },
 {
  "id": "C1-10",
  "chang": 1,
  "muc_do": "nhan_biet",
  "cau_hoi": "Đặc điểm của loài cây có bông hoa vàng như hoa tai rủ xuống là gì?",
  "dap_an": {
   "A": "Lá bạc phếch giống lá nhót",
   "B": "Lá kim nhọn giống lá thông",
   "C": "Lá xanh bóng giống lá trầu",
   "D": "Lá to bản giống lá chuối"
  },
  "dung": "A",
  "giai_thich": "Văn bản miêu tả: “...lá bạc phếch giống như lá nhót, những bông hoa vàng như hoa tai rủ xuống tận đất.”",
  "can_kiem_tra": false
 },
 {
  "id": "C1-11",
  "chang": 1,
  "muc_do": "thong_hieu",
  "cau_hoi": "Chi tiết thời tiết “mưa xuân mỏng và mịn” ở đầu truyện mang lại ý nghĩa gì?",
  "dap_an": {
   "A": "Báo hiệu một trận lũ quét nguy hiểm sắp xảy ra trong rừng",
   "B": "Tạo sự khắc nghiệt, lạnh lẽo cản trở chuyến đi săn",
   "C": "Làm cho khung cảnh rừng núi trở nên ảm đạm, u buồn",
   "D": "Làm tăng vẻ trang trọng, tình cảm và sự tinh khiết của thiên nhiên"
  },
  "dung": "D",
  "giai_thich": "Văn bản miêu tả: “Rừng xanh ngắt và ẩm ướt. Thiên nhiên vừa trang trọng, vừa tình cảm. Điều ấy một phần là do mưa xuân.”",
  "can_kiem_tra": false
 },
 {
  "id": "C1-12",
  "chang": 1,
  "muc_do": "thong_hieu",
  "cau_hoi": "Tâm trạng của ông Diểu lúc đầu bước vào khu rừng thiên nhiên là gì?",
  "dap_an": {
   "A": "Háo hức tột độ với mong muốn tàn phá thiên nhiên hoang sơ",
   "B": "Thanh thản, rũ sạch mọi phàm tục, tận hưởng sự tĩnh lặng",
   "C": "Buồn bã, cô đơn vì phải một mình đi vào rừng sâu lạnh lẽo",
   "D": "Lo âu, sợ hãi trước những hiểm nguy rình rập nơi hoang dã"
  },
  "dung": "B",
  "giai_thich": "Văn bản ghi nhận: “Tất cả những trò nhố nhăng đê tiện vấp phải hằng ngày hoàn toàn có thể rũ sạch... Sự tĩnh lặng bình thản của rừng xuyên suốt qua ông.”",
  "can_kiem_tra": false
 },
 {
  "id": "C1-13",
  "chang": 1,
  "muc_do": "thong_hieu",
  "cau_hoi": "Hình ảnh con sóc nhỏ nhảy trên cành dâu da tác động thế nào đến ông Diểu?",
  "dap_an": {
   "A": "Gợi nhắc ông nhớ về những kỷ niệm tuổi thơ đi săn chim thú",
   "B": "Làm ông giật mình hoảng sợ, muốn quay đầu chạy về nhà ngay lập tức",
   "C": "Giúp ông rũ sạch mọi vướng bận, nhố nhăng đê tiện thường ngày",
   "D": "Kích thích bản năng sát sinh và sự hiếu chiến của một thợ săn"
  },
  "dung": "C",
  "giai_thich": "Văn bản viết: “Tất cả những trò nhố nhăng đê tiện vấp phải hằng ngày hoàn toàn có thể rũ sạch bởi một cú nhảy của con sóc nhỏ trên cành dâu da.”",
  "can_kiem_tra": false
 },
 {
  "id": "C1-14",
  "chang": 1,
  "muc_do": "thong_hieu",
  "cau_hoi": "Cảm xúc của ông Diểu khi nhìn thấy con khỉ đầu đàn xuất hiện là gì?",
  "dap_an": {
   "A": "Tức giận, muốn vung súng tiêu diệt ngay lập tức để khẳng định uy quyền",
   "B": "Thờ ơ, coi đó là một con vật bình thường không có gì đáng bận tâm",
   "C": "Xót xa, cảm thấy số phận bậc đế vương không trùng với số phận mình",
   "D": "Sợ hãi, tìm chỗ nấp kín đáo để tránh bị con vật tấn công trước"
  },
  "dung": "C",
  "giai_thich": "Văn bản miêu tả: “Một nỗi xót xa khiến ông nhói lòng: số phận của bậc đế vương không trùng với số phận ông.”",
  "can_kiem_tra": false
 },
 {
  "id": "C1-15",
  "chang": 1,
  "muc_do": "van_dung",
  "cau_hoi": "Khởi đầu cuộc đi săn của ông Diểu phản ánh điều gì về con người văn minh?",
  "dap_an": {
   "A": "Sự thờ ơ, vô cảm hoàn toàn trước vẻ đẹp thanh bình của cỏ cây",
   "B": "Sự tự tin, hào hứng mang theo công cụ tối tân để chinh phục tự nhiên",
   "C": "Sự nghèo nàn, lạc hậu khi phải đối mặt với núi rừng hoang dã",
   "D": "Sự sợ hãi, yếu đuối khi bước ra khỏi không gian đô thị an toàn"
  },
  "dung": "B",
  "giai_thich": "Ông Diểu mang khẩu súng hiện đại do con trai gửi từ nước ngoài, trang bị quần áo ấm, mũ lông, thể hiện tâm thế của kẻ chinh phục tự nhiên.",
  "can_kiem_tra": true
 },
 {
  "id": "C2-01",
  "chang": 2,
  "muc_do": "nhan_biet",
  "cau_hoi": "Khi bị ông Diểu đuổi bắt, con khỉ nhỏ đã hành động như thế nào?",
  "dap_an": {
   "A": "Nằm im chịu trận dưới gốc cây dâu da",
   "B": "Túm lấy dây súng và rơi xuống vực thẳm",
   "C": "Leo lên ngọn cây cao trốn thoát vào rừng sâu",
   "D": "Quay lại tấn công ông Diểu để bảo vệ gia đình"
  },
  "dung": "B",
  "giai_thich": "Văn bản ghi nhận: “Con khỉ con đột ngột xuất hiện túm lấy dây súng... lăn xuống miệng vực không chút chần chừ.”",
  "can_kiem_tra": false
 },
 {
  "id": "C2-02",
  "chang": 2,
  "muc_do": "nhan_biet",
  "cau_hoi": "Không gian dưới miệng vực được tác giả miêu tả bằng những từ ngữ nào?",
  "dap_an": {
   "A": "Lạnh lẽo, hoang vu nhưng thơ mộng và không có sương mù",
   "B": "Vừa kinh dị, vừa đầy tử khí với sương mù cuồn cuộn",
   "C": "Yên bình, tĩnh lặng với dòng suối chảy róc rách qua thềm đá",
   "D": "Sáng sủa, rực rỡ ánh nắng và ngập tràn hoa cỏ mùa xuân"
  },
  "dung": "B",
  "giai_thich": "Văn bản miêu tả: “Từ dưới miệng vực, sương mù dâng lên cuồn cuộn, trông vừa kinh dị, vừa đầy tử khí.”",
  "can_kiem_tra": false
 },
 {
  "id": "C2-03",
  "chang": 2,
  "muc_do": "nhan_biet",
  "cau_hoi": "Sau sự cố ở miệng vực, ông Diểu phát hiện con khỉ đực bị thương nằm ở đâu?",
  "dap_an": {
   "A": "Nằm vắt ở trên mỏm đá",
   "B": "Nằm sâu dưới đáy vực thẳm",
   "C": "Nằm ẩn trong hốc cây cổ thụ",
   "D": "Nằm trên vòm lá cây dâu da"
  },
  "dung": "A",
  "giai_thich": "Văn bản nêu: “...ông Diểu trông lên thì bỗng thấy con khỉ đực bị thương nằm vắt ở trên mỏm đá.”",
  "can_kiem_tra": false
 },
 {
  "id": "C2-04",
  "chang": 2,
  "muc_do": "thong_hieu",
  "cau_hoi": "Cảm xúc của ông Diểu khi phải chạy trốn sương mù ở miệng vực là gì?",
  "dap_an": {
   "A": "Thư thái, tận hưởng sự huyền ảo của thiên nhiên vùng núi cao",
   "B": "Sợ hãi tột độ, có cảm giác như chạy trốn ma đuổi từ thời thơ ấu",
   "C": "Bình tĩnh, đĩnh đạc tìm đường lui an toàn mà không hề nao núng",
   "D": "Tức giận vì bị thời tiết cản trở cuộc đi săn thú rừng"
  },
  "dung": "B",
  "giai_thich": "Văn bản viết: “Phải lâu lắm, có lẽ từ thời thơ ấu, ông Diểu mới lại có lần chạy như ma đuổi thế này.”",
  "can_kiem_tra": false
 },
 {
  "id": "C2-05",
  "chang": 2,
  "muc_do": "thong_hieu",
  "cau_hoi": "Chi tiết con khỉ con kéo súng rơi xuống vực mang ý nghĩa biểu tượng gì?",
  "dap_an": {
   "A": "Sự bất cẩn của ông Diểu trong quá trình sử dụng vũ khí hiện đại",
   "B": "Sự ngẫu nhiên may mắn giúp ông Diểu từ bỏ được khẩu súng",
   "C": "Sự yếu đuối, bất lực của loài vật trước sức mạnh của thợ săn",
   "D": "Sự phản kháng quyết liệt của tự nhiên trước sự xâm lăng của con người"
  },
  "dung": "D",
  "giai_thich": "Hành động lao xuống vực cùng khẩu súng cho thấy sự quyết liệt bảo vệ đồng loại và sự phản kháng của tự nhiên.",
  "can_kiem_tra": false
 },
 {
  "id": "C2-06",
  "chang": 2,
  "muc_do": "thong_hieu",
  "cau_hoi": "Âm thanh phát ra từ ngực con khỉ đực khi ông Diểu nâng lên gợi liên tưởng gì?",
  "dap_an": {
   "A": "Tiếng gầm gừ giống thần Chết đang cáu kỉnh vì bị can thiệp",
   "B": "Tiếng kêu cứu thảm thiết đòi thả tự do của một con vật yếu ớt",
   "C": "Tiếng thở phào nhẹ nhõm vì vết thương đã được băng bó cẩn thận",
   "D": "Tiếng đe dọa dữ tợn của chúa sơn tể vùng núi đá vôi"
  },
  "dung": "A",
  "giai_thich": "Văn bản miêu tả: “Từ trong ngực nó phát ra tiếng 'hừm' nho nhỏ nghe rất đáng sợ, tựa như thần Chết bực mình cáu kỉnh vì sự can thiệp của ông với nó.”",
  "can_kiem_tra": false
 },
 {
  "id": "C2-07",
  "chang": 2,
  "muc_do": "thong_hieu",
  "cau_hoi": "Vết thương do viên đạn gây ra cho con khỉ đực nằm ở vị trí nào?",
  "dap_an": {
   "A": "Cánh chân trái, làm gãy lìa phần xương ống",
   "B": "Ngực trái, khiến máu phun ra xối xả không ngừng",
   "C": "Phần lưng, làm tê liệt hoàn toàn hệ vận động",
   "D": "Bả vai, làm trồi đoạn xương dài đến bốn phân"
  },
  "dung": "D",
  "giai_thich": "Văn bản nêu rõ: “Viên đạn phá vỡ bả vai của nó, làm trồi ra hẳn đoạn xương dài đến bốn phân.”",
  "can_kiem_tra": false
 },
 {
  "id": "C2-08",
  "chang": 2,
  "muc_do": "thong_hieu",
  "cau_hoi": "Ông Diểu đã dùng loại lá nào để đắp chữa vết thương cho con khỉ đực?",
  "dap_an": {
   "A": "Lá nhót",
   "B": "Cỏ Lào",
   "C": "Lá lốt rừng",
   "D": "Lá dâu da"
  },
  "dung": "B",
  "giai_thich": "Văn bản cho biết: “Ông Diểu vơ lấy một nắm cỏ Lào vò nát, ông cho vào miệng nhai kỹ. Ông đắp nắm lá vào miệng vết thương con khỉ.”",
  "can_kiem_tra": false
 },
 {
  "id": "C2-09",
  "chang": 2,
  "muc_do": "thong_hieu",
  "cau_hoi": "Hành động cứu chữa, băng bó vết thương cho con khỉ thể hiện sự chuyển biến nào ở ông Diểu?",
  "dap_an": {
   "A": "Sự sợ hãi tâm linh trước những điềm gở xuất hiện ở vách núi",
   "B": "Ý đồ giữ lại con khỉ làm vật nuôi trong nhà sau chuyến đi săn",
   "C": "Sự thương hại ngấm ngầm để chuộc lỗi với người con trai ở xa",
   "D": "Lương tâm thức tỉnh, chuyển từ kẻ sát sinh sang lòng trắc ẩn cứu rỗi"
  },
  "dung": "D",
  "giai_thich": "Từ tâm thế của kẻ đi săn tiêu diệt thú vật, ông Diểu đã chuyển sang hành động cứu giúp, thể hiện lòng trắc ẩn sâu sắc.",
  "can_kiem_tra": false
 },
 {
  "id": "C2-10",
  "chang": 2,
  "muc_do": "thong_hieu",
  "cau_hoi": "Chi tiết núi lở xảy ra khi ông Diểu đang bế con khỉ xuống núi có ý nghĩa gì?",
  "dap_an": {
   "A": "Sự sụp đổ hoàn toàn của thế giới động vật trong rừng thẳm",
   "B": "Điềm báo trước về cái chết đau thương của gia đình nhà khỉ",
   "C": "Hậu quả trực tiếp do tiếng súng của ông Diểu gây ra từ trước",
   "D": "Sự đe dọa, thử thách khắc nghiệt của thiên nhiên đối với con người"
  },
  "dung": "D",
  "giai_thich": "Văn bản miêu tả: “Thiên nhiên oái oăm lại muốn thử thách thêm lòng dũng cảm của ông... Núi lở! Ông Diểu thót mình và bám thật chặt vào tảng đá kinh hãi.”",
  "can_kiem_tra": false
 },
 {
  "id": "C2-11",
  "chang": 2,
  "muc_do": "thong_hieu",
  "cau_hoi": "Đôi mắt con khỉ đực nhìn ông Diểu lúc bị thương gợi lên tâm trạng gì?",
  "dap_an": {
   "A": "Vô cảm, trống rỗng không biểu lộ bất kỳ cảm xúc sinh tồn nào",
   "B": "Sợ hãi cuồng loạn, cố gắng vùng vẫy để cắn xé ông Diểu",
   "C": "Đờ dại nhìn cầu khẩn, chạm đến chiều sâu trắc ẩn trong nhân vật",
   "D": "Lạnh lùng thù hận, nung nấu ý định trả thù kẻ đã hại mình"
  },
  "dung": "C",
  "giai_thich": "Văn bản viết: “Con khỉ run bắn, nó đưa đôi mắt đờ dại nhìn ông cầu khẩn.”",
  "can_kiem_tra": false
 },
 {
  "id": "C2-12",
  "chang": 2,
  "muc_do": "thong_hieu",
  "cau_hoi": "Hình ảnh con khỉ cái lẽo đẽo bám theo sau lưng ông Diểu biểu hiện điều gì?",
  "dap_an": {
   "A": "Sự ranh mãnh của loài thú hoang dã tìm cách tấn công lén lút",
   "B": "Sự ngốc nghếch, không biết sợ hãi trước con người của loài vật",
   "C": "Ý định đòi lại đứa con đã bị rơi xuống vực thẳm",
   "D": "Tình nghĩa vợ chồng thủy chung, gắn bó đầy cảm động"
  },
  "dung": "D",
  "giai_thich": "Sự kiên trì bám theo của con khỉ cái dù bị đuổi đánh cho thấy tình nghĩa sắt son, gắn bó thiêng liêng trong thế giới loài vật.",
  "can_kiem_tra": false
 },
 {
  "id": "C2-13",
  "chang": 2,
  "muc_do": "van_dung",
  "cau_hoi": "Vì sao ông Diểu lại cảm thấy “bị xúc phạm ghê gớm” khi con khỉ cái cứ bám theo?",
  "dap_an": {
   "A": "Vì ông cảm thấy bị giám sát, đòi ăn vạ và chạm đến lòng tự ái con người",
   "B": "Vì con khỉ dám chống cự lại mệnh lệnh của một người thợ săn lão luyện",
   "C": "Vì ông sợ con vật sẽ cướp mất phần chiến lợi phẩm vừa kiếm được",
   "D": "Vì ông cho rằng loài vật đang cố tình chế nhạo sự thất bại của mình"
  },
  "dung": "A",
  "giai_thich": "Văn bản nêu rõ: “Ông Diểu bỗng thấy bị xúc phạm ghê gớm. Tựa như ông bị theo dõi, bị đòi ăn vạ.”",
  "can_kiem_tra": false
 },
 {
  "id": "C2-14",
  "chang": 2,
  "muc_do": "van_dung",
  "cau_hoi": "Nghệ thuật xây dựng tình huống truyện ở chặng Vách đá chủ yếu mang tính chất gì?",
  "dap_an": {
   "A": "Kịch tính, bất ngờ, dồn nhân vật vào các thử thách hiểm nghèo",
   "B": "Trinh thám, hồi hộp với những màn đấu trí căng thẳng giữa người và thú",
   "C": "Lãng mạn, êm đềm, ca ngợi vẻ đẹp thơ mộng của thiên nhiên",
   "D": "Trữ tình, chậm rãi, tập trung miêu tả phong cảnh núi rừng hoang sơ"
  },
  "dung": "A",
  "giai_thich": "Tình huống con khỉ con giật súng rơi xuống vực, khỉ đực bị thương, núi lở và sự đeo bám của khỉ cái tạo nên chuỗi kịch tính dồn dập.",
  "can_kiem_tra": true
 },
 {
  "id": "C2-15",
  "chang": 2,
  "muc_do": "van_dung",
  "cau_hoi": "Sự thay đổi trong thái độ của ông Diểu từ đầu đến cuối chặng Vách đá là gì?",
  "dap_an": {
   "A": "Từ kẻ săn bắn tàn nhẫn sang sự thấu cảm, xót xa trước nỗi đau sinh vật",
   "B": "Từ sự sợ hãi ban đầu chuyển thành lòng căm thù loài thú rừng sâu sắc",
   "C": "Từ sự kiêu ngạo của kẻ chiến thắng chuyển thành sự hoảng loạn tột độ",
   "D": "Từ sự thờ ơ lạnh lùng chuyển thành ham muốn chinh phục bằng mọi giá"
  },
  "dung": "A",
  "giai_thich": "Ông Diểu từ thợ săn mang súng đi tiêu diệt thú đã chuyển sang cứu thương, băng bó và thấu hiểu gánh nặng trách nhiệm của sinh vật.",
  "can_kiem_tra": true
 },
 {
  "id": "C3-01",
  "chang": 3,
  "muc_do": "nhan_biet",
  "cau_hoi": "Loài hoa kỳ lạ xuất hiện ở cuối truyện có tên là gì?",
  "dap_an": {
   "A": "Hoa mộc lan",
   "B": "Hoa tử huyền",
   "C": "Hoa bỉ ngạn",
   "D": "Hoa phù dung"
  },
  "dung": "B",
  "giai_thich": "Văn bản nhắc đến tên loài hoa: “Loài hoa tử huyền cứ ba chục năm mới nở một lần.”",
  "can_kiem_tra": false
 },
 {
  "id": "C3-02",
  "chang": 3,
  "muc_do": "thong_hieu",
  "cau_hoi": "Loài hoa tử huyền trong truyện có đặc điểm thời gian nở như thế nào?",
  "dap_an": {
   "A": "Ba chục năm mới nở một lần",
   "B": "Cứ mỗi độ xuân về hoa lại nở",
   "C": "Mười năm mới nở một lần",
   "D": "Năm mươi năm mới nở một lần"
  },
  "dung": "A",
  "giai_thich": "Văn bản ghi rõ: “Loài hoa tử huyền cứ ba chục năm mới nở một lần.”",
  "can_kiem_tra": false
 },
 {
  "id": "C3-03",
  "chang": 3,
  "muc_do": "thong_hieu",
  "cau_hoi": "Theo dân gian được nhắc trong truyện, người gặp hoa tử huyền sẽ gặp điều gì?",
  "dap_an": {
   "A": "Gặp hoạn nạn",
   "B": "Gặp may mắn",
   "C": "Gặp giàu sang",
   "D": "Gặp trắc trở"
  },
  "dung": "B",
  "giai_thich": "Văn bản viết: “Người nào gặp hoa tử huyền sẽ gặp may mắn.”",
  "can_kiem_tra": false
 },
 {
  "id": "C3-04",
  "chang": 3,
  "muc_do": "thong_hieu",
  "cau_hoi": "Đặc điểm hình thức và hương vị của hoa tử huyền được miêu tả ra sao?",
  "dap_an": {
   "A": "Màu tím, vị chua, to bằng hạt đậu",
   "B": "Màu đỏ, vị ngọt, to bằng hạt ngô",
   "C": "Màu trắng, vị mặn, bé bằng đầu tăm",
   "D": "Màu vàng, vị đắng, bé bằng hạt cải"
  },
  "dung": "C",
  "giai_thich": "Văn bản miêu tả: “Hoa này màu trắng, vị mặn, bé bằng đầu tăm, người ta vẫn gọi hoa này là muối của rừng.”",
  "can_kiem_tra": false
 },
 {
  "id": "C3-05",
  "chang": 3,
  "muc_do": "thong_hieu",
  "cau_hoi": "Khi rừng kết muối (hoa tử huyền nở), đó là điềm báo điều gì cho đất nước?",
  "dap_an": {
   "A": "Đất nước chiến tranh, đói kém hoành hành",
   "B": "Xã hội đảo điên, con người ly tán",
   "C": "Đất nước thanh bình, mùa màng phong túc",
   "D": "Thiên tai lũ lụt, mùa màng thất bát"
  },
  "dung": "C",
  "giai_thich": "Văn bản nêu: “Khi rừng kết muối, đấy là điềm báo đất nước thanh bình, mùa màng phong túc.”",
  "can_kiem_tra": false
 },
 {
  "id": "C3-06",
  "chang": 3,
  "muc_do": "van_dung",
  "cau_hoi": "Ý nghĩa nhan đề “Muối của rừng” gắn liền với chi tiết nào ở cuối truyện?",
  "dap_an": {
   "A": "Vị mặn của những giọt nước mắt con khỉ cái khóc thương chồng",
   "B": "Hạt muối trắng tinh khiết mà ông Diểu tìm thấy trong hang đá",
   "C": "Những giọt mặn mỏi mồ hôi của ông Diểu rơi xuống gốc cây",
   "D": "Bông hoa tử huyền màu trắng, vị mặn như muối do rừng kết tinh"
  },
  "dung": "D",
  "giai_thich": "Hoa tử huyền có màu trắng, vị mặn bé bằng đầu tăm được người ta gọi là muối của rừng, tượng trưng cho kết tinh kỳ diệu của tự nhiên.",
  "can_kiem_tra": false
 },
 {
  "id": "C3-07",
  "chang": 3,
  "muc_do": "van_dung",
  "cau_hoi": "Hình ảnh ông Diểu “trần truồng như thế, cô đơn như thế mà đi” ở cuối truyện tượng trưng điều gì?",
  "dap_an": {
   "A": "Sự thất bại thảm hại, tột cùng bi kịch của một kẻ thợ săn già",
   "B": "Sự buông xuôi, bất lực trước tuổi già và sức khỏe suy kiệt",
   "C": "Sự rũ bỏ lớp vỏ văn minh giả tạo để trở về với bản nguyên thanh sạch",
   "D": "Sự trừng phạt khắc nghiệt của thiên nhiên vì tội ác đã gây ra"
  },
  "dung": "C",
  "giai_thich": "Việc cởi bỏ quần áo ấm, súng ống và đi trần truồng thể hiện sự thức tỉnh, rũ bỏ hoàn toàn tham sân si để hòa hợp với tự nhiên nguyên thủy.",
  "can_kiem_tra": false
 },
 {
  "id": "C3-08",
  "chang": 3,
  "muc_do": "van_dung",
  "cau_hoi": "Vì sao ông Diểu quyết định thốt lên “Thôi tao phóng sinh cho mày!” rồi thả con khỉ đực?",
  "dap_an": {
   "A": "Vì ông nhận ra điềm gở từ tiếng kêu của loài chim lạ trong rừng sâu",
   "B": "Vì vết thương của con khỉ đã tự lành và nó không còn giá trị để mang về",
   "C": "Vì ông sợ bị con khỉ cái tiếp tục bám theo gây phiền phức dọc đường",
   "D": "Vì xúc động trước tình nghĩa vợ chồng khăng khít và sự nặng nề của trách nhiệm sinh vật"
  },
  "dung": "D",
  "giai_thich": "Chứng kiến tình cảm gia đình nhà khỉ và nhận thức “trách nhiệm đè lên lưng mỗi sinh vật quả thật nặng nề”, ông Diểu đã thức tỉnh và phóng sinh.",
  "can_kiem_tra": false
 },
 {
  "id": "C3-09",
  "chang": 3,
  "muc_do": "van_dung",
  "cau_hoi": "Thông điệp nhân sinh sâu sắc nhất mà Nguyễn Huy Thiệp gửi gắm qua “Muối của rừng” là gì?",
  "dap_an": {
   "A": "Nên từ bỏ hoàn toàn các hoạt động săn bắn động vật hoang dã trên núi cao",
   "B": "Thiên nhiên luôn ẩn chứa những quyền năng thần bí vượt ngoài tầm kiểm soát",
   "C": "Cuộc sống con người chỉ là những trò khỉ vô nghĩa không có hồi kết",
   "D": "Con người cần thức tỉnh lòng trắc ẩn, yêu thương và hòa hợp với tự nhiên"
  },
  "dung": "D",
  "giai_thich": "Tác phẩm đề cao sự thức tỉnh của lương tâm con người, hướng về cái thiện, thấu hiểu và tôn trọng quy luật của tự nhiên.",
  "can_kiem_tra": false
 },
 {
  "id": "C3-10",
  "chang": 3,
  "muc_do": "van_dung",
  "cau_hoi": "Ý nghĩa triết lý của câu nói “Hóa ra ở đời, trách nhiệm đè lên lưng mỗi sinh vật quả thật nặng nề” là gì?",
  "dap_an": {
   "A": "Loài vật chỉ sống theo bản năng chứ không hề có trách nhiệm gia đình",
   "B": "Mọi sinh vật trên đời đều gánh vác trách nhiệm sinh tồn và tình nghĩa cao cả",
   "C": "Trách nhiệm của kẻ đi săn lớn hơn nhiều so với con thú trong rừng",
   "D": "Con người là sinh vật duy nhất phải chịu đựng áp lực nặng nề của cuộc sống"
  },
  "dung": "B",
  "giai_thich": "Câu nói thể hiện sự thấu cảm sâu sắc của ông Diểu khi nhìn tình mẫu tử, phụ tử và tình nghĩa vợ chồng gắn bó trong thế giới loài vật.",
  "can_kiem_tra": false
 },
 {
  "id": "C3-11",
  "chang": 3,
  "muc_do": "van_dung",
  "cau_hoi": "Biện pháp nghệ thuật nổi bật được Nguyễn Huy Thiệp sử dụng qua hình tượng hoa tử huyền là gì?",
  "dap_an": {
   "A": "Ẩn dụ kết hợp yếu tố huyền thoại mang ý nghĩa triết lý nhân sinh",
   "B": "Phóng đại kết hợp liệt kê chi tiết để miêu tả cảnh sắc thiên nhiên",
   "C": "So sánh tương phản giữa không gian đô thị và núi rừng hoang dã",
   "D": "Nhân hóa loài thực vật thành con người có tâm hồn và cảm xúc"
  },
  "dung": "A",
  "giai_thich": "Tác giả sử dụng bút pháp ẩn dụ kết hợp yếu tố huyền thoại (hoa tử huyền ba mươi năm mới nở) để tạo chiều sâu triết lý cho tác phẩm.",
  "can_kiem_tra": false
 },
 {
  "id": "C3-12",
  "chang": 3,
  "muc_do": "van_dung",
  "cau_hoi": "Hành động “nhổ bãi nước bọt xuống dưới chân mình” của ông Diểu trước khi phóng sinh biểu hiện điều gì?",
  "dap_an": {
   "A": "Thủ tục cầu may theo tín ngưỡng dân gian trước khi rời khỏi rừng",
   "B": "Sự khinh bỉ đối với loài vật yếu đuối đang nằm quằn quại dưới đất",
   "C": "Sự tức giận tột độ vì chuyến đi săn không thu được chiến lợi phẩm gì",
   "D": "Sự tự chế giễu, ngượng ngùng và thức tỉnh trước sự lố bịch của bản thân"
  },
  "dung": "D",
  "giai_thich": "Hành động này thể hiện sự tự nhận thức về sự lố bịch trong hành vi săn bắn trước đó, đánh dấu bước ngoặt trong tư tưởng nhân vật.",
  "can_kiem_tra": true
 },
 {
  "id": "C3-13",
  "chang": 3,
  "muc_do": "van_dung",
  "cau_hoi": "Ý nghĩa của chi tiết ông Diểu chọn đi theo lối rẽ khác đầy bụi gai ngáng đường là gì?",
  "dap_an": {
   "A": "Con đường ngẫu nhiên không có sự lựa chọn nào khác tốt hơn",
   "B": "Con đường ngắn nhất để đi thẳng xuống cánh đồng làng",
   "C": "Con đường tự nguyện gánh chịu thử thách để hoàn tất quá trình hoàn lương",
   "D": "Con đường trốn chạy vì sợ bị mọi người trong làng phát hiện"
  },
  "dung": "C",
  "giai_thich": "Việc chọn lối đi đầy gai góc thay vì lối cũ tượng trưng cho hành trình tự nguyện vượt qua gian khó để hướng về sự thanh lọc tâm hồn.",
  "can_kiem_tra": true
 },
 {
  "id": "C3-14",
  "chang": 3,
  "muc_do": "van_dung",
  "cau_hoi": "Đặc sắc nghệ thuật trong cốt truyện “Muối của rừng” được đánh giá như thế nào?",
  "dap_an": {
   "A": "Tập trung miêu tả phong tục tập quán của người dân vùng cao nguyên",
   "B": "Dựng truyện như một vở kịch giàu kịch tính với các tình huống thử thách tâm lý",
   "C": "Xây dựng không gian sử thi hoành tráng với nhiều tuyến nhân vật anh hùng",
   "D": "Cốt truyện đơn tuyến, xuôi chiều theo trình tự thời gian tuyến tính"
  },
  "dung": "B",
  "giai_thich": "Truyện được cấu trúc như một vở kịch ngắn gồm các màn (Rừng thẳm, Vách đá, Hoa nở) với các xung đột và bước ngoặt tâm lý sắc sảo.",
  "can_kiem_tra": true
 },
 {
  "id": "C3-15",
  "chang": 3,
  "muc_do": "van_dung",
  "cau_hoi": "Sự vận động tâm lý của nhân vật ông Diểu từ đầu đến cuối truyện phản ánh quy luật nào?",
  "dap_an": {
   "A": "Quy luật thức tỉnh nhân lương và sự trở về với bản chất thiện lương",
   "B": "Quy luật nhân quả báo ứng theo quan niệm Phật giáo truyền thống",
   "C": "Quy luật sinh tử tất yếu trong cuộc đấu tranh sinh tồn giữa người và thú",
   "D": "Quy luật thích nghi của con người trước sự biến đổi khắc nghiệt của tự nhiên"
  },
  "dung": "A",
  "giai_thich": "Xuyên suốt tác phẩm là hành trình vận động tâm lý từ kẻ chinh phục ngạo mạn đến sự thức tỉnh lương tâm, thấu cảm và hướng thiện.",
  "can_kiem_tra": true
 },
 {
  "id": "C3-16",
  "chang": 3,
  "muc_do": "van_dung",
  "cau_hoi": "Hoa tử huyền xuất hiện ở cuối truyện mang ý nghĩa gì?",
  "dap_an": {
   "A": "Báo hiệu một mùa săn bội thu ở rừng già",
   "B": "Biểu tượng cho nỗi cô đơn, lạc lõng của ông Diểu",
   "C": "Minh chứng cho tài săn bắn lão luyện của ông Diểu",
   "D": "Điềm lành, sự đền đáp của thiên nhiên cho người biết hướng thiện"
  },
  "dung": "D",
  "giai_thich": "Hoa tử huyền nở đúng lúc ông Diểu vừa phóng sinh con khỉ: vẻ đẹp kỳ diệu, hiếm có của thiên nhiên như lời ghi nhận sự thức tỉnh lương tri, báo hiệu điều tốt lành.",
  "can_kiem_tra": true
 },
 {
  "id": "C3-17",
  "chang": 3,
  "muc_do": "van_dung",
  "cau_hoi": "Suốt hành trình đi săn, ông Diểu được khắc họa chủ yếu qua thủ pháp nghệ thuật nào?",
  "dap_an": {
   "A": "Miêu tả diễn biến tâm lý, nội tâm nhân vật",
   "B": "Miêu tả ngoại hình nhân vật thật chi tiết",
   "C": "Để nhân vật đối thoại với nhiều nhân vật khác",
   "D": "Kể lại cuộc đời nhân vật qua dòng hồi tưởng"
  },
  "dung": "A",
  "giai_thich": "Tác giả chủ yếu đi sâu vào cảm xúc, suy nghĩ của ông Diểu (thanh thản, xót xa, sợ hãi, tự ái, thức tỉnh) gắn với từng hành động, qua đó thể hiện sự chuyển biến lương tri.",
  "can_kiem_tra": true
 }
];
