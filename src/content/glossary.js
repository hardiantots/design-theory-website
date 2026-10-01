import { bi } from './shared.js';
export const glossary = [
  ['Hue',bi('Keluarga warna, seperti merah atau biru.','A color family, such as red or blue.'),'color'],
  ['Saturation',bi('Intensitas suatu warna; rendah cenderung mendekati abu-abu.','A color’s intensity; lower saturation tends toward gray.'),'color'],
  ['Value',bi('Terang atau gelap suatu warna dalam konteks visual.','How light or dark a color appears in a visual context.'),'color'],
  ['Harmony',bi('Hubungan warna yang dipilih sebagai suatu palet.','Relationships between colors chosen for a palette.'),'color'],
  ['Typeface',bi('Rancangan karakter dalam satu keluarga huruf.','The character design of a type family.'),'typography'],
  ['Font',bi('Varian typeface tertentu, misalnya ukuran atau weight.','A particular typeface variant, such as a size or weight.'),'typography'],
  ['Leading',bi('Jarak vertikal antarbaris teks.','Vertical spacing between lines of text.'),'typography'],
  ['Tracking',bi('Penyesuaian jarak huruf secara umum dalam rangkaian teks.','Overall letter spacing across a text passage.'),'typography'],
  ['Kerning',bi('Penyesuaian jarak antara pasangan huruf tertentu.','Spacing adjustments between specific letter pairs.'),'typography'],
  ['Pairing',bi('Menggabungkan peran huruf yang saling mendukung.','Combining type roles that support each other.'),'typography'],
  ['Gutter',bi('Ruang pemisah di antara kolom grid.','The gap separating grid columns.'),'grid'],
  ['Margin',bi('Ruang dari tepi bidang ke isi.','Space between the canvas edge and its content.'),'white-space'],
  ['Baseline',bi('Garis acuan tempat sebagian besar huruf bertumpu.','The reference line on which most letters sit.'),'alignment'],
  ['Negative space',bi('Area kosong di sekitar atau di antara objek.','Empty areas around or between objects.'),'white-space'],
  ['Emphasis',bi('Perlakuan visual untuk memberi prioritas pesan.','A visual treatment that gives a message priority.'),'emphasis'],
  ['Cognitive load',bi('Usaha mental yang diperlukan untuk memahami suatu tugas atau informasi.','The mental effort needed to understand a task or information.'),'information-density'],
  ['Design system',bi('Aturan dan komponen yang membantu penggunaan visual konsisten.','Rules and components that support consistent visual use.'),'visual-consistency'],
  ['Accessibility',bi('Merancang agar informasi dapat digunakan orang dengan kebutuhan yang beragam.','Designing information for people with a range of needs.'),'contrast']
  ,['Alignment',bi('Menyusun tepi atau pusat elemen terhadap satu acuan.','Arranging element edges or centers against a shared reference.'),'alignment'],
  ['Balance',bi('Hubungan berat visual yang membuat komposisi terasa stabil.','A relationship of visual weights that makes a composition feel stable.'),'balance'],
  ['Closure',bi('Kecenderungan melengkapi bentuk yang sebagian hilang.','The tendency to complete a partially missing shape.'),'gestalt'],
  ['Contrast',bi('Perbedaan visual yang membantu membedakan elemen.','Visual differences that help distinguish elements.'),'contrast'],
  ['Focal Point',bi('Area yang mendapat penekanan relatif terhadap lingkungan.','An area emphasized relative to its surroundings.'),'focal-point'],
  ['Gestalt',bi('Pendekatan persepsi tentang bagaimana bagian terlihat sebagai keseluruhan.','An approach to perception describing how parts are seen as wholes.'),'gestalt'],
  ['Grid',bi('Sistem garis dan kolom yang membantu struktur komposisi.','A system of lines and columns supporting composition structure.'),'grid'],
  ['Hierarchy',bi('Tingkat prioritas visual untuk membaca informasi.','Levels of visual priority for reading information.'),'visual-hierarchy'],
  ['Proportion',bi('Hubungan ukuran antarbagian dan keseluruhan.','Size relationships between parts and the whole.'),'proportion'],
  ['Proximity',bi('Kedekatan yang memberi petunjuk hubungan elemen.','Nearness that cues relationships between elements.'),'gestalt'],
  ['Rhythm',bi('Pola perubahan atau pengulangan yang memberi alur.','A pattern of variation or repetition that creates a flow.'),'rhythm'],
  ['Scale',bi('Ukuran elemen relatif terhadap elemen lain atau bidangnya.','An element’s size relative to others or its canvas.'),'scale'],
  ['Similarity',bi('Kesamaan tampilan yang memberi petunjuk pengelompokan.','Shared appearance that cues grouping.'),'gestalt'],
  ['Visual Weight',bi('Kesan seberapa kuat elemen menarik perhatian melalui ukuran, kontras, dan posisi.','An impression of how strongly an element draws attention through size, contrast and position.'),'visual-weight'],
  ['White Space',bi('Ruang visual yang sengaja tidak diisi; tidak harus putih.','Intentionally unoccupied visual space; it need not be white.'),'white-space']
].map(([term,definition,related])=>({term,label:bi(term,term),definition,related}));
const translated={Alignment:'Alignment / Penjajaran',Balance:'Keseimbangan',Baseline:'Garis dasar',Closure:'Closure / Penutupan',Contrast:'Kontras','Focal Point':'Titik Fokus',Gestalt:'Gestalt',Grid:'Grid / Kisi',Hierarchy:'Hierarki Visual',Hue:'Hue / Rona',Leading:'Leading / Jarak antarbaris',Kerning:'Kerning / Jarak pasangan huruf','Negative space':'Ruang Negatif',Proportion:'Proporsi',Proximity:'Proximity / Kedekatan',Rhythm:'Ritme',Saturation:'Saturasi',Scale:'Skala',Similarity:'Similarity / Kesamaan',Tracking:'Tracking / Jarak huruf','Visual Weight':'Bobot Visual','White Space':'Ruang Kosong / Ruang Negatif',Value:'Value / Nilai terang-gelap',Harmony:'Harmoni',Typeface:'Typeface / Keluarga huruf',Font:'Font',Pairing:'Pairing / Pasangan huruf',Gutter:'Gutter / Jarak antarkolom',Margin:'Margin','Cognitive load':'Beban Kognitif','Design system':'Sistem Desain',Accessibility:'Aksesibilitas'};
for(const item of glossary)item.label.id=translated[item.term]||item.term;

