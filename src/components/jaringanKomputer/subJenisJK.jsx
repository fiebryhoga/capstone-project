import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubJenisJK = () => {
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
          Sub Materi: Jenis-jenis Jaringan Komputer
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Jenis-Jenis Jaringan Komputer
            </h2>
            <p>
              Jaringan komputer dapat dikategorikan berdasarkan cakupan wilayah
              atau area jangkauannya. Tiga jenis utama yang umum digunakan
              adalah LAN, MAN, dan WAN. Masing-masing memiliki karakteristik dan
              penerapan yang berbeda.
            </p>
          </div>

          {/* LAN */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              1. LAN (Local Area Network)
            </h3>
            <p>
              Jaringan dengan cakupan area terbatas, seperti dalam satu ruangan,
              gedung, atau sekolah. LAN umumnya digunakan untuk menghubungkan
              komputer-komputer dalam satu lokasi yang kecil.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Biaya instalasi relatif rendah.</li>
              <li>
                Kecepatan tinggi dan efisien untuk berbagi file atau perangkat.
              </li>
              <li>Contoh: jaringan komputer di laboratorium sekolah.</li>
            </ul>
          </div>

          {/* MAN */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              2. MAN (Metropolitan Area Network)
            </h3>
            <p>
              Jaringan yang mencakup wilayah satu kota atau area metropolitan.
              MAN cocok untuk menghubungkan berbagai kantor atau institusi dalam
              satu kota.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Lebih luas dari LAN namun tidak sebesar WAN.</li>
              <li>
                Biasanya digunakan oleh organisasi besar atau perguruan tinggi.
              </li>
              <li>Contoh: jaringan antar kampus dalam satu kota.</li>
            </ul>
          </div>

          {/* WAN */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              3. WAN (Wide Area Network)
            </h3>
            <p>
              Jaringan berskala besar yang mencakup wilayah geografis yang
              sangat luas, bahkan bisa antar negara dan benua. WAN seringkali
              menggunakan jaringan publik seperti satelit atau kabel bawah laut.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Memiliki jangkauan global.</li>
              <li>Contoh terbesar: Internet.</li>
              <li>Lebih kompleks dan membutuhkan infrastruktur khusus.</li>
            </ul>
          </div>

          {/* Tabel Perbandingan */}
          <div className="overflow-x-auto">
            <h3 className="font-semibold text-blue-950 mb-2">
              Perbandingan Jenis Jaringan Komputer:
            </h3>
            <table className="min-w-full text-left border border-blue-950 rounded-lg overflow-hidden">
              <thead className="bg-blue-50 text-blue-950">
                <tr>
                  <th className="py-2 px-4 border-r border-blue-950">
                    Jenis Jaringan
                  </th>
                  <th className="py-2 px-4 border-r border-blue-950">
                    Cakupan Area
                  </th>
                  <th className="py-2 px-4">Contoh</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 border-r border-blue-950 font-semibold">
                    LAN
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    Terbatas (satu gedung/ruangan)
                  </td>
                  <td className="py-2 px-4">Jaringan sekolah atau kantor</td>
                </tr>
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 border-r border-blue-950 font-semibold">
                    MAN
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    Kota atau wilayah tertentu
                  </td>
                  <td className="py-2 px-4">
                    Jaringan antar kampus di satu kota
                  </td>
                </tr>
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 border-r border-blue-950 font-semibold">
                    WAN
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    Luas (antar negara/benua)
                  </td>
                  <td className="py-2 px-4">Internet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubJenisJK;
