import React from "react";

import LayoutContent from "@/pages/layoutContent";
import HeroMaterial from "@/components/algoritmaPemrograman/heroMaterial";
import Aside from "@/components/algoritmaPemrograman/aside";
import SectionContent from "@/components/algoritmaPemrograman/sectionContent";

const AlgoritmaPemrograman = () => {
  return (
    <LayoutContent>
      <HeroMaterial />
      <div className="w-full px-10 py-2 flex flex-row gap-8">
        <Aside />
        <SectionContent />
      </div>
    </LayoutContent>
  );
};

export default AlgoritmaPemrograman;