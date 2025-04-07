import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubAbstractionBK = () => {
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
          Sub Materi: Abstraction dalam Berpikir Komputasional
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          {/* Penjelasan Konsep */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Apa itu Abstraction? 🧠
            </h2>
            <p>
              <strong>Abstraction</strong> adalah proses menyaring informasi
              penting dari suatu masalah dan mengabaikan hal-hal yang tidak
              relevan. Tujuannya adalah menyederhanakan permasalahan agar lebih
              mudah dipahami dan dipecahkan.
            </p>
            <p className="mt-2">
              Dengan abstraksi, kita bisa fokus pada **inti masalah** tanpa
              terdistraksi oleh detail kecil yang kurang penting.
            </p>
          </div>

          {/* Analogi Abstraksi */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              Analogi Sehari-hari
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Saat kamu menggambar mobil, kamu cukup menggambar bentuk dasar:
                kotak + roda. Kamu nggak perlu gambar baut, knalpot, atau
                AC-nya. Itu abstraksi!
              </li>
              <li>
                Di peta, hanya jalan utama dan lokasi penting yang ditampilkan.
                Detail seperti pepohonan atau kabel listrik tidak ikut digambar.
              </li>
              <li>
                Dalam resep masakan, kamu cukup tahu "bawang merah, tumis,
                masukkan ayam"— kamu nggak perlu tahu sejarah bawang merah atau
                anatomi ayam 😄
              </li>
            </ul>
          </div>

          {/* Penerapan di Informatika */}
          <div className="p-4 bg-blue-100 rounded-xl shadow border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Abstraksi dalam Pemrograman
            </h3>
            <p>
              Saat membuat program, kamu nggak perlu menjelaskan bagaimana
              komputer menyimpan angka di RAM. Kamu cukup bilang:
            </p>
            <pre className="bg-blue-50 rounded-lg p-2 mt-2 overflow-auto">
              {`let totalNilai = 80 + 75 + 90;`}
            </pre>
            <p className="mt-2">
              Kamu fokus pada proses penjumlahan—bukan detail cara CPU
              memprosesnya. Inilah kekuatan abstraksi!
            </p>
          </div>

          {/* Studi Kasus */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              Contoh Kasus Informatika
            </h3>
            <p>
              Bayangkan kamu membuat aplikasi kasir sederhana. Banyak informasi
              tersedia:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Nama barang</li>
              <li>Harga satuan</li>
              <li>Stok di gudang</li>
              <li>Nama supplier</li>
              <li>Warna packaging</li>
            </ul>
            <p className="mt-2">
              Untuk proses transaksi, kamu hanya butuh:{" "}
              <strong>nama barang</strong> dan <strong>harga satuan</strong>.
              Maka kamu buat abstraksi objek "Barang" dengan hanya dua atribut
              itu.
            </p>
          </div>

          {/* Latihan Ringan */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              Mini Challenge 🔍
            </h3>
            <p>
              Bayangkan kamu merancang aplikasi kalender digital.
              <br />
              Data yang kamu miliki:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Judul kegiatan</li>
              <li>Waktu mulai</li>
              <li>Warna favorit pengguna</li>
              <li>Jumlah teman yang ikut</li>
              <li>Lokasi kegiatan</li>
            </ul>
            <p className="mt-2">
              ✨ Abstraksikan elemen yang penting untuk menampilkan jadwal. Apa
              yang perlu kamu simpan?
            </p>
          </div>

          {/* Penutup */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <p>
              Tanpa abstraksi, dunia informatika akan dipenuhi detail tak
              penting yang bikin pusing. Kemampuan menyaring informasi ini
              sangat penting dalam menyusun algoritma, membangun sistem, dan
              menyederhanakan proyek besar menjadi komponen kecil yang lebih
              mudah ditangani.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubAbstractionBK;
