import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubPengertianSK = () => {
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
          Sub Materi: Pengertian Sistem Komputer
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center w-full">
            <div className="w-[800px] h-[200px]">
              <img
                src="/assets/images/content/sistemKomputer/subpengertiansk.png"
                alt="Komponen Sistem Komputer"
                className="w-full object-cover rounded-md shadow-md"
              />
            </div>

            <div className="w-full flex flex-col gap-4">
              <p className="text-justify">
                <span className="font-semibold">Sistem Komputer</span> adalah
                sekumpulan elemen yang saling bekerja sama untuk menjalankan
                proses pengolahan data. Elemen-elemen ini terdiri dari <span className="font-semibold">
                  perangkat keras (hardware)
                </span>
                , <span className="font-semibold">
                  perangkat lunak (software)
                </span>
                , dan <span className="font-semibold">pengguna (brainware)</span>.
                Ketiga komponen tersebut saling bergantung satu sama lain dalam
                menjalankan fungsi-fungsi komputasi.
              </p>
              <ul className="list-disc list-inside text-sm w-full">
                <li>
                  <span className="font-semibold">Hardware</span>: Komponen
                  fisik seperti CPU, RAM, keyboard, mouse, dan lainnya.
                </li>
                <li>
                  <span className="font-semibold">Software</span>: Program atau
                  aplikasi yang digunakan untuk mengoperasikan komputer.
                </li>
                <li>
                  <span className="font-semibold">Brainware</span>: Orang yang
                  mengoperasikan dan berinteraksi dengan sistem komputer,
                  seperti pengguna atau teknisi.
                </li>
              </ul>
            </div>
          </div>

          <p>
            Ketiga elemen tersebut saling melengkapi. Tanpa salah satu di
            antaranya, sistem komputer tidak dapat berjalan secara optimal.
            Misalnya, hardware tanpa software hanyalah benda mati, dan software
            tidak dapat dijalankan tanpa hardware dan brainware.
          </p>

          <div className="p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-800 rounded shadow-sm">
            💡 <span className="font-semibold">Contoh Sederhana:</span> Saat
            kamu mengetik tugas di Microsoft Word, kamu sedang menggunakan
            software (Word) di atas hardware (komputer/laptop), dan kamu sebagai
            brainware yang mengoperasikannya.
          </div>
        </div>
      )}
    </div>
  );
};

export default SubPengertianSK;
