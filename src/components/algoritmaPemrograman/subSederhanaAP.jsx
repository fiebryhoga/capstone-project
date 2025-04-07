import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubSederhanaAP = () => {
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
          Sub Materi: Menyusun Program Sederhana
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div>
            <h2 className="font-semibold text-base mb-2">
              Menerjemahkan Algoritma ke dalam Kode Program
            </h2>
            <p>
              Langkah pertama dalam menyusun program sederhana adalah
              menerjemahkan algoritma—langkah-langkah logis untuk menyelesaikan
              masalah—ke dalam sintaks bahasa pemrograman seperti Python.
              Misalnya, jika kita ingin membuat program untuk menentukan apakah
              sebuah bilangan genap atau ganjil, kita bisa menyusun algoritmanya
              terlebih dahulu:
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`1. Input bilangan dari pengguna
2. Jika bilangan habis dibagi 2, maka genap
3. Jika tidak, maka ganjil
4. Tampilkan hasilnya`}
            </pre>
            <p>Dan berikut adalah kode programnya dalam Python:</p>
            <pre className="bg-gray-100 p-2 rounded">
              {`angka = int(input("Masukkan sebuah angka: "))
if angka % 2 == 0:
    print("Angka tersebut adalah Genap")
else:
    print("Angka tersebut adalah Ganjil")`}
            </pre>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Menjalankan dan Menguji Program
            </h2>
            <p>
              Setelah program ditulis, kita bisa menjalankannya untuk melihat
              apakah hasilnya sesuai harapan. Proses pengujian dilakukan dengan
              mencoba beberapa input yang berbeda untuk memastikan logika
              program bekerja dengan benar.
            </p>
            <p>Contoh pengujian:</p>
            <ul className="list-disc list-inside">
              <li>Input: 4 → Output: Angka tersebut adalah Genap</li>
              <li>Input: 7 → Output: Angka tersebut adalah Ganjil</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">Debugging Dasar</h2>
            <p>
              Debugging adalah proses menemukan dan memperbaiki kesalahan (bug)
              dalam kode. Jika program tidak berjalan sesuai harapan, kita bisa
              menggunakan teknik debugging seperti:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Menambahkan <code>print()</code> untuk melacak nilai variabel
              </li>
              <li>Membaca pesan error dari interpreter</li>
              <li>Memeriksa ulang logika percabangan atau perulangan</li>
            </ul>
            <p>Contoh debugging:</p>
            <pre className="bg-gray-100 p-2 rounded">
              {`angka = input("Masukkan angka: ")
if angka % 2 == 0:
    print("Genap")`}
            </pre>
            <p>
              Program di atas error karena <code>angka</code> adalah string.
              Perbaikannya adalah menambahkan konversi ke integer:
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`angka = int(input("Masukkan angka: "))
if angka % 2 == 0:
    print("Genap")`}
            </pre>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Latihan: Program Sederhana
            </h2>
            <p>Coba buat program Python berikut:</p>
            <ul className="list-disc list-inside">
              <li>Minta pengguna memasukkan dua angka</li>
              <li>
                Hitung dan tampilkan hasil penjumlahan, pengurangan, perkalian,
                dan pembagian
              </li>
            </ul>
            <pre className="bg-gray-100 p-2 rounded">
              {`a = int(input("Masukkan angka pertama: "))
b = int(input("Masukkan angka kedua: "))

print("Penjumlahan:", a + b)
print("Pengurangan:", a - b)
print("Perkalian:", a * b)
print("Pembagian:", a / b)`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubSederhanaAP;
