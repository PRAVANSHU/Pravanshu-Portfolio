import React from 'react'
import Image from 'next/image'


const Contact = () => {
  return (
    <section id="contact" 
    className="card relative items-center mx-6 flex 
    flex-col px-[33px] py-[27px] z-30 gap-[54px] md:gap-[35px]
     mb-[67px] md:mb-[42px] ">
        <div className="flex flex-col md:flex-row gap-5 md:justify-between md:w-full">
            <h2 className="font-semibold text-[22px]
             md:text-[40px] md:max-w-[462px] font-serif">Want me on your Team? Let&#8217;s make it happen 🤝</h2>
             <div className="flex flex-col gap-5 items-center md:items-end">
                <a href="mailto:pravanshumaji75@gmail.com" className="self-center 
                  md:self-start bg-primary text-white p-2.5 rounded flex
                  gap-2.5 items-center text-lg md:text-xl/l font-serif">Lets get in Touch
                  <img src="/mail_icon.svg" alt="Mail icon" />
                  </a>
                  <div className="flex flex-row gap-1">
                    <a href="https://github.com/PRAVANSHU" className="contact-button">
                    <Image src="/github_logo_dark.svg" alt="github icon" height={16}
                    width={17} className="hidden dark:block" />
                    <Image src="/github_logo.svg" alt="github icon" height={16}
                    width={17} className="dark:hidden" />
                    </a>
                    <a href="https://x.com/PravanshuMaji" className="contact-button">
                    <Image src="/twitter_icon_dark.svg" alt="Twitter icon" height={14}
                    width={17} className="hidden dark:block" />
                    <Image src="/twitter_icon.svg" alt="Twitter icon" height={14}
                    width={17} className="dark:hidden" />
                    </a>
                    <a href="https://www.instagram.com/pravanshumaji/" className="contact-button">
                    <Image src="/dark_insta.png" alt="Instagram dark mode icon" height={14}
                    width={17} className="hidden dark:block" />
                    <Image src="/insta_light.png" alt="Instagram light mode icon" height={14}
                    width={17} className="dark:hidden" />
                    </a>

                  </div>
             </div>
        </div>

    </section>
  );
};

export default Contact;