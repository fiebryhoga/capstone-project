import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubImplementasiSK = () => {
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
          Sub Materi: Implementasi Sistem Komputer
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          {/* Penjelasan */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              6. Contoh Implementasi Sistem Komputer
            </h2>
            <p>
              Sistem komputer hadir dalam berbagai aktivitas sehari-hari, baik
              dalam dunia pendidikan, pekerjaan, hiburan, maupun kreatif. Setiap
              aktivitas melibatkan ketiga komponen utama:{" "}
              <strong>hardware</strong>, <strong>software</strong>, dan{" "}
              <strong>brainware</strong>. Berikut ini adalah contoh
              implementasinya:
            </p>
          </div>

          {/* Tabel */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-blue-950 rounded-lg overflow-hidden">
              <thead className="bg-blue-100 text-blue-950">
                <tr>
                  <th className="py-2 px-4 border-r border-blue-950">
                    Aktivitas
                  </th>
                  <th className="py-2 px-4 border-r border-blue-950">
                    Hardware
                  </th>
                  <th className="py-2 px-4 border-r border-blue-950">
                    Software
                  </th>
                  <th className="py-2 px-4">Brainware</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 border-r border-blue-950">
                    Mengetik dokumen
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    Laptop, Keyboard
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    Microsoft Word
                  </td>
                  <td className="py-2 px-4">Mahasiswa</td>
                </tr>
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 border-r border-blue-950">
                    Mengedit video
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    PC, Mouse
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    Adobe Premiere
                  </td>
                  <td className="py-2 px-4">Editor Video</td>
                </tr>
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 border-r border-blue-950">
                    Menyusun laporan keuangan
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    Laptop, Printer
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    Excel, PDF Reader
                  </td>
                  <td className="py-2 px-4">Staf Keuangan</td>
                </tr>
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 border-r border-blue-950">
                    Bermain game
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    PC, Monitor
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    Steam, Game Engine
                  </td>
                  <td className="py-2 px-4">Gamer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubImplementasiSK;
