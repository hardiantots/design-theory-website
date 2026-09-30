# Design Theory

Studio pembelajaran desain grafis berbahasa Indonesia, mengadaptasi alur eksplorasi → materi → praktik → kuis dari `future-ai-city`. Arah visual berbeda: galeri editorial dominan hitam dengan aksen limau, diagram geometris, dan delapan eksperimen visual 2D.

## Menjalankan

```sh
npm run dev
```

Buka http://127.0.0.1:3001. Di PowerShell gunakan `npm.cmd` jika `npm.ps1` diblokir. Tidak memerlukan instalasi dependency. Gunakan Node.js 18 atau lebih baru. Port dapat diubah lewat variabel lingkungan `PORT`.

```sh
npm run build
npm test
```

Situs statis di `dist/` siap dilayani lewat HTTP; build memvalidasi sumber tanpa menghasilkan bundle. Jangan membuka HTML lewat `file://` karena ES modules memerlukan server HTTP.

## Isi

- Delapan prinsip: Gestalt, color theory, visual hierarchy, focal point, typography, grid & alignment, white space, balance & rhythm.
- Eksperimen slider khusus untuk setiap prinsip; materi, brief, langkah Canva/Figma, dan sumber rujukan.
- Tiga soal per prinsip dengan pembahasan, jawaban terkunci per percobaan, dan pengulangan setelah selesai.
- Studio poster sebelum/sesudah, pilihan alat, serta empat checklist sebelum ekspor.
- Progres selesai berarti semua soal modul telah dijawab, bukan semua benar. Nilai ditampilkan terpisah.
- Progres dan checklist tersimpan pada localStorage perangkat/browser ini. Tidak ada akun atau sinkronisasi antarperangkat. Kegagalan penyimpanan ditampilkan; aplikasi tetap dapat digunakan pada sesi berjalan.
- Native modal dialog mendukung Escape, fokus terkurung, dan pengembalian fokus. Tab dapat diganti memakai panah kiri/kanan, Home, End. Visual menghormati reduced motion.

`scripts/validate.mjs` menguji konsistensi materi, jawaban, sanitasi progres, pemulihan penyimpanan, aset, anchor, dan sintaks. Pemeriksaan ini tidak menggantikan pengujian browser/visual.

WebMCP opsional: `open_design_lesson` membuka materi/bagian yang dipilih melalui alur yang sama dengan tombol. Browser yang tidak mendukungnya tetap berjalan normal. Kontrak WebMCP belum diuji dalam konteks browser yang mendukung API tersebut.

Diagram, poster, soal, dan brief latihan dibuat khusus untuk situs. Sumber teori ditautkan di tiap modul dan bagian sumber; rujukan diperiksa 1 Oktober 2026. Tidak ada integrasi akun Canva/Figma atau aset berbayar yang dibutuhkan. Font memakai font sistem; tidak ada dependency pihak ketiga saat runtime.
