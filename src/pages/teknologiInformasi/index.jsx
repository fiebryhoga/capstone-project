import React from "react";

import LayoutContent from "@/pages/layoutContent";
import HeroMaterial from "@/components/teknologiInformasi/heroMaterial";
import Aside from "@/components/teknologiInformasi/aside";
import SectionContent from "@/components/teknologiInformasi/sectionContent";

const TeknologiInformasi = () => {
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

export default TeknologiInformasi;