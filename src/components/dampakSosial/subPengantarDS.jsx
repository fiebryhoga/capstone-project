import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubPengantarDS = () => {
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
          Pengantar Dampak Sosial Informatika
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <p>
            <strong>Pengantar</strong>
            <br />
            Hai-hai teman-teman! Wah luar biasa, kalian akhirnya sampai juga di
            BAB 8 ini yaa! Kali ini, kita akan mempelajari Materi BAB 8:{" "}
            <strong>Dampak Sosial Informatika</strong> melalui media
            pembelajaran Augmented Reality, loh! Hmm pastinya penasaran banget
            kan? Yuk langsung aja scan barcode di bawah ini.
          </p>

          <div className="w-full flex flex-row justify-center items-center">
            <div className="w-80 h-80">
              <img className="w-full h-full object-fit" src="/assets/images/content/dampakSosial/qr-code.png" alt="" />
            </div>
          </div>

          <p>
            <strong>Tools:</strong> Assemblr Studio AR
          </p>

          <p>
            Jika kamu kesulitan untuk menggunakan AR-nya, kamu bisa tonton video
            tutorial singkat berikut:
          </p>

          <div className="w-full">
            <iframe
              className="h-[500px] w-[850px] rounded-lg shadow"
              src="https://drive.google.com/file/d/1kjzxPBZZBKTL4Wki2aExT4XAmj3EJwyO/preview"
              title="Tutorial Penggunaan AR"
              allow="autoplay"
            ></iframe>
          </div>

          <p>
            Secara umum, materi ini akan membahas dampak sosial dari
            perkembangan informatika, baik dari segi positif maupun negatif.
            Dampak positif mencakup kemudahan komunikasi, akses informasi yang
            lebih luas, serta efisiensi dalam berbagai bidang seperti pendidikan
            dan bisnis. Sementara itu, dampak negatifnya meliputi ketergantungan
            teknologi, ancaman privasi data, serta perubahan pola interaksi
            sosial. Dengan memahami dampak-dampak ini, diharapkan masyarakat
            dapat lebih bijak dalam memanfaatkan teknologi informatika dalam
            kehidupan sehari-hari. 🚀
          </p>
        </div>
      )}
    </div>
  );
};

export default SubPengantarDS;
