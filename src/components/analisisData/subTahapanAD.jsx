import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubTahapanAD = () => {
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
          Sub Materi: Tahapan Dalam Analisis Data
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="flex flex-col gap-4">
            <p>
              Dalam proses <strong>analisis data</strong>, terdapat beberapa
              tahapan penting yang harus dilakukan agar data yang dianalisis
              dapat memberikan hasil yang akurat dan bermanfaat. Berikut adalah
              tahapan-tahapan utamanya:
            </p>

            <div className="space-y-4">
              {/* Tahap 1 */}
              <div className="p-4 bg-blue-50 rounded-xl shadow">
                <h2 className="font-semibold text-blue-900 mb-1">
                  1. Pengumpulan Data
                </h2>
                <p>
                  Data dikumpulkan dari berbagai sumber, seperti:
                  <ul className="list-disc list-inside mt-2 ml-2">
                    <li>Survei online atau kuesioner</li>
                    <li>Wawancara atau observasi</li>
                    <li>Eksperimen langsung</li>
                    <li>Basis data di internet (open data)</li>
                  </ul>
                  Kualitas hasil analisis sangat bergantung pada kualitas data
                  yang dikumpulkan.
                </p>
              </div>

              {/* Tahap 2 */}
              <div className="p-4 bg-blue-50 rounded-xl shadow">
                <h2 className="font-semibold text-blue-900 mb-1">
                  2. Pembersihan Data
                </h2>
                <p>
                  Data mentah sering kali mengandung:
                  <ul className="list-disc list-inside mt-2 ml-2">
                    <li>Data kosong (missing values)</li>
                    <li>Duplikasi</li>
                    <li>Format yang tidak konsisten</li>
                  </ul>
                  Proses ini bertujuan untuk memperbaiki dan menyaring data agar
                  analisis yang dilakukan tidak salah arah.
                </p>
              </div>

              {/* Tahap 3 */}
              <div className="p-4 bg-blue-50 rounded-xl shadow">
                <h2 className="font-semibold text-blue-900 mb-1">
                  3. Pengolahan Data
                </h2>
                <p>
                  Setelah data bersih, dilakukan pengolahan dengan berbagai
                  metode seperti:
                  <ul className="list-disc list-inside mt-2 ml-2">
                    <li>Statistik deskriptif (mean, median, mode)</li>
                    <li>Pengelompokan (clustering)</li>
                    <li>Transformasi atau normalisasi data</li>
                  </ul>
                  Tujuannya adalah untuk menemukan pola, tren, atau hubungan
                  antar data.
                </p>
              </div>

              {/* Tahap 4 */}
              <div className="p-4 bg-blue-50 rounded-xl shadow">
                <h2 className="font-semibold text-blue-900 mb-1">
                  4. Interpretasi dan Penyajian Data
                </h2>
                <p>
                  Hasil analisis disajikan dalam bentuk visualisasi agar mudah
                  dipahami, seperti:
                  <ul className="list-disc list-inside mt-2 ml-2">
                    <li>Tabel</li>
                    <li>Diagram batang, garis, atau lingkaran</li>
                    <li>Dashboard interaktif</li>
                  </ul>
                  Tahap ini sangat penting untuk membantu proses pengambilan
                  keputusan berbasis data.
                </p>
              </div>
            </div>

            {/* Media pembelajaran pendukung */}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default SubTahapanAD;
