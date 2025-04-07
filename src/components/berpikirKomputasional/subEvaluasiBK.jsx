import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubEvaluasiBK = () => {
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
          Sub Materi: Evaluasi dan Debugging dalam Berpikir Komputasional
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          {/* Pengantar */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Apa Itu Evaluasi dan Debugging? 🛠️
            </h2>
            <p>
              Dalam dunia komputasi, tak cukup hanya menyusun algoritma. Kita
              juga perlu
              <strong> mengevaluasi </strong> hasil kerja dan
              <strong> memperbaiki kesalahan (debugging)</strong> agar solusi
              kita benar-benar berjalan seperti yang diharapkan.
            </p>
          </div>

          {/* Evaluasi */}
          <div className="p-4 bg-white border border-blue-100 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">Evaluasi 💭</h3>
            <p>
              Evaluasi adalah proses menilai apakah solusi (atau program) yang
              kita buat sudah sesuai dengan tujuan dan efisien. Contoh
              pertanyaan saat evaluasi:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Apakah hasilnya sesuai dengan harapan?</li>
              <li>Apakah ada cara yang lebih sederhana atau cepat?</li>
              <li>
                Apakah solusi ini dapat digunakan untuk berbagai kondisi input?
              </li>
            </ul>
          </div>

          {/* Debugging */}
          <div className="p-4 bg-blue-100 border border-blue-200 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">Debugging 🐞</h3>
            <p>
              Debugging adalah proses menemukan dan memperbaiki kesalahan (bug)
              dalam program. Kesalahan bisa berupa:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                <strong>Syntax error:</strong> Salah ketik atau aturan penulisan
                yang tidak sesuai.
              </li>
              <li>
                <strong>Logic error:</strong> Alur logika tidak sesuai walau
                program bisa dijalankan.
              </li>
              <li>
                <strong>Runtime error:</strong> Program berhenti saat dijalankan
                karena kondisi tidak terduga.
              </li>
            </ul>
            <p className="mt-2">
              Seorang programmer hebat bukan yang tidak pernah salah, tapi yang
              tahu cara menemukan dan memperbaiki kesalahan.
            </p>
          </div>

          {/* Studi Kasus */}
          <div className="p-4 bg-white border border-blue-100 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              Contoh Kasus: Penjumlahan Sederhana
            </h3>
            <p>
              Kode berikut dimaksudkan untuk menjumlahkan dua angka, tapi
              hasilnya salah. Bisa temukan bug-nya?
            </p>
            <pre className="bg-blue-50 p-3 rounded-lg mt-2 overflow-auto">
              {`let a = 5;
let b = "7";
let result = a + b;
console.log("Hasil:", result);`}
            </pre>
            <p className="mt-2">
              Output: <code>Hasil: 57</code> 🤔 Kenapa bukan 12?
            </p>
            <p className="mt-2 italic">
              👉 Karena <code>b</code> bertipe string, maka hasilnya menjadi
              penggabungan teks. Ini disebut <strong>logic bug</strong>.
            </p>
          </div>

          {/* Tips */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              Tips Debugging yang Efektif 🧠
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Gunakan <code>console.log</code> atau debugger untuk menelusuri
                nilai variabel.
              </li>
              <li>Pahami alur logika program, jangan hanya menebak.</li>
              <li>Uji kode dengan berbagai input.</li>
              <li>Diskusi dengan teman bisa membuka perspektif baru!</li>
            </ul>
          </div>

          {/* Mini Challenge */}
          <div className="p-4 bg-white border border-blue-100 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              Mini Challenge 🔧
            </h3>
            <p>Coba temukan kesalahan pada kode ini:</p>
            <pre className="bg-blue-50 p-3 rounded-lg mt-2 overflow-auto">
              {`let nilai = 80;
if (nilai = 80) {
  console.log("Lulus");
}`}
            </pre>
            <p className="mt-2 italic">Hint: Perhatikan tanda operatornya 😉</p>
          </div>

          {/* Penutup */}
          <div className="p-4 bg-blue-100 border border-blue-200 rounded-xl shadow">
            <p>
              Evaluasi dan debugging bukan hanya bagian dari proses pemrograman,
              tapi juga bagian penting dari cara berpikir komputasional yang
              kritis dan reflektif. Makin sering latihan, makin tajam intuisimu
              untuk menemukan dan memperbaiki kesalahan. 🔍
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubEvaluasiBK;
