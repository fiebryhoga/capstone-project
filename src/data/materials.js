const materials = [
  {
    id: 1,
    image: "/assets/images/main/material/sistem-komputer.png",
    materialName: "Sistem Komputer",
    description:
      "Pelajari komponen utama dalam sistem komputer, termasuk perangkat keras, perangkat lunak, dan cara kerjanya. Materi ini membahas bagaimana komputer memproses data dan menjalankan program.",
    href: "/sistemKomputer",
  },
  {
    id: 2,
    image: "/assets/images/main/material/dampak-sosial.png",
    materialName: "Dampak Sosial Informatika",
    description:
      "Dampak Sosial Informatika merujuk pada pengaruh yang ditimbulkan oleh perkembangan teknologi informasi dan komunikasi terhadap kehidupan masyarakat. Informatika telah mengubah cara manusia berinteraksi, bekerja, belajar, dan mengakses informasi. Di satu sisi, teknologi ini memberikan banyak manfaat seperti kemudahan komunikasi global, akses cepat terhadap informasi, efisiensi dalam pekerjaan, serta lahirnya berbagai peluang ekonomi digital. Namun di sisi lain, penggunaan informatika juga membawa dampak negatif seperti ketergantungan pada teknologi, penyebaran hoaks, pelanggaran privasi, dan kesenjangan digital antar kelompok masyarakat. Oleh karena itu, pemahaman terhadap dampak sosial informatika sangat penting agar teknologi dapat dimanfaatkan secara bijak dan bertanggung jawab dalam kehidupan sehari-hari.",
    href: "/dampakSosial",
  },
  {
    id: 3,
    image: "/assets/images/main/material/teknologi-informasi.png",
    materialName: "Teknologi Informasi dan Komunikasi",
    description:
      "Eksplorasi perkembangan teknologi informasi serta perannya dalam komunikasi digital. Materi ini mencakup konsep jaringan, keamanan informasi, dan dampak teknologi terhadap kehidupan.",
    href: "/teknologiInformasi",
  },
  {
    id: 4,
    image: "/assets/images/main/material/informatika-generik1.png",
    materialName: "Informatika dan Keterampilan Generik",
    description:
      "Bab ini membahas dasar-dasar pemahaman tentang mata pelajaran Informatika di jenjang SMA serta keterampilan generik yang relevan dengan perkembangan dunia digital. Informatika bukan sekadar pembelajaran teknologi, tetapi juga membentuk cara berpikir kritis, logis, dan kreatif melalui pendekatan komputasional",
    href: "/informatikaGenerik",
  },
  {
    id: 5,
    image: "/assets/images/main/material/jaringan-komputer.png",
    materialName: "Jaringan Komputer dan Internet",
    description:
      "Pelajari dasar-dasar jaringan komputer, termasuk arsitektur, protokol, dan cara komputer berkomunikasi melalui internet. Materi ini juga membahas keamanan jaringan dan manajemen data.",
    href: "/jaringanKomputer",
  },
  {
    id: 6,
    image: "/assets/images/main/material/analisis-data.png",
    materialName: "Analisis Data",
    description:
      "Pelajari cara mengumpulkan, menganalisis, dan menginterpretasikan data untuk pengambilan keputusan. Materi ini mencakup teknik visualisasi data dan dasar-dasar machine learning.",
    href: "/analisisData",
  },
  {
    id: 7,
    image: "/assets/images/main/material/material2.png",
    materialName: "Algoritma dan Pemrograman",
    description:
      "Pahami konsep dasar algoritma serta cara menerapkannya dalam berbagai bahasa pemrograman. Materi ini membantu dalam menyusun logika pemrograman yang efisien dan optimal.",
    href: "/algoritmaPemrograman",
  },
  {
    id: 8,
    image: "/assets/images/main/material/lintas-bidang.png",
    materialName: "Praktik Lintas Bidang Informatika",
    description: "bla bla bla bla ..",
    href: "/lintasBidang",
  },
  {
    id: 9,
    image: "/assets/images/main/material/material7.png",
    materialName: "Berpikir Komputasional",
    description:
      "Kembangkan kemampuan berpikir logis dan sistematis dalam memecahkan masalah menggunakan pendekatan komputasional. Materi ini sangat penting dalam pengembangan solusi berbasis teknologi.",
    href: "/berpikirKomputasional",
  },

  // {
  //   id: 2,
  //   image: "/assets/images/main/material/analisis-data.png",
  //   materialName: "Analisis Data",
  //   description:
  //     "Pelajari cara mengumpulkan, menganalisis, dan menginterpretasikan data untuk pengambilan keputusan. Materi ini mencakup teknik visualisasi data dan dasar-dasar machine learning.",
  //   href: "/analisisData",
  // },
  // {
  //   id: 3,
  //   image: "/assets/images/main/material/dampak-sosial.png",
  //   materialName: "Dampak Sosial Informatika",
  //   description:
  // "Dampak Sosial Informatika merujuk pada pengaruh yang ditimbulkan oleh perkembangan teknologi informasi dan komunikasi terhadap kehidupan masyarakat. Informatika telah mengubah cara manusia berinteraksi, bekerja, belajar, dan mengakses informasi. Di satu sisi, teknologi ini memberikan banyak manfaat seperti kemudahan komunikasi global, akses cepat terhadap informasi, efisiensi dalam pekerjaan, serta lahirnya berbagai peluang ekonomi digital. Namun di sisi lain, penggunaan informatika juga membawa dampak negatif seperti ketergantungan pada teknologi, penyebaran hoaks, pelanggaran privasi, dan kesenjangan digital antar kelompok masyarakat. Oleh karena itu, pemahaman terhadap dampak sosial informatika sangat penting agar teknologi dapat dimanfaatkan secara bijak dan bertanggung jawab dalam kehidupan sehari-hari.",
  //   href: "/dampakSosial",
  // // },
  // {
  //   id: 4,
  //   image: "/assets/images/main/material/jaringan-komputer.png",
  //   materialName: "Jaringan Komputer dan Internet",
  //   description:
  //     "Pelajari dasar-dasar jaringan komputer, termasuk arsitektur, protokol, dan cara komputer berkomunikasi melalui internet. Materi ini juga membahas keamanan jaringan dan manajemen data.",
  //   href: "/jaringanKomputer",
  // },
  // {

  // {
  //   id: 7,
  //   image: "/assets/images/main/material/material2.png",
  //   materialName: "Algoritma dan Pemrograman",
  //   description:
  //     "Pahami konsep dasar algoritma serta cara menerapkannya dalam berbagai bahasa pemrograman. Materi ini membantu dalam menyusun logika pemrograman yang efisien dan optimal.",
  //   href: "/algoritmaPemrograman",
  // },
  // {
  //   id: 6,
  //   image: "/assets/images/main/material/material2.png",
  //   materialName: "Algoritma dan Pemrograman",
  //   description:
  //     "Pahami konsep dasar algoritma serta cara menerapkannya dalam berbagai bahasa pemrograman. Materi ini membantu dalam menyusun logika pemrograman yang efisien dan optimal.",
  //   href: "/algoritmaPemrograman",
  // },
  // {
  //   id: 7,
  //   image: "/assets/images/main/material/material3.png",
  //   materialName: "Teknologi Informasi dan Komunikasi",
  //   description:
  //     "Eksplorasi perkembangan teknologi informasi serta perannya dalam komunikasi digital. Materi ini mencakup konsep jaringan, keamanan informasi, dan dampak teknologi terhadap kehidupan.",
  //   href: "/teknologiInformasiKomunikasi",
  // },
  // {
  //   id: 4,
  //   image: "/assets/images/main/material/material4.png",
  //   materialName: "Jaringan Komputer dan Internet",
  //   description:
  //     "Pelajari dasar-dasar jaringan komputer, termasuk arsitektur, protokol, dan cara komputer berkomunikasi melalui internet. Materi ini juga membahas keamanan jaringan dan manajemen data.",
  //   href: "/jaringanKomputer",
  // },
];

export default materials;
