import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubOperasiAP = () => {
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
          Sub Materi: Operasi Dasar dan Struktur Kontrol
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div>
            <h2 className="font-semibold text-base mb-2">
              Operasi Aritmatika dan Logika
            </h2>
            <p>
              Operasi aritmatika adalah operasi dasar matematika yang digunakan
              dalam pemrograman, seperti penjumlahan, pengurangan, perkalian,
              pembagian, dan modulo.
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`# Contoh operasi aritmatika
x = 10
y = 3
print(x + y)  # 13
print(x - y)  # 7
print(x * y)  # 30
print(x / y)  # 3.33
print(x % y)  # 1`}
            </pre>
            <p>
              Operasi logika digunakan untuk membandingkan dua nilai atau lebih
              dan menghasilkan nilai boolean (True atau False). Operator logika
              meliputi: <code>and</code>, <code>or</code>, dan <code>not</code>.
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`# Contoh operasi logika
a = True
b = False
print(a and b)  # False
print(a or b)   # True
print(not a)    # False`}
            </pre>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Struktur Kontrol: If-Else
            </h2>
            <p>
              Struktur kontrol <strong>if-else</strong> digunakan untuk membuat
              keputusan dalam program. Jika kondisi terpenuhi, maka blok kode
              tertentu akan dijalankan.
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`# Contoh if-else
nilai = 85
if nilai >= 75:
    print("Lulus")
else:
    print("Tidak Lulus")`}
            </pre>
            <p>
              Kita juga bisa menggunakan <code>if-elif-else</code> untuk kondisi
              yang lebih kompleks:
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`# Contoh if-elif-else
nilai = 85
if nilai >= 90:
    print("A")
elif nilai >= 80:
    print("B")
elif nilai >= 70:
    print("C")
else:
    print("D")`}
            </pre>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Struktur Kontrol: Loop (Perulangan)
            </h2>
            <p>
              Perulangan digunakan untuk menjalankan blok kode secara berulang.
              Dua jenis perulangan utama di Python adalah <strong>for</strong>{" "}
              dan <strong>while</strong>.
            </p>

            <p>
              <strong>Perulangan for:</strong>
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`# Contoh perulangan for
for i in range(5):
    print("Perulangan ke", i)`}
            </pre>

            <p>
              <strong>Perulangan while:</strong>
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`# Contoh perulangan while
i = 0
while i < 5:
    print("Nilai i:", i)
    i += 1`}
            </pre>

            <p>
              Pastikan kondisi dalam <code>while</code> akan menjadi salah di
              suatu titik untuk menghindari <strong>infinite loop</strong>{" "}
              (perulangan tanpa akhir).
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">Kesimpulan</h2>
            <p>
              Penguasaan operasi dasar dan struktur kontrol merupakan pondasi
              penting dalam pemrograman. Tanpa kemampuan ini, sulit untuk
              membangun program yang dinamis dan cerdas. Latihan rutin dengan
              berbagai contoh akan sangat membantu meningkatkan pemahaman
              konsep-konsep ini.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubOperasiAP;
