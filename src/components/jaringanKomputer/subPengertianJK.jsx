import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubPengertianJK = () => {
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
          Sub Materi: Pengenalan Jaringan Komputer
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Pengertian Jaringan Komputer
            </h2>
            <p>
              Jaringan komputer adalah sekumpulan dua atau lebih perangkat
              komputer yang saling terhubung satu sama lain melalui media
              komunikasi tertentu, seperti kabel, gelombang radio, atau koneksi
              nirkabel lainnya. Tujuan utama dari jaringan ini adalah untuk
              memungkinkan pertukaran data, berbagi sumber daya (seperti
              printer, file, dan koneksi internet), serta memfasilitasi
              komunikasi yang lebih cepat dan efisien antara perangkat yang
              terhubung.
            </p>
            <p className="mt-2">
              Dengan jaringan komputer, berbagai aktivitas seperti pengiriman
              email, penyimpanan data terpusat, akses jarak jauh, dan kolaborasi
              daring menjadi mungkin dilakukan tanpa harus berada di satu lokasi
              fisik. Jaringan ini bisa sangat sederhana, seperti menghubungkan
              dua komputer di rumah, hingga sangat kompleks seperti jaringan
              perusahaan besar atau bahkan internet global.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              Video Penjelasan: Pengantar Informatika
            </h3>
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1A2A2Wpu2xbFR_YTgXg91aflvQLnzhoj1/preview"
                title="Pengantar Informatika di SMA"
                width="100%"
                height="100%"
                allowFullScreen
                className="w-full h-full border border-blue-200 rounded-lg"
              ></iframe>
            </div>
          </div>
          {/* https://drive.google.com/file/d/1A2A2Wpu2xbFR_YTgXg91aflvQLnzhoj1/view?usp=sharing */}
        </div>
      )}
    </div>
  );
};

export default SubPengertianJK;
