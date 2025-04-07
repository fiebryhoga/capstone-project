import React from "react";
import SubKonsepAP from "./subKonsepAP";
import SubStrukturAP from "./subStrukturAP";
import SubPseudocodeAP from "./subPseudocodeAP";
import SubPemrogramanAP from "./subPemrogramanAP";
import SubOperasiAP from "./subOperasiAP";
import SubSederhanaAP from "./subSederhanaAP";
import SubLatihanAP from "./subLatihanAP";

const SectionContent = () => {
  return (
    <div className="min-h-64 w-8/10 flex flex-col gap-4">
      <h1 className="text-blue-950 text-3xl font-semibold text-center">
        Konsep Algoritma
      </h1>
      <p className="text-sm text-blue-950 font-medium text-justify">
        Algoritma adalah langkah-langkah logis dan sistematis yang disusun
        secara berurutan untuk menyelesaikan suatu permasalahan. Dalam dunia
        informatika, algoritma menjadi dasar utama dalam menyusun program
        komputer karena setiap solusi dalam pemrograman harus dituangkan ke
        dalam bentuk algoritma terlebih dahulu.
      </p>
      <p className="text-sm text-blue-950 font-medium text-justify">
        Karakteristik algoritma yang baik meliputi: memiliki awal dan akhir yang
        jelas, instruksi yang tepat dan tidak ambigu, serta dapat dijalankan
        dalam waktu yang terbatas. Selain itu, algoritma harus efektif, artinya
        setiap langkahnya dapat dikerjakan dan memberikan hasil yang sesuai.
      </p>
      <p className="text-sm text-blue-950 font-medium text-justify">
        Dalam pembelajaran dasar pemrograman, memahami konsep algoritma sangat
        penting karena hal ini akan membantu siswa dalam berpikir logis,
        terstruktur, dan sistematis. Dengan kemampuan menyusun algoritma, siswa
        dapat membuat solusi pemrograman yang efisien, mudah dibaca, dan
        dipelihara.
      </p>
      <SubKonsepAP/>
      <SubStrukturAP/>
      <SubPseudocodeAP/>
      <SubPemrogramanAP/>
      <SubOperasiAP/>
      <SubSederhanaAP/>
      <SubLatihanAP/>
    </div>
  );
};

export default SectionContent;