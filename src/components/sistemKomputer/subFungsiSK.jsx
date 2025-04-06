import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubFungsiSK = () => {
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
          Sub Materi: Fungsi Sistem Komputer
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <p>
            <span className="font-semibold">Sistem komputer</span> berfungsi
            sebagai alat untuk mengolah informasi dan data. Terdapat empat
            fungsi utama dalam sistem komputer yang saling terintegrasi dan
            berurutan:
          </p>

          {/* 1. Input */}
          <div>
            <h2 className="font-semibold text-base mb-2">1. Input (Masukan)</h2>
            <p>
              Fungsi input bertugas untuk menerima data dari luar sistem, yaitu
              dari pengguna. Perangkat input memungkinkan pengguna untuk
              berinteraksi dengan komputer.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Keyboard (untuk mengetik data)</li>
              <li>Mouse (untuk navigasi dan kontrol)</li>
              <li>
                Scanner (untuk membaca dokumen fisik ke dalam format digital)
              </li>
            </ul>
            <img
              src="assets/images/content/sistemKomputer/input.jpeg"
              alt="Perangkat Input"
              className="w-80 mt-4"
            />
          </div>

          {/* 2. Processing */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              2. Processing (Pemrosesan)
            </h2>
            <p>
              Proses ini dilakukan oleh{" "}
              <span className="font-semibold">
                CPU (Central Processing Unit)
              </span>
              . CPU berperan sebagai otak komputer yang menjalankan instruksi,
              melakukan perhitungan, dan mengontrol alur data.
            </p>
            <img
              src="assets/images/content/sistemKomputer/proses.jpg"
              alt="Perangkat Input"
              className="w-80 mt-4"
            />
          </div>

          {/* 3. Storage */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              3. Storage (Penyimpanan)
            </h2>
            <p>
              Penyimpanan digunakan untuk menyimpan data dan hasil pemrosesan,
              baik untuk sementara maupun permanen.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>
                <span className="font-medium">RAM</span>: Penyimpanan sementara
                saat proses berjalan
              </li>
              <li>
                <span className="font-medium">Harddisk/SSD</span>: Penyimpanan
                permanen data dan file
              </li>
            </ul>
            <img
              src="assets/images/content/sistemKomputer/storage.jpeg"
              alt="Perangkat Input"
              className="w-80 mt-4"
            />
          </div>

          {/* 4. Output */}
          <div>
            <h2 className="font-semibold text-base mb-2">
              4. Output (Keluaran)
            </h2>
            <p>
              Output adalah hasil dari proses yang ditampilkan kepada pengguna.
              Perangkat output menampilkan atau mencetak informasi.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Monitor (menampilkan visual)</li>
              <li>Printer (mencetak dokumen)</li>
              <li>Speaker (menghasilkan suara)</li>
            </ul>
            <img
              src="assets/images/content/sistemKomputer/output.jpg"
              alt="Perangkat Input"
              className="w-80 mt-4"
            />
          </div>

          {/* Kesimpulan */}
          <div className="p-4 bg-green-100 border-l-4 border-green-500 text-green-800 rounded shadow-sm">
            📌 <span className="font-semibold">Kesimpulan:</span> Fungsi sistem
            komputer dimulai dari menerima data (input), memprosesnya
            (processing), menyimpannya (storage), dan menampilkan hasilnya
            (output). Semua fungsi ini saling terhubung dan membentuk satu
            kesatuan proses kerja komputer.
          </div>
        </div>
      )}
    </div>
  );
};

export default SubFungsiSK;
