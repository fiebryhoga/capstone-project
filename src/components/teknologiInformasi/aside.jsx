import React from "react";

const Aside = () => {
  return (
    <div className="hidden min-h-64 w-full md:w-2/10 md:flex flex-col gap-4">
      {/* Bagian Pengertian Teknologi Informasi */}
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          Teknologi Informasi dan Komunikasi
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a
            href="https://id.wikipedia.org/wiki/Teknologi_informasi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Pengertian Teknologi Informasi
          </a>
        </div>
      </div>

      {/* Bagian Referensi Tambahan */}
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          Referensi
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a
            href="https://www.kompas.com/skola/read/2021/01/22/153835069/teknologi-informasi-pengertian-tujuan-fungsi-dan-contohnya"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Kompas.com - Pengertian TIK
          </a>
          <a
            href="https://aws.amazon.com/id/what-is/information-technology/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Amazon Web Services - Apa itu TI?
          </a>
          <a
            href="https://www.dicoding.com/blog/apa-itu-it-information-technology/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Dicoding - Mengenal IT
          </a>
          <a
            href="https://www.techtarget.com/searchdatacenter/definition/IT"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            TechTarget - Definisi IT (EN)
          </a>
          <a
            href="https://www.gartner.com/en/information-technology"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Gartner - Riset IT (EN)
          </a>
          <a
            href="https://kominfo.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Kementerian Kominfo RI
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aside;
