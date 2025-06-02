import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubPerbedaanIG = () => {
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
          Sub Materi: Perbedaan Informatika di SMA dan SMP
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Apa Bedanya Belajar Informatika di SMA dan SMP?
            </h2>
            <p>
              Saat kamu melanjutkan ke jenjang SMA, pembelajaran Informatika
              mengalami peningkatan yang signifikan—baik dari segi kedalaman
              materi maupun jenis keterampilan yang diasah. Yuk, kita lihat
              perbedaan utamanya! 👇
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-blue-800">
                  🧠 Lebih Konseptual & Teknis
                </h3>
                <p>
                  Di SMA, kamu tidak hanya belajar “apa” dan “bagaimana”, tapi
                  juga “mengapa” — mulai dari logika algoritma hingga struktur
                  data. Pendekatannya lebih mendalam dan menantang.
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-blue-800">
                  ⌨️ Bahasa Pemrograman Tekstual
                </h3>
                <p>
                  Kalau di SMP kamu mungkin memakai Scratch atau blok visual
                  lainnya, di SMA kamu akan mulai menulis kode secara langsung
                  menggunakan bahasa seperti Python. Seru, ‘kan?
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-blue-800">
                  📱 Teknologi Lebih Lanjut
                </h3>
                <p>
                  Mulai dari analisis data, desain antarmuka, hingga integrasi
                  teknologi cloud dan IoT — semuanya mulai kamu pelajari secara
                  bertahap.
                </p>
              </div>

              <div className="bg-white border border-blue-200 p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-blue-800">
                  🤝 Proyek Kolaboratif
                </h3>
                <p>
                  Tantangan SMA mengajarkan kamu bagaimana bekerja dalam tim,
                  membagi peran, menyelesaikan proyek, serta mempresentasikan
                  hasilnya secara profesional.
                </p>
              </div>
            </div>

            <p className="mt-6">
              Jadi, Informatika di SMA adalah ajang upgrade! Dari eksplorasi
              dasar di SMP, kamu sekarang memasuki dunia teknologi dengan
              tantangan yang lebih nyata dan persiapan menuju dunia profesional.
              🔧🚀
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubPerbedaanIG;
