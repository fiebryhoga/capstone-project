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
          {/* Pengertian Sistem Komputer */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              1. Pengertian Sistem Komputer
            </h2>
            <p>
              Sistem komputer adalah suatu kesatuan yang terdiri atas{" "}
              <strong>perangkat keras (hardware)</strong>,{" "}
              <strong>perangkat lunak (software)</strong>, dan{" "}
              <strong>pengguna (brainware)</strong> yang bekerja secara
              bersama-sama untuk melakukan pemrosesan data dan menghasilkan
              informasi.
            </p>
            <p className="mt-2">
              Ketiga komponen ini saling terintegrasi dan tidak dapat berjalan
              sendiri-sendiri. Hardware sebagai alat fisik, software sebagai
              instruksi atau program, dan brainware sebagai pengendali yang
              mengoperasikan serta memanfaatkan hasil dari sistem tersebut.
            </p>
            <p className="mt-2">
              Dengan sistem komputer, kita bisa melakukan berbagai pekerjaan
              seperti mengetik, menghitung, mendesain, hingga bermain game
              secara efisien dan cepat.
            </p>
          </div>

          {/* Video Penjelasan */}
          <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">
              Penjelasan Video: Apa itu Sistem Komputer?
            </h3>
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/D05xaBfL9sw"
                title="Pengertian Sistem Komputer"
                width="100%"
                height="100%"
                allowFullScreen
                className="w-full h-full border border-blue-200 rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubPengertianSK;
