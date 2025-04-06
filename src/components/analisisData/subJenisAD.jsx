import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubJenisAD = () => {
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
          Sub Materi: Jenis-jenis Analisis Data
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <p>
            Dalam dunia analisis data, penting untuk memahami jenis data yang
            akan dianalisis. Hal ini karena jenis data menentukan teknik dan
            alat analisis yang akan digunakan. Secara umum, data dibagi menjadi
            dua kategori utama:
          </p>

          {/* Data Kuantitatif */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              1. Data Kuantitatif
            </h2>
            <p>
              Data yang berbentuk angka dan dapat diukur secara numerik.
              Biasanya digunakan dalam analisis statistik dan memungkinkan
              perhitungan matematis.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Contoh: tinggi badan, nilai ujian, usia, pendapatan.</li>
              <li>
                Dapat divisualisasikan dalam bentuk tabel, diagram batang, atau
                diagram garis.
              </li>
            </ul>
          </div>

          {/* Data Kualitatif */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              2. Data Kualitatif
            </h2>
            <p>
              Data yang tidak berbentuk angka, melainkan berupa kategori, label,
              atau deskripsi. Umumnya digunakan untuk memahami karakteristik,
              opini, atau klasifikasi.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                Contoh: warna kesukaan, jenis kelamin, pendapat siswa, kategori
                produk.
              </li>
              <li>
                Dianalisis menggunakan teknik coding, pengelompokan, atau
                visualisasi seperti diagram lingkaran.
              </li>
            </ul>
          </div>

          {/* Perbandingan Tabel */}
          <div className="overflow-x-auto">
            <h3 className="font-semibold text-blue-950 mb-2">
              Perbandingan Data Kuantitatif dan Kualitatif:
            </h3>
            <table className="min-w-full text-left border border-blue-950 rounded-lg overflow-hidden">
              <thead className="bg-blue-50 text-blue-950">
                <tr>
                  <th className="py-2 px-4 border-r border-blue-950">
                    Kategori
                  </th>
                  <th className="py-2 px-4">Data Kuantitatif</th>
                  <th className="py-2 px-4">Data Kualitatif</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 font-semibold border-r">Bentuk</td>
                  <td className="py-2 px-4">Angka</td>
                  <td className="py-2 px-4">Deskripsi/Kategori</td>
                </tr>
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 font-semibold border-r">Contoh</td>
                  <td className="py-2 px-4">Nilai ujian, umur</td>
                  <td className="py-2 px-4">Jenis kelamin, warna</td>
                </tr>
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 font-semibold border-r">Analisis</td>
                  <td className="py-2 px-4">Statistik, grafik</td>
                  <td className="py-2 px-4">Koding, klasifikasi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubJenisAD;
