import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubPseudocodeAP = () => {
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
          Sub Materi: Pseudocode dan Flowchart
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div>
            <h2 className="font-semibold text-base mb-2">
              Cara Menulis Pseudocode
            </h2>
            <p>
              Pseudocode adalah cara menuliskan algoritma menggunakan gaya
              bahasa yang menyerupai bahasa manusia tetapi terstruktur seperti
              kode program. Tujuan utamanya adalah untuk menyederhanakan logika
              program sebelum diimplementasikan.
            </p>
            <p>
              <strong>Contoh:</strong>
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              START Input nilai IF nilai &gt;= 75 THEN Output "Lulus" ELSE
              Output "Tidak Lulus" END IF END
            </pre>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Simbol-simbol Flowchart
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Terminator:</strong> Simbol oval untuk menunjukkan awal
                atau akhir proses.
              </li>
              <li>
                <strong>Proses:</strong> Simbol persegi panjang untuk
                menunjukkan aktivitas/proses.
              </li>
              <li>
                <strong>Input/Output:</strong> Jajaran genjang untuk menunjukkan
                data masuk atau keluar.
              </li>
              <li>
                <strong>Keputusan:</strong> Belah ketupat untuk percabangan
                logika (IF/ELSE).
              </li>
              <li>
                <strong>Panah:</strong> Menunjukkan arah alur proses.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">
              Konversi Pseudocode ke Flowchart dan Sebaliknya
            </h2>
            <p>
              Konversi antara pseudocode dan flowchart berguna agar algoritma
              mudah dipahami oleh manusia dan dapat divisualisasikan secara
              logis. Berikut contoh konversi:
            </p>

            <p>
              <strong>Pseudocode:</strong>
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              START Input A, B IF A &gt; B THEN Output A ELSE Output B END IF
              END
            </pre>

            <p>
              <strong>Flowchart:</strong> (Deskripsikan secara tekstual)
            </p>
            <ul className="list-disc pl-5">
              <li>Oval: START</li>
              <li>Jajaran genjang: Input A, B</li>
              <li>Belah ketupat: A &gt; B?</li>
              <li>Jika YA: persegi panjang Output A</li>
              <li>Jika TIDAK: persegi panjang Output B</li>
              <li>Oval: END</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base mb-2">Tips</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Gunakan pseudocode untuk merancang logika terlebih dahulu
                sebelum mulai menulis kode asli.
              </li>
              <li>
                Flowchart sangat membantu saat menjelaskan proses kepada orang
                lain secara visual.
              </li>
              <li>
                Pastikan setiap langkah di pseudocode punya padanan visual di
                flowchart.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubPseudocodeAP;
