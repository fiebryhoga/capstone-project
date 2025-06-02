import React from "react";
import SubPengantarIG from "./subPengantarIG";
import SubLatihanIG from "./subLatihanIG";
import SubEraIG from "./subEraIG";
import SubGenerikIG from "./subGenerikIG";
import SubStrukturIG from "./subStrukturIG";
import SubPerbedaanIG from "./subPerbedaanIG";

const SectionContent = () => {
  return (
    <div className="min-h-64 w-full md:w-8/10 flex flex-col gap-4">
      <h1 className="text-blue-950 text-3xl font-semibold text-center">
        Informatika dan Keterampilan Generik
      </h1>
      <p className="text-sm text-blue-950 font-medium text-justify">
        Bab ini membahas dasar-dasar pemahaman tentang mata pelajaran
        Informatika di jenjang SMA serta keterampilan generik yang relevan
        dengan perkembangan dunia digital. Informatika bukan sekadar
        pembelajaran teknologi, tetapi juga membentuk cara berpikir kritis,
        logis, dan kreatif melalui pendekatan komputasional.
        <br />
        <br />
        Dimulai dengan pengantar mengenai peran Informatika dalam kehidupan
        sehari-hari dan pentingnya mata pelajaran ini di SMA, kemudian
        dilanjutkan dengan penjelasan tentang tantangan dan peluang di era
        digital. Bab ini juga menguraikan keterampilan generik seperti berpikir
        komputasional, kolaborasi, komunikasi digital, dan literasi data yang
        penting untuk masa depan.
        <br />
        <br />
        Selain itu, struktur materi Informatika di SMA dijelaskan untuk
        memberikan gambaran menyeluruh tentang cakupan kurikulum yang akan
        dipelajari. Akhirnya, terdapat perbandingan antara pembelajaran
        Informatika di SMA dan jenjang sebelumnya, agar siswa dapat menyesuaikan
        diri dengan kedalaman dan keluasan materi yang lebih kompleks.
      </p>

      <SubPengantarIG />
      <SubLatihanIG />
      {/* <SubPengantarIG/>
      <SubEraIG/>
      <SubGenerikIG/>
      <SubStrukturIG/>
      <SubPerbedaanIG/> */}
    </div>
  );
};

export default SectionContent;
