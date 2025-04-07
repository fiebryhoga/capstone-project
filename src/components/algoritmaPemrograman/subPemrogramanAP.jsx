import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubPemrogramanAP = () => {
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
          Sub Materi: Dasar-dasar Pemrograman
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div>
            <h2 className="font-semibold text-base mb-2">Bahasa Pemrograman</h2>
            <p>
              Bahasa pemrograman adalah bahasa yang digunakan untuk memberikan
              instruksi kepada komputer agar menjalankan suatu tugas tertentu.
              Contoh bahasa pemrograman yang populer antara lain Python,
              JavaScript, Java, dan C++.
            </p>
            <p>
              Python adalah salah satu bahasa pemrograman yang mudah dipelajari
              karena sintaksnya sederhana dan menyerupai bahasa manusia.
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              # Contoh program Python sederhana print("Halo, dunia!")
            </pre>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Variabel dan Tipe Data
            </h2>
            <p>
              Variabel adalah tempat untuk menyimpan data. Setiap variabel
              memiliki nama dan nilai. Python tidak memerlukan deklarasi tipe
              secara eksplisit, karena mendeteksinya secara otomatis.
            </p>
            <p>Tipe data umum dalam Python meliputi:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>int</strong> - bilangan bulat (contoh: 10)
              </li>
              <li>
                <strong>float</strong> - bilangan desimal (contoh: 3.14)
              </li>
              <li>
                <strong>str</strong> - teks atau string (contoh: "Halo")
              </li>
              <li>
                <strong>bool</strong> - boolean (True atau False)
              </li>
            </ul>
            <pre className="bg-gray-100 p-2 rounded">
              # Contoh penggunaan variabel dan tipe data a = 5 # int b = 3.2 #
              float nama = "Ali" # str aktif = True # bool
            </pre>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">Input dan Output</h2>
            <p>
              Input digunakan untuk menerima data dari pengguna, sedangkan
              output digunakan untuk menampilkan informasi.
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              # Input dan Output dalam Python nama = input("Masukkan nama Anda:
              ") print("Halo,", nama)
            </pre>
            <p>
              Fungsi <code>input()</code> selalu mengembalikan tipe data string,
              jadi jika kita ingin mengolah angka, perlu dikonversi terlebih
              dahulu.
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              # Konversi input ke integer umur = int(input("Masukkan umur Anda:
              ")) print("Umur Anda adalah", umur)
            </pre>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">Kesimpulan</h2>
            <p>
              Memahami dasar-dasar pemrograman sangat penting sebelum melangkah
              ke tahap yang lebih kompleks. Penguasaan bahasa pemrograman,
              variabel, tipe data, serta input dan output adalah fondasi utama
              dalam membuat program yang fungsional.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubPemrogramanAP;
