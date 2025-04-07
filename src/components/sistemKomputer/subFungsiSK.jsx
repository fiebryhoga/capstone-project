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
          {/* Pendahuluan */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              3. Fungsi Sistem Komputer
            </h2>
            <p>
              Sistem komputer tidak hanya sekadar alat elektronik biasa,
              melainkan sebuah sistem terpadu yang menjalankan berbagai fungsi
              penting dalam pengolahan data. Secara umum, sistem komputer
              memiliki empat fungsi utama:
            </p>
          </div>

          {/* Fungsi Input */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">1️⃣ Input</h3>
            <p>
              Fungsi ini bertugas untuk menerima data atau perintah dari
              pengguna melalui perangkat input. Perangkat yang termasuk dalam
              fungsi ini antara lain:
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                <strong>Keyboard</strong> – untuk mengetikkan data atau
                perintah.
              </li>
              <li>
                <strong>Mouse</strong> – untuk navigasi dan interaksi visual.
              </li>
              <li>
                <strong>Scanner</strong> – untuk mengubah dokumen fisik menjadi
                digital.
              </li>
              <li>
                <strong>Microphone</strong> – untuk input suara.
              </li>
            </ul>
          </div>

          {/* Fungsi Processing */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              2️⃣ Processing (Pemrosesan)
            </h3>
            <p>
              Fungsi pemrosesan dilakukan oleh{" "}
              <strong>CPU (Central Processing Unit)</strong>, yang merupakan
              otak dari komputer. CPU akan mengolah data yang masuk berdasarkan
              instruksi dari software agar menjadi informasi yang berguna.
              Pemrosesan ini bisa mencakup perhitungan, logika, pengurutan data,
              dan lainnya.
            </p>
          </div>

          {/* Fungsi Storage */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              3️⃣ Storage (Penyimpanan)
            </h3>
            <p>
              Fungsi ini berkaitan dengan penyimpanan data, baik secara
              sementara maupun permanen:
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                <strong>RAM (Random Access Memory)</strong> – menyimpan data
                sementara saat komputer bekerja.
              </li>
              <li>
                <strong>Harddisk / SSD</strong> – menyimpan data dan program
                secara permanen.
              </li>
              <li>
                <strong>Cloud Storage</strong> – penyimpanan data secara online
                (Google Drive, Dropbox, dll).
              </li>
            </ul>
          </div>

          {/* Fungsi Output */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">4️⃣ Output</h3>
            <p>
              Setelah data diproses, hasilnya disampaikan kepada pengguna
              melalui perangkat output, seperti:
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                <strong>Monitor</strong> – menampilkan hasil dalam bentuk
                visual.
              </li>
              <li>
                <strong>Printer</strong> – mencetak hasil kerja dalam bentuk
                fisik.
              </li>
              <li>
                <strong>Speaker</strong> – menyampaikan output suara.
              </li>
              <li>
                <strong>Proyektor</strong> – menampilkan output ke layar besar
                untuk presentasi.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubFungsiSK;
