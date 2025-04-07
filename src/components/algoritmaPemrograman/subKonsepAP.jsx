import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubKonsepAP = () => {
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
          Sub Materi: Konsep Algoritma Pemrograman
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div>
            <h2 className="font-semibold text-base mb-2">
              Pengertian Algoritma
            </h2>
            <p>
              Algoritma adalah urutan langkah-langkah logis dan sistematis yang
              digunakan untuk menyelesaikan suatu masalah. Dalam dunia
              pemrograman, algoritma digunakan untuk merancang solusi sebelum
              diubah menjadi kode program.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Ciri-ciri Algoritma yang Baik
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Jelas dan terdefinisi:</strong> Setiap langkah dalam
                algoritma harus dapat dipahami dan tidak ambigu.
              </li>
              <li>
                <strong>Terbatas:</strong> Algoritma harus memiliki titik awal
                dan titik akhir yang jelas.
              </li>
              <li>
                <strong>Efisien:</strong> Menyelesaikan masalah dengan sumber
                daya seminimal mungkin.
              </li>
              <li>
                <strong>Dapat diimplementasikan:</strong> Langkah-langkah dapat
                dijalankan dengan alat bantu (manusia/komputer).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Representasi Algoritma
            </h2>
            <p>Ada beberapa cara untuk merepresentasikan algoritma:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Narasi:</strong> Penjabaran langkah-langkah algoritma
                secara verbal atau dalam bentuk paragraf.
                <br />
                <em>Contoh:</em> "Masukkan dua angka, jumlahkan, lalu tampilkan
                hasilnya."
              </li>
              <li>
                <strong>Diagram Alir (Flowchart):</strong> Menggunakan simbol
                visual seperti panah, persegi panjang, dan belah ketupat untuk
                menggambarkan alur proses.
                <br />
                <em>Contoh:</em> Simbol terminator (Start/End), proses (langkah
                kerja), dan keputusan (percabangan).
              </li>
              <li>
                <strong>Pseudocode:</strong> Gabungan antara bahasa manusia dan
                kode pemrograman yang ditulis secara struktur.
                <br />
                <em>Contoh:</em>
                <pre className="bg-gray-100 p-2 mt-1 rounded">
                  START Input A, B Sum = A + B Output Sum END
                </pre>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Contoh Kasus Sederhana
            </h2>
            <p>
              <strong>Masalah:</strong> Menentukan bilangan terbesar dari dua
              buah angka.
            </p>
            <p>
              <strong>Pseudocode:</strong>
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              START Input A, B IF A &gt; B THEN Output A ELSE Output B END IF
              END
            </pre>
            <p>
              <strong>Penjelasan:</strong> Algoritma membandingkan dua angka dan
              mencetak yang lebih besar.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubKonsepAP;
