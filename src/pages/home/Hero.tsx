import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import hero from '../../../public/Images/hero.svg'
import Wave from '@/components/svgs/Wave'


const Hero = () => {
  return (
    <section className='relative w-full  overflow-hidden  '>

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
                className='px-4 py-6 lg:text-lg text-md font-semibold rounded-xl border-2 border-green text-gray800 bg-background hover:bg-green hover:text-foreground shadow-lg'
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
      <Wave/>
      </div>

    </section>
  )
}

export default Hero
