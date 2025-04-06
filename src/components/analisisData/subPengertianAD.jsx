import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubPengertianAD = () => {
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
          Sub Materi: Pengertian Analisis Data
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="flex flex-col gap-4">
            <p>
              <strong>Analisis Data</strong> adalah proses mengumpulkan,
              mengolah, dan menginterpretasikan data untuk mendapatkan{" "}
              <span className="font-semibold">informasi yang berguna</span>{" "}
              dalam pengambilan keputusan. Analisis data menjadi bagian penting
              dalam berbagai bidang, seperti:
              <ul className="list-disc list-inside mt-2 ml-2">
                <li>Bisnis – untuk memahami perilaku pelanggan</li>
                <li>Penelitian – untuk menarik kesimpulan dari eksperimen</li>
                <li>Teknologi – untuk mengembangkan sistem berbasis data</li>
              </ul>
            </p>

            <div className="p-4 bg-blue-100 rounded-xl shadow">
              <h2 className="font-semibold text-blue-900 mb-2">
                🔎 Mengapa Analisis Data Penting?
              </h2>
              <p>
                Dengan kemampuan menganalisis data, kita bisa:
                <ul className="list-disc list-inside mt-2 ml-2">
                  <li>Menemukan pola tersembunyi dalam data</li>
                  <li>Memprediksi tren atau kejadian di masa depan</li>
                  <li>Mengambil keputusan secara lebih rasional dan tepat</li>
                </ul>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-800 mb-1">
                Contoh Kasus:
              </h3>
              <p>
                Seorang pemilik toko online menganalisis data penjualan selama 6
                bulan. Dari data tersebut, dia menemukan bahwa{" "}
                <span className="italic">produk A</span> paling laris pada bulan
                Desember. Berdasarkan analisis ini, ia bisa:
                <ul className="list-disc list-inside mt-2 ml-2">
                  <li>Meningkatkan stok produk A menjelang akhir tahun</li>
                  <li>Melakukan promosi khusus produk A di bulan Desember</li>
                </ul>
              </p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-blue-800 mb-2">
                Dalam Mata Pelajaran Informatika:
              </h3>
              <p>
                Analisis data menjadi <strong>keterampilan dasar</strong> yang
                harus dikuasai oleh peserta didik. Peserta didik akan belajar
                bagaimana:
                <ul className="list-disc list-inside mt-2 ml-2">
                  <li>Mengumpulkan data secara sistematis</li>
                  <li>
                    Menggunakan perangkat lunak untuk mengolah data (misalnya
                    spreadsheet)
                  </li>
                  <li>Menyajikan data dalam bentuk grafik atau tabel</li>
                </ul>
              </p>
            </div>

            
          </div>
        </div>
      )}
    </div>
  );
};

export default SubPengertianAD;
