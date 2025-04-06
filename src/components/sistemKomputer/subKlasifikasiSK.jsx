import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubKlasifikasiSK = () => {
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
          Sub Materi: Klasifikiasi Sistem Komputer
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <p>
            Komputer dapat diklasifikasikan berdasarkan{" "}
            <span className="font-semibold">
              ukuran, kemampuan, dan penggunaannya
            </span>
            . Berikut ini adalah klasifikasi komputer berdasarkan ukurannya:
          </p>

          {/* Tabel Klasifikasi Komputer */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-blue-950 text-sm">
              <thead>
                <tr className="bg-blue-100 text-blue-950">
                  <th className="border border-blue-950 px-2 py-2">
                    Jenis Komputer
                  </th>
                  <th className="border border-blue-950 px-2 py-2">
                    Deskripsi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-blue-950 px-2 py-2 font-medium">
                    Supercomputer
                  </td>
                  <td className="border border-blue-950 px-2 py-2">
                    Digunakan untuk perhitungan kompleks berskala besar, seperti
                    prediksi cuaca, riset nuklir, dan simulasi ruang angkasa.
                  </td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-blue-950 px-2 py-2 font-medium">
                    Mainframe
                  </td>
                  <td className="border border-blue-950 px-2 py-2">
                    Komputer besar yang digunakan oleh perusahaan atau lembaga
                    besar untuk memproses dan menyimpan data dalam jumlah sangat
                    besar.
                  </td>
                </tr>
                <tr>
                  <td className="border border-blue-950 px-2 py-2 font-medium">
                    Minikomputer
                  </td>
                  <td className="border border-blue-950 px-2 py-2">
                    Lebih kecil dari mainframe, biasanya digunakan oleh
                    organisasi skala menengah, misalnya rumah sakit atau
                    universitas.
                  </td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-blue-950 px-2 py-2 font-medium">
                    Mikrokomputer
                  </td>
                  <td className="border border-blue-950 px-2 py-2">
                    Komputer pribadi seperti PC dan laptop, umum digunakan oleh
                    individu.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Penjelasan Kerja Komponen */}
          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-800 rounded shadow-sm">
            🔄{" "}
            <span className="font-semibold">
              Ketiga komponen sistem komputer (Hardware, Software, Brainware)
            </span>{" "}
            bekerja secara sinergis:
            <ul className="list-disc list-inside mt-2">
              <li>Hardware menjalankan instruksi dari software.</li>
              <li>Software memberikan perintah untuk memproses data.</li>
              <li>
                Brainware mengoperasikan dan mengelola komputer, serta
                menggunakan informasi hasil pemrosesan.
              </li>
            </ul>
          </div>

          {/* Tabel Aktivitas */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              💡 Contoh Aktivitas dan Komponennya:
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-blue-950 text-sm">
                <thead>
                  <tr className="bg-blue-100 text-blue-950">
                    <th className="border border-blue-950 px-2 py-2">
                      Aktivitas
                    </th>
                    <th className="border border-blue-950 px-2 py-2">
                      Hardware
                    </th>
                    <th className="border border-blue-950 px-2 py-2">
                      Software
                    </th>
                    <th className="border border-blue-950 px-2 py-2">
                      Brainware
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-950 px-2 py-2">
                      Mengetik Dokumen
                    </td>
                    <td className="border border-blue-950 px-2 py-2">
                      Laptop, Keyboard
                    </td>
                    <td className="border border-blue-950 px-2 py-2">
                      Microsoft Word
                    </td>
                    <td className="border border-blue-950 px-2 py-2">
                      Mahasiswa
                    </td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-950 px-2 py-2">
                      Mengedit Video
                    </td>
                    <td className="border border-blue-950 px-2 py-2">
                      PC, Mouse
                    </td>
                    <td className="border border-blue-950 px-2 py-2">
                      Adobe Premiere
                    </td>
                    <td className="border border-blue-950 px-2 py-2">
                      Editor Video
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-blue-950 px-2 py-2">
                      Menyusun Laporan Keuangan
                    </td>
                    <td className="border border-blue-950 px-2 py-2">
                      Laptop, Printer
                    </td>
                    <td className="border border-blue-950 px-2 py-2">
                      Excel, PDF Reader
                    </td>
                    <td className="border border-blue-950 px-2 py-2">
                      Staf Keuangan
                    </td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="border border-blue-950 px-2 py-2">
                      Bermain Game
                    </td>
                    <td className="border border-blue-950 px-2 py-2">
                      PC, Monitor
                    </td>
                    <td className="border border-blue-950 px-2 py-2">
                      Steam, Game Engine
                    </td>
                    <td className="border border-blue-950 px-2 py-2">Gamer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubKlasifikasiSK;
