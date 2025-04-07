import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubTopologiJK = () => {
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
          Sub Materi: Topologi Jaringan
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Topologi Jaringan
            </h2>
            <p>
              Topologi jaringan adalah cara atau pola pengaturan koneksi antara
              komputer dalam suatu jaringan. Topologi menentukan bagaimana data
              mengalir dan bagaimana perangkat saling terhubung. Setiap jenis
              topologi memiliki kelebihan dan kekurangannya masing-masing
              tergantung pada kebutuhan jaringan.
            </p>
          </div>

          {/* Bus */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              1. Topologi Bus
            </h3>
            <p>
              Dalam topologi ini, semua komputer terhubung ke satu jalur kabel
              utama. Data dikirim dalam satu arah dan setiap perangkat menerima
              sinyal secara bergantian.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Mudah dibuat dan hemat kabel.</li>
              <li>Kurang efisien jika jumlah perangkat banyak.</li>
              <li>
                Jika kabel utama bermasalah, seluruh jaringan bisa terganggu.
              </li>
            </ul>
          </div>

          {/* Star */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              2. Topologi Star
            </h3>
            <p>
              Semua komputer terhubung ke satu perangkat pusat, biasanya hub
              atau switch. Komunikasi dilakukan melalui pusat ini.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Stabil dan mudah dikontrol.</li>
              <li>
                Jika satu kabel rusak, hanya satu komputer yang terpengaruh.
              </li>
              <li>Jika hub/switch rusak, seluruh jaringan akan terganggu.</li>
            </ul>
          </div>

          {/* Ring */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              3. Topologi Ring
            </h3>
            <p>
              Perangkat dihubungkan membentuk lingkaran. Data bergerak dalam
              satu arah melalui setiap perangkat hingga sampai ke tujuan.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Distribusi data teratur.</li>
              <li>Jika satu titik rusak, seluruh jaringan terganggu.</li>
              <li>Lebih sulit diperluas dibanding topologi lain.</li>
            </ul>
          </div>

          {/* Mesh */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              4. Topologi Mesh
            </h3>
            <p>
              Setiap perangkat terhubung langsung ke perangkat lainnya. Jalur
              data banyak, sehingga lebih andal dan tahan terhadap gangguan.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Sangat andal dan aman.</li>
              <li>Biaya mahal dan rumit untuk dipasang.</li>
              <li>
                Cocok untuk jaringan dengan kebutuhan tinggi seperti militer
                atau perbankan.
              </li>
            </ul>
          </div>

          {/* Tabel Perbandingan */}
          <div className="overflow-x-auto">
            <h3 className="font-semibold text-blue-950 mb-2">
              Perbandingan Topologi Jaringan:
            </h3>
            <table className="min-w-full text-left border border-blue-950 rounded-lg overflow-hidden">
              <thead className="bg-blue-50 text-blue-950">
                <tr>
                  <th className="py-2 px-4 border-r border-blue-950">
                    Topologi
                  </th>
                  <th className="py-2 px-4 border-r border-blue-950">
                    Ciri Khas
                  </th>
                  <th className="py-2 px-4">Keterangan</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 font-semibold border-r border-blue-950">
                    Bus
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    Satu jalur kabel utama
                  </td>
                  <td className="py-2 px-4">Mudah dibuat tapi rawan macet</td>
                </tr>
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 font-semibold border-r border-blue-950">
                    Star
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    Terpusat ke hub/switch
                  </td>
                  <td className="py-2 px-4">Stabil, mudah dikontrol</td>
                </tr>
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 font-semibold border-r border-blue-950">
                    Ring
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    Lingkaran tertutup
                  </td>
                  <td className="py-2 px-4">Data mengalir satu arah</td>
                </tr>
                <tr className="border-t border-blue-950">
                  <td className="py-2 px-4 font-semibold border-r border-blue-950">
                    Mesh
                  </td>
                  <td className="py-2 px-4 border-r border-blue-950">
                    Semua saling terhubung
                  </td>
                  <td className="py-2 px-4">Sangat andal tapi mahal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubTopologiJK;
