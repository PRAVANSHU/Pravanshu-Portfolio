import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative flex flex-col-reverse md:flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10">
            
            {/* Text Section */}
            <div className="flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start md:w-1/2 md:pl-10 md:order-2">
                <h1 className="text-2xl/1 font-semibold text-center font-serif md:text-[40px] md:text-start">
                    Hello, I&#8217;m Pravanshu Maji, <br />
                    <span className="block text-[27px] highlight mt-2 font-serif md:text-[28px] md:mt-0">
                         I&#8217;m a Software Enthusiast
                    </span>
                </h1>
                <p className="text-center text-sm mx-6 font-serif md:text-[22px] md:text-start md:mx-0">
                    Transforming ideas into seamless and impactful digital experiences.
                </p>
                <a
                    href="/pm_resume.pdf"
                    target="_blank" 
                    rel="noopener noreferrer"
                    
                    className="self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm font-serif md:self-start md:text-xl/6"
                > 
                    My Resume
                    <img src="/arrow_right_icon.svg" alt="Arrow right icon" />
                </a>
            </div>

            {/* Image Section */}
            <div className="relative md:w-1/2 flex justify-center md:justify-end md:order-1">
                <Image
                    src="/profile_light_purple.png"
                    alt="light purple rectangle"
                    width={372}
                    height={430}
                    className=" md:block w-[372px] h-[430px] absolute right-0 -z-10"
                />
                <Image
                    src="/profile_dark_purple.png"
                    alt="dark purple rectangle"
                    width={372}
                    height={430}
                    className=" md:block w-[372px] h-[430px] absolute right-0 -z-20"
                />
                <Image
                    src="/pravanshu_profile.jpg"
                    alt="Pravanshu Maji picture"
                    width={357}
                    height={417}
                    className=" md:block w-[357px] h-[417px] z-10 mr-[7.7px] my-[6.5px] rounded-2xl"
                />
            </div>
        </section>
    );
};

export default Hero;
