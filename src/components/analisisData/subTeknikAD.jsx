import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubTeknikAD = () => {
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
          Sub Materi: Teknik Analisis Data
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <p>
            Dalam proses analisis data, terdapat berbagai teknik yang digunakan
            untuk menggali informasi dari kumpulan data. Pemilihan teknik
            tergantung pada jenis data, tujuan analisis, dan konteks
            penggunaannya. Berikut adalah beberapa teknik yang umum digunakan:
          </p>

          {/* Statistik Deskriptif */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              1. Statistik Deskriptif
            </h2>
            <p>
              Statistik deskriptif digunakan untuk menggambarkan atau merangkum
              data dalam bentuk yang mudah dipahami.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                <strong>Rata-rata (Mean):</strong> Nilai tengah dari sekumpulan
                data.
              </li>
              <li>
                <strong>Median:</strong> Nilai tengah dari data yang sudah
                diurutkan.
              </li>
              <li>
                <strong>Modus:</strong> Nilai yang paling sering muncul dalam
                data.
              </li>
              <li>
                <strong>Distribusi:</strong> Penyebaran nilai dalam dataset.
              </li>
            </ul>
            <p className="mt-2">
              Contoh: Rata-rata nilai ujian siswa dalam satu kelas.
            </p>
          </div>

          {/* Statistik Inferensial */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              2. Statistik Inferensial
            </h2>
            <p>
              Statistik inferensial digunakan untuk membuat kesimpulan atau
              prediksi berdasarkan data sampel terhadap populasi secara
              keseluruhan.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Uji hipotesis</li>
              <li>Regresi linier</li>
              <li>Analisis varians (ANOVA)</li>
            </ul>
            <p className="mt-2">
              Contoh: Menentukan apakah ada perbedaan signifikan antara nilai
              ujian dua kelas berbeda.
            </p>
          </div>

          {/* Visualisasi Data */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              3. Visualisasi Data
            </h2>
            <p>
              Teknik untuk menyajikan data secara visual agar lebih mudah
              dipahami. Visualisasi membantu dalam mengenali pola, tren, dan
              anomali dalam data.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Diagram batang, diagram garis, diagram lingkaran</li>
              <li>Peta panas (heatmap), scatter plot</li>
              <li>
                Alat bantu: Microsoft Excel, Google Sheets, Python (Matplotlib,
                Seaborn), Tableau
              </li>
            </ul>
          </div>

          {/* Ilustrasi visual */}
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">
              Contoh Visualisasi Data:
            </h3>
            <img
              src="/assets/images/content/analisisData/visualisasi.jpeg"
              alt="Visualisasi Data"
              className="rounded-lg shadow-md w-full max-w-md"
            />
            <p className="text-xs mt-2 text-gray-600">
              Gambar: Perbandingan histogram dan boxplot.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubTeknikAD;
