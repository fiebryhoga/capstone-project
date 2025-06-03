import React from 'react'

const Aside = () => {
  return (
    <div className="hidden min-h-64 w-full md:w-2/10 md:flex flex-col gap-4">
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          Dampak Sosial Informatika
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Pengantar Dampak Sosial Informatika
          </a>

          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Infografis Dampak Sosial Informatika
          </a>
        </div>
      </div>
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          References
        </h1>
        <div className="flex flex-col text-xs lg:text-sm font-medium w-full">
          <a
            href="https://www.sciencedirect.com/science/article/pii/S0747563211002243"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Pengaruh Media Sosial terhadap Interaksi Sosial Remaja
            (ScienceDirect)
          </a>
          <a
            href="https://unesdoc.unesco.org/ark:/48223/pf0000367827"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            UNESCO – Understanding the Impact of Digital Technology
          </a>
          <a
            href="https://digilib.esaunggul.ac.id/public/UEU-Undergraduate-34042-CHAPTER1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Skripsi – Dampak Sosial Penggunaan Teknologi Informasi (UEU)
          </a>
          <a
            href="https://www.researchgate.net/publication/336640133_Dampak_Teknologi_Informasi_dan_Komunikasi_terhadap_Kehidupan_Sosial_Masyarakat"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            ResearchGate – Dampak TIK terhadap Kehidupan Sosial
          </a>
          <a
            href="https://internethealthreport.org/2019/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Mozilla Internet Health Report 2019
          </a>
          <a
            href="https://www.kemendikbud.go.id/main/blog/2020/08/dampak-positif-dan-negatif-teknologi-informasi-bagi-pelajar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Kemendikbud – Dampak Positif dan Negatif TIK bagi Pelajar
          </a>
        </div> 
      </div>
    </div>
  );
}

export default Aside;
