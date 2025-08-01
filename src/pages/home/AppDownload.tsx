import React from 'react'
import Image from 'next/image'
import phones from '../../../public/Images/downloadApp.svg'
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-smans'
});

const AppDownload = () => {
  return (
    <section className='relative w-full my-10 lg:my-24  px-3 overflow-hidden'>



      <div className='relative z-10 container mx-auto  '>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-0 items-center bg-linear-to-tr from-[#07C4B8] to-[#36CFA6] px-3 lg:px-16 py-4  lg:py-10 rounded-4xl' >

          {/* Left side - Text and CTA */}
          <div className='space-y-2 text-center lg:text-start'>
            {/* Hashtag */}
            <div style={{ fontFamily: "made-tommy-medium" }} className='text-background/80 text-sm lg:text-base lg:mb-5 mb-3'>
              {`#YourHealthPartner`}
            </div>

            {/* Main headline */}
            <h2 style={{ fontFamily: "made-tommy" }} className='lg:text-[34px] text-2xl  font-bold text-background '>
              {`FIND CARE, BOOK APPOINTMENTS, GET INSURED - ALL IN ONE APP`}
            </h2>

            {/* Body text */}
            <p style={{ fontFamily: "made-tommy-regular" }} className='lg:text-lg text-base  text-background/90 '>
{`              Your all-in-one healthcare and insurance app. Discover services, schedule visits, manage policies, and file claims - right from your phone.`}
            </p>

            {/* Download buttons */}
            <div className={`flex flex-row gap-2 items-center md:justify-center lg:justify-start mt-10 ${dmSans.variable}`}>
              <button className='flex items-center gap-3 bg-black text-background px-2.5 lg:pl-3 lg:pr-10 py-1.5 rounded-xl hover:bg-gray-900 transition-colors border border-background'>
                <span><svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.9749 34.6697C24.912 36.5398 22.6596 36.2445 20.4914 35.3587C18.1969 34.4531 16.0918 34.4138 13.671 35.3587C10.6398 36.5792 9.03992 36.2248 7.22958 34.6697C-3.04303 24.7679 -1.5274 9.68891 10.1345 9.13772C12.9764 9.27552 14.9551 10.5944 16.6181 10.7126C19.102 10.2401 21.4807 8.88181 24.1331 9.05898C27.3117 9.29521 29.7115 10.4763 31.2902 12.6024C24.7225 16.2835 26.2802 24.3742 32.3007 26.638C31.1008 29.5908 29.5431 32.524 26.9538 34.6894L26.9749 34.6697ZM16.4076 9.01961C16.0918 4.62977 19.9019 1.00766 24.2804 0.65332C24.8909 5.73215 19.3546 9.51175 16.4076 9.01961Z" fill="white" />
                </svg>
                </span>
                <div className='text-left'>
                  <div className='lg:text-xs text-[8px]'>Get it on</div>
                  <div className='lg:text-sm text-xs font-semibold'>App Store</div>
                </div>
              </button>

              <button className='flex items-center gap-3 bg-black text-background px-2.5 lg:pl-3 lg:pr-10 py-1.5 rounded-xl hover:bg-gray-900 transition-colors border border-background'>
                <span><svg width="34" height="38" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.07122 1.38729C0.561557 1.99729 0.299002 2.80554 0.391669 3.59854V37.1485C0.345336 37.911 0.592447 38.6735 1.10211 39.2835L1.21022 39.3903L20.315 20.6023V20.1448L1.16389 1.31104L1.07122 1.41779V1.38729Z" fill="url(#paint0_linear_454_4636)" />
                  <path d="M26.6471 26.8852L20.2686 20.587V20.1295L26.6471 13.877L26.8016 13.938L34.3693 18.1775C36.5316 19.3975 36.5316 21.38 34.3693 22.6L26.8016 26.8242L26.6471 26.8852Z" fill="url(#paint1_linear_454_4636)" />
                  <path d="M26.8016 26.809L20.3149 20.3735L1.05566 39.3598C1.98233 40.1528 3.31055 40.1833 4.26811 39.4513L26.817 26.8243" fill="url(#paint2_linear_454_4636)" />
                  <path d="M26.8016 13.938L4.25266 1.28048C3.78981 0.929694 3.21793 0.748551 2.63478 0.768023C2.05164 0.787494 1.49346 1.00637 1.05566 1.38723L20.3149 20.3735L26.8016 13.938Z" fill="#00F076" />
                  <defs>
                    <linearGradient id="paint0_linear_454_4636" x1="997.459" y1="1.31104" x2="997.459" y2="3809.24" gradientUnits="userSpaceOnUse">
                      <stop offset="0.03938" stopColor="#00C3FF" />
                      <stop offset="0.97744" stopColor="#00E1FF" />
                      
                    </linearGradient>
                    <linearGradient id="paint1_linear_454_4636" x1="1289.81" y1="664.29" x2="-2444.66" y2="664.29" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FDDE31" />
                      <stop offset="0.4" stopColor="#FABC31" />
                      <stop offset="0.77" stopColor="#F8A431" />
                      <stop offset="1" stopColor="#F79B31" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_454_4636" x1="2220.42" y1="369.594" x2="-190.605" y2="4482.02" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF3A44" />
                      <stop offset="1" stopColor="#C4206D" />
                    </linearGradient>
                  </defs>
                </svg>
                </span>
                <div className='text-left'>
                  <div className='lg:text-xs text-[8px]'>Get it on</div>
                  <div className='lg:text-sm  text-xs font-semibold'>Play Store</div>
                </div>
              </button>

              <div style={{ fontFamily: "made-tommy-medium" }} className='text-background/80 text-sm lg:text-2xl ml-2.5'>
                Coming Soon...
              </div>
            </div>
          </div>

          {/* Right side - Phone mockups */}
          <div className='relative flex justify-center  lg:justify-end'>
            <div className='relative'>

              <Image
                src={phones.src}
                alt="Download"
                width={500}
                height={500}
                className='w-full h-full md:w-[70%] md:mx-auto lg:mx-0 lg:w-full object-contain'
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDownload
