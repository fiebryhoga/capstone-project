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
          {/* Pendahuluan */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              4. Klasifikasi Komputer
            </h2>
            <p>
              Komputer dapat diklasifikasikan berdasarkan berbagai aspek, salah
              satunya adalah dari segi ukuran dan kemampuan pemrosesan. Berikut
              adalah jenis-jenis komputer berdasarkan ukurannya:
            </p>
          </div>

          {/* Supercomputer */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              🧠 Supercomputer
            </h3>
            <p>
              Supercomputer adalah komputer dengan kapasitas pemrosesan
              tertinggi di dunia. Biasanya digunakan untuk:
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Simulasi iklim dan cuaca global</li>
              <li>Penelitian nuklir dan luar angkasa</li>
              <li>Kecerdasan buatan dan analisis data skala besar</li>
            </ul>
          </div>

          {/* Mainframe */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">🏢 Mainframe</h3>
            <p>
              Komputer jenis ini digunakan oleh perusahaan besar dan lembaga
              pemerintahan untuk memproses dan mengelola data dalam jumlah besar
              secara bersamaan. Ciri khasnya:
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                Stabil dan mampu menangani ribuan pengguna secara bersamaan
              </li>
              <li>
                Digunakan untuk sistem perbankan, asuransi, dan sensus penduduk
              </li>
            </ul>
          </div>

          {/* Minikomputer */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              🏫 Minikomputer
            </h3>
            <p>
              Lebih kecil dari mainframe namun tetap cukup kuat untuk digunakan
              oleh organisasi skala menengah. Minikomputer digunakan dalam:
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Sistem akuntansi perusahaan menengah</li>
              <li>Pengelolaan data instansi pemerintah daerah</li>
            </ul>
          </div>

          {/* Mikrokomputer */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              💻 Mikrokomputer
            </h3>
            <p>
              Ini adalah komputer yang paling umum digunakan, biasa dikenal
              sebagai komputer pribadi (PC). Jenis ini mencakup:
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Laptop</li>
              <li>Desktop</li>
              <li>Tablet</li>
            </ul>
            <p className="mt-2">
              Digunakan untuk keperluan sehari-hari seperti bekerja, belajar,
              hiburan, dan berkomunikasi.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubKlasifikasiSK;
