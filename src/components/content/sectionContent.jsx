import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SectionContent = () => {
  const subMateriList = [
    { id: 1, title: "Sub Materi 1", content: "Isi dari Sub Materi 1..." },
    { id: 2, title: "Sub Materi 2", content: "Isi dari Sub Materi 2..." },
    { id: 3, title: "Sub Materi 3", content: "Isi dari Sub Materi 3..." },
    { id: 4, title: "Sub Materi 4", content: "Isi dari Sub Materi 4..." },
    { id: 5, title: "Sub Materi 5", content: "Isi dari Sub Materi 5..." },
  ];

  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle state hanya untuk item yang diklik
    }));
  };

  return (
    <div className="min-h-64 w-8/10 flex flex-col gap-2">
      <h1 className="text-blue-950 text-2xl font-semibold text-center">
        Nama Materi
      </h1>
      <p className="text-sm text-blue-950 font-medium text-justify text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit...
      </p>

      {subMateriList.map((item) => (
        <div
          key={item.id}
          className="py-2 flex flex-col border border-blue-950 mt-4 rounded-lg cursor-pointer"
        >
          {/* Bagian Judul yang bisa diklik */}
          <div
            className="px-6 flex flex-row gap-10 justify-start items-center"
            onClick={() => toggleItem(item.id)}
          >
            <FaAngleDoubleRight
              className={`text-blue-950 transition-transform duration-300 ${
                openItems[item.id] ? "rotate-90" : ""
              }`}
            />
            <h1 className="text-blue-950 font-semibold">{item.title}</h1>
          </div>

          {/* Bagian Isi Sub Materi (hanya muncul jika item terbuka) */}
          {openItems[item.id] && (
            <div className="px-6 mt-2 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionContent;
