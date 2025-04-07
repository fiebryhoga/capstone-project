import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubInteraksiSK = () => {
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
          Sub Materi: Interaksi Antar Komponen Sistem Komputer
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          {/* Pendahuluan */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              5. Interaksi Antar Komponen Sistem Komputer
            </h2>
            <p>
              Dalam menjalankan fungsinya, sistem komputer tidak berdiri
              sendiri. Ketiga komponen utama—hardware, software, dan
              brainware—bekerja secara sinergis dan saling bergantung satu sama
              lain untuk memproses data dan menghasilkan informasi yang
              bermanfaat.
            </p>
          </div>

          {/* Interaksi Hardware */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">🔧 Hardware</h3>
            <p>
              Hardware adalah perangkat fisik yang bertugas menjalankan perintah
              dari software. Tanpa software, hardware hanyalah benda mati yang
              tidak bisa melakukan apapun.
            </p>
            <p className="mt-2">
              Contoh: CPU akan memproses data berdasarkan instruksi dari sistem
              operasi atau aplikasi yang sedang berjalan.
            </p>
          </div>

          {/* Interaksi Software */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">💾 Software</h3>
            <p>
              Software berisi instruksi atau program yang memberikan perintah
              kepada hardware untuk melakukan tugas tertentu. Software
              menjembatani interaksi antara brainware dan hardware.
            </p>
            <p className="mt-2">
              Contoh: Microsoft Word mengatur bagaimana keyboard dan monitor
              bekerja saat pengguna mengetik dokumen.
            </p>
          </div>

          {/* Interaksi Brainware */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">🧑‍💼 Brainware</h3>
            <p>
              Brainware adalah manusia yang mengoperasikan dan mengelola sistem
              komputer. Tanpa brainware, software dan hardware tidak akan
              digunakan secara optimal.
            </p>
            <p className="mt-2">
              Brainware juga berperan dalam memecahkan masalah, melakukan
              instalasi software, dan mengatur konfigurasi sistem.
            </p>
          </div>

          {/* Diagram Alur */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h4 className="font-semibold text-blue-900 mb-2">
              🔄 Alur Interaksi Sederhana:
            </h4>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>
                <span className="font-semibold">Brainware</span> memberi
                perintah melalui perangkat input.
              </li>
              <li>
                <span className="font-semibold">Software</span> menerjemahkan
                perintah menjadi instruksi teknis.
              </li>
              <li>
                <span className="font-semibold">Hardware</span> menjalankan
                instruksi untuk memproses data.
              </li>
              <li>
                Hasilnya ditampilkan melalui perangkat output, dan digunakan
                kembali oleh <span className="font-semibold">brainware</span>.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubInteraksiSK;
