import React from 'react'
import Image from 'next/image'

type Props = {
   thumbnail: string;
   title : string;
   link :{
    url : string;
    label : string;
   };
   description:string;
};

const Project = ({thumbnail, title , link,description}: Props) => {
  return (
    <div className="card flex flex-col items-stretch w-full max-w-[428.4px] 
     p-5 md:p-[18px] gap-[30px]">
        <Image src={thumbnail}
        alt={'Thumbnail for ${title}'}
        width={392} height={230}
        className="w-full h-[230px] object-cover" />
        <div className="flex justify-between items-center">
            <h3 className="font-semibold text-xl md:text-[22px] font-serif">{title}</h3>
            <a href={link.url} className="flex px-[5px] py-[3px] gap-1 bg-[#b9b9b9] bg-opacity-[24%] rounded text-[14px] font-light">
                <span className="hidden md:block">{link.label}</span>
                <img src="link_arrow.svg" alt="Link arrow" className="block dark:hidden"/>
                <img src="link_arrow_dark.svg" alt="Link arrow" className="hidden dark:block"/>
            </a>
        </div>
        <p className="line-clamp-3 text-sm md:text-base font-serif">{description}</p>
     </div>
  );
};

export default Project