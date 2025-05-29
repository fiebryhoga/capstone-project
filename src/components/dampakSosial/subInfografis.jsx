import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubInfografis = () => {
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
          Infografis Dampak Sosial Informatika
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4 justify-center items-center">
          <p>
            Wah, gimana explore AR tadiii? Seru banget kan pastinya? 😍 Nah
            sekarang, untuk memperdalam pengetahuan kamu terkait materi ini,
            <strong> cusss langsung aja cek Infografis Interaktif</strong>{" "}
            berikut ini! Elemen-elemen icon yang tertera bisa diklik, loh.
            Infografis ini sudah mencakup keseluruhan materi lengkap dengan
            latihan soal. So, tunggu apa lagi? Yuk kita mulai belajar! 📚
          </p>

          <iframe
            src="https://drive.google.com/file/d/1pPWT4-lmASHMQ6oMk5liOoAfWcy-niys/preview"
            className="w-2/3 h-[955px] rounded-lg shadow"
            allow="autoplay"
            title="Infografis Dampak Sosial"
          ></iframe>

          <p>
            Finally, ga terasa materi <strong>BAB 8</strong> sudah selesai, nih.
            Jangan lupa untuk mengerjakan <strong>Latihan Soal</strong> yang
            tersedia yaa! Hmmm, pasti kamu sudah gak sabar untuk lanjut ke topik
            berikutnya, kan? Oleh karena itu, mari kita langsung mengarungi
            materi terakhir kita, yakni…{" "}
            <strong>BAB 9 Praktik Lintas Bidang Informatika! 🤩</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default SubInfografis;
