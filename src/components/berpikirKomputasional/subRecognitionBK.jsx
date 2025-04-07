import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubRecognitionBK = () => {
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
          Sub Materi: Pattern Recognition dalam Berpikir Komputasional
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          {/* Penjelasan Konsep */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Apa itu Pattern Recognition? 🔍
            </h2>
            <p>
              <strong>Pattern Recognition</strong> atau pengenalan pola adalah
              kemampuan untuk mengidentifikasi kesamaan, kemiripan, atau
              kecenderungan dalam suatu kumpulan data, masalah, atau situasi.
            </p>
            <p className="mt-2">
              Dengan mengenali pola, kita bisa mempercepat pemecahan masalah
              karena solusi yang pernah digunakan bisa diterapkan kembali!
            </p>
          </div>

          {/* Analogi Sederhana */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              Contoh di Kehidupan Sehari-hari
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Melihat pola soal matematika yang bentuknya mirip</li>
              <li>
                Mengenali pola irama lagu — verse → chorus → verse → chorus
              </li>
              <li>Menghafal rute pulang sekolah karena pola jalannya sama</li>
              <li>
                Saat main game, kamu tahu bos akan menyerang 3x → mundur →
                nyerang lagi. Itu juga pattern!
              </li>
            </ul>
          </div>

          {/* Manfaat Pattern Recognition */}
          <div className="p-4 bg-blue-100 rounded-xl shadow border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Mengapa Penting?
            </h3>
            <p>Dalam informatika, mengenali pola membantu kita:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Menghindari penulisan kode dari nol (reusable)</li>
              <li>Mempercepat pengambilan keputusan</li>
              <li>Membuat solusi yang lebih sistematis dan efisien</li>
              <li>Mengembangkan algoritma berdasarkan struktur yang serupa</li>
            </ul>
          </div>

          {/* Studi Kasus Praktis */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              Contoh Kasus Informatika
            </h3>
            <p>
              Kamu membuat aplikasi untuk membaca daftar nilai siswa. Setelah
              kamu lihat, struktur data tiap siswa selalu sama:
            </p>
            <pre className="bg-blue-50 rounded-lg p-2 mt-2 overflow-auto">
              {`{
  nama: "Dinda",
  nilai: [80, 75, 90]
}`}
            </pre>
            <p className="mt-2">
              Karena polanya konsisten, kamu bisa membuat fungsi tunggal yang
              bisa membaca semua data siswa dengan struktur tersebut. Ini
              mempermudah pengolahan data!
            </p>
          </div>

          {/* Tantangan Mini */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              Latihan Mini 🧠
            </h3>
            <p>
              Perhatikan daftar kata berikut:
              <br />
              <em>lari, makan, tidur, bermain, belajar</em>
            </p>
            <p className="mt-2">Apa pola yang kamu lihat?</p>
            <p className="italic text-blue-800 mt-1">
              ✨ Semua kata adalah kata kerja yang menggambarkan aktivitas!
            </p>
          </div>

          {/* Penutup */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <p>
              Pattern Recognition adalah pondasi dalam membuat teknologi yang
              pintar — dari **autocorrect di HP** sampai **AI seperti ChatGPT**.
              Kalau kamu bisa mengenali pola, kamu bisa mengontrol informasi!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubRecognitionBK;
