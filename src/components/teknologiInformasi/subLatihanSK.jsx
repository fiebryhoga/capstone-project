import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubLatihanSK = () => {
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
        <h1 className="text-blue-950 font-semibold">Latihan</h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          {/* Pembuka */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="text-base font-semibold text-blue-900 mb-2">
              🧠 Saatnya Uji Pemahamanmu!
            </h2>
            <p>
              Setelah mempelajari materi tentang{" "}
              <strong>Sistem Komputer</strong>, yuk kita lihat seberapa jauh
              pemahamanmu lewat kuis interaktif berikut ini!
            </p>
            

            <div className="mt-4 text-sm text-blue-800">
              <p className="mb-1">💡 Tips:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Baca setiap soal dengan teliti</li>
                <li>Pilih jawaban yang paling tepat</li>
                <li>
                  Jangan lupa untuk mencoba ulang jika hasilnya belum maksimal
                </li>
              </ul>
            </div>

            <p className="mt-4">Selamat mengerjakan dan semoga sukses! 🚀</p>
          </div>

          {/* Iframe Kuis */}
          <div className="w-full h-[500px]">
            <iframe
              title="Kuis Sistem Komputer"
              src="https://wordwall.net/play/89964/952/311"
              className="w-full h-full border rounded-lg"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubLatihanSK;
