const principleSource = ['Figma — Prinsip desain grafis', 'https://www.figma.com/resource-library/graphic-design-principles/'];
const hierarchySource = ['Figma — Visual hierarchy', 'https://www.figma.com/resource-library/what-is-visual-hierarchy/'];
export const lessons = [
  {
    id: 'gestalt', title: 'Gestalt', subtitle: 'Bagaimana mata menyatukan bentuk.', category: 'PERSEPSI', color: '#d9ff68', time: '6 menit',
    intro: 'Kita cenderung melihat pola dan kelompok, bukan hanya kumpulan objek terpisah. Gestalt membantu menjelaskan bagaimana hubungan visual itu terbentuk.',
    points: [['Proximity & similarity', 'Elemen berdekatan terasa satu kelompok. Kesamaan bentuk atau warna juga dapat menghubungkan elemen yang berjauhan.'], ['Closure & continuity', 'Mata melengkapi bentuk yang terputus dan mengikuti alur garis. Gunakan pada simbol sederhana atau arah baca.'], ['Figure–ground & common region', 'Pisahkan objek utama dari latar. Area pembatas yang sama dapat menyatukan elemen di dalamnya.']],
    takeaway: 'Kelompokkan berdasarkan makna sebelum menambah kotak atau garis pemisah.',
    experiment: ['Jarak antarkelompok', 'Dekat', 'Jauh', 'Geser untuk memisahkan dua kelompok titik tanpa mengubah jumlahnya.'],
    brief: 'Buat kartu acara berisi dua sesi: “Workshop” dan “Pameran”. Setiap sesi memiliki judul, waktu, dan lokasi.',
    canva: ['Buat dua judul dan detailnya sebagai kotak teks terpisah.', 'Dekatkan waktu dan lokasi ke judul sesi masing-masing. Beri jarak lebih besar di antara kedua sesi.', 'Gunakan bentuk atau warna yang konsisten untuk informasi sejenis. Hilangkan garis pembatas dan cek apakah kelompok masih jelas.'],
    figma: ['Buat frame dan tambahkan dua kelompok teks sesi.', 'Susun tiap sesi dalam auto layout vertikal dengan gap kecil. Letakkan kedua sesi dalam kelompok dengan gap lebih besar.', 'Gunakan gaya teks yang sama untuk peran yang sama. Sembunyikan latar kelompok untuk menguji proximity.'],
    success: 'Tanpa garis pembatas, pembaca dapat memasangkan waktu dengan sesi yang tepat.', source: ['Figma — Gestalt principles', 'https://www.figma.com/resource-library/gestalt-principles/'],
    quiz: [
      ['Dua keterangan harus terbaca sebagai satu kelompok. Apa perubahan paling langsung?', ['Dekatkan jaraknya', 'Beri font berbeda', 'Pisahkan ke dua sudut'], 0, 'Proximity menggunakan kedekatan jarak untuk menunjukkan hubungan.'],
      ['Logo tetap terbaca meskipun sebagian garisnya terputus. Prinsip apa yang bekerja?', ['Repetition', 'Closure', 'Alignment'], 1, 'Closure menjelaskan kecenderungan melengkapi bentuk yang tidak utuh.'],
      ['Objek utama sulit dibedakan dari latar. Hubungan apa yang perlu diperjelas?', ['Ukuran kanvas', 'Jumlah halaman', 'Figure–ground'], 2, 'Figure–ground adalah pemisahan objek yang diamati dari latarnya.']
    ]
  },
  {
    id: 'color', title: 'Color theory', subtitle: 'Warna yang saling bekerja sama.', category: 'WARNA', color: '#c6a5ff', time: '7 menit',
    intro: 'Hue adalah keluarga warna, saturation adalah intensitasnya, dan lightness adalah terang-gelapnya. Mengubah satu dimensi dapat mengubah hubungan seluruh palet.',
    points: [['Pilih hubungan warna', 'Analogous memakai hue berdekatan; complementary memakai hue berseberangan; triadic memakai tiga hue berjarak merata pada roda warna.'], ['Tentukan peran', 'Pilih warna latar, teks, dan aksen. Harmoni warna tidak otomatis menghasilkan teks yang terbaca.'], ['Baca konteksnya', 'Makna warna dipengaruhi budaya, konteks, dan kombinasi. Hindari menganggap satu warna selalu menimbulkan satu emosi.']],
    takeaway: 'Mulai dari sedikit warna, lalu uji keterbacaan dan perannya dalam komposisi.',
    experiment: ['Hue utama', '0°', '360°', 'Pasangan complementary di sini menggunakan selisih hue 180° pada model HSL untuk layar.'],
    brief: 'Buat tiga alternatif palet untuk poster musik. Pertahankan isi dan tata letak agar pengaruh warna dapat dibandingkan.',
    canva: ['Siapkan tiga salinan halaman poster dengan latar netral.', 'Buka Canva Color Wheel dari sumber materi. Pilih satu pasangan complementary dan catat kode HEX-nya.', 'Masukkan warna pada elemen grafis. Gunakan salah satunya sebagai aksen dan cek teks pada ukuran tampil.'],
    figma: ['Duplikasikan frame poster tiga kali.', 'Buat swatch warna dan terapkan nilai HEX pada fill objek. Bedakan peran latar, teks, dan aksen.', 'Bandingkan versi berwarna dengan versi grayscale. Pastikan urutan baca tidak hanya bergantung pada hue.'],
    success: 'Judul tetap menonjol dan teks tetap terbaca meski warna aksen diganti.', source: ['Canva — Color wheel', 'https://www.canva.com/colors/color-wheel/'],
    quiz: [
      ['Warna berseberangan pada roda warna disebut…', ['Analogous', 'Complementary', 'Monochromatic'], 1, 'Complementary memakai pasangan hue yang berseberangan pada roda warna yang digunakan.'],
      ['Palet harmonis membuat teks sulit terbaca. Apa yang perlu dicek?', ['Kontras teks dengan latar', 'Nama warna', 'Jumlah layer'], 0, 'Harmoni dan keterbacaan adalah dua hal berbeda. Periksa terang-gelap teks dan latarnya.'],
      ['Apa cara yang tepat membahas makna warna?', ['Merah selalu berarti bahaya', 'Biru pasti dipercaya semua orang', 'Pertimbangkan budaya dan konteks'], 2, 'Asosiasi warna bergantung pada konteks dan pengalaman audiens.']
    ]
  },
  {
    id: 'hierarchy', title: 'Visual hierarchy', subtitle: 'Tentukan apa yang dibaca lebih dulu.', category: 'URUTAN', color: '#f1f0e9', time: '6 menit',
    intro: 'Hierarki visual mengatur urutan perhatian. Pada poster acara, judul bisa menjadi tingkat pertama, tanggal tingkat kedua, dan keterangan tambahan tingkat ketiga.',
    points: [['Urutkan informasi', 'Tulis prioritas pesan sebelum mengatur tampilannya. Tidak semua informasi membutuhkan penekanan yang sama.'], ['Bangun perbedaan', 'Gabungkan ukuran, ketebalan, posisi, dan ruang untuk menunjukkan tingkat kepentingan.'], ['Uji alur baca', 'Lihat desain sekilas, lalu sebutkan apa yang terbaca. Bila detail kecil merebut perhatian, sesuaikan penekanannya.']],
    takeaway: 'Perbedaan harus cukup terlihat agar pembaca tidak perlu menebak urutan pesannya.',
    experiment: ['Ukuran judul', 'Setara', 'Dominan', 'Perbesar judul dan amati perubahan urutan baca tanpa memindahkan teks.'],
    brief: 'Susun poster workshop dengan tiga tingkat: “Bentuk & Makna”, “Sabtu, 24 Oktober”, lalu “Studio 02 · 10.00”.',
    canva: ['Tambahkan setiap tingkat informasi dalam kotak teks terpisah.', 'Mulai dengan judul 72, tanggal 32, dan detail 20 pada kanvas 1080 × 1350. Angka ini titik awal latihan, bukan aturan universal.', 'Perkecil tampilan sampai seukuran layar ponsel. Sesuaikan lagi jika tanggal mengalahkan judul.'],
    figma: ['Buat frame 1080 × 1350 dan tiga layer teks.', 'Tetapkan ukuran serta weight berbeda untuk judul, tanggal, dan detail. Sejajarkan tepi kirinya.', 'Duplikasikan frame dan buat versi semua ukuran sama. Bandingkan mana yang lebih cepat dipahami.'],
    success: 'Pembaca melihat judul, lalu tanggal, lalu lokasi, tanpa petunjuk tambahan.', source: hierarchySource,
    quiz: [
      ['Semua teks sama besar dan tebal. Apa akibat yang mungkin?', ['Urutan informasi sulit dibedakan', 'Hierarki pasti lebih jelas', 'Semua teks menjadi judul yang efektif'], 0, 'Tanpa perbedaan penekanan, tingkat kepentingan sulit dibaca.'],
      ['Sebelum memilih ukuran font, sebaiknya…', ['Menambah ornamen', 'Memilih efek bayangan', 'Menentukan prioritas informasi'], 2, 'Hierarki visual mengikuti hierarki pesan.'],
      ['Selain ukuran, hierarki dapat dibangun lewat…', ['Nama file', 'Posisi, kontras, dan ruang', 'Jumlah halaman saja'], 1, 'Berbagai isyarat visual dapat bekerja bersama untuk mengarahkan perhatian.']
    ]
  },
  {
    id: 'focus', title: 'Focal point', subtitle: 'Satu titik yang mengundang perhatian.', category: 'PENEKANAN', color: '#ff906d', time: '5 menit',
    intro: 'Focal point adalah pusat perhatian komposisi. Satu elemen yang berbeda dari lingkungannya dapat menjadi pintu masuk sebelum mata menjelajahi informasi lain.',
    points: [['Ciptakan pembeda', 'Coba isolasi, perbedaan ukuran, atau satu warna aksen.'], ['Kurangi persaingan', 'Terlalu banyak elemen dominan membuat pusat perhatian tidak jelas.'], ['Hubungkan dengan pesan', 'Penekanan paling kuat sebaiknya mendukung isi utama.']],
    takeaway: 'Tanyakan: apakah hal yang pertama terlihat adalah hal yang paling penting?',
    experiment: ['Jumlah aksen', 'Satu', 'Semua', 'Tambah aksen dan perhatikan kapan satu titik berhenti terasa istimewa.'],
    brief: 'Buat poster produk dengan sembilan bentuk. Pilih satu bentuk sebagai produk unggulan.',
    canva: ['Duplikasikan bentuk hingga menjadi susunan 3 × 3.', 'Beri satu bentuk warna aksen, dan gunakan warna netral pada delapan lainnya.', 'Coba versi kedua dengan semua bentuk berwarna aksen. Bandingkan kejelasan objek unggulannya.'],
    figma: ['Susun sembilan ellipse dengan ukuran yang sama.', 'Ubah fill hanya pada satu ellipse. Beri label singkat di dekatnya.', 'Duplikasikan frame, lalu samakan semua fill. Catat bagaimana fokus berubah.'],
    success: 'Satu objek unggulan mudah ditemukan tanpa memperbesar seluruh elemen.', source: hierarchySource,
    quiz: [
      ['Cara menonjolkan satu objek di antara objek netral adalah…', ['Memberi semua objek glow', 'Memberinya warna aksen', 'Menghapus semua ruang'], 1, 'Perbedaan terhadap lingkungan membantu objek menjadi pusat perhatian.'],
      ['Sepuluh objek diberi penekanan sama kuat. Apa risikonya?', ['Pusat perhatian saling bersaing', 'Satu fokus pasti muncul', 'Semua pesan otomatis terbaca'], 0, 'Penekanan yang merata mengurangi keistimewaan satu objek.'],
      ['Apa beda focal point dan hierarki?', ['Keduanya hanya tentang warna', 'Hierarki hanya untuk web', 'Focal point adalah pusat perhatian; hierarki mengatur urutan perhatian'], 2, 'Focal point dapat menjadi awal dari urutan yang dibangun oleh hierarki.']
    ]
  },
  {
    id: 'typography', title: 'Typography', subtitle: 'Bukan sekadar memilih font.', category: 'HURUF', color: '#b7caff', time: '7 menit',
    intro: 'Tipografi mengatur bentuk huruf, ukuran, jarak, dan susunan teks agar pesan terbaca sekaligus memiliki karakter.',
    points: [['Pilih peran huruf', 'Bedakan font display untuk judul singkat dari font yang nyaman untuk teks panjang. Satu keluarga font dengan beberapa weight sering sudah cukup.'], ['Atur ritmenya', 'Leading mengatur jarak antarbaris, tracking jarak huruf secara umum, dan kerning pasangan huruf tertentu.'], ['Uji pada ukuran nyata', 'Huruf dekoratif yang menarik saat besar bisa sulit dibaca saat kecil. Periksa juga karakter angka dan tanda baca.']],
    takeaway: 'Pilih font berdasarkan pesan dan keterbacaan, bukan hanya keunikannya.',
    experiment: ['Jarak antarbaris', 'Rapat', 'Longgar', 'Cari ritme yang nyaman. Terlalu rapat membuat baris bertabrakan; terlalu renggang memutus kelompok teks.'],
    brief: 'Susun judul “Ruang untuk Ide” beserta paragraf pendek tentang pameran desain.',
    canva: ['Gunakan satu keluarga font dengan judul bold dan paragraf regular.', 'Atur jarak baris paragraf melalui pengaturan spacing teks. Mulai sekitar 1,4 kali ukuran huruf lalu nilai secara visual.', 'Bandingkan paragraf rata kiri dengan rata tengah. Pilih yang paling nyaman untuk panjang teksmu.'],
    figma: ['Buat text layer judul dan paragraf dengan lebar tetap.', 'Atur line height paragraf, lalu coba dua ukuran teks dengan lebar yang sama.', 'Simpan pilihan yang nyaman sebagai text style jika akan dipakai berulang.'],
    success: 'Baris mudah diikuti, karakter terbaca, dan judul memiliki peran yang berbeda dari paragraf.', source: ['Figma — Typography in design', 'https://www.figma.com/resource-library/typography-in-design/'],
    quiz: [
      ['Jarak antarbaris disebut…', ['Kerning', 'Hue', 'Leading'], 2, 'Leading atau line height menentukan jarak antargaris dasar baris teks.'],
      ['Untuk memperbaiki jarak satu pasangan huruf, gunakan konsep…', ['Kerning', 'Saturation', 'Balance'], 0, 'Kerning menyesuaikan jarak pasangan huruf tertentu.'],
      ['Memilih font paragraf sebaiknya mengutamakan…', ['Efek dekoratif sebanyak mungkin', 'Keterbacaan pada ukuran tampil', 'Font berbeda untuk tiap kalimat'], 1, 'Paragraf dibaca berurutan, sehingga kenyamanan dan keterbacaan sangat penting.']
    ]
  },
  {
    id: 'layout', title: 'Grid & alignment', subtitle: 'Struktur yang tidak harus terlihat.', category: 'STRUKTUR', color: '#d9ff68', time: '6 menit',
    intro: 'Grid membagi bidang menjadi kolom dan margin. Alignment menghubungkan elemen lewat tepi atau sumbu yang sama.',
    points: [['Tetapkan margin', 'Beri jarak dari tepi kanvas.'], ['Pilih garis acuan', 'Hubungkan judul, gambar, dan keterangan pada garis yang sama.'], ['Gunakan grid dengan sengaja', 'Elemen boleh melintasi kolom bila membantu pesan.']],
    takeaway: 'Struktur yang konsisten membuat penyimpangan yang disengaja lebih terasa.',
    experiment: ['Kerapian alignment', 'Bergeser', 'Sejajar', 'Geser sampai tepi kiri blok bertemu dengan garis acuan.'],
    brief: 'Buat halaman katalog berisi judul, dua gambar produk, dan dua keterangan.',
    canva: ['Tetapkan margin kiri dan kanan yang sama dengan bantuan guides atau bentuk sementara.', 'Susun dua kolom gambar. Gunakan kontrol posisi dan alignment untuk menyamakan tepi.', 'Letakkan keterangan tepat di bawah gambar terkait, lalu hapus bentuk bantu.'],
    figma: ['Buat frame dan tentukan dua kolom dengan layout guides.', 'Tempatkan gambar pada kolom dan teks keterangan pada tepi kiri yang sama.', 'Gunakan auto layout untuk menjaga jarak gambar dan keterangan ketika teks bertambah.'],
    success: 'Gambar dan keterangan terhubung jelas meskipun garis grid disembunyikan.', source: principleSource,
    quiz: [
      ['Fungsi utama grid pada katalog adalah…', ['Membuat semua desain sama', 'Membantu struktur dan konsistensi posisi', 'Mengganti isi teks'], 1, 'Grid adalah alat untuk menata hubungan elemen.'],
      ['Alignment dapat menghubungkan elemen melalui…', ['Waktu ekspor', 'Ukuran file', 'Tepi atau sumbu yang sama'], 2, 'Kesamaan tepi, pusat, atau baseline menciptakan hubungan visual.'],
      ['Bolehkah elemen keluar dari grid?', ['Boleh jika disengaja untuk mendukung pesan', 'Tidak pernah', 'Hanya jika warnanya merah'], 0, 'Grid adalah panduan, bukan larangan bereksperimen.']
    ]
  },
  {
    id: 'space', title: 'White space', subtitle: 'Ruang kosong yang punya peran.', category: 'RUANG', color: '#e6dfd1', time: '5 menit',
    intro: 'White space adalah area kosong di antara dan di sekitar elemen. Warnanya tidak harus putih.',
    points: [['Beri ruang bernapas', 'Margin membantu memisahkan isi dari tepi.'], ['Dekatkan yang terkait', 'Jarak dalam kelompok biasanya lebih kecil daripada jarak antarkelompok.'], ['Pilih yang perlu', 'Ruang dapat diciptakan dengan mengurangi elemen yang tidak membantu.']],
    takeaway: 'Kosong bukan berarti terbuang. Ruang membantu mata memahami isi.',
    experiment: ['Ruang di sekitar teks', 'Sempit', 'Lapang', 'Bandingkan bagaimana margin mengubah kepadatan komposisi.'],
    brief: 'Rancang kartu kutipan dengan satu kalimat dan nama penulis. Hindari menambahkan ornamen dulu.',
    canva: ['Tambahkan kutipan pada kanvas persegi dengan latar polos.', 'Buat versi dengan margin kecil, sedang, dan besar. Pertahankan ukuran font yang sama.', 'Dekatkan nama penulis ke kutipan, lalu pilih versi yang terasa lapang tanpa memutus hubungan keduanya.'],
    figma: ['Buat frame persegi dan kelompok teks kutipan serta penulis.', 'Gunakan auto layout dengan padding. Duplikasikan untuk membandingkan tiga nilai padding.', 'Periksa apakah teks masih muat tanpa harus diperkecil berlebihan.'],
    success: 'Kutipan dan penulis terbaca sebagai satu kelompok dengan ruang yang cukup di tepinya.', source: principleSource,
    quiz: [
      ['White space harus berwarna…', ['Putih', 'Transparan', 'Tidak harus warna tertentu'], 2, 'Istilah ini merujuk pada ruang tanpa isi, bukan warna putih.'],
      ['Cara memberi ruang tanpa memperbesar kanvas adalah…', ['Mengurangi elemen yang tidak membantu', 'Menambah bingkai berlapis', 'Memenuhi setiap sudut'], 0, 'Mengurangi elemen memberi lebih banyak ruang untuk pesan utama.'],
      ['Nama penulis sangat jauh dari kutipannya. Apa risikonya?', ['Font berubah', 'Hubungan keduanya melemah', 'Warna otomatis pudar'], 1, 'Jarak memengaruhi persepsi hubungan antarelemen.']
    ]
  },
  {
    id: 'balance', title: 'Balance & rhythm', subtitle: 'Berat visual, pengulangan, kesatuan.', category: 'KOMPOSISI', color: '#ffbf70', time: '6 menit',
    intro: 'Balance mengatur distribusi berat visual. Repetition mengulang elemen, sedangkan rhythm membuat pengulangan terasa memiliki alur.',
    points: [['Simetris atau asimetris', 'Keseimbangan tidak selalu berarti kedua sisi identik.'], ['Bangun pengulangan', 'Ulangi motif, warna, atau ukuran untuk kesatuan.'], ['Variasikan dengan tujuan', 'Selingi perubahan skala atau jarak untuk ritme.']],
    takeaway: 'Nilai komposisi secara keseluruhan, bukan menghitung objek di tiap sisi saja.',
    experiment: ['Berat visual kanan', 'Ringan', 'Berat', 'Ubah ukuran lingkaran kanan. Posisi dan ukuran bersama-sama memengaruhi rasa seimbang.'],
    brief: 'Rancang tiga halaman carousel dengan motif lingkaran yang berulang dan satu judul per halaman.',
    canva: ['Buat halaman pertama dengan judul di kiri dan motif di kanan.', 'Duplikasikan halaman dua kali agar font, warna, dan margin tetap sama.', 'Ubah skala motif di tiap halaman. Pastikan perubahan tidak mengalahkan isi.'],
    figma: ['Buat tiga frame dengan ukuran sama.', 'Duplikasikan motif dan pertahankan warna serta jarak dasar antarelemen.', 'Pada satu frame, imbangi objek besar dengan beberapa objek kecil. Bandingkan berat visual kedua sisi.'],
    success: 'Ketiga halaman terasa satu seri, namun tidak identik; tidak ada sisi yang mendominasi tanpa tujuan.', source: principleSource,
    quiz: [
      ['Keseimbangan asimetris berarti…', ['Kedua sisi harus sama persis', 'Elemen berbeda bisa terasa seimbang', 'Selalu menempatkan isi di tengah'], 1, 'Ukuran, posisi, warna, dan kepadatan dapat saling mengimbangi.'],
      ['Apa yang menyatukan seri carousel?', ['Mengganti font di setiap halaman', 'Warna acak tanpa pola', 'Mengulang motif, font, dan warna secara konsisten'], 2, 'Repetition membangun kesatuan antarkomposisi.'],
      ['Ritme dapat dibuat dengan…', ['Pengulangan disertai variasi yang terarah', 'Menghapus semua pola', 'Mengubah semua elemen sekaligus'], 0, 'Variasi dalam pola dapat mengarahkan gerak mata.']
    ]
  }
];

export function normalizeProgress(raw) {
  const state = { answers: {}, checks: {} };
  if (!raw || typeof raw !== 'object') return state;
  for (const lesson of lessons) {
    state.answers[lesson.id] = lesson.quiz.map((q, i) => {
      const answer = raw.answers?.[lesson.id]?.[i];
      return Number.isInteger(answer) && answer >= 0 && answer < q[1].length ? answer : null;
    });
  }
  for (const key of ['message', 'contrast', 'spacing', 'focus']) state.checks[key] = raw.checks?.[key] === true;
  return state;
}
export function isComplete(lesson, state) {
  return lesson.quiz.every((_, i) => Number.isInteger(state.answers[lesson.id]?.[i]));
}
export const practiceSteps = {
  Canva: ['Buat desain berukuran 1080 × 1350. Tambahkan judul “Ruang Rupa”, tanggal, dan deskripsi singkat.', 'Susun tiga ellipse, tetapkan satu warna aksen, lalu sejajarkan tepi kiri judul dan keterangan.', 'Bandingkan sebelum–sesudah. Periksa checklist, lalu unduh PNG untuk tampilan digital.'],
  Figma: ['Buat frame 1080 × 1350. Tambahkan judul “Ruang Rupa”, tanggal, dan deskripsi singkat.', 'Buat tiga ellipse, gunakan satu fill aksen, lalu sejajarkan judul dan keterangan dengan margin yang sama.', 'Duplikasikan frame untuk membandingkan komposisi. Periksa checklist, lalu ekspor PNG.']
};
