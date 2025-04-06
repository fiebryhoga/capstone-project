import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubPenerapanAD = () => {
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
          Sub Materi: Penerapan Analisis Data Dalam Keseharian
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-6">
          <p>
            Analisis data kini menjadi bagian penting dalam berbagai bidang
            kehidupan. Kemampuan untuk memahami dan mengolah data membantu
            individu dan organisasi membuat keputusan yang lebih cerdas dan
            tepat sasaran. Berikut beberapa contoh penerapannya:
          </p>

          {/* Pendidikan */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Bidang Pendidikan
            </h2>
            <p>Sekolah dan universitas menggunakan data untuk:</p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                Menganalisis nilai ujian siswa untuk mengukur efektivitas
                pembelajaran
              </li>
              <li>
                Menentukan kebutuhan intervensi untuk siswa yang mengalami
                kesulitan
              </li>
              <li>Mengembangkan kurikulum berbasis data</li>
            </ul>
          </div>

          {/* Bisnis */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">Bidang Bisnis</h2>
            <p>Perusahaan menggunakan analisis data untuk:</p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Memahami perilaku konsumen dan tren pasar</li>
              <li>Mengoptimalkan strategi pemasaran dan penjualan</li>
              <li>Meningkatkan pelayanan pelanggan</li>
            </ul>
            <div className="mt-2 ml-2">
              <h3 className="font-semibold text-blue-900 mb-2">
                Analisis Data dalam Dunia Bisnis
              </h3>
              <iframe
                className="w-full h-[500px] rounded-lg shadow-lg"
                src="https://ppmschool.ac.id/menggunakan-analisis-data-untuk-keputusan-bisnis/"
                title="Menggunakan Analisis Data untuk Keputusan Bisnis"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Kesehatan */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Bidang Kesehatan
            </h2>
            <p>Analisis data membantu bidang kesehatan dalam:</p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Prediksi dan pelacakan penyebaran penyakit</li>
              <li>Meningkatkan efisiensi rumah sakit dan layanan medis</li>
              <li>Pengembangan obat dan terapi berbasis data</li>
            </ul>
          </div>

          {/* Teknologi */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Bidang Teknologi
            </h2>
            <p>Dalam teknologi, analisis data digunakan untuk:</p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Melatih model kecerdasan buatan (AI) dan machine learning</li>
              <li>
                Menyesuaikan rekomendasi konten seperti di YouTube atau TikTok
              </li>
              <li>Mendeteksi penipuan (fraud detection)</li>
            </ul>
          </div>

          <div className="text-sm text-blue-900">
            <p className="mt-4">
              Dengan memahami dan menerapkan analisis data, kita dapat membuat
              keputusan yang lebih cerdas dan berbasis bukti, baik di lingkungan
              pendidikan, bisnis, hingga kehidupan sehari-hari.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubPenerapanAD;
