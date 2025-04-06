import React from "react";

import LayoutContent from "@/pages/layoutContent";
import HeroMaterial from "@/components/analisisData/heroMaterial";
import Aside from "@/components/analisisData/aside";
import SectionContent from "@/components/analisisData/sectionContent";

const AnalisisData = () => {
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

export default AnalisisData;
