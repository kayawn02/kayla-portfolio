export const projectCategories = [
  "Semua",
  "UI/UX Design",
  "Mobile App & IoT",
  "Web Development"
];

export const projects = [
  {
    id: "fertiflow",
    title: "FertiFlow — Intelligent Precision Irrigation & Fertigation System",
    category: "Mobile App & IoT",
    year: "2026",
    role: "Project Development & Mobile Dev",
    award: "Juara 3 AITEC (Agricultural Innovation Technology Competition) VIII Tingkat Nasional",
    summary: "Sistem otomasi fertigasi dan irigasi cerdas berbasis IoT yang memadukan mikrokontroler ESP32, sensor kelembapan tanah, Edge AI deteksi penyakit tanaman (YOLO & TFLite), dan aplikasi mobile Flutter terintegrasi Firebase Realtime Database.",
    tools: ["Flutter", "Dart", "ESP32", "Arduino", "Firebase", "VS Code"],
    tags: ["Flutter", "Dart", "ESP32", "IoT", "Arduino", "Firebase RTDB", "TFLite YOLO", "Google Gemini AI", "Smart Agriculture"],
    thumbnail: "/images/projects/fertiflow-thumb.svg",
    github: "https://github.com/kayawn02/FertiFlow",
    demo: null,
    points: [
      "Mengembangkan aplikasi mobile Flutter terintegrasi telemetri sensor tanah dan kontrol aktuasi katup secara real-time.",
      "Mengintegrasikan mikrokontroler ESP32 untuk otomasi 4 relay aktuator (pompa irigasi dan injeksi nutrisi fertigasi).",
      "Menerapkan Edge AI berbasis YOLO dan TFLite untuk diagnosa penyakit tanaman secara langsung dari kamera, serta konsultasi cerdas berbasis LLM Google Generative AI."
    ],
    details: {
      latarBelakang: "Pengairan dan pemupukan konvensional seringkali dilakukan secara manual dan tidak terukur, memicu pemborosan air, ketidakseimbangan nutrisi tanah, serta keterlambatan deteksi penyakit tanaman. FertiFlow dibangun sebagai solusi terintegrasi untuk mengotomatisasi siklus fertigasi presisi dan memberikan rekomendasi perawatan tanaman berbasis data sensor nyata.",
      tujuan: [
        "Membangun aplikasi mobile Flutter responsif dengan dashboard telemetri real-time dan kontrol aktuator nirkabel.",
        "Mengotomatisasi 4 saluran aktuator relay (pompa utama dan katup solenoid pupuk) berdasarkan ambang batas pembacaan sensor ESP32.",
        "Menyediakan sistem diagnosa penyakit tanaman cerdas menggunakan model Edge AI YOLO/TFLite dan konsultasi agrikultur generatif.",
        "Menyimpan log riwayat aktivitas penyiraman, penjadwalan multi-zona, dan parameter kelembapan tanah pada Firebase Realtime Database."
      ],
      peranSaya: "Project Development & Mobile Developer — Mengembangkan seluruh arsitektur dan antarmuka aplikasi mobile Flutter, integrasi firmware komunikasi ESP32 via Firebase RTDB, serta implementasi inferensi model deteksi penyakit tanaman.",
      fiturUtama: [
        {
          judul: "Telemetri & Kontrol Aktuator Real-Time",
          deskripsi: "Pemantauan kelembapan tanah, suhu lingkungan, dan aktuasi manual/otomatis 4 katup solenoid & pompa secara langsung dari smartphone via Firebase."
        },
        {
          judul: "Deteksi Penyakit Tanaman Cerdas (YOLO & TFLite)",
          deskripsi: "Identifikasi dini gejala penyakit dan hama tanaman secara instan melalui pemrosesan gambar kamera langsung di perangkat mobile secara offline."
        },
        {
          judul: "Asisten Konsultasi AI (Google Generative AI)",
          deskripsi: "Rekomendasi takaran nutrisi pupuk NPK, kebutuhan air spesifik, dan instruksi penanganan tanaman berbasis kecerdasan buatan generatif."
        },
        {
          judul: "Penjadwalan Otomatis & Manajemen Multi-Zona",
          deskripsi: "Konfigurasi jadwal penyiraman presisi berdasarkan zona lahan perkebunan, kondisi cuaca, dan profil fase tumbuh tanaman."
        }
      ],
      hasilPencapaian: "Meraih Juara 3 Tingkat Nasional – Agricultural Innovation Technology Competition (AITEC) VIII pada kategori Competent."
    }
  },
  {
    id: "sangsmart",
    title: "SangSmart — Smart Agriculture Application",
    category: "UI/UX Design",
    year: "2026",
    role: "UI/UX Designer",
    award: "Juara 1 UI/UX Design Competition Point Project 3.0 ITERA",
    summary: "Aplikasi mobile pertanian cerdas yang dirancang untuk mendukung petani pisang (Making Banana Farming Smarter) melalui edukasi digital terstruktur, monitoring lahan perkebunan, konsultasi pakar, dan asisten interaktif berbasis AI.",
    tools: ["Figma", "Canva"],
    tags: ["Figma", "UI/UX Design", "Wireframing", "User Flow", "Interactive Prototyping", "Design System", "AgriTech", "Banana Farming"],
    thumbnail: "/images/projects/sangsmart-thumb.svg",
    github: "https://github.com/kayawn02/SangSmart-UIUX",
    demo: "https://www.figma.com/design/y2duhjtVbZN8uUf2heTY1z/Untitled",
    points: [
      "Merancang antarmuka UI/UX mobile aplikasi SangSmart di Figma berdasarkan riset kebutuhan nyata petani pisang.",
      "Menyusun sistem desain holistik yang mencakup onboarding, dashboard pemantauan kondisi kebun pisang, dan pusat edukasi budidaya.",
      "Mengembangkan alur interaksi konsultasi ahli pertanian serta rancangan asisten virtual cerdas berbasis AI chatbot pertanian."
    ],
    details: {
      latarBelakang: "Petani pisang seringkali menghadapi kendala akses ilmu budidaya terpercaya, lambatnya penanganan hama tanaman, serta sulitnya memantau parameter kebun secara berkala. SangSmart (dari kata 'Sang' yang berarti Pisang dan 'Smart' yang berarti Cerdas) dirancang untuk menghadirkan teknologi digital yang mudah digunakan petani pisang.",
      tujuan: [
        "Merancang antarmuka mobile yang intuitif, kontras tinggi, dan ramah bagi pengguna di lingkungan perkebunan luar ruangan.",
        "Menyediakan modul edukasi pertanian digital yang memuat artikel terkurasi, video teknik budidaya, dan panduan perawatan pisang.",
        "Menghadirkan antarmuka monitoring lahan digital untuk memantau status kelembapan tanah dan kondisi tanaman pisang.",
        "Membangun jalur konsultasi langsung dengan pakar agrikultur serta asisten AI chatbot pertanian untuk tanya jawab instan 24/7."
      ],
      peranSaya: "UI/UX Designer — Bertanggung jawab penuh atas riset persona petani, penyusunan arsitektur informasi, wireframing, pembuatan design system lengkap, dan perancangan prototipe interaktif di Figma.",
      fiturUtama: [
        {
          judul: "Edukasi Pertanian (Agricultural Education)",
          deskripsi: "Pusat materi budidaya pisang komprehensif yang memuat artikel edukasi, panduan perawatan berkala, dan video tutorial teknis budidaya pisang."
        },
        {
          judul: "Monitoring Lahan (Land Monitoring)",
          deskripsi: "Antarmuka visual dashboard untuk memantau kelembapan tanah, indeks kesuburan, dan status kesehatan tanaman pisang secara berkala."
        },
        {
          judul: "Konsultasi Pakar (Expert Consultation)",
          deskripsi: "Fitur penghubung petani pisang dengan tenaga ahli agrikultur untuk berdiskusi dan mendapatkan solusi kuratif terhadap penyakit tanaman."
        },
        {
          judul: "Asisten Chatbot AI (AI Chatbot Assistant)",
          deskripsi: "Chatbot interaktif cerdas yang mampu menjawab pertanyaan teknis pertanian dan panduan budidaya pisang secara instan 24/7."
        }
      ],
      hasilPencapaian: "Meraih Juara 1 UI/UX Design Competition – Point Project 3.0 oleh Himpunan Mahasiswa Informatika ITERA tingkat Provinsi Lampung."
    }
  }
];
