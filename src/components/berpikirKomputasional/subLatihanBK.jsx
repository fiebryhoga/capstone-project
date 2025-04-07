import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const questions = [
  {
    question:
      "Apa yang dimaksud dengan 'Decomposition' dalam berpikir komputasional?",
    options: [
      "Menghapus informasi yang tidak relevan",
      "Memecah masalah besar menjadi bagian-bagian kecil",
      "Mengenali pola umum dalam data",
    ],
    answer: "Memecah masalah besar menjadi bagian-bagian kecil",
  },
  {
    question: "Tujuan utama dari 'Pattern Recognition' adalah …",
    options: [
      "Mengurutkan data secara acak",
      "Mengenali kesamaan dan perulangan",
      "Menyembunyikan data dari pengguna",
    ],
    answer: "Mengenali kesamaan dan perulangan",
  },
  {
    question:
      "Langkah dalam berpikir komputasional yang menghilangkan detail tidak penting disebut …",
    options: ["Decomposition", "Pattern Recognition", "Abstraction"],
    answer: "Abstraction",
  },
  {
    question: "Manakah yang merupakan contoh penerapan 'Abstraction'?",
    options: [
      "Mengganti data sensitif dengan simbol",
      "Mendesain antarmuka pengguna tanpa logika di belakangnya",
      "Membuat ringkasan dari cerita panjang",
    ],
    answer: "Membuat ringkasan dari cerita panjang",
  },
  {
    question:
      "Perancangan langkah-langkah logis untuk menyelesaikan masalah disebut …",
    options: ["Debugging", "Algorithm Design", "Data Visualization"],
    answer: "Algorithm Design",
  },
  {
    question: "Apa yang dimaksud dengan 'Debugging'?",
    options: [
      "Membuat desain algoritma",
      "Menghapus bagian program yang tidak diperlukan",
      "Mencari dan memperbaiki kesalahan dalam kode",
    ],
    answer: "Mencari dan memperbaiki kesalahan dalam kode",
  },
  {
    question:
      "Langkah yang dilakukan untuk menguji dan memastikan algoritma bekerja sesuai harapan disebut …",
    options: ["Evaluasi", "Abstraksi", "Deklarasi"],
    answer: "Evaluasi",
  },
  {
    question:
      "Contoh penerapan berpikir komputasional di kehidupan sehari-hari adalah …",
    options: [
      "Menghafal jawaban ujian",
      "Menyusun jadwal kegiatan berdasarkan prioritas",
      "Menonton video tanpa berpikir",
    ],
    answer: "Menyusun jadwal kegiatan berdasarkan prioritas",
  },
  {
    question:
      "Pola pikir yang membantu menyelesaikan masalah kompleks dengan cara sistematis dan logis disebut …",
    options: ["Berpikir kreatif", "Berpikir komputasional", "Berpikir cepat"],
    answer: "Berpikir komputasional",
  },
  {
    question:
      "Mengelompokkan objek berdasarkan karakteristik yang sama termasuk dalam …",
    options: ["Pattern Recognition", "Algorithm Design", "Evaluasi"],
    answer: "Pattern Recognition",
  },
];

const SubLatihanBK = () => {
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
        <h1 className="text-blue-950 font-semibold">
          Latihan: Berpikir Komputasional
        </h1>
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

export default SubLatihanBK;
