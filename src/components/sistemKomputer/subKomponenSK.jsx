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
          <p>
            <span className="font-semibold">Sistem Komputer</span> terdiri dari
            tiga komponen utama yang saling terintegrasi dan bekerja sama untuk
            menjalankan fungsinya, yaitu:
          </p>

          {/* 1. Hardware */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              1. Hardware (Perangkat Keras)
            </h2>
            <p>
              Merupakan komponen fisik dari komputer yang bisa dilihat dan
              disentuh secara langsung. Beberapa contoh umum hardware antara
              lain:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>CPU (Central Processing Unit)</li>
              <li>RAM (Random Access Memory)</li>
              <li>Harddisk / SSD</li>
              <li>Monitor</li>
              <li>Keyboard dan Mouse</li>
            </ul>
            <img
              src="/assets/images/content/sistemKomputer/hardwaresistemkomputer.jpg"
              alt="Contoh Perangkat Keras"
              className="w-full md:w-1/2 mt-4 border rounded shadow-md"
            />
          </div>

          {/* 2. Software */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              2. Software (Perangkat Lunak)
            </h2>
            <p>
              Software adalah program atau instruksi yang dijalankan oleh
              perangkat keras. Tanpa software, hardware tidak dapat melakukan
              tugas apapun. Software dibagi menjadi:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <span className="font-medium">Sistem Operasi</span>: Windows,
                Linux, macOS
              </li>
              <li>
                <span className="font-medium">Aplikasi</span>: Microsoft Word,
                Google Chrome
              </li>
              <li>
                <span className="font-medium">
                  Bahasa Pemrograman & Compiler
                </span>
                : Python, Java, C++, GCC
              </li>
            </ul>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2721/2721295.png"
              alt="Ilustrasi Software"
              className="w-20 mt-4"
            />
          </div>

          {/* 3. Brainware */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              3. Brainware (Pengguna)
            </h2>
            <p>
              Brainware adalah orang yang menggunakan dan mengoperasikan sistem
              komputer. Perannya sangat penting karena tanpa pengguna, komputer
              tidak akan berfungsi secara maksimal. Contoh brainware:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Pengguna Akhir (End User)</li>
              <li>Teknisi atau Administrator Sistem</li>
              <li>Programmer atau Pengembang Aplikasi</li>
            </ul>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Ilustrasi Pengguna Komputer"
              className="w-20 mt-4"
            />
          </div>

          <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded shadow-sm">
            🎓 <span className="font-semibold">Kesimpulan:</span> Ketiga
            komponen ini saling mendukung. Tanpa hardware, tidak ada tempat
            untuk menjalankan software. Tanpa software, hardware tidak dapat
            digunakan. Tanpa brainware, keduanya tidak akan berguna.
          </div>
        </div>
      )}
    </div>
  );
};

export default SubKomponenSK;
