import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubPengantarLB = () => {
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
        <h1 className="text-blue-950 font-semibold">Video Pembelajaran</h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              1. Pengantar Informatika di SMA
            </h2>
            <p>
              Informatika di jenjang SMA merupakan salah satu bidang penting
              dalam pendidikan modern yang membekali siswa dengan pemahaman dan
              keterampilan dasar mengenai dunia digital dan teknologi informasi.
              Tujuan utama dari pengantar informatika ini adalah membentuk cara
              berpikir logis, sistematis, dan kreatif dalam menyelesaikan
              masalah menggunakan prinsip-prinsip komputasi.
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                <strong>Definisi dan Ruang Lingkup:</strong> Informatika
                merupakan ilmu yang mempelajari cara kerja komputer, pemrosesan
                data, algoritma, pemrograman, dan interaksi manusia dengan
                teknologi. Lingkupnya meliputi teori, praktik, serta dampak
                sosial dari teknologi digital.
              </li>
              <li>
                <strong>Perbedaan dengan Bidang Ilmu Lain:</strong> Berbeda
                dengan pelajaran TIK yang lebih fokus pada penggunaan software,
                informatika mengajarkan cara kerja sistem digital dan proses
                komputasi dari dasar, seperti membuat algoritma, coding, hingga
                memahami sistem informasi.
              </li>
              <li>
                <strong>Sejarah dan Perkembangan:</strong> Informatika telah
                berkembang pesat sejak era komputer pertama hingga sekarang. Di
                dunia pendidikan, pengintegrasian informatika mulai menjadi
                perhatian penting dalam kurikulum untuk mempersiapkan generasi
                digital yang adaptif dan inovatif.
              </li>
              <li>
                <strong>
                  Berpikir Komputasional (Computational Thinking):
                </strong>{" "}
                Merupakan kemampuan menyusun solusi masalah secara sistematis
                menggunakan konsep seperti dekomposisi, pola, abstraksi, dan
                algoritma. Kemampuan ini bermanfaat luas, tidak hanya dalam
                dunia teknologi, tapi juga untuk pemecahan masalah di berbagai
                bidang.
              </li>
            </ul>
          </div>

          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              Video Penjelasan: Pengantar Informatika
            </h3>
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1uGEF-Bz7Pfn4QG39qaHJ8q0Dt6lN41cd/preview"
                title="Pengantar Informatika di SMA"
                width="100%"
                height="100%"
                allowFullScreen
                className="w-full h-full border border-blue-200 rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubPengantarLB;
