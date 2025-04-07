import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubGenerikIG = () => {
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
          Sub Materi: Kompetensi Generik dalam Informatika
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Kompetensi Generik dalam Informatika
            </h2>
            <p>
              Selain keterampilan teknis, siswa informatika juga perlu memiliki{" "}
              <strong>kompetensi generik</strong>, yaitu kemampuan dasar yang
              mendukung keberhasilan dalam berbagai aktivitas, terutama dalam
              kerja tim dan proyek kolaboratif. Kompetensi ini sangat penting
              dalam dunia kerja modern yang menuntut kemampuan berorganisasi,
              komunikasi, dan kolaborasi lintas disiplin.
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-3">
              <li>
                <strong>Kolaborasi Tim:</strong> Dalam proyek informatika, kerja
                kelompok sangat penting. Anggota tim harus bisa bekerja sama,
                saling menghargai pendapat, dan menyelesaikan konflik dengan
                bijak.
              </li>
              <li>
                <strong>Perencanaan dan Pembagian Tugas:</strong> Siswa belajar
                bagaimana merancang alur kerja proyek, menetapkan target waktu,
                serta membagi peran agar setiap anggota bisa berkontribusi
                secara maksimal.
              </li>
              <li>
                <strong>Komunikasi Hasil Kerja:</strong> Hasil kerja tidak hanya
                harus selesai, tapi juga harus bisa dikomunikasikan dengan baik,
                melalui presentasi, laporan, infografis, atau video. Ini
                membantu meningkatkan pemahaman audiens terhadap solusi yang
                dibuat.
              </li>
              <li>
                <strong>Keterampilan Komunikasi Efektif:</strong> Meliputi
                kemampuan mendengarkan aktif, menyampaikan ide secara jelas dan
                logis, serta menyusun argumen yang meyakinkan. Komunikasi
                menjadi jembatan antara ide dan eksekusi.
              </li>
            </ul>

            <p className="mt-4">
              Dengan mengasah kompetensi generik ini, siswa tidak hanya menjadi
              ahli dalam teknologi, tetapi juga siap berperan aktif dalam tim
              dan mampu menyampaikan ide-ide solutif di berbagai konteks
              profesional.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubGenerikIG;
