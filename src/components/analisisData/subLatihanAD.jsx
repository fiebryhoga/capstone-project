import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const questions = [
  {
    question:
      "Tahapan pertama dalam analisis data yang bertujuan untuk mengumpulkan informasi dari berbagai sumber disebut …",
    options: ["Interpretasi data", "Pengolahan data", "Pengumpulan data"],
    answer: "Pengumpulan data",
  },
  {
    question: "Berikut ini yang termasuk dalam jenis data kuantitatif adalah …",
    options: [
      "Warna favorit siswa",
      "Jenis pekerjaan orang tua",
      "Jumlah pengunjung sebuah website",
    ],
    answer: "Jumlah pengunjung sebuah website",
  },
  {
    question:
      "Teknik analisis data yang digunakan untuk menggambarkan data secara ringkas dengan menghitung rata-rata, median, dan modus disebut …",
    options: [
      "Statistik Inferensial",
      "Statistik Deskriptif",
      "Machine Learning",
    ],
    answer: "Statistik Deskriptif",
  },
  {
    question: "Salah satu manfaat analisis data dalam bidang bisnis adalah …",
    options: [
      "Menghitung luas suatu daerah",
      "Memahami pola pembelian pelanggan",
      "Mengukur suhu udara harian",
    ],
    answer: "Memahami pola pembelian pelanggan",
  },
  {
    question:
      "Perangkat lunak yang sering digunakan untuk visualisasi data adalah …",
    options: [
      "Photoshop",
      "Microsoft Word",
      "Python dengan pustaka Matplotlib",
    ],
    answer: "Python dengan pustaka Matplotlib",
  },
];

const SubLatihanAD = () => {
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
    setAnswers(Array(questions.length).fill(""));
  };

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
        <h1 className="text-blue-950 font-semibold">Latihan</h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-6">
          {questions.map((q, index) => (
            <div key={index}>
              <p className="font-medium">
                {index + 1}. {q.question}
              </p>
              <div className="flex flex-col gap-1 mt-2">
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

          <button
            className="bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-800 w-fit"
            onClick={calculateScore}
          >
            Cek Jawaban
          </button>

          {score !== null && (
            <div className="text-base font-semibold text-blue-950">
              Skor Anda: {score} / {questions.length} = {score * 10}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubLatihanAD;
