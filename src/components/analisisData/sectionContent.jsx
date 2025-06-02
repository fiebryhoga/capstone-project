import React from "react";
import SubPengertianAD from "./subPengertianAD";
import SubTahapanAD from "./subTahapanAD";
import SubJenisAD from "./subJenisAD";
import SubTeknikAD from "./subTeknikAD";
import SubPenerapanAD from "./subPenerapanAD";
import SubRumusAD from "./subRumusAD";
import SubLatihanAD from "./subLatihanAD";



const SectionContent = () => {


  return (
    <div className="min-h-64 w-full md:w-8/10 flex flex-col gap-4">
      <h1 className="text-blue-950 text-3xl font-semibold text-center">
        Analisis Data
      </h1>
      <p className="text-sm text-blue-950 font-medium text-justify">
        Analisis Data merupakan proses sistematis dalam mengolah, menafsirkan,
        dan menarik kesimpulan dari sekumpulan data agar dapat memberikan
        informasi yang berguna untuk pengambilan keputusan. Dalam proses ini,
        data yang telah dikumpulkan terlebih dahulu dibersihkan dan diorganisir,
        kemudian dianalisis menggunakan berbagai metode statistik, matematis,
        atau logika tertentu untuk menemukan pola, hubungan, atau tren. Analisis
        data dapat bersifat kuantitatif (menggunakan angka dan perhitungan
        statistik) maupun kualitatif (menggunakan narasi atau interpretasi
        makna). Tujuan utamanya adalah untuk mengubah data mentah menjadi
        informasi yang bermakna dan dapat dijadikan dasar dalam pengambilan
        keputusan yang tepat dalam berbagai bidang, seperti bisnis, penelitian
        ilmiah, pendidikan, dan teknologi informasi.
      </p>

      <SubPengertianAD />
      {/* <SubTahapanAD />
      <SubJenisAD />
      <SubTeknikAD />
      <SubPenerapanAD />
      <SubRumusAD /> */}
      <SubLatihanAD />
    </div>
  );
};

export default SectionContent;
