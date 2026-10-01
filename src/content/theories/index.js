import { bi, categories, sourceLinks } from '../shared.js';

/** @typedef {{slug:string,title:{id:string,en:string},category:string,difficulty:string,shortDefinition:object,explanation:object,whyItMatters:object,deepDive:object,keywords:string[],aliases:string[],related:string[],experiment:string,control:object,weak:object,strong:object,commonMistakes:object[],tryItYourself:object,reflectionQuestions:object[],keyTakeaway:object}} Theory */
// All educational copy is data. The same model serves routes, search, cards and reference views.
const records = [
  {
    slug:'gestalt', title:bi('Prinsip Gestalt','Gestalt principles'), category:'perception', experiment:'proximity', related:['figure-ground','alignment','information-density'], aliases:['grouping','pengelompokan','proximity','similarity','closure'],
    short:bi('Mata menghubungkan elemen menjadi pola dan kelompok.','The eye connects elements into patterns and groups.'),
    learn:bi('Pada jadwal pameran, judul dan waktunya terasa berhubungan ketika ditempatkan berdekatan. Kesamaan bentuk, batas area, dan garis penghubung juga memberi petunjuk pengelompokan.','On an exhibition schedule, a title and its time feel related when placed nearby. Similar shapes, shared boundaries and connecting lines also suggest grouping.'),
    why:bi('Pembaca dapat memahami hubungan informasi sebelum membaca seluruh teks.','Viewers can understand relationships before reading every word.'),
    deep:bi('Isyarat pengelompokan bisa saling bersaing: kedekatan menyatukan dua objek, tetapi warna menghubungkannya dengan kelompok lain. Pilih isyarat yang mendukung struktur pesan; persepsi juga dipengaruhi pengalaman.','Grouping cues can compete: proximity connects two objects while color links them to another group. Choose cues that support the message; perception is also shaped by experience.'),
    control:bi('Jarak antarkelompok','Gap between groups'), weak:bi('Jarak seragam menyamarkan kelompok.','Equal spacing hides the groups.'), strong:bi('Jarak lebih besar membantu memisahkan dua kelompok.','A larger gap helps separate two groups.'),
    mistake:bi('Menambahkan kotak tanpa memperbaiki hubungan jarak.','Adding boxes without improving spacing relationships.'),
    practice:bi('Buat dua kelompok informasi acara: judul, waktu, dan lokasi. Beri jarak dalam kelompok lebih kecil daripada jarak antarkelompok.','Create two event groups: title, time and venue. Use smaller spacing within each group than between groups.'),
    reflection:bi('Bagaimana pembaca mengetahui waktu milik acara yang mana?','How does a viewer know which event each time belongs to?'), source:'gestalt'
  },
  {
    slug:'visual-hierarchy', title:bi('Hierarki visual','Visual hierarchy'), category:'hierarchy', experiment:'hierarchy', related:['focal-point','contrast','typography'], aliases:['hierarchy','urutan baca','attention','perhatian'],
    short:bi('Perbedaan visual membantu menentukan urutan perhatian.','Visual differences help establish an order of attention.'),
    learn:bi('Pada poster, coba arahkan perhatian dari nama acara ke tanggal lalu lokasi. Ukuran, ketebalan, posisi, dan ruang dapat bekerja bersama untuk menandai urutan itu.','On a poster, try guiding attention from event name to date, then venue. Size, weight, position and space can work together to signal that order.'),
    why:bi('Informasi utama dapat ditemukan dengan cepat saat pembaca hanya melihat sekilas.','The main message can be found quickly during a brief glance.'),
    deep:bi('Urutan baca bukan satu jalur yang pasti untuk setiap orang. Uji dengan audiens dan ukuran tampil sebenarnya; tulisan besar belum tentu dominan bila tertutup gambar yang sangat kontras.','Reading order is not a fixed path for everyone. Test with your audience at the actual display size; large text may still lose attention to a highly contrasting image.'),
    control:bi('Dominasi judul','Headline prominence'), weak:bi('Semua tingkat teks tampak setara.','All text levels appear equal.'), strong:bi('Judul, tanggal, dan detail memiliki peran berbeda.','Headline, date and details have distinct roles.'),
    mistake:bi('Membuat semua informasi besar dan tebal.','Making every piece of information large and bold.'), practice:bi('Urutkan tiga informasi poster, lalu beri ukuran dan weight yang berbeda. Uji dengan melihatnya selama dua detik.','Prioritize three poster details, then give them different sizes and weights. Test with a two-second glance.'), reflection:bi('Apa yang terlihat pertama, kedua, dan ketiga? Apakah sesuai tujuan?','What appears first, second and third? Does that match the goal?'), source:'hierarchy'
  },
  {
    slug:'focal-point', title:bi('Titik fokus','Focal point'), category:'hierarchy', experiment:'focus', related:['emphasis','contrast','visual-hierarchy'], aliases:['focus','fokus','pusat perhatian'],
    short:bi('Satu elemen menjadi titik masuk perhatian dalam komposisi.','One element becomes the entry point for attention in a composition.'),
    learn:bi('Satu lingkaran berwarna di antara lingkaran netral sering mudah ditemukan. Bila semuanya memakai aksen yang sama, elemen tadi kehilangan pembeda.','A colored circle among neutral circles is often easy to find. When all use the same accent, that element loses its distinction.'),
    why:bi('Pembaca memperoleh tempat untuk mulai mengamati pesan.','Viewers get a place to begin exploring the message.'),
    deep:bi('Fokus bisa dibangun lewat isolasi, kontras bentuk, skala, atau arah. Pilih teknik berdasarkan pesan, bukan selalu menambah warna paling terang.','Focus can come from isolation, shape contrast, scale or direction. Choose a technique for the message rather than always adding the brightest color.'),
    control:bi('Jumlah elemen beraksen','Number of accented elements'), weak:bi('Banyak aksen saling berebut perhatian.','Many accents compete for attention.'), strong:bi('Satu aksen membuat objek unggulan mudah ditemukan.','One accent makes the featured object easy to find.'),
    mistake:bi('Menonjolkan dekorasi lebih kuat daripada pesan.','Highlighting decoration more strongly than the message.'), practice:bi('Susun sembilan bentuk, lalu beri satu bentuk warna berbeda. Bandingkan dengan versi semua bentuk berwarna.','Arrange nine shapes, then color just one differently. Compare with a version where every shape is colored.'), reflection:bi('Apakah yang pertama terlihat juga yang paling penting?','Is the first thing noticed also the most important?'), source:'hierarchy'
  },
  {
    slug:'contrast', title:bi('Kontras','Contrast'), category:'hierarchy', experiment:'contrast', related:['color','figure-ground','focal-point'], aliases:['readability','keterbacaan','accessible','aksesibilitas'],
    short:bi('Perbedaan yang terlihat membantu membedakan elemen.','A visible difference helps distinguish elements.'),
    learn:bi('Coba teks abu-abu pada latar terang, lalu gelapkan teksnya. Kontras juga dapat muncul dari ukuran, bentuk, tekstur, atau weight; tidak hanya warna.','Try gray text on a light background, then darken the text. Contrast can also come from size, shape, texture or weight, not just color.'),
    why:bi('Pesan lebih mudah dipisahkan dari latar dan elemen pendukung.','The message becomes easier to separate from the background and supporting elements.'),
    deep:bi('Untuk teks digital, periksa rasio kontras selain penilaian mata. WCAG AA menggunakan minimum 4,5:1 untuk teks biasa dan 3:1 untuk teks besar; latihan ini tidak melakukan audit aksesibilitas penuh.','For digital text, check contrast ratios as well as appearance. WCAG AA uses at least 4.5:1 for normal text and 3:1 for large text; this exercise is not a complete accessibility audit.'),
    control:bi('Kegelapan teks','Text darkness'), weak:bi('Teks terlalu dekat dengan nilai latarnya.','Text is too close to the background value.'), strong:bi('Perbedaan terang–gelap membuat teks lebih terbaca.','A light–dark difference improves readability.'),
    mistake:bi('Menganggap dua hue berbeda pasti terbaca jelas.','Assuming two different hues must be easy to read.'), practice:bi('Bandingkan tiga warna teks pada latar yang sama. Periksa pada ukuran ponsel dan dengan alat pemeriksa kontras.','Compare three text colors on the same background. Check at phone size and with a contrast checker.'), reflection:bi('Apakah teks tetap terbaca saat warna diubah menjadi grayscale?','Does the text remain readable in grayscale?'), source:'principles'
  },
  {
    slug:'color', title:bi('Teori warna','Color theory'), category:'color', experiment:'color', related:['contrast','emphasis','visual-consistency'], aliases:['hue','saturation','value','harmony','palet','warna'],
    short:bi('Hue, intensitas, dan terang–gelap membentuk hubungan warna.','Hue, intensity and light–dark values shape color relationships.'),
    learn:bi('Analogous memakai hue berdekatan, complementary memakai pasangan berseberangan, dan triadic memakai tiga hue berjarak merata pada roda warna. Tetapkan peran latar, teks, dan aksen.','Analogous palettes use nearby hues, complementary palettes use opposite hues, and triadic palettes use three evenly spaced hues on a color wheel. Assign background, text and accent roles.'),
    why:bi('Palet dapat mendukung suasana sekaligus membedakan peran informasi.','A palette can support a mood while distinguishing information roles.'),
    deep:bi('Roda HSL untuk layar berbeda dari model pencampuran cat. Harmoni tidak menjamin keterbacaan, dan asosiasi warna bergantung budaya serta konteks. Pertimbangkan kebutuhan cetak secara terpisah.','An HSL wheel for screens differs from paint mixing models. Harmony does not guarantee readability, and color associations depend on culture and context. Consider print requirements separately.'),
    control:bi('Hue utama','Primary hue'), weak:bi('Warna dipilih tanpa peran yang jelas.','Colors have no clear roles.'), strong:bi('Satu hue utama dan aksen complementary memiliki peran.','A primary hue and complementary accent have assigned roles.'),
    mistake:bi('Menggunakan warna sebagai satu-satunya penanda informasi.','Using color as the only information cue.'), practice:bi('Buat tiga palet poster dengan isi sama. Gunakan Canva Color Wheel, catat HEX, dan uji kontras tiap palet.','Make three poster palettes with identical content. Use Canva Color Wheel, record HEX values and check each palette’s contrast.'), reflection:bi('Peran mana yang berubah ketika hue utama diganti?','Which roles change when the primary hue changes?'), source:'color'
  },
  {
    slug:'rule-of-thirds', title:bi('Aturan sepertiga','Rule of thirds'), category:'composition', experiment:'thirds', related:['balance','focal-point','grid'], aliases:['thirds','sepertiga','crop','komposisi foto'],
    short:bi('Grid 3 × 3 memberi pilihan posisi di garis atau perpotongannya.','A 3 × 3 grid suggests positions along its lines or intersections.'),
    learn:bi('Pindahkan subjek foto dari tengah ke salah satu perpotongan grid. Ruang di sisi lain dapat memberi konteks atau tempat untuk judul.','Move a photo subject from the center to a grid intersection. The space on the other side can provide context or room for a headline.'),
    why:bi('Panduan ini membantu mencoba komposisi selain semua elemen di tengah.','This guideline helps explore compositions beyond centering everything.'),
    deep:bi('Ini pilihan komposisi, bukan hukum keindahan. Potret simetris atau objek yang perlu diperlihatkan frontal dapat lebih sesuai diletakkan di tengah. Bandingkan menurut tujuan.','This is a composition option, not a law of beauty. Symmetrical portraits or frontal objects may work better centered. Compare against the intended purpose.'),
    control:bi('Posisi subjek','Subject position'), weak:bi('Subjek di tengah menyisakan pilihan ruang terbatas.','A centered subject offers different space options.'), strong:bi('Posisi sepertiga menyediakan ruang untuk pesan.','A third-line position leaves room for the message.'),
    mistake:bi('Memindahkan subjek ke sepertiga meskipun pesan membutuhkannya di tengah.','Forcing a third-line position when the message calls for a centered subject.'), practice:bi('Crop satu foto dalam versi tengah dan versi sepertiga. Tambahkan judul yang sama lalu bandingkan.','Crop one photo in centered and third-line versions. Add the same headline and compare.'), reflection:bi('Versi mana memberi ruang yang paling berguna untuk teks?','Which version creates the most useful space for text?'), source:'principles'
  },
  {
    slug:'grid', title:bi('Sistem grid','Grid systems'), category:'composition', experiment:'grid', related:['alignment','proportion','visual-consistency'], aliases:['columns','kolom','layout','struktur'],
    short:bi('Kolom, baris, margin, dan gutter memberi kerangka tata letak.','Columns, rows, margins and gutters provide a layout framework.'),
    learn:bi('Pada katalog, grid membantu gambar dan keterangan menempati posisi yang konsisten. Elemen dapat memakai satu kolom atau melintasi beberapa kolom.','In a catalog, a grid helps images and captions occupy consistent positions. An element may use one column or span several.'),
    why:bi('Halaman yang padat lebih mudah ditata tanpa menebak setiap posisi.','Dense pages are easier to arrange without guessing every position.'),
    deep:bi('Grid modular, kolom, dan baseline melayani kebutuhan berbeda. Gutter memisahkan kolom; margin memisahkan isi dari tepi. Penyimpangan sengaja dapat menambah penekanan.','Modular, column and baseline grids serve different needs. Gutters separate columns; margins separate content from edges. Intentional departures can add emphasis.'),
    control:bi('Jumlah kolom','Column count'), weak:bi('Blok tanpa struktur membuat tepi sulit diikuti.','Unstructured blocks make edges hard to follow.'), strong:bi('Kolom membantu menjaga hubungan posisi.','Columns help maintain positional relationships.'),
    mistake:bi('Memaksa semua konten ke sel berukuran sama.','Forcing all content into equally sized cells.'), practice:bi('Buat katalog dua produk dengan grid dua kolom. Uji judul yang melintasi dua kolom.','Build a two-product catalog on a two-column grid. Try a headline spanning both columns.'), reflection:bi('Bagaimana grid membantu ketika keterangan menjadi lebih panjang?','How does the grid help when captions become longer?'), source:'principles'
  },
  {
    slug:'alignment', title:bi('Alignment','Alignment'), category:'composition', experiment:'alignment', related:['grid','gestalt','visual-consistency'], aliases:['sejajar','align','rapi','edges'],
    short:bi('Tepi, pusat, atau baseline bersama menghubungkan elemen.','Shared edges, centers or baselines connect elements.'),
    learn:bi('Sejajarkan tepi kiri judul dan paragraf. Garis yang tidak terlihat itu dapat membuat keduanya terasa satu struktur tanpa kotak pembatas.','Align the left edges of a headline and paragraph. The invisible line can connect them into one structure without a box.'),
    why:bi('Hubungan visual lebih jelas dan mata tidak perlu mencari awal tiap baris.','Visual relationships become clearer and the eye can find the start of each line.'),
    deep:bi('Alignment optis kadang berbeda dari alignment geometris. Bentuk bulat atau huruf tertentu dapat terasa bergeser meskipun koordinatnya sama. Koreksi kecil boleh dilakukan dengan alasan.','Optical alignment can differ from geometric alignment. Round shapes or certain letters may look offset despite equal coordinates. Small, deliberate corrections can help.'),
    control:bi('Ketepatan tepi kiri','Left-edge alignment'), weak:bi('Setiap blok punya tepi awal berbeda.','Each block starts at a different edge.'), strong:bi('Tepi bersama menghubungkan judul dan isi.','A shared edge connects the heading and body.'),
    mistake:bi('Mencampur rata kiri, tengah, dan kanan tanpa tujuan.','Mixing left, center and right alignment without a purpose.'), practice:bi('Susun tiga kotak teks. Coba versi tepi kiri sejajar dan versi bergeser.','Arrange three text boxes. Compare aligned left edges with staggered edges.'), reflection:bi('Garis acuan mana yang menghubungkan informasi terkait?','Which reference line connects related information?'), source:'principles'
  },
  {
    slug:'white-space', title:bi('Ruang kosong','White space'), category:'composition', experiment:'space', related:['information-density','gestalt','visual-hierarchy'], aliases:['negative space','crowded','ramai','padat','ruang','margin'],
    short:bi('Area tanpa isi membantu memisahkan dan mengelompokkan pesan.','Areas without content help separate and group messages.'),
    learn:bi('Ruang kosong tidak harus putih. Coba memberi margin lebih besar pada kartu kutipan sambil menjaga nama penulis dekat dengan kutipannya.','White space need not be white. Try a larger margin around a quote while keeping the author close to the quote.'),
    why:bi('Pembaca lebih mudah membedakan kelompok serta menemukan pesan utama.','Viewers can distinguish groups and find the main message more easily.'),
    deep:bi('Ruang mikro mencakup jarak huruf dan baris; ruang makro mencakup margin dan area antarkelompok. Terlalu banyak ruang juga dapat memutus hubungan informasi.','Micro space includes letter and line spacing; macro space includes margins and gaps between groups. Too much space can also break information relationships.'),
    control:bi('Margin isi','Content margin'), weak:bi('Teks terlalu dekat dengan tepi.','Text sits too close to the edge.'), strong:bi('Margin memberi ruang untuk membaca.','Margins provide room to read.'),
    mistake:bi('Mengisi setiap area kosong dengan dekorasi.','Filling every empty area with decoration.'), practice:bi('Buat tiga versi kartu kutipan dengan margin kecil, sedang, dan besar. Pertahankan fontnya.','Create three quote cards with small, medium and large margins. Keep the font unchanged.'), reflection:bi('Kapan ruang membantu, dan kapan mulai memisahkan isi yang terkait?','When does space help, and when does it separate related content?'), source:'principles'
  },
  {
    slug:'balance', title:bi('Keseimbangan','Balance'), category:'composition', experiment:'balance', related:['visual-weight','proportion','rule-of-thirds'], aliases:['simetri','asymmetry','symmetry','seimbang'],
    short:bi('Distribusi berat visual membentuk rasa stabil dalam komposisi.','The distribution of visual weight creates a sense of stability.'),
    learn:bi('Satu objek besar dapat diimbangi beberapa objek kecil. Komposisi simetris memiliki pasangan yang mirip; asimetris dapat terasa seimbang meski kedua sisi berbeda.','One large object can be balanced by several small objects. Symmetrical compositions use similar counterparts; asymmetrical ones can feel balanced with different sides.'),
    why:bi('Pembaca dapat menjelajahi seluruh bidang tanpa satu sisi mendominasi tanpa alasan.','Viewers can explore the whole composition without one side dominating unintentionally.'),
    deep:bi('Jumlah objek tidak menentukan keseimbangan sendirian. Posisi, kontras, detail, dan ruang memengaruhi berat visual. Ketidakseimbangan sengaja bisa mendukung rasa tegang atau bergerak.','Object count alone does not determine balance. Position, contrast, detail and space affect visual weight. Intentional imbalance can support tension or motion.'),
    control:bi('Ukuran objek kanan','Right object size'), weak:bi('Sisi kanan atau kiri mendominasi tanpa tujuan.','One side dominates without a purpose.'), strong:bi('Objek berbeda dapat saling mengimbangi.','Different objects can counterbalance each other.'),
    mistake:bi('Menyamakan jumlah objek dengan berat visualnya.','Equating object count with visual weight.'), practice:bi('Imbangi satu lingkaran besar dengan tiga kecil. Coba ubah jarak dari tengah.','Balance one large circle with three small ones. Try changing the distance from the center.'), reflection:bi('Apa yang berubah bila objek kecil dipindah ke tepi?','What changes when a small object moves toward the edge?'), source:'principles'
  },
  {
    slug:'scale', title:bi('Skala','Scale'), category:'hierarchy', experiment:'scale', related:['proportion','visual-hierarchy','emphasis'], aliases:['size','ukuran','besar','kecil'],
    short:bi('Ukuran dibandingkan dengan elemen lain dan bidangnya.','Size is perceived relative to other elements and the canvas.'),
    learn:bi('Bentuk yang sama dapat terasa biasa atau monumental tergantung pembandingnya. Perbesar satu objek sambil menjaga objek lain tetap kecil.','The same shape can seem ordinary or monumental depending on its reference. Enlarge one object while keeping the others small.'),
    why:bi('Perbedaan ukuran dapat memberi penekanan dan menunjukkan hubungan.','Size differences can create emphasis and show relationships.'),
    deep:bi('Skala tampilan berbeda dari ukuran file desain. Judul yang terbaca pada kanvas besar mungkin mengecil terlalu jauh di feed ponsel. Periksa konteks pemakaiannya.','Display scale differs from the design file size. A readable headline on a large canvas may become too small in a phone feed. Check the usage context.'),
    control:bi('Skala objek utama','Main object scale'), weak:bi('Objek utama dan pembanding sama besar.','The main object and reference have equal size.'), strong:bi('Perbedaan ukuran menegaskan hubungan.','A size difference clarifies the relationship.'),
    mistake:bi('Membesarkan semua elemen sekaligus.','Enlarging every element at once.'), practice:bi('Buat komposisi tiga lingkaran. Besarkan hanya satu dan uji pada ukuran thumbnail.','Create a three-circle composition. Enlarge only one and test at thumbnail size.'), reflection:bi('Seberapa besar perbedaan yang diperlukan agar penekanan terasa?','How much size difference is needed for emphasis to be noticeable?'), source:'principles'
  },
  {
    slug:'proportion', title:bi('Proporsi','Proportion'), category:'composition', experiment:'proportion', related:['scale','grid','balance'], aliases:['ratio','rasio','perbandingan'],
    short:bi('Perbandingan ukuran antarbagian membentuk hubungan dalam keseluruhan.','Size ratios between parts shape their relationship to the whole.'),
    learn:bi('Bandingkan bidang gambar dan teks dalam kartu poster. Mengubah rasio lebar mengubah seberapa banyak ruang yang tersedia untuk setiap bagian.','Compare image and text areas in a poster card. Changing their width ratio changes the space available to each part.'),
    why:bi('Pembagian ruang dapat mengikuti kebutuhan isi, bukan sekadar ukuran yang sama.','Space can follow content needs rather than automatically being divided equally.'),
    deep:bi('Rasio seperti 1:2 atau golden ratio dapat menjadi titik awal eksplorasi, bukan bukti bahwa desain pasti baik. Nilai kegunaannya dari keterbacaan dan tujuan.','Ratios such as 1:2 or the golden ratio can start an exploration, not prove a design is good. Judge usefulness by readability and purpose.'),
    control:bi('Porsi bidang gambar','Image area share'), weak:bi('Pembagian ruang membuat satu bagian terlalu sesak.','The space split leaves one part cramped.'), strong:bi('Rasio disesuaikan dengan kebutuhan isi.','The ratio fits the content needs.'),
    mistake:bi('Memaksakan satu rasio untuk semua jenis konten.','Forcing one ratio on every type of content.'), practice:bi('Bandingkan poster dengan porsi gambar 30%, 50%, dan 70%. Gunakan teks yang sama.','Compare posters with 30%, 50% and 70% image areas. Keep the text identical.'), reflection:bi('Rasio mana yang mendukung pesan dalam poster ini?','Which ratio supports this poster’s message?'), source:'principles'
  },
  {
    slug:'rhythm', title:bi('Ritme','Rhythm'), category:'systems', experiment:'rhythm', related:['repetition','visual-consistency','balance'], aliases:['alur','pattern','pola','gerak mata'],
    short:bi('Pengulangan dan variasi membuat alur gerak mata.','Repetition and variation create a flow for the eye.'),
    learn:bi('Deretan bentuk dengan ukuran atau jarak yang berubah bertahap dapat terasa bergerak. Coba ritme teratur, lalu sisipkan variasi.','A sequence with gradually changing sizes or gaps can suggest movement. Try a regular rhythm, then introduce variation.'),
    why:bi('Pembaca dapat mengikuti urutan visual dan merasa ada kesinambungan.','Viewers can follow a visual sequence and sense continuity.'),
    deep:bi('Ritme teratur, bergantian, dan progresif memiliki efek berbeda. Terlalu banyak variasi dapat menghilangkan pola yang menjadi acuannya.','Regular, alternating and progressive rhythms have different effects. Too much variation can remove the pattern that makes rhythm perceptible.'),
    control:bi('Variasi ukuran','Size variation'), weak:bi('Perubahan acak mengaburkan pola.','Random changes obscure the pattern.'), strong:bi('Variasi bertahap menghasilkan alur.','Gradual variation creates a flow.'),
    mistake:bi('Mengubah setiap elemen tanpa mempertahankan pola.','Changing every element without maintaining a pattern.'), practice:bi('Buat enam bentuk berulang. Ubah ukuran secara bertahap dan lihat arah gerak mata.','Create six repeated shapes. Gradually change their sizes and observe the eye’s direction.'), reflection:bi('Apa pola yang masih bisa dikenali setelah variasi ditambahkan?','What pattern remains recognizable after variation is added?'), source:'principles'
  },
  {
    slug:'repetition', title:bi('Pengulangan','Repetition'), category:'systems', experiment:'repetition', related:['rhythm','visual-consistency','typography'], aliases:['repeat','berulang','motif','unity','kesatuan'],
    short:bi('Elemen yang dipakai kembali membantu menyatukan desain.','Reusing elements helps unify a design.'),
    learn:bi('Ulangi warna aksen, bentuk label, dan gaya judul dalam seri carousel. Pembaca dapat mengenali bahwa halaman berbeda berasal dari seri yang sama.','Repeat an accent color, label shape and headline style in a carousel. Viewers can recognize different pages as part of the same series.'),
    why:bi('Kesatuan dapat terbentuk tanpa membuat setiap halaman identik.','Unity can emerge without making every page identical.'),
    deep:bi('Pengulangan dapat menjadi identitas, tetapi yang diulang sebaiknya memiliki fungsi. Biarkan isi berbeda sementara aturan visual yang penting tetap terbaca.','Repetition can build identity, but repeated elements should serve a function. Let content vary while important visual rules remain recognizable.'),
    control:bi('Konsistensi motif','Motif consistency'), weak:bi('Motif berubah tanpa pola yang dapat dikenali.','Motifs change without a recognizable pattern.'), strong:bi('Motif berulang menghubungkan seri.','Repeated motifs connect the series.'),
    mistake:bi('Mengulang dekorasi sampai mengganggu isi.','Repeating decoration until it interferes with content.'), practice:bi('Rancang tiga kartu dengan satu motif yang sama dan isi yang berbeda.','Design three cards sharing one motif but with different content.'), reflection:bi('Elemen apa yang membuat tiga kartu terasa satu seri?','Which element makes the three cards feel like a series?'), source:'principles'
  },
  {
    slug:'typography', title:bi('Tipografi','Typography'), category:'typography', experiment:'typography', related:['visual-hierarchy','alignment','white-space'], aliases:['typeface','font','leading','tracking','kerning','huruf','pairing'],
    short:bi('Pemilihan dan pengaturan huruf membentuk karakter serta keterbacaan.','Selecting and arranging type shapes character and readability.'),
    learn:bi('Typeface adalah desain huruf; size dan weight menentukan ukuran serta ketebalan. Leading mengatur antarbaris, tracking jarak huruf umum, dan kerning pasangan huruf.','A typeface is a letter design; size and weight set size and thickness. Leading sets line spacing, tracking overall letter spacing, and kerning specific letter pairs.'),
    why:bi('Teks dapat menyampaikan nada sekaligus nyaman dibaca.','Text can convey a tone while remaining comfortable to read.'),
    deep:bi('Pairing bukan kewajiban memakai dua font. Satu keluarga dengan beberapa weight dapat mencukupi. Uji paragraf pada lebar, panjang baris, dan ukuran yang sebenarnya.','Pairing does not require two fonts. One family with multiple weights may be enough. Test paragraphs at their actual width, line length and size.'),
    control:bi('Jarak antarbaris','Line spacing'), weak:bi('Baris yang terlalu rapat sulit dipisahkan.','Very tight lines are difficult to separate.'), strong:bi('Jarak yang cukup membantu mengikuti baris.','Sufficient spacing helps follow the lines.'),
    mistake:bi('Memilih font dekoratif untuk paragraf panjang tanpa pengujian.','Choosing a decorative font for long paragraphs without testing.'), practice:bi('Buat judul bold dan paragraf regular dalam satu keluarga font. Bandingkan tiga line height.','Create a bold headline and regular paragraph in one font family. Compare three line heights.'), reflection:bi('Pada jarak antarbaris mana paragraf nyaman dibaca?','At which line spacing is the paragraph comfortable to read?'), source:'typography'
  },
  {
    slug:'visual-weight', title:bi('Berat visual','Visual weight'), category:'perception', experiment:'weight', related:['balance','contrast','scale'], aliases:['weight','berat','salience','perhatian'],
    short:bi('Sebagian elemen menarik perhatian lebih kuat daripada elemen lain.','Some elements attract more attention than others.'),
    learn:bi('Objek lebih besar, lebih kontras, atau lebih rumit sering terasa berat. Dua bentuk berukuran sama dapat terasa berbeda saat salah satunya diisi warna gelap.','Larger, more contrasting or more detailed objects often feel heavier. Equal-sized shapes can feel different when one is filled with a dark color.'),
    why:bi('Berat visual membantu menjelaskan mengapa jumlah objek sama belum tentu seimbang.','Visual weight helps explain why equal object counts do not always feel balanced.'),
    deep:bi('Berat visual tidak memiliki satu rumus universal. Posisi, ruang, warna, detail, dan makna objek dapat berinteraksi. Amati komposisi lengkap.','Visual weight has no single universal formula. Position, space, color, detail and meaning can interact. Observe the complete composition.'),
    control:bi('Intensitas isi objek','Object fill intensity'), weak:bi('Satu bidang berat menarik perhatian tanpa tujuan.','A heavy area draws attention without a purpose.'), strong:bi('Berat visual dipilih sesuai peran objek.','Visual weight matches the object’s role.'),
    mistake:bi('Memeriksa ukuran saja dan mengabaikan kontras.','Checking only size and ignoring contrast.'), practice:bi('Bandingkan lingkaran outline dan lingkaran filled dengan ukuran sama. Coba pindahkan keduanya.','Compare outline and filled circles of equal size. Try moving both.'), reflection:bi('Mengapa dua bentuk dengan ukuran sama terasa berbeda?','Why do two equal-sized shapes feel different?'), source:'principles'
  },
  {
    slug:'emphasis', title:bi('Penekanan','Emphasis'), category:'hierarchy', experiment:'emphasis', related:['focal-point','visual-hierarchy','contrast'], aliases:['highlight','utama','penting','penekanan'],
    short:bi('Perlakuan visual tertentu memberi prioritas pada pesan.','A deliberate visual treatment gives a message priority.'),
    learn:bi('Di poster workshop, menebalkan judul dapat menekankan topik. Memberi aksen pada tanggal berguna bila waktu adalah pesan paling penting.','In a workshop poster, a bold heading may emphasize the topic. Accenting the date helps when timing is the most important message.'),
    why:bi('Perhatian dapat diarahkan ke informasi yang relevan dengan tujuan desain.','Attention can be directed toward information relevant to the design goal.'),
    deep:bi('Emphasis adalah tindakan menekankan; focal point adalah pusat perhatian yang terbentuk. Penekanan yang terlalu luas dapat menghasilkan beberapa fokus yang bersaing.','Emphasis is the act of highlighting; a focal point is the resulting center of attention. Broad emphasis can produce several competing focal points.'),
    control:bi('Ketebalan judul','Headline weight'), weak:bi('Judul sulit dibedakan dari detail.','The headline is hard to distinguish from details.'), strong:bi('Weight berbeda memberi prioritas pada judul.','A different weight gives the headline priority.'),
    mistake:bi('Memakai bold, warna, outline, dan bayangan sekaligus pada semua teks.','Using bold, color, outlines and shadows on every text element.'), practice:bi('Buat dua poster: satu menekankan judul, satu menekankan tanggal. Tentukan konteks yang sesuai untuk masing-masing.','Make two posters: one emphasizes the title, the other the date. Decide which context suits each.'), reflection:bi('Informasi apa yang perlu ditonjolkan untuk audiens ini?','Which information needs emphasis for this audience?'), source:'hierarchy'
  },
  {
    slug:'figure-ground', title:bi('Figure–ground','Figure–ground'), category:'perception', experiment:'figure', related:['gestalt','contrast','white-space'], aliases:['foreground','background','latar','objek'],
    short:bi('Mata membedakan objek yang diamati dari latarnya.','The eye separates the observed object from its background.'),
    learn:bi('Sebuah simbol mudah dibaca ketika tepinya berbeda dari latar. Coba mengubah warna latar tanpa mengubah bentuk simbol.','A symbol is easier to read when its edges differ from the background. Try changing the background without changing the symbol.'),
    why:bi('Objek utama lebih mudah dikenali dan tidak melebur ke lingkungan.','The main object becomes recognizable instead of merging with its surroundings.'),
    deep:bi('Komposisi ambigu dapat membuat persepsi bergantian antara figure dan ground. Ini menarik untuk ilustrasi, tetapi dapat mengganggu bila informasi perlu dikenali cepat.','Ambiguous compositions can shift perception between figure and ground. This may suit illustration but interfere when information must be recognized quickly.'),
    control:bi('Pemisahan objek dan latar','Object–background separation'), weak:bi('Nilai objek dan latar terlalu mirip.','Object and background values are too similar.'), strong:bi('Tepi objek lebih mudah dikenali.','The object’s edge becomes easier to recognize.'),
    mistake:bi('Menaruh simbol di latar ramai tanpa area pemisah.','Placing a symbol on a busy background without separation.'), practice:bi('Tempatkan satu simbol pada tiga latar. Coba area polos di belakangnya jika latar terlalu ramai.','Place one symbol on three backgrounds. Try a plain area behind it when the background is busy.'), reflection:bi('Apa yang kamu anggap objek, dan apa yang kamu anggap latar?','What do you perceive as the object and what as the background?'), source:'gestalt'
  },
  {
    slug:'information-density', title:bi('Kepadatan informasi','Information density'), category:'composition', experiment:'density', related:['white-space','visual-hierarchy','gestalt','alignment'], aliases:['crowded','my design looks crowded','ramai','padat','sesak','cognitive load'],
    short:bi('Banyaknya informasi dalam suatu ruang memengaruhi usaha membaca.','The amount of information in a space affects reading effort.'),
    learn:bi('Poster dengan banyak detail bisa berguna, tetapi membutuhkan pengelompokan dan hierarki. Coba kurangi detail sekunder, lalu susun yang tersisa.','A detailed poster can be useful, but needs grouping and hierarchy. Try removing secondary details, then organize what remains.'),
    why:bi('Pembaca dapat menemukan pesan tanpa kehilangan konteks yang diperlukan.','Viewers can find the message without losing needed context.'),
    deep:bi('Kepadatan tinggi tidak selalu buruk. Peta dan jadwal sering membutuhkan banyak data. Sesuaikan dengan tugas, jarak lihat, waktu membaca, dan pengalaman audiens.','High density is not always bad. Maps and schedules often need substantial data. Match density to the task, viewing distance, reading time and audience experience.'),
    control:bi('Jumlah detail pendukung','Supporting detail count'), weak:bi('Detail banyak tanpa struktur menyulitkan pencarian pesan.','Many unstructured details make the message hard to find.'), strong:bi('Detail dipilih sesuai kebutuhan dan disusun jelas.','Details are selected for the task and organized clearly.'),
    mistake:bi('Menghapus informasi penting hanya agar tampak minimal.','Removing necessary information just to look minimal.'), practice:bi('Buat poster ringkas untuk feed dan versi detail untuk papan pengumuman. Pertahankan pesan utama yang sama.','Create a brief feed poster and a detailed noticeboard version. Keep the same main message.'), reflection:bi('Informasi mana yang benar-benar diperlukan untuk tugas pembaca?','Which information does the viewer actually need for their task?'), source:'principles'
  },
  {
    slug:'visual-consistency', title:bi('Konsistensi visual','Visual consistency'), category:'systems', experiment:'consistency', related:['repetition','grid','typography'], aliases:['design systems','sistem desain','consistent','seragam','styles'],
    short:bi('Aturan visual yang sama membantu mengenali peran yang sama.','Shared visual rules help people recognize shared roles.'),
    learn:bi('Pada seri poster, gunakan gaya judul, margin, dan label tanggal yang konsisten. Isi dan gambar dapat berubah sementara perannya tetap jelas.','Across a poster series, use consistent headline styles, margins and date labels. Content and images can change while their roles stay clear.'),
    why:bi('Pembaca tidak perlu mempelajari ulang pola di setiap halaman.','Viewers do not need to relearn patterns on every page.'),
    deep:bi('Sistem desain menyimpan aturan lewat gaya teks, warna, komponen, dan contoh. Konsistensi tidak berarti semua elemen identik; perubahan dapat mengikuti peran dan konteks.','Design systems capture rules through text styles, colors, components and examples. Consistency does not mean everything is identical; variation can follow roles and context.'),
    control:bi('Konsistensi kartu','Card consistency'), weak:bi('Gaya judul dan aksen berubah tanpa alasan.','Heading and accent styles change without a reason.'), strong:bi('Aturan yang sama menghubungkan kartu berbeda.','Shared rules connect different cards.'),
    mistake:bi('Mengubah font dan warna tiap halaman hanya untuk variasi.','Changing fonts and colors on each page only for variety.'), practice:bi('Tetapkan tiga aturan seri: font judul, warna aksen, dan margin. Buat tiga kartu dengan isi berbeda.','Set three series rules: headline font, accent color and margin. Make three cards with different content.'), reflection:bi('Aturan mana yang tetap, dan bagian mana yang boleh bervariasi?','Which rules stay fixed and which parts may vary?'), source:'principles'
  }
];

/** @type {Theory[]} */
export const theories = records.map(record => ({
  ...record, difficulty:'beginner', shortDefinition:record.short, explanation:record.learn, whyItMatters:record.why,
  deepDive:record.deep, keywords:[record.slug, ...record.aliases, record.category],
  commonMistakes:[record.mistake], tryItYourself:record.practice, reflectionQuestions:[record.reflection],
  keyTakeaway:record.strong, examples:[{ weak:record.weak, strong:record.strong }],
  source:sourceLinks[record.source], color:categories.find(category=>category.id===record.category).color,
  principles:record.slug==='gestalt'?['proximity','similarity','closure','continuity','figure-ground','common-region','connectedness','common-fate'].map(slug=>({slug:`gestalt/${slug}`})):undefined
}));
export const getTheory = slug => theories.find(theory=>theory.slug===slug);
