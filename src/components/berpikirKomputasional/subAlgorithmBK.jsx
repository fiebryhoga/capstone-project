import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubAlgorithmBK = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col border border-blue-950 mt-4 rounded-lg cursor-pointer">
      <div
        className="px-6 py-6 flex flex-row gap-2 justify-start items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaAngleDoubleRight
          className={`text-blue-950 transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
        <h1 className="text-blue-950 font-semibold">
          Sub Materi: Algorithm Design (Perancangan Algoritma)
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          {/* Penjelasan Konsep */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Apa itu Perancangan Algoritma? 🧩
            </h2>
            <p>
              <strong>Algorithm Design</strong> adalah proses menyusun
              langkah-langkah logis dan terstruktur untuk menyelesaikan suatu
              masalah. Ibaratnya seperti menyusun resep masakan—kamu perlu tahu
              urutan, bahan, dan teknik memasaknya.
            </p>
            <p className="mt-2">
              Di dunia informatika, algoritma sangat penting karena menjadi
              dasar dalam membuat program dan sistem yang efisien.
            </p>
          </div>

          {/* Analogi Ringan */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              Analogi Sederhana
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Membuat teh: Tuangkan air → panaskan → masukkan teh celup →
                tambahkan gula → aduk → selesai.
              </li>
              <li>
                Menyebrang jalan: Lihat kiri-kanan → pastikan aman → berjalan
                cepat → sampai tujuan.
              </li>
            </ul>
            <p className="mt-2">
              Setiap langkah punya urutan dan logika. Inilah dasar dari sebuah
              algoritma!
            </p>
          </div>

          {/* Bentuk Penyajian */}
          <div className="p-4 bg-blue-100 rounded-xl shadow border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Cara Menyusun dan Menyajikan Algoritma
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Deskriptif (narasi):</strong> Menuliskan langkah-langkah
                dengan kalimat biasa.
              </li>
              <li>
                <strong>Pseudocode:</strong> Bahasa mirip kode, tapi tidak
                mengikuti sintaks pemrograman.
              </li>
              <li>
                <strong>Flowchart (Diagram Alur):</strong> Visualisasi urutan
                langkah dalam bentuk diagram.
              </li>
            </ul>
            <p className="mt-2">
              Semua pendekatan ini bisa digunakan tergantung kebutuhan dan siapa
              audiens-nya.
            </p>
          </div>

          {/* Contoh Kasus */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              Contoh Algoritma: Mencari Bilangan Terbesar
            </h3>
            <p>
              Misal ada tiga angka: A, B, dan C. Bagaimana cara menentukan yang
              paling besar?
            </p>
            <pre className="bg-blue-50 p-3 rounded-lg mt-2 overflow-auto">
              {`Jika A > B dan A > C, maka cetak A
Jika B > A dan B > C, maka cetak B
Jika tidak, cetak C`}
            </pre>
            <p className="mt-2">
              Algoritma ini bisa dituangkan dalam pseudocode maupun flowchart.
            </p>
          </div>

          {/* Mini Challenge */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              Mini Challenge 🔍
            </h3>
            <p>
              Susun algoritma (secara narasi atau pseudocode) untuk menyaring
              siswa yang lulus jika nilai akhir &gt;= 75.
            </p>
            <p className="mt-2 italic">
              Bisa kamu kerjakan di kertas atau editor favoritmu.
            </p>
          </div>

          {/* Tips Penting */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              Tips Menyusun Algoritma
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Mulailah dari pemahaman masalah (Problem Understanding)</li>
              <li>Pecah masalah jadi langkah kecil (Decomposition)</li>
              <li>Gunakan logika yang sistematis dan urut</li>
              <li>Perjelas input dan output-nya</li>
              <li>Latih dengan berbagai kasus berbeda</li>
            </ul>
          </div>

          {/* Penutup */}
          <div className="p-4 bg-blue-100 rounded-xl shadow border border-blue-200">
            <p>
              Perancangan algoritma bukan hanya untuk coder dan programmer. Ia
              juga membantumu berpikir sistematis dalam kehidupan
              sehari-hari—baik saat merencanakan kegiatan, menyusun strategi
              belajar, hingga menulis skrip drama sekolah. 💡
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubAlgorithmBK;
