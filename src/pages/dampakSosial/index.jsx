import React from "react";

import LayoutContent from "@/pages/layoutContent";
import HeroMaterial from "@/components/dampakSosial/heroMaterial";
import Aside from "@/components/dampakSosial/aside";
import SectionContent from "@/components/dampakSosial/sectionContent";

const DampakSosial = () => {
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

export default DampakSosial;
