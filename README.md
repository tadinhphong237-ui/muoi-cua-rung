# Muối của rừng – Trò chơi STEAM Ngữ Văn

## Cấu trúc thư mục

```
muoi-cua-rung/
├── index.html              Khung trang: nạp CSS, JS và 4 màn hình
├── config.js               ★ CẤU HÌNH: luật, người chơi, 30 ô, thẻ bài, tốc độ, âm thanh
├── main.js                 Khởi động: nạp HTML các màn hình, gắn sự kiện
├── data/
│   └── questions.js        ★ Bộ câu hỏi Văn học
├── assets/
│   └── sprite.svg          Hình vẽ nhân vật, khỉ, sóc, hoa tử huyền, tranh thẻ bài
├── css/
│   └── base.css            Màu sắc, phông chữ, thẻ bài, phần dùng chung
├── js/core/                Phần lõi dùng chung
│   ├── scale.js            Co giãn giao diện theo kích thước màn hình
│   ├── utils.js            Hằng số đọc từ config, hàm tiện ích
│   ├── audio.js            Âm thanh
│   ├── art.js              Tranh thẻ bài, nhân vật toàn thân, chân dung
│   ├── scene.js            Cảnh rừng nền của các màn hình
│   └── router.js           Chuyển màn hình
└── screens/                Mỗi màn hình một thư mục: .html + .css + .js
    ├── home/               Màn 1 · Màn hình chính
    ├── mode/               Màn 2 · Chọn chế độ
    ├── play/               Màn 3 · Màn chơi
    │   ├── play.html  play.css  play.js (gắn nút)
    │   ├── board.js        Bản đồ, con đường, ô, quân cờ
    │   ├── state.js        Trạng thái ván, bộ thẻ
    │   ├── turn.js         Lượt chơi, câu hỏi, thẻ, về đích
    │   ├── dice.js         Xúc xắc
    │   ├── hud.js          Thanh Lương tri, thông báo, nhật ký
    │   └── effects.js      Hiệu ứng mưa, sương, đá lở, hoa rơi…
    └── end/                Màn 4 · Tổng kết
```

## Sửa nhanh

| Muốn đổi | Sửa ở |
| --- | --- |
| Điểm cần để về đích, ô quay về, điểm đúng/sai | `config.js` → `rules` |
| Số giây mỗi câu hỏi | `config.js` → `timer` |
| Tên, màu người chơi | `config.js` → `players` |
| Tên và loại của 30 ô | `config.js` → `cells` |
| Thẻ Biến cố, Báu vật | `config.js` → `events`, `treasures` |
| Tốc độ quân cờ, xúc xắc | `config.js` → `speed` |
| Câu hỏi | `data/questions.js` |
| Giao diện một màn hình | `screens/<tên màn>/<tên màn>.html` và `.css` |

## Chạy thử trên máy

Trang nạp HTML từng màn hình bằng `fetch`, nên **không mở được bằng cách bấm đúp vào `index.html`**. Hãy dùng một trong các cách:

- VS Code: cài tiện ích **Live Server**, bấm chuột phải vào `index.html` → *Open with Live Server*.
- Hoặc mở terminal trong thư mục game, chạy `python -m http.server`, rồi vào `http://localhost:8000`.

## Đưa lên GitHub Pages

Upload **toàn bộ thư mục** (giữ nguyên cấu trúc) lên repo, vào *Settings → Pages* chọn branch `main`, thư mục `/ (root)`.
