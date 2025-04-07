import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubLatihanAP = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState(null);
  const [status, setStatus] = useState("");

  const runCode = () => {
    try {
      const angka = [10, 25, 40, 55, 70, 85];
      const func = new Function("angka", userCode);
      const result = func(angka);

      const expected = [
        "Genap",
        "Ganjil",
        "Genap",
        "Ganjil",
        "Genap",
        "Ganjil",
      ];
      const isCorrect = JSON.stringify(result) === JSON.stringify(expected);

      setOutput(result);
      setStatus(
        isCorrect ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi."
      );
    } catch (error) {
      setOutput(error.message);
      setStatus("❌ Terjadi kesalahan saat menjalankan kode.");
    }
  };

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
            <h2 className="font-semibold text-base mb-2">Latihan Interaktif</h2>
            <p>
              <strong>Studi Kasus:</strong>
            </p>
            <p>
              Seorang guru memberikan daftar angka kepada siswa. Tugas siswa
              adalah menentukan apakah setiap angka termasuk "Ganjil" atau
              "Genap". Buatlah ekspresi <strong>JavaScript</strong> yang
              menerima list angka, lalu mengembalikan list string hasil
              klasifikasi "Ganjil" atau "Genap".
            </p>
            <pre className="bg-gray-100 p-2 rounded">
              {`Contoh input:
angka = [10, 25, 40, 55, 70, 85]`}
            </pre>
            <pre className="bg-gray-100 p-2 rounded">
              {`Contoh output:
["Genap", "Ganjil", "Genap", "Ganjil", "Genap", "Ganjil"]`}
            </pre>
            <p>
              Tuliskan ekspresi JavaScript (gunakan variabel <code>angka</code>
              ):
            </p>
            <textarea
              className="w-full border border-blue-300 rounded p-2 text-black"
              rows={6}
              placeholder="Tulis ekspresi JavaScript di sini (gunakan variabel angka)..."
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
            />
            <button
              className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-1 px-4 rounded mt-2 w-fit"
              onClick={runCode}
            >
              Cek Jawaban
            </button>
            {status && <p className="mt-2 font-medium">{status}</p>}
            {output !== null && (
              <div className="mt-2">
                <p>
                  <strong>Output:</strong>
                </p>
                <pre className="bg-gray-100 p-2 rounded text-black whitespace-pre-wrap">
                  {JSON.stringify(output, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubLatihanAP;
