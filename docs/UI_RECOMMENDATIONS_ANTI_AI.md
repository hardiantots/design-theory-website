# Saran UI untuk Design Theory

Referensi yang diminta: [Vanszs/Anti-AI-UI](https://github.com/Vanszs/Anti-AI-UI), khususnya [Anti-AI-Slop](https://github.com/Vanszs/Anti-AI-UI/blob/main/Anti-AI-SLop/SKILL.md) dan [Component Reference Design](https://github.com/Vanszs/Anti-AI-UI/blob/main/component-reference-design/SKILL.md). Dibaca 1 Oktober 2026 sebagai referensi desain; tidak dipasang atau disalin menjadi aturan proyek.

Repositori tersebut menekankan keputusan visual yang disengaja, pola komponen yang sesuai tugas, HTML semantik, akses keyboard dan dukungan reduced motion. Berikut adaptasi saya untuk media pembelajaran desain grafis ini.

| Saran | Penerapan pada proyek |
| --- | --- |
| Jadikan eksperimen pusat perhatian | Hero asimetris memasangkan pertanyaan dengan poster yang bisa diubah. Halaman teori memakai kanvas dan inspector, lalu penjelasan. |
| Gunakan hitam sebagai ruang kerja | Latar netral `#101110`, panel gelap dan garis pemisah tipis. Warna dipakai untuk kategori, aksi dan materi yang sedang diuji. |
| Bedakan peran tipografi | Inter pada headline, kontrol, dan bacaan; peran dibedakan melalui ukuran, weight, dan jarak. Keluarga font dalam eksperimen boleh berubah untuk menunjukkan konsep. |
| Variasikan bentuk bagian sesuai isi | Indeks kategori, galeri prinsip, diskusi dua kolom, hubungan teori dan editor memiliki susunan yang berbeda. |
| Batasi dekorasi dan gerak | Tanpa glow, glassmorphism atau heading gradien. Animasi common fate berfungsi mengajar; panah tetap tersedia ketika gerak dikurangi. |
| Pertahankan kontrol yang jelas | Label, output slider, reset, status terpilih, fokus keyboard, inspector angka dan dialog native. |

Interpretasi ini menjaga aksen kategori dan objek berwarna karena warna adalah materi belajar. Larangan warna tertentu dari referensi tidak diterapkan sebagai hukum universal desain. Peta 3D tetap menjadi pilihan tambahan; jalur belajar utama bekerja melalui DOM dan SVG.

Untuk iterasi berikutnya, saya menyarankan uji mobile dan proyektor bersama siswa: perhatikan apakah teks kontrol terbaca, urutan eksperimen → penjelasan mudah diikuti, dan contoh tipografi tetap terlihat pada jarak kelas. Catat temuan audiens sebelum menambah efek visual.
