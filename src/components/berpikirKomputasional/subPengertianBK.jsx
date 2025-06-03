import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubPengertianBK = () => {
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
          Sub Materi: Pengertian Berpikir Komputasional
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Apa itu Berpikir Komputasional? 🤔
            </h2>
            <p>
              Berpikir komputasional (*computational thinking*) adalah suatu
              pendekatan dalam menyelesaikan masalah yang mengandalkan
              prinsip-prinsip ilmu komputer. Namun, jangan salah, ini **bukan
              berarti harus jago ngoding!** 🎯
            </p>
            <p className="mt-2">
              Dengan berpikir komputasional, kita belajar bagaimana:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                Memecah masalah besar menjadi bagian-bagian kecil
                (*decomposition*)
              </li>
              <li>
                Mencari pola atau kesamaan dari masalah (*pattern recognition*)
              </li>
              <li>
                Memfokuskan hanya pada hal penting dan mengabaikan yang tidak
                relevan (*abstraction*)
              </li>
              <li>
                Merancang langkah-langkah sistematis untuk menyelesaikannya
                (*algorithmic thinking*)
              </li>
            </ul>
            <p className="mt-4">
              Jadi, berpikir komputasional adalah **cara berpikir yang logis dan
              efisien** dalam menghadapi masalah sehari-hari — bukan cuma soal
              komputer!
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              Video Penjelasan: Pengantar Berpikir Komputasional
            </h3>
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1408LmjASYeqarhq47bK75BrAs67JjWVL/preview"
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

export default SubPengertianBK;
