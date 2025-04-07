import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubLatihanJK = () => {
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
          {/* Header dan Deskripsi */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Saatnya Uji Pemahamanmu!
            </h2>
            <p>
              Setelah mempelajari materi tentang{" "}
              <strong>Jaringan Komputer</strong>, yuk asah pemahamanmu lewat
              soal teka-teki silang berikut ini!
            </p>

            <p className="mt-4 font-semibold text-blue-900">
              Kerjakan teka teki silang berikut ini!
            </p>

            {/* iframe */}
            <div className="w-full mt-4 aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://wordwall.net/play/89965/747/341"
                title="Teka-Teki Silang Jaringan Komputer"
                width="100%"
                height="100%"
                allowFullScreen
                className="w-full h-full border border-blue-200 rounded-lg"
              ></iframe>
            </div>

            {/* Tips */}
            <div className="mt-4">
              <h3 className="font-semibold text-blue-900 mb-1">💡 Tips:</h3>
              <ul className="list-disc list-inside ml-2">
                <li>Baca soal dengan teliti</li>
                <li>Jangan terburu-buru menjawab</li>
                <li>Boleh ulang kuis kalau belum puas dengan hasilnya</li>
              </ul>
            </div>

            <p className="mt-4 font-semibold text-blue-900">
              Selamat mengerjakan dan semoga sukses! 🚀
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubLatihanJK;
