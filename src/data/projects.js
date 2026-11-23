export const projectCategories = [
  "Semua",
  "UI/UX Design",
  "Mobile App & IoT",
  "Web Development"
];

export const projects = [
  {
    id: "fertiflow",
    title: "FertiFlow — Intelligent Irrigation & Fertigation System",
    category: "Mobile App & IoT",
    year: "2026",
    role: "Project Development & Mobile Dev",
    award: "Juara 3 AITEC (Agricultural Innovation Technology Competition) Tingkat Nasional",
    summary: "Sistem otomasi fertigasi dan irigasi cerdas berbasis IoT yang memadukan mikrokontroler ESP32, sensor tanah, dan aplikasi mobile Flutter.",
    tools: ["Flutter", "Dart", "ESP32", "Arduino"],
    tags: ["Flutter", "Dart", "ESP32", "IoT", "Arduino", "Firebase RTDB", "Smart Agriculture"],
    thumbnail: "/images/projects/fertiflow-thumb.svg",
    github: "https://github.com/kayawn02",
    demo: null,
    points: [
      "Mengembangkan aplikasi mobile Flutter untuk monitoring dan kontrol penyiraman real-time.",
      "Mengintegrasikan mikrokontroler ESP32 dan sensor tanah untuk otomasi 4 relay aktuator.",
      "Merancang antarmuka aplikasi yang intuitif untuk kemudahan pemantauan di lapangan."
    ],
    details: {
      latarBelakang: "Pengairan dan pemupukan manual seringkali tidak terukur sehingga memboroskan air dan nutrisi tanaman. FertiFlow hadir untuk mengotomatiskan proses fertigasi secara presisi berdasarkan data sensor.",
      tujuan: [
        "Membangun aplikasi mobile Flutter yang responsif dan mudah dipahami.",
        "Mengotomatisasi 4 aktuator relay (pompa air dan katup solenoid pupuk).",
        "Menyediakan data telemetri real-time sensor tanah via Firebase."
      ],
      peranSaya: "Bertanggung jawab atas pengembangan aplikasi mobile Flutter, integrasi firmware ESP32, dan perancangan antarmuka pengguna.",
      fiturUtama: [
        {
          judul: "Monitoring Real-Time",
          deskripsi: "Pantau kelembapan tanah, suhu lingkungan, dan status pompa secara langsung dari smartphone."
        },
        {
          judul: "Otomasi ESP32 & Multi-Sensor",
          deskripsi: "Sistem membaca sensor kelembapan tanah dan mengontrol buka-tutup katup serta pompa secara mandiri."
        },
        {
          judul: "Rekomendasi Cerdas",
          deskripsi: "Perhitungan takaran nutrisi yang optimal berdasarkan pembacaan kondisi sensor tanah."
        }
      ],
      hasilPencapaian: "Meraih Juara 3 – Agricultural Innovation Technology Competition (AITEC) tingkat nasional."
    }
  },
  {
    id: "sangsmart",
    title: "SangSmart — UI/UX Design Project",
    category: "UI/UX Design",
    year: "2026",
    role: "UI/UX Designer",
    award: "Juara 1 UI/UX Design Competition Point Project 3.0 ITERA",
    summary: "Desain UI/UX platform digital pertanian untuk transparansi harga pasar komoditas dan penyewaan alat mesin pertanian bersama.",
    tools: ["Figma", "Canva"],
    tags: ["Figma", "UI/UX Design", "Wireframing", "User Flow", "Information Architecture", "Prototyping"],
    thumbnail: "/images/projects/sangsmart-thumb.svg",
    github: "https://github.com/kayawn02",
    demo: "https://figma.com",
    points: [
      "Merancang UI/UX aplikasi SangSmart di Figma berdasarkan riset kebutuhan petani.",
      "Menyusun wireframe, user flow, dan arsitektur informasi yang terstruktur.",
      "Membuat prototipe interaktif dengan design system yang konsisten."
    ],
    details: {
      latarBelakang: "Rantai pasok yang panjang dan sulitnya akses sewa alat panen menjadi kendala utama petani. SangSmart dirancang untuk menyederhanakan alur transaksi dan transparansi harga.",
      tujuan: [
        "Menciptakan antarmuka yang ramah bagi pengguna dari berbagai latar belakang.",
        "Menyusun alur informasi untuk marketplace hasil tani dan sewa alat bersama.",
        "Menghasilkan prototipe interaktif berbasis design system yang rapi."
      ],
      peranSaya: "UI/UX Designer — Riset persona pengguna, pembuatan wireframe, penyusunan design system, dan perancangan prototipe interaktif di Figma.",
      fiturUtama: [
        {
          judul: "Transparansi Harga Pasar",
          deskripsi: "Informasi harga komoditas harian yang jelas dan mudah diakses petani."
        },
        {
          judul: "Sewa Alat Pertanian",
          deskripsi: "Katalog pemesanan mesin panen dan traktor bersama dalam beberapa ketukan."
        },
        {
          judul: "Desain Ergonomis Luar Ruangan",
          deskripsi: "Pilihan kontras warna yang nyaman digunakan di lingkungan luar ruangan."
        }
      ],
      hasilPencapaian: "Meraih Juara 1 – Point Project 3.0 oleh Himpunan Mahasiswa Informatika ITERA tingkat Provinsi Lampung."
    }
  }
];
