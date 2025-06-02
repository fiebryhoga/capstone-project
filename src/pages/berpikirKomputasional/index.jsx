import React from "react";

import LayoutContent from "@/pages/layoutContent";
import HeroMaterial from "@/components/berpikirKomputasional/heroMaterial";
import Aside from "@/components/berpikirKomputasional/aside";
import SectionContent from "@/components/berpikirKomputasional/sectionContent";

const BerpikirKomputasional = () => {
  return (
    <LayoutContent>
      <HeroMaterial />
      <div className="w-full px-4 sm:px-6 md:px-10 py-2 flex flex-col lg:flex-row gap-6 lg:gap-8">
        <Aside />
        <SectionContent />
      </div>
    </LayoutContent>
  );
};

export default BerpikirKomputasional;
