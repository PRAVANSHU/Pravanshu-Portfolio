
import React from 'react'
import Image from 'next/image'
type Props ={
  thumbnail:string;
  description: string;

};

const Certificate = ({thumbnail,description} : Props) => {
  return (
    <div className="card flex flex-col items-stretch w-full max-w-[428.4px] 
      p-5 md:p-[18px] gap-[30px]">
      <Image 
        src={thumbnail} 
        alt={'Certificate Image'} 
        width={392} height={230} 
        className="w-full h-[230px] max-w-full max-h-full object-cover rounded-lg" 
      />
      <p className="text-sm md:text-base font-serif">{description}</p>
    </div>
  );
};

export default Certificate;