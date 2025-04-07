import React from "react";
import SubPengertianSK from "./subPengertianSK";
import SubKomponenSK from "./subKomponenSK";
import SubFungsiSK from "./subFungsiSK";
import SubKlasifikasiSK from "./subKlasifikasiSK";
import SubInteraksiSK from "./subInteraksiSK";
import SubImplementasiSK from "./subImplementasiSK";
import SubLatihanSK from "./subLatihanSK";

const SectionContent = () => {


  return (
    <div className="min-h-64 w-8/10 flex flex-col gap-4">
      <h1 className="text-blue-950 text-3xl font-semibold text-center">
        Sistem Komputer
      </h1>
      <p className="text-sm text-blue-950 font-medium text-justify">
        Dalam materi sistem komputer, akan dipelajari berbagai komponen utama
        yang membentuk dan menjalankan sistem komputer, meliputi perangkat keras
        (hardware), perangkat lunak (software), dan brainware (pengguna).
        Pembahasan mencakup fungsi dan cara kerja unit pemrosesan pusat (CPU),
        memori, perangkat input-output, serta media penyimpanan. Selain itu,
        materi ini juga mencakup sistem operasi, perangkat lunak aplikasi, serta
        interaksi antara perangkat keras dan perangkat lunak dalam menjalankan
        instruksi. Topik lain yang turut dibahas mencakup arsitektur dasar
        komputer, siklus pemrosesan data (input, proses, output, dan
        penyimpanan), sistem bilangan, serta konsep dasar komunikasi data dan
        jaringan komputer. Pembelajaran sistem komputer memberikan pemahaman
        menyeluruh tentang cara kerja komputer sebagai alat pengolah data yang
        efisien dan terstruktur.
      </p>

      <SubPengertianSK />
      <SubKomponenSK />
      <SubFungsiSK />
      <SubKlasifikasiSK/>
      <SubInteraksiSK/>
      <SubImplementasiSK/>
      <SubLatihanSK />
    </div>
  );
};

export default SectionContent;
