import React from 'react'
import SectionContainer from '../section/sectioncontainer';
import SectionHeader from '../section/sectionheader';
import certificates from "@/data/certificates.json"
import Certificate from './certificate';

const Certificates = () => {
  return (
    <SectionContainer id="certificates">
        <div className="section-contents font-serif">
            <SectionHeader plainText="📢Check out" highlightText="My Achievements"/>
            <div className="w-full overflow-x-clip">
              <div className="w-[1758px] sm:w-[2754px] flex items-stretch justify-start gap-[23px] pr-[23px]
               overflow-x-clip animate-scroll">
                {
                  [...certificates,...certificates].map((certificate,id) => (
                    <Certificate key={id} thumbnail={certificate.thumbnail}
                     description={certificate.description}
                    />
                  )

                  
                  )
                }
               </div>
            </div>

        </div>

    </SectionContainer>
  );
};

export default Certificates;