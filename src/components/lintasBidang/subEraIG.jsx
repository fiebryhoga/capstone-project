import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubEraIG = () => {
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
          Sub Materi: Informatika di Era Digital (Industri 4.0 & Society 5.0)
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              2. Informatika di Era Digital
            </h2>
            <p>
              Di era digital seperti sekarang, informatika memegang peran
              penting dalam hampir semua aspek kehidupan. Revolusi Industri 4.0
              dan konsep Society 5.0 telah mengubah cara kita hidup, bekerja,
              dan belajar. Berikut beberapa poin penting yang harus dipahami:
            </p>

            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>
                <strong>Ciri-ciri Masyarakat Digital:</strong> Masyarakat kini
                hidup berdampingan dengan teknologi digital. Mereka terbiasa
                menggunakan perangkat pintar, internet, media sosial, dan sistem
                berbasis cloud dalam aktivitas sehari-hari.
              </li>
              <li>
                <strong>Dampak Transformasi Digital:</strong> Banyak jenis
                pekerjaan berubah atau bahkan hilang karena otomatisasi. Di sisi
                lain, muncul profesi baru seperti data analyst, AI specialist,
                dan digital marketer. Kehidupan menjadi lebih cepat, terhubung,
                dan berbasis data.
              </li>
              <li>
                <strong>Pentingnya Adaptasi Teknologi:</strong> Kemampuan
                beradaptasi dengan teknologi menjadi kunci sukses. Kompetensi
                digital seperti literasi digital, keamanan siber, dan
                pemrograman menjadi kebutuhan dasar di dunia kerja modern.
              </li>
              <li>
                <strong>Peran Informatika dalam Kehidupan:</strong> Informatika
                digunakan dalam berbagai bidang, misalnya:
                <ul className="list-disc ml-6 mt-1 space-y-1">
                  <li>
                    <em>Kesehatan:</em> sistem rekam medis elektronik, diagnosa
                    berbasis AI.
                  </li>
                  <li>
                    <em>Pendidikan:</em> pembelajaran daring, e-learning, dan
                    platform interaktif.
                  </li>
                  <li>
                    <em>Bisnis:</em> sistem kasir digital, e-commerce, analisis
                    pasar.
                  </li>
                  <li>
                    <em>Transportasi:</em> sistem navigasi cerdas, kendaraan
                    otonom.
                  </li>
                </ul>
              </li>
            </ul>

            <p className="mt-3">
              Maka dari itu, pembelajaran informatika sejak dini sangat penting
              agar generasi muda tidak hanya menjadi pengguna, tapi juga
              pencipta teknologi.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubEraIG;
