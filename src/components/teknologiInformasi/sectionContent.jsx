import React from "react";
import SubPengertianTI from "./subPengertianTI";

const SectionContent = () => {
  return (
    <div className="min-h-64 w-full md:w-8/10 flex flex-col gap-4">
      <h1 className="text-blue-950 text-3xl font-semibold text-center">
        Teknologi Informasi dan Komunikasi
      </h1>
      <p className="text-sm text-blue-950 font-medium text-justify">
        Dalam materi Teknologi Informasi dan Komunikasi (TIK), kamu akan
        mempelajari bagaimana informasi dapat diciptakan, dikelola, disimpan,
        dan disebarluaskan menggunakan teknologi modern. Materi ini mencakup
        pemahaman dasar mengenai teknologi informasi seperti perangkat keras
        (hardware), perangkat lunak (software), jaringan komputer, serta sistem
        komunikasi digital. Selain itu, juga dibahas peran penting TIK dalam
        berbagai aspek kehidupan, seperti pendidikan, bisnis, pemerintahan, dan
        hiburan. Kamu juga akan memahami dampak sosial, etika, dan keamanan
        dalam penggunaan teknologi, serta keterampilan dasar dalam
        mengoperasikan perangkat dan aplikasi TIK untuk kebutuhan sehari-hari.
        Pembelajaran ini bertujuan agar kamu mampu memanfaatkan teknologi secara
        cerdas, produktif, dan bertanggung jawab di era digital saat ini.
      </p>

      <SubPengertianTI />
    </div>
  );
};

export default SectionContent;
