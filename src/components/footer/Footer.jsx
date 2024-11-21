import {
  Facebook,
  Home,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  Share,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import React from 'react';

function Footer() {
  return (
    <div className="w-[100vw] bg-primary">
      <div className="grid grid-cols-[1fr_2fr_1fr] p-[40px] gap-24">
        {/* Left Section */}
        <div className="flex flex-col">
          <div className="w-[240px]">
            <img
              src="./src/assets/images/logo/WITH_BG/MOTION_WRITTER_LOGO_LOGO 02.png"
              alt="Motion writer Logo"
            />
          </div>
          <div className="font-PrimaryFont text-[1.1vmax] text-white font-medium">
            <p>
              Motion Writer is an integrated digital marketing & creative
              advertising agency based in Kolkata, India specialising in brand
              building, creative designing, online marketing, selling products
              and telling stories for your brand.
            </p>
          </div>
          <div className="flex gap-5 mt-11 font-Primary Font font-medium text-[1.1vmax] text-white ">
            {[
              ['#', <Facebook />],
              ['#', <Instagram />],
              ['#', <LinkedIn />],
              ['#', <Twitter />],
              ['#', <YouTube />],
            ].map(([link, icon], index) => (
              <a key={index} href={link} className="inline-block transform transition-transform duration-300 hover:scale-[1.2] cursor-pointer">
                <span className='hover:scale-105'>{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Center Section */}
        <div className="px-5">
          <div className="text-3xl font-SecondaryFont text-white font-semibold mt-16 mb-10">
            <h1>Our Services</h1>
          </div>
          <div className='flex'>
            <div>
              <div className=''>
                <img src="./src/assets/images/creativeDesignImage.png" alt="" width={30} height={30} />
                <p>Digital Marketing</p>
              </div>
              <div>
                <img src="./src/assets/images/brandStrategyImage.png" alt="" />
                <p>Creative</p>
              </div>
              <div>
                <img src="./src/assets/images/webSolutionImage.png" alt="" />
                <p>Social</p>
              </div>
            </div>
            <div>
              <div>
                <img src="./src/assets/images/digitalMarketingImage.png" alt="" />
                <p>Web Solutions</p>
              </div>
              <div>
                <img src="./src/assets/images/photographyImage.png" width={30} height={30} alt="" />
                <p>Films</p>
              </div>
              <div>
                <img src="./src/assets/images/socialImage.png" width={30} height={30} alt="" />
                <p>Photography</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h1 className="text-2xl font-SecondaryFont text-white font-semibold mt-16 mb-10">
            Contact Us
          </h1>
          {[
            ['+91 54689 54879', <Phone />],
            ['h@motionwriter.com', <Mail />],
          ].map(([contact, icon], index) => (
            <div
              key={index}
              className="flex gap-4 mb-4 font-PrimaryFont text-[1.1vmax] font-medium relative group text-white"
            >
              {icon}
              <p className='cursor-pointer'>{contact}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full h-[1px] bg-white my-4'></div>
      <div className='pb-3'>
        <p className='text-center text-white font-medium font-primaryFont text-[1.1vmax]'>
          &copy; 2023 Motion Writer. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
