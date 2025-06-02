import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubStrukturIG = () => {
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
          Sub Materi: Struktur Materi Informatika di Kelas X
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Struktur Materi Informatika di Kelas X
            </h2>
            <p>
              Belajar informatika bukan hanya soal coding! Di kelas X, kamu akan
              menjelajahi berbagai bidang menarik dalam dunia informatika, yang
              disusun secara menyeluruh untuk membangun pemahaman dan
              keterampilan digital abad ke-21.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-blue-800">
                  💡 Berpikir Komputasional (BK/CT)
                </h3>
                <p>
                  Belajar memecahkan masalah dengan pola pikir logis,
                  sistematis, dan kreatif. Ini adalah fondasi dari cara berpikir
                  para programmer dan ilmuwan komputer.
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-blue-800">
                  💻 Teknologi Informasi dan Komunikasi (TIK/ICT)
                </h3>
                <p>
                  Mengenal perangkat digital, software, serta cara
                  memanfaatkannya untuk produktivitas dan komunikasi yang lebih
                  baik.
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-blue-800">
                  🧠 Sistem Komputer (SK/CE)
                </h3>
                <p>
                  Menyelami bagaimana perangkat keras dan lunak bekerja sama
                  dalam sebuah sistem komputer untuk mengolah data.
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-blue-800">
                  🌐 Jaringan Komputer dan Internet (JKI/NW)
                </h3>
                <p>
                  Belajar cara komputer saling terhubung, membentuk jaringan,
                  dan berkomunikasi melalui internet. Termasuk dasar keamanan
                  siber!
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-blue-800">
                  📊 Analisis Data (AD/DA)
                </h3>
                <p>
                  Mengumpulkan, mengolah, dan menyajikan data menjadi informasi
                  berguna. Cocok buat yang suka statistik atau visualisasi data.
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-blue-800">
                  🧩 Algoritma dan Pemrograman (AP)
                </h3>
                <p>
                  Ini dia dunia coding! Kamu akan belajar cara membuat algoritma
                  dan menuliskannya dalam bahasa pemrograman sederhana.
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-blue-800">
                  🌍 Dampak Sosial Informatika (DSI/SOC)
                </h3>
                <p>
                  Mengkaji bagaimana teknologi memengaruhi masyarakat, etika
                  digital, serta tanggung jawab dalam penggunaan teknologi.
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-blue-800">
                  🔧 Praktik Lintas Bidang (PLB/CP)
                </h3>
                <p>
                  Proyek kolaboratif yang menggabungkan berbagai bidang
                  informatika untuk menyelesaikan masalah nyata secara kreatif.
                </p>
              </div>
            </div>

            <p className="mt-6">
              Materi-materi ini tidak berdiri sendiri, tapi saling terhubung dan
              membentuk kerangka besar penguasaan informatika secara menyeluruh.
              Kamu akan belajar sambil praktik, eksplorasi, dan berkreasi. Seru
              kan? 💡
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubStrukturIG;
