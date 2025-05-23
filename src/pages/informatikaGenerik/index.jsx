import React from "react";

import LayoutContent from "@/pages/layoutContent";
import HeroMaterial from "@/components/informatikaGenerik/heroMaterial";
import Aside from "@/components/informatikaGenerik/aside";
import SectionContent from "@/components/informatikaGenerik/sectionContent";

const JaringanKomputer = () => {
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

export default JaringanKomputer;
