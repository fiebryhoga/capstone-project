import React from "react";

const Aside = () => {
  return (
    <div className="hidden min-h-64 w-full md:w-2/10 md:flex flex-col gap-4">
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          Analisis Data
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a
            href="https://algorit.ma/blog/pengertian-analisis-data-2022/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Pengertian Analisis Data
          </a>

          <a
            href="https://www.kaggle.com/datasets"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Latihan (Dataset Kaggle)
          </a>
        </div>
      </div>
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          References
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a
            href="https://id.wikipedia.org/wiki/Analisis_data"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Wikipedia - Analisis Data
          </a>
          <a
            href="https://www.mckinsey.com/quarterly/overview/the-data-driven-enterprise-of-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            McKinsey - The data-driven enterprise (EN)
          </a>
          <a
            href="https://www.bps.go.id/subject/26/ilmu-pengetahuan-dan-teknologi.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Badan Pusat Statistik (BPS)
          </a>
          <a
            href="https://towardsdatascience.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Towards Data Science (EN)
          </a>
          <a
            href="https://www.tableau.com/learn/articles/data-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Tableau - What is Data Analysis? (EN)
          </a>
          <a
            href="https://cloud.google.com/what-is-data-analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Google Cloud - What is Data Analytics? (EN)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aside;
