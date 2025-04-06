import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubRumusAD = () => {
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
          Sub Materi: Rumus dan Fungsi Dasar Analisis Data
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <p>
            Pada tahap pengolahan data dalam analisis data, kita sering
            menggunakan berbagai rumus dan fungsi, terutama jika menggunakan
            perangkat lunak seperti Microsoft Excel. Rumus dan fungsi ini
            mempermudah proses perhitungan dan analisis secara otomatis dan
            efisien.
          </p>

          <div className="bg-blue-50 p-4 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              📹 Video Pembelajaran - Analisis Data
            </h2>
            <p>
              Video tutorial berikut berjudul{" "}
              <span className="italic">
                "Mengenal Rumus dan Fungsi pada Microsoft Excel"
              </span>{" "}
              yang menjelaskan tentang:
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Pengenalan rumus dasar Excel</li>
              <li>Cara menulis rumus dan menggunakan operator matematika</li>
              <li>
                Fungsi-fungsi dasar seperti <b>SUM</b>, <b>AVERAGE</b>,{" "}
                <b>MAX</b>, <b>MIN</b>, dan <b>IF</b>
              </li>
            </ul>
            <div className="mt-4">
              <iframe
                className="w-full aspect-video rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/eGmDlrtBDSA"
                title="Mengenal Rumus dan Fungsi Excel"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p className="text-xs text-gray-600 mt-2">
                Sumber: YouTube - Video Tutorial oleh Ruang Guru.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl shadow space-y-2">
            <h2 className="font-semibold text-blue-900">
              🔢 Contoh Fungsi Dasar
            </h2>
            <ul className="list-disc list-inside ml-2">
              <li>
                <b>SUM</b>: Menjumlahkan sekumpulan data. Contoh:{" "}
                <code>=SUM(A1:A5)</code>
              </li>
              <li>
                <b>AVERAGE</b>: Menghitung nilai rata-rata. Contoh:{" "}
                <code>=AVERAGE(B1:B10)</code>
              </li>
              <li>
                <b>MAX / MIN</b>: Menemukan nilai tertinggi atau terendah.
                Contoh: <code>=MAX(C1:C10)</code>, <code>=MIN(C1:C10)</code>
              </li>
              <li>
                <b>IF</b>: Fungsi logika untuk membuat keputusan. Contoh:{" "}
                <code>=IF(D2&gt;=75, "Lulus", "Tidak Lulus")</code>
              </li>
            </ul>
          </div>

          <p>
            Dengan memahami rumus dan fungsi dasar ini, kalian dapat mengolah
            data dengan lebih cepat dan akurat. Penguasaan teknik ini sangat
            berguna, baik dalam tugas sekolah, kegiatan penelitian, maupun dunia
            kerja yang semakin berbasis data.
          </p>
        </div>
      )}
    </div>
  );
};

export default SubRumusAD;
