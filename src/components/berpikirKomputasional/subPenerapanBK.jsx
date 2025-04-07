import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubPenerapanBK = () => {
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
          Sub Materi: Penerapan Berpikir Komputasional di Dunia Nyata
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          {/* Pengantar */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Kenapa Harus Belajar Berpikir Komputasional? 🤔
            </h2>
            <p>
              Banyak yang mengira berpikir komputasional hanya untuk programmer.
              Padahal, konsep ini sangat relevan untuk kehidupan sehari-hari dan
              berbagai profesi—mulai dari bisnis, kesehatan, hingga industri
              kreatif!
            </p>
          </div>

          {/* Penerapan di Berbagai Bidang */}
          <div className="p-4 bg-white border border-blue-100 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              1. Dunia Bisnis dan Manajemen 📊
            </h3>
            <p>
              Pengusaha sukses menggunakan prinsip <strong>abstraction</strong>{" "}
              dan <strong>decomposition</strong>
              untuk mengidentifikasi masalah inti, menganalisis data penjualan,
              dan merancang strategi pemasaran yang efisien.
            </p>
            <p className="mt-2 italic">
              Contoh: Aplikasi ojek online menggunakan algoritma untuk
              menentukan rute tercepat.
            </p>
          </div>

          <div className="p-4 bg-blue-100 border border-blue-200 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              2. Dunia Medis dan Kesehatan 🏥
            </h3>
            <p>
              Dokter dan peneliti memanfaatkan{" "}
              <strong>pattern recognition</strong> untuk mengenali pola gejala
              pasien, serta menggunakan algoritma untuk menganalisis hasil
              laboratorium.
            </p>
            <p className="mt-2 italic">
              Contoh: Sistem AI mendeteksi kanker lebih cepat dari mata manusia
              lewat citra digital.
            </p>
          </div>

          <div className="p-4 bg-white border border-blue-100 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              3. Dunia Game dan Teknologi Hiburan 🎮
            </h3>
            <p>
              Game developer memanfaatkan <strong>algorithm design</strong>{" "}
              untuk menciptakan mekanik permainan yang menarik, dan{" "}
              <strong>debugging</strong> untuk memastikan game berjalan tanpa
              bug.
            </p>
            <p className="mt-2 italic">
              Contoh: AI musuh dalam game bisa belajar dan menyesuaikan strategi
              berdasarkan pola pemain.
            </p>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              4. Kehidupan Sehari-hari 🏡
            </h3>
            <p>
              Bahkan saat kamu menyusun jadwal belajar, membandingkan harga di
              marketplace, atau menyusun rute perjalanan hemat waktu— kamu sudah
              menerapkan berpikir komputasional!
            </p>
            <p className="mt-2 italic">
              Contoh: Kamu memecah tugas besar menjadi bagian-bagian kecil agar
              lebih mudah dikerjakan (decomposition).
            </p>
          </div>

          {/* Aktivitas Ringan */}
          <div className="p-4 bg-white border border-blue-100 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">Challenge 🔍</h3>
            <p>
              Coba pikirkan, aktivitas apa yang kamu lakukan minggu ini yang
              tanpa sadar sudah menerapkan berpikir komputasional? Tulis 1
              contoh dan tentukan: apakah itu termasuk pattern recognition,
              abstraction, decomposition, atau algorithm design?
            </p>
          </div>

          {/* Penutup */}
          <div className="p-4 bg-blue-100 border border-blue-200 rounded-xl shadow">
            <p>
              Dengan membiasakan diri berpikir secara komputasional, kamu akan
              terbiasa menyelesaikan masalah secara logis, sistematis, dan
              efisien—sebuah bekal penting untuk masa depan digital!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubPenerapanBK;
