import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubKomponenSK = () => {
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
          Sub Materi: Komponen Sistem Komputer
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          {/* Komponen Sistem Komputer */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              2. Komponen Sistem Komputer
            </h2>
            <p>
              Sistem komputer terdiri dari tiga komponen utama yang saling
              mendukung satu sama lain dalam menjalankan fungsi pemrosesan data.
              Ketiga komponen tersebut adalah:
            </p>
          </div>

          {/* Hardware */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              🔧 Hardware (Perangkat Keras)
            </h3>
            <p>
              Merupakan komponen fisik dari komputer yang dapat dilihat dan
              disentuh. Contohnya meliputi:
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                <strong>CPU (Central Processing Unit)</strong> – otak dari
                komputer.
              </li>
              <li>
                <strong>RAM (Random Access Memory)</strong> – memori sementara
                saat program dijalankan.
              </li>
              <li>
                <strong>Harddisk / SSD</strong> – tempat penyimpanan data dan
                sistem operasi.
              </li>
              <li>
                <strong>Monitor</strong> – menampilkan output visual.
              </li>
              <li>
                <strong>Keyboard dan Mouse</strong> – alat input untuk
                memberikan perintah.
              </li>
            </ul>
          </div>

          {/* Software */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              💻 Software (Perangkat Lunak)
            </h3>
            <p>
              Adalah program dan instruksi yang dijalankan oleh perangkat keras.
              Jenis-jenis software meliputi:
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                <strong>Sistem Operasi</strong> – seperti Windows, Linux, macOS.
              </li>
              <li>
                <strong>Aplikasi</strong> – seperti Microsoft Word, Google
                Chrome, dan game.
              </li>
              <li>
                <strong>Bahasa Pemrograman & Compiler</strong> – alat bantu bagi
                pengembang untuk membuat program.
              </li>
            </ul>
          </div>

          {/* Brainware */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              🧠 Brainware (Pengguna)
            </h3>
            <p>
              Brainware adalah manusia yang menggunakan atau mengoperasikan
              sistem komputer. Termasuk di dalamnya:
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                <strong>Pengguna Akhir</strong> – orang yang menggunakan
                komputer untuk kebutuhan sehari-hari.
              </li>
              <li>
                <strong>Teknisi</strong> – yang melakukan perawatan dan
                perbaikan sistem.
              </li>
              <li>
                <strong>Programmer / Developer</strong> – yang membuat aplikasi
                dan sistem.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubKomponenSK;
