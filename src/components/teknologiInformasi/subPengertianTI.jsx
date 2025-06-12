import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubPengertianTI = () => {
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
          Infografis Pengertian Teknologi Informasi dan Komunikasi
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4 justify-center items-center">
          <p>
            Hai teman-teman! 👋 Sebelum kita menyelam lebih dalam ke materi TIK,
            yuk kita perkuat pemahaman kita tentang{" "}
            <strong>pengertian Teknologi Informasi dan Komunikasi</strong>{" "}
            terlebih dahulu. Di bawah ini, tersedia{" "}
            <strong>Infografis Interaktif</strong> yang akan membantu kamu
            memahami konsep dasar TIK secara visual dan menyenangkan! 🎯 Jangan
            lupa klik ikon-ikon yang ada ya, karena semuanya interaktif dan bisa
            memberi kamu informasi penting. Yuk kita mulai! 🚀
          </p>

          {/* <embed
            src="/assets/documents/BAB9.pdf"
            type="application/pdf"
            className="w-2/3 h-[1680px] rounded-lg shadow"
            title="Infografis Pengertian TIK"
          /> */}

          <div className="w-full">
            <iframe
              className="h-[500px] w-[850px] rounded-lg shadow"
              src="https://drive.google.com/file/d/1fyMY6BNePCGZVRNCEwPn9f_S6fRaA-ga/preview"
              title="Tutorial Penggunaan AR"
              allow="autoplay"
            ></iframe>
          </div>

          {/* https://drive.google.com/file/d/1fyMY6BNePCGZVRNCEwPn9f_S6fRaA-ga/view?usp=sharing */}

          <p>
            Nah, sekarang kamu sudah memahami dasar dari Teknologi Informasi dan
            Komunikasi, kan? 💡 Dengan memahami pengertian ini, kamu akan lebih
            siap untuk mengikuti materi-materi berikutnya yang lebih seru dan
            aplikatif! Jangan lupa, terus semangat belajar dan eksplorasi ya!
            💻📱
          </p>
        </div>
      )}
    </div>
  );
};

export default SubPengertianTI;
