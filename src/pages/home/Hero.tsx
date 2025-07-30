import React from 'react'
import { Button } from '../../components/ui/button'
import Image from 'next/image'
import hero from '../../../public/Images/hero.png'

const Hero = () => {
  return (
    <section className='relative w-full  overflow-hidden bg-gradient-to-t from-foreground to-heroBlue/15'>

      <div className='relative z-10 mx-auto container lg:px-0 px-4 pt-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>


          <div className='space-y-10 w-full  flex flex-col 2xl:px-12 px-4 '>
            <h1 className='text-2xl lg:text-5xl font-bold text-gray900 leading-tight tracking-tight  '>
              {`Healthcare Bills Shouldn't Be a Mystery.`}
            </h1>

            <p className='text-md lg:text-lg text-gray600 leading-relaxed max-w-xl font-normal '>
              {`Quot Health helps you check the true cost of your care before you go—and find the overcharges after you've already paid. We even offer temporary coverage when your insurance falls short.`}
            </p>

            <div className='flex flex-col sm:flex-row gap-6'>
              <Button
                className='px-4 py-6 lg:text-lg text-md font-semibold rounded-xl text-foreground  shadow-lg'
                style={{ background: "var(--primary-gradient)" }}
              >
                Learn How it Works
              </Button>

              <Button
                variant='outline'
                className='px-4 py-6 lg:text-lg text-md font-semibold rounded-xl border-2 border-green text-gray800 bg-foreground hover:bg-green hover:text-foreground shadow-lg'
              >
                CareBridge (Coming Soon)
              </Button>
            </div>
          </div>

          {/* Right side - Image collage */}
          <div className=''>
            <div className='w-full flex justify-center'>
              <Image src={hero.src} width={500} height={500} alt='hero image' className='object-contain w-[80%] h-[80%]' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full lg:-mt-14 '>
        <svg className='w-full h-full' width="1850" height="250" viewBox="0 0 1440 191" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M701.732 111.722C348.964 -7.07464 91.0959 39.5658 -1 89.0645V48.6289C14.0156 39.5658 291.304 -69.4464 701.732 71.984C1086.13 204.446 1329.88 140.13 1440 82.2656V128.454C1376.43 160.524 1142.69 260.219 701.732 111.722Z" fill="url(#paint0_linear_455_213)" />
          <defs>
            <linearGradient id="paint0_linear_455_213" x1="-1" y1="95.5" x2="1440" y2="95.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#81E089" />
              <stop offset="1" stopColor="#07C4B8" />
            </linearGradient>
          </defs>
        </svg>

      </div>

    </section>
  )
}

export default Hero
