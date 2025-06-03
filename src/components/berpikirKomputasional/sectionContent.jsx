import React from "react";
import SubPengertianBK from "./subPengertianBK";
import SubDecompositionBK from "./subDecompositionBK";
import SubRecognitionBK from "./subRecognitionBK";
import SubAbstractionBK from "./subAbstractionBK";
import SubAlgorithmBK from "./subAlgorithmBK";
import SubEvaluasiBK from "./subEvaluasiBK";
import SubPenerapanBK from "./subPenerapanBK";
import SubLatihanBK from "./subLatihanBK";

const SectionContent = () => {
  return (
    <div className="min-h-64 w-full md:w-8/10 flex flex-col gap-4">
      <h1 className="text-blue-950 text-3xl font-semibold text-center">
        Berpikir Komputasional
      </h1>
      <p className="text-sm text-blue-950 font-medium text-justify">
        Berpikir Komputasional merupakan pendekatan pemecahan masalah yang
        melibatkan berbagai proses berpikir logis dan sistematis, seperti
        memecah masalah menjadi bagian-bagian kecil (decomposition), mengenali
        pola (pattern recognition), menyusun representasi sederhana dari masalah
        yang kompleks (abstraction), serta merancang langkah-langkah solusi
        (algorithm design). Konsep ini tidak terbatas hanya pada dunia
        pemrograman atau teknologi informasi, namun juga dapat diterapkan dalam
        kehidupan sehari-hari untuk menyelesaikan berbagai permasalahan secara
        efisien dan terstruktur. Dengan berpikir komputasional, seseorang dapat
        melatih kemampuan berpikir kritis, kreatif, dan analitis dalam menyikapi
        tantangan dan membuat keputusan yang tepat berdasarkan data dan logika.
      </p>
      <SubPengertianBK />
      {/* <SubDecompositionBK />
      <SubRecognitionBK />
      <SubAbstractionBK />
      <SubAlgorithmBK />
      <SubEvaluasiBK />
      <SubPenerapanBK /> */}
      <SubLatihanBK />
    </div>
  );
};

export default SectionContent;
