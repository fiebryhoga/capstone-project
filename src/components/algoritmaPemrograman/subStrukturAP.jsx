import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubStrukturAP = () => {
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
          Sub Materi: Struktur Dasar Algoritma Pemrograman
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div>
            <h2 className="font-semibold text-base mb-2">
              1. Urutan (Sequential)
            </h2>
            <p>
              Urutan adalah instruksi yang dieksekusi secara berurutan, dari
              atas ke bawah. Ini adalah struktur paling dasar dalam algoritma.
            </p>
            <p className="mt-2 font-semibold">Contoh (Python):</p>
            <pre className="bg-gray-100 p-2 rounded">
              angka1 = 10 angka2 = 5 jumlah = angka1 + angka2 print("Hasil
              penjumlahan:", jumlah)
            </pre>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              2. Percabangan (Conditional)
            </h2>
            <p>
              Percabangan memungkinkan program untuk mengambil keputusan
              berdasarkan suatu kondisi. Biasanya menggunakan <code>if</code>,{" "}
              <code>else if</code>, dan <code>else</code>.
            </p>
            <p className="mt-2 font-semibold">Contoh (Python):</p>
            <pre className="bg-gray-100 p-2 rounded">
              umur = 17 if umur &gt;= 18: print("Sudah dewasa") else:
              print("Masih di bawah umur")
            </pre>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              3. Perulangan (Looping)
            </h2>
            <p>
              Perulangan digunakan untuk mengeksekusi suatu blok kode secara
              berulang selama kondisi tertentu terpenuhi. Umumnya menggunakan{" "}
              <code>for</code> dan <code>while</code>.
            </p>
            <p className="mt-2 font-semibold">Contoh (Python):</p>
            <pre className="bg-gray-100 p-2 rounded">
              for i in range(1, 6): print("Perulangan ke-", i)
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubStrukturAP;
