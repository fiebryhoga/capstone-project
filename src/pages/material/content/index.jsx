import React from 'react'

import LayoutContent from '@/pages/layoutContent';
import HeroMaterial from '@/components/content/heroMaterial';
import Aside from '@/components/content/aside';
import SectionContent from '@/components/content/sectionContent';

const contentMaterial = () => {
  return (
    <LayoutContent>
      <HeroMaterial/>
      <div className='w-full px-10 py-2 flex flex-row gap-8'>
        <Aside/>
        <SectionContent/>        
      </div>
      
      
    </LayoutContent>
  )
}

export default contentMaterial;