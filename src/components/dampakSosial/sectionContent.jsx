import React from "react";

import SubPengantarDS from "./subPengantarDS";
import SubInfografis from "./subInfografis";




const SectionContent = () => {


  return (
    <div className="min-h-64 w-8/10 flex flex-col gap-4">
      <h1 className="text-blue-950 text-3xl font-semibold text-center">
        Dampak Sosial
      </h1>
      <p className="text-sm text-blue-950 font-medium text-justify">
        Dampak Sosial Informatika merujuk pada pengaruh yang ditimbulkan oleh
        perkembangan teknologi informasi dan komunikasi terhadap kehidupan
        masyarakat. Informatika telah mengubah cara manusia berinteraksi,
        bekerja, belajar, dan mengakses informasi. Di satu sisi, teknologi ini
        memberikan banyak manfaat seperti kemudahan komunikasi global, akses
        cepat terhadap informasi, efisiensi dalam pekerjaan, serta lahirnya
        berbagai peluang ekonomi digital. Namun di sisi lain, penggunaan
        informatika juga membawa dampak negatif seperti ketergantungan pada
        teknologi, penyebaran hoaks, pelanggaran privasi, dan kesenjangan
        digital antar kelompok masyarakat. Oleh karena itu, pemahaman terhadap
        dampak sosial informatika sangat penting agar teknologi dapat
        dimanfaatkan secara bijak dan bertanggung jawab dalam kehidupan
        sehari-hari.
      </p>
      <SubPengantarDS />
      <SubInfografis />
    </div>
  );
};

export default SectionContent;
