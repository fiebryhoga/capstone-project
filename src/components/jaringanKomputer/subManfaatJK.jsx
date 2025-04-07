import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubManfaatJK = () => {
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
          Sub Materi: Manfaat Jaringan Komputer
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Manfaat Jaringan Komputer
            </h2>
            <p>
              Jaringan komputer memberikan banyak keuntungan dalam kehidupan
              sehari-hari, baik di lingkungan rumah, sekolah, kantor, maupun
              perusahaan besar. Berikut beberapa manfaat utama yang bisa
              diperoleh:
            </p>
          </div>

          {/* 1. Berbagi Data */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              1. Berbagi Data Secara Cepat dan Mudah
            </h3>
            <p>
              Dengan jaringan komputer, pengguna dapat saling berbagi file,
              dokumen, gambar, atau data lainnya hanya dalam hitungan detik.
              Proses ini jauh lebih efisien dibandingkan menggunakan media
              penyimpanan eksternal seperti flashdisk.
            </p>
          </div>

          {/* 2. Akses Internet Bersama */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              2. Akses Internet Bersama
            </h3>
            <p>
              Beberapa perangkat dalam satu jaringan bisa menggunakan satu
              koneksi internet secara bersamaan, sehingga lebih hemat dan
              terorganisir. Ini sangat bermanfaat di rumah maupun lingkungan
              kerja.
            </p>
          </div>

          {/* 3. Berbagi Perangkat Keras */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              3. Menghemat Biaya Melalui Berbagi Perangkat
            </h3>
            <p>
              Pengguna dalam satu jaringan dapat menggunakan perangkat keras
              seperti printer, scanner, atau hard disk eksternal secara
              bersama-sama. Ini mengurangi kebutuhan pembelian perangkat untuk
              setiap komputer.
            </p>
          </div>

          {/* 4. Mendukung Kolaborasi */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              4. Mendukung Kolaborasi dan Kerja Jarak Jauh
            </h3>
            <p>
              Dalam jaringan komputer, pengguna bisa bekerja bersama dalam satu
              proyek secara real-time, meskipun berada di lokasi berbeda. Hal
              ini sangat berguna untuk sistem pembelajaran daring dan kerja
              remote.
            </p>
          </div>

          {/* 5. Sentralisasi Data */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              5. Sentralisasi Data
            </h3>
            <p>
              Data penting bisa disimpan di satu server pusat dan diakses oleh
              komputer lain di jaringan. Ini memudahkan pengelolaan,
              pencadangan, serta keamanan data, karena semua informasi terpusat
              dan terkontrol.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubManfaatJK;
