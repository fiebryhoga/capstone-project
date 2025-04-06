import react, {useState} from "react";
import { FaAngleDoubleRight } from "react-icons/fa";


const questions = [
  {
    question: "Apa fungsi utama CPU dalam sistem komputer?",
    options: [
      "Menyimpan data",
      "Menjalankan perintah",
      "Menampilkan hasil",
      "Mengatur input",
    ],
    answer: "Menjalankan perintah",
  },
  {
    question: "Contoh perangkat input adalah?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
    answer: "Keyboard",
  },
  {
    question: "Sistem operasi termasuk dalam kategori?",
    options: ["Hardware", "Software", "Brainware", "Firmware"],
    answer: "Software",
  },
  {
    question: "Siapa yang termasuk dalam kategori brainware?",
    options: ["Harddisk", "Mouse", "Pengguna", "Linux"],
    answer: "Pengguna",
  },
  {
    question: "Komputer pribadi seperti laptop disebut?",
    options: ["Mainframe", "Minikomputer", "Superkomputer", "Mikrokomputer"],
    answer: "Mikrokomputer",
  },
  {
    question: "Fungsi sistem komputer yang menyimpan data adalah?",
    options: ["Input", "Processing", "Storage", "Output"],
    answer: "Storage",
  },
  {
    question: "Perangkat yang digunakan untuk mencetak dokumen?",
    options: ["Monitor", "Printer", "Speaker", "Mouse"],
    answer: "Printer",
  },
  {
    question: "Contoh software aplikasi adalah?",
    options: ["Windows", "Microsoft Word", "BIOS", "CPU"],
    answer: "Microsoft Word",
  },
  {
    question: "Siapa yang menjalankan software dan mengontrol hardware?",
    options: ["Software", "Hardware", "Brainware", "RAM"],
    answer: "Brainware",
  },
  {
    question: "Komputer yang digunakan untuk simulasi nuklir termasuk?",
    options: ["Mikrokomputer", "Mainframe", "Superkomputer", "Minikomputer"],
    answer: "Superkomputer",
  },
];

const SubLatihan = () => {
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

    // Reset jawaban setelah cek
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

export default SubLatihan;
