import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bottom-0 bg-blue-950 h-80 justify-center items-center border-t border-gray-100 w-full relative">
      <img
        className=" absolute w-full h-full object-cover"
        src="/assets/images/main/bg-nav.png"
        alt=""
      />
      <div className="bg-transparent w-full h-full grid grid-cols-4 gap-16 z-10 px-6 py-4 pt-6">
        <div className="">
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
        <div className="">
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

        <div>
          <h2 className="text-blue-950 text-lg font-bold mb-4">
            Sumber & Referensi
          </h2>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            Video Pembelajaran
          </p>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            Augmented Reality
          </p>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            Virtual Reality
          </p>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            Multimodal Storytelling
          </p>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            Game Based Leraning
          </p>
        </div>

        <div>
          <h2 className="text-blue-950 text-lg font-bold mb-4">Tautan Cepat</h2>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            <a href="/tentang-kami" className="hover:underline">
              Tentang Kami
            </a>
          </p>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            <a href="/kontak" className="hover:underline">
              Kontak
            </a>
          </p>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            <a href="/materi" className="hover:underline">
              Materi Pembelajaran
            </a>
          </p>
          <p className="text-yellow-600 text-sm mb-2 text-justify">
            <a href="/panduan" className="hover:underline">
              Panduan Penggunaan
            </a>
          </p>
        </div>
      </div>
      <div className="z-10 bottom-0 h-12 bg-blue-950 w-full">
        <p className="text-center text-white text-sm pt-2">
          © 2025 Tim Capstone Project PTI FILKOM UB. Semua Hak Dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
