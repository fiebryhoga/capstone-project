import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubDecompositionBK = () => {
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
          Sub Materi: Decomposition dalam Berpikir Komputasional
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          {/* Penjelasan Konsep */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Apa Itu Decomposition? 🧩
            </h2>
            <p>
              <strong>Decomposition</strong> atau dekomposisi adalah teknik
              berpikir komputasional untuk **memecah masalah besar menjadi
              bagian-bagian kecil** yang lebih mudah dipahami dan diselesaikan.
            </p>
            <p className="mt-2">
              Ibarat kamu ingin membuat nasi goreng spesial 🍳—kamu tidak
              langsung membuat semuanya sekaligus. Kamu pecah menjadi
              langkah-langkah: menyiapkan bahan, menumis bawang, memasukkan
              nasi, memberi bumbu, dan seterusnya. Itulah decomposition!
            </p>
          </div>

          {/* Manfaat Decomposition */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              Kenapa Decomposition Penting?
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Memudahkan kita memahami masalah yang kompleks secara bertahap
              </li>
              <li>
                Membantu dalam menyusun solusi yang lebih terstruktur dan
                efisien
              </li>
              <li>Mempermudah pembagian tugas saat kerja tim</li>
              <li>
                Mengurangi risiko kesalahan karena tiap bagian bisa diuji
                terpisah
              </li>
            </ul>
          </div>

          {/* Contoh Praktis */}
          <div className="p-4 bg-blue-100 rounded-xl shadow border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Contoh Kasus</h3>
            <p>
              Misalnya kamu ingin membuat aplikasi **pemutar musik**. Dengan
              decomposition, kamu bisa memecahnya menjadi:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Membuat tampilan daftar lagu</li>
              <li>Menambahkan tombol play/pause</li>
              <li>Membuat fitur pencarian lagu</li>
              <li>Mengatur volume suara</li>
              <li>Menghubungkan dengan file lagu di memori</li>
            </ul>
            <p className="mt-2">
              Setiap bagian ini bisa dikembangkan, diuji, dan diperbaiki secara
              terpisah oleh anggota tim yang berbeda.
            </p>
          </div>

          {/* Tips dan Penutup */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">Tips!</h3>
            <p>
              Kalau kamu menemukan masalah besar dan bingung mulai dari mana,
              coba tanya pada dirimu:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Apa saja bagian-bagian dari masalah ini?</li>
              <li>Bagian mana yang paling mendesak untuk dikerjakan duluan?</li>
              <li>Apakah bagian ini bisa diselesaikan secara mandiri?</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubDecompositionBK;
