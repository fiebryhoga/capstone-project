import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const questions = [
  {
    question:
      "Seorang siswa diminta membandingkan Informatika dengan TIK. Manakah pernyataan yang paling tepat untuk membedakan keduanya secara mendalam?",
    options: [
      "Informatika dan TIK sama-sama fokus pada penggunaan software.",
      "TIK mengajarkan logika algoritma, sedangkan Informatika tidak.",
      "Informatika membahas proses komputasi dan algoritma, sedangkan TIK fokus pada penggunaan perangkat lunak.",
      "TIK membahas etika digital, sedangkan Informatika tidak.",
    ],
    answer:
      "Informatika membahas proses komputasi dan algoritma, sedangkan TIK fokus pada penggunaan perangkat lunak.",
  },
  {
    question:
      "Dalam sebuah proyek informatika, tim siswa mengalami konflik dalam pembagian tugas. Langkah apa yang paling tepat diambil agar kerja tim tetap efektif?",
    options: [
      "Menyelesaikan tugas masing-masing tanpa berdiskusi.",
      "Menunggu guru menyelesaikan konflik.",
      "Menyusun ulang pembagian peran berdasarkan kemampuan dan musyawarah.",
      "Mengurangi jumlah anggota tim agar lebih efisien.",
    ],
    answer:
      "Menyusun ulang pembagian peran berdasarkan kemampuan dan musyawarah.",
  },
  {
    question:
      "Seorang siswa menyusun algoritma untuk aplikasi sederhana. Namun, hasil akhir program tidak sesuai dengan tujuan. Apa yang harus dianalisis terlebih dahulu?",
    options: [
      "Jumlah baris kode yang ditulis.",
      "Tampilan antarmuka aplikasi.",
      "Logika dari algoritma yang dibuat.",
      "Kecepatan komputer yang digunakan.",
    ],
    answer: "Logika dari algoritma yang dibuat.",
  },
  {
    question:
      "Dalam dunia bisnis digital, seorang pelaku usaha menggunakan sistem kasir berbasis cloud. Hal ini menunjukkan bahwa...",
    options: [
      "Teknologi hanya penting dalam skala perusahaan besar.",
      "Transformasi digital tidak terlalu relevan di bidang bisnis.",
      "Informatika mendukung efisiensi dan pencatatan data secara real-time.",
      "Sistem kasir tradisional lebih akurat dibanding sistem digital.",
    ],
    answer:
      "Informatika mendukung efisiensi dan pencatatan data secara real-time.",
  },
  {
    question:
      "Seorang guru ingin mengajarkan konsep dekomposisi dalam berpikir komputasional. Strategi pembelajaran mana yang paling sesuai?",
    options: [
      "Menyuruh siswa menghafal definisi dekomposisi.",
      "Meminta siswa membuat rangkuman materi.",
      "Mengajak siswa memecah masalah besar menjadi bagian-bagian kecil yang lebih mudah diatasi.",
      "Memberikan soal pilihan ganda tanpa diskusi kelompok.",
    ],
    answer:
      "Mengajak siswa memecah masalah besar menjadi bagian-bagian kecil yang lebih mudah diatasi.",
  },
  {
    question:
      "Dalam pelajaran sistem komputer, siswa diminta menganalisis hubungan antara perangkat keras dan perangkat lunak. Manakah yang mencerminkan pemahaman analitis yang benar?",
    options: [
      "Perangkat keras hanya berfungsi jika disambungkan ke internet.",
      "Perangkat lunak adalah pengganti dari perangkat keras.",
      "Perangkat lunak memberikan instruksi, dan perangkat keras menjalankan instruksi tersebut.",
      "Perangkat keras tidak diperlukan jika sudah memiliki sistem operasi.",
    ],
    answer:
      "Perangkat lunak memberikan instruksi, dan perangkat keras menjalankan instruksi tersebut.",
  },
  {
    question:
      "Dalam proyek Praktik Lintas Bidang, siswa menggabungkan pengetahuan algoritma, analisis data, dan pemrograman untuk membuat aplikasi. Tujuan utama dari pendekatan ini adalah...",
    options: [
      "Menghindari ujian tertulis.",
      "Menyelesaikan proyek secara cepat.",
      "Mengintegrasikan berbagai kompetensi untuk menyelesaikan masalah nyata.",
      "Meningkatkan nilai akhir semester.",
    ],
    answer:
      "Mengintegrasikan berbagai kompetensi untuk menyelesaikan masalah nyata.",
  },
  {
    question:
      "Seorang siswa diminta mengevaluasi dampak sosial dari media sosial dalam kehidupan sehari-hari. Mana pernyataan evaluatif yang paling tepat?",
    options: [
      "Media sosial hanya memiliki dampak negatif.",
      "Dampak media sosial tergantung pada bagaimana pengguna memanfaatkannya.",
      "Semua orang menggunakan media sosial dengan cara yang sama.",
      "Media sosial tidak relevan dalam pendidikan.",
    ],
    answer:
      "Dampak media sosial tergantung pada bagaimana pengguna memanfaatkannya.",
  },
  {
    question:
      "Seorang siswa menggunakan Python untuk menulis program. Ia menyadari bahwa pendekatan pemrograman teksual ini berbeda dengan Scratch. Apa keunggulan utama dari pendekatan ini?",
    options: [
      "Lebih mudah digunakan oleh pemula.",
      "Tidak memerlukan pemahaman logika.",
      "Memungkinkan implementasi logika dan struktur data yang kompleks.",
      "Hanya bisa digunakan untuk game.",
    ],
    answer: "Memungkinkan implementasi logika dan struktur data yang kompleks.",
  },
  {
    question:
      "Di tengah perkembangan Society 5.0, siswa diminta mengevaluasi keterampilan apa yang paling dibutuhkan agar tetap relevan di dunia kerja masa depan.",
    options: [
      "Menghafal perangkat keras komputer.",
      "Kemampuan teknis saja tanpa komunikasi.",
      "Keterampilan kolaborasi, komunikasi digital, dan adaptasi teknologi.",
      "Fokus pada mata pelajaran selain informatika.",
    ],
    answer:
      "Keterampilan kolaborasi, komunikasi digital, dan adaptasi teknologi.",
  },
];

const SubLatihanIG = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [score, setScore] = useState(null);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    setScore(correct);
  };

  return (
    <div className="flex flex-col border border-blue-950 mt-4 rounded-lg cursor-pointer">
      <div
        className="px-6 py-6 flex flex-row gap-2 items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaAngleDoubleRight
          className={`text-blue-950 transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
        <h1 className="text-blue-950 font-semibold">Latihan Soal</h1>
      </div>

      {isOpen && (
        <div className="px-6 py-4 border-t border-blue-950">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-950">
            {questions.map((q, index) => (
              <div key={index}>
                <p className="font-medium mb-2">
                  {index + 1}. {q.question}
                </p>
                <div className="flex flex-col gap-1">
                  {q.options.map((opt, i) => (
                    <label key={i} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={opt}
                        checked={answers[index] === opt}
                        onChange={() => handleAnswerChange(index, opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="mt-6 bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-800 w-fit"
            onClick={calculateScore}
          >
            Cek Jawaban
          </button>

          {score !== null && (
            <div className="mt-4 text-base font-semibold text-blue-950">
              Skor Anda: {score} / {questions.length} = {score * 10}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubLatihanIG;
