import React from 'react'
import Image from 'next/image'
import men from '../../../public/Images/smelingMen.svg'

const HealthcareGuardian = () => {
  return (
    <section className='relative w-full overflow-hidden lg:mt-24 mt-10'>
      
      <div className='relative'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-6 items-center'>
          

          <div className='relative flex justify-center lg:justify-start'>


                    <Image 
                      src={men.src} 
                      width={500} 
                      height={500} 
                      alt='Smiling man with coffee cup' 
                      className='w-full h-full lg:w-[90%] object-cover'
                    />
              

          </div>
          

          <div className='space-y-8 px-6'>
            <div className='space-y-6 text-center lg:text-left'>
              <h3 className='text-green uppercase text-sm lg:text-lg font-bold tracking-wider '>
                Your Healthcare Guardian Angel
              </h3>
              
              <h1 className='text-gray900 text-2xl lg:text-5xl 2xl:text-6xl  font-bold leading-tight'>
                Never Overpay for Healthcare Again
              </h1>
              
              <p className='text-gray600 text-base lg:text-lg leading-relaxed max-w-lg'>
{`                Quot Health helps you save money, get clarity, and feel protected in a confusing healthcare system. We're your personal ally for medical bills and insurance – making sure you only pay what's fair. Healthcare is complicated, but we make it simple and on your side.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HealthcareGuardian
