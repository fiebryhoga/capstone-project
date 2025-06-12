import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-blue-950 w-full border-t border-gray-100 relative">
      {/* Background */}
      <img
        className="absolute w-full h-full object-cover"
        src="/assets/images/main/bg-nav.png"
        alt="footer-background"
      />

      {/* Konten Utama */}
      <div className="z-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 py-10">
        {/* SMAN 1 Gondang */}
        <div>
          <h2 className="text-blue-950 text-lg font-bold mb-4">
            SMAN 1 Gondang
          </h2>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            Jl. Raya Tulungagung – Trenggalek, Bendungan, Kec. Gondang, Kab.
            Tulungagung, Jawa Timur 66263
          </p>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            (0355) 324022
          </p>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            sman1gondangtulungagung@gmail.com
          </p>
        </div>

        {/* Inisiator */}
        <div>
          <h2 className="text-blue-950 text-lg font-bold mb-4">Inisiator</h2>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            Capstone Project Team (P2A)
          </p>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            Pendidikan Teknologi Informasi
          </p>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            Fakultas Ilmu Komputer
          </p>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            Universitas Brawijaya
          </p>
        </div>

        {/* Sumber & Referensi */}
        <div>
          <h2 className="text-blue-950 text-lg font-bold mb-4">
            Sumber & Referensi
          </h2>
          {[
            "Video Pembelajaran",
            "Augmented Reality",
            "Virtual Reality",
            "Multimodal Storytelling",
            "Game Based Learning",
          ].map((item, i) => (
            <p key={i} className="text-yellow-600 text-sm mb-2 text-justify">
              {item}
            </p>
          ))}
        </div>

        {/* Tautan Cepat */}
        <div>
          <h2 className="text-blue-950 text-lg font-bold mb-4">Tautan Cepat</h2>
          {[
            { label: "Tentang Kami", href: "http://smagota.sch.id" },
            {
              label: "Kontak",
              href: "mailto:sman1gondangtulungagung@gmail.com?subject=Pertanyaan%20Informasi",
            },
            { label: "Materi Pembelajaran", href: "/material" },
            {
              label: "Panduan Penggunaan",
              href: "https://drive.google.com/file/d/1PKp9j-waRspvsipmqHC74xNnUSA4zgMP/preview",
            },
          ].map((item) => (
            <p
              key={item.href}
              className="text-yellow-600 text-sm mb-2 text-justify"
            >
              <a href={item.href} className="hover:underline">
                {item.label}
              </a>
            </p>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="z-10 w-full h-12 flex justify-center items-center bg-blue-950 border-t border-gray-200">
        <p className="text-center text-white md:text-sm xs:text-xs">
          © 2025 Tim Capstone Project PTI FILKOM UB. Semua Hak Dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
