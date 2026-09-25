// Wedding Invitation — Alindra & Reza
// All static content lives here for easy editing

export const siteConfig = {
  name: "Alindra & Reza",
  tagline: "Two souls, one forever.",
  description:
    "Dengan penuh rasa syukur dan kebahagiaan, kami mengundang Anda untuk hadir dan memberikan doa restu di hari istimewa kami.",
  weddingDate: "2027-02-14T10:00:00",        // ISO — change this!
  weddingDateDisplay: "14 Februari 2027",
  ceremony: {
    time: "10.00 – 12.00 WIB",
    venue: "Masjid Agung Al-Azhar",
    address: "Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan",
  },
  reception: {
    time: "12.00 – 16.00 WIB",
    venue: "The Ritz-Carlton Jakarta",
    address: "Jl. DR. Ide Anak Agung Gde Agung, SCBD, Jakarta Selatan",
  },
  url: "https://alindra-reza.wedding",
  email: "hello@alindra-reza.wedding",
  phone: "+62 812 3456 7890",
  whatsapp: "https://wa.me/628123456789",
  social: {
    instagram: "https://instagram.com/alindra.reza",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
    youtube: "https://youtube.com",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#about" },
  { label: "Details", href: "#features" },
  { label: "Gallery", href: "#showcase" },
  { label: "RSVP", href: "#contact" },
];

// Ceremony Details (replaces features)
export const features = [
  {
    number: "01",
    icon: "Calendar",
    title: "Tanggal Pernikahan",
    description: "Minggu, 14 Februari 2027 — hari yang kami pilih untuk memulai babak baru kehidupan bersama.",
  },
  {
    number: "02",
    icon: "Clock",
    title: "Akad Nikah",
    description: "10.00 – 12.00 WIB di Masjid Agung Al-Azhar, Kebayoran Baru, Jakarta Selatan.",
  },
  {
    number: "03",
    icon: "Utensils",
    title: "Resepsi",
    description: "12.00 – 16.00 WIB di The Ritz-Carlton Jakarta, SCBD. Dress code: Sage Green & White.",
  },
  {
    number: "04",
    icon: "MapPin",
    title: "Lokasi",
    description: "Jakarta Selatan. Parkir tersedia. Untuk kemudahan, kami juga menyediakan shuttle dari lokasi akad ke resepsi.",
  },
  {
    number: "05",
    icon: "Shirt",
    title: "Dress Code",
    description: "Formal dengan nuansa Sage Green, White, atau Champagne. Kami memohon agar tidak mengenakan pakaian berwarna putih bersih.",
  },
  {
    number: "06",
    icon: "Gift",
    title: "Wedding Gift",
    description: "Kehadiran Anda adalah hadiah terbesar bagi kami. Namun jika ingin memberikan hadiah, silakan hubungi kami.",
  },
];

// Moments (replaces benefits)
export const benefits = [
  {
    icon: "Heart",
    title: "Pertemuan Pertama",
    description:
      "Kami pertama kali bertemu di sebuah kafe kecil di Bandung, 2020. Sebuah percakapan singkat yang mengubah segalanya.",
  },
  {
    icon: "Star",
    title: "The Proposal",
    description:
      "Di bawah langit penuh bintang di Labuan Bajo, Reza berlutut dan mengucapkan kata-kata yang Alindra impikan. Jawabannya: Ya.",
  },
  {
    icon: "Music",
    title: "Lagu Kami",
    description:
      "\"A Thousand Years\" — lagu yang selalu mengingatkan kami bahwa cinta ini layak untuk diperjuangkan selamanya.",
  },
  {
    icon: "Map",
    title: "Petualangan Bersama",
    description:
      "Dari Sabang sampai Merauke, dari Bali hingga Eropa — setiap perjalanan memperkuat keyakinan bahwa kami adalah pasangan yang tepat.",
  },
];

// RSVP Steps (replaces how it works)
export const steps = [
  {
    number: "01",
    title: "Isi RSVP",
    description: "Konfirmasi kehadiran Anda melalui formulir di bawah paling lambat 31 Januari 2027.",
  },
  {
    number: "02",
    title: "Pilih Sesi",
    description: "Pilih untuk hadir di Akad, Resepsi, atau keduanya sesuai kenyamanan Anda.",
  },
  {
    number: "03",
    title: "Kirim Doa",
    description: "Tuliskan pesan dan doa tulus Anda untuk menjadi kenangan indah di hari istimewa kami.",
  },
  {
    number: "04",
    title: "Sampai Jumpa!",
    description: "Kami sangat menantikan kehadiran dan kebaikan hati Anda di hari spesial ini.",
  },
];

// Photo gallery
export const showcaseItems = [
  { label: "Prewedding — Labuan Bajo", category: "Foto" },
  { label: "Prewedding — Bali", category: "Foto" },
  { label: "Engagement Party", category: "Momen" },
  { label: "Prewedding — Bandung", category: "Foto" },
  { label: "Keluarga Besar", category: "Keluarga" },
  { label: "Prewedding — Jakarta", category: "Foto" },
];

// Wishes / Testimonials
export const testimonials = [
  {
    name: "Bunda Sari",
    role: "Ibu dari Alindra",
    company: "Keluarga Santoso",
    avatar: "BS",
    avatarColor: "from-rose-400 to-pink-500",
    text: "Melihat putri kami menemukan cinta sejatinya adalah kebahagiaan terbesar orang tua. Alindra, Bunda sangat bangga. Reza, jaga anak kami baik-baik ya.",
  },
  {
    name: "Pak Hendra",
    role: "Ayah dari Reza",
    company: "Keluarga Pratama",
    avatar: "PH",
    avatarColor: "from-amber-400 to-orange-500",
    text: "Reza, kamu telah memilih dengan bijak. Alindra adalah cahaya yang akan selalu menerangi rumah tangga kalian. Selamat, Nak.",
  },
  {
    name: "Putri & Dimas",
    role: "Sahabat dekat",
    company: "Tim Bandung Berempat",
    avatar: "PD",
    avatarColor: "from-violet-400 to-purple-500",
    text: "Kami yang menjodohkan kalian pertama kali di kafe itu, dan kami yang paling bahagia melihat ini terjadi. Selamat untuk kalian berdua! 🥂",
  },
];

// FAQ
export const faqs = [
  {
    question: "Kapan batas waktu konfirmasi kehadiran (RSVP)?",
    answer:
      "Kami mohon Anda mengisi RSVP paling lambat tanggal 31 Januari 2027 agar kami dapat mempersiapkan segalanya dengan baik untuk Anda.",
  },
  {
    question: "Apakah anak-anak diperbolehkan hadir?",
    answer:
      "Dengan senang hati kami menyambut kehadiran seluruh keluarga, termasuk anak-anak. Kami akan menyediakan area khusus anak di venue resepsi.",
  },
  {
    question: "Apa dress code untuk resepsi?",
    answer:
      "Dress code formal dengan nuansa Sage Green, White, atau Champagne. Kami mohon agar tidak mengenakan pakaian berwarna putih bersih agar tidak sama dengan pengantin.",
  },
  {
    question: "Apakah ada shuttle dari masjid ke venue resepsi?",
    answer:
      "Ya! Kami menyediakan shuttle setiap 20 menit dari Masjid Agung Al-Azhar menuju The Ritz-Carlton Jakarta mulai pukul 11.30 WIB.",
  },
  {
    question: "Bagaimana cara memberikan hadiah pernikahan?",
    answer:
      "Kehadiran dan doa Anda adalah hadiah terbesar bagi kami. Namun jika Anda ingin memberikan hadiah, silakan hubungi kontak di bawah atau scan QR code yang tersedia di venue.",
  },
];
