import React from 'react'
import { Button } from '../../components/ui/button'
import Image from 'next/image'
import { ThumbsUp } from 'lucide-react'
import gif from '../../../public/Images/getStated.gif'

const GetStarted = () => {
    return (
        <section className=' w-full mt-24 '>

            <div className='container mx-auto rounded-3xl relative overflow-hidden lg:px-5 px-2 py-4  '>
                    <div className=' inset-0  '>
                        <Image
                            src={gif.src}
                            alt="Background"
                            fill
                            className='object-cover'
                            priority
                        />
                        {/* Dark overlay */}
                        <div className='absolute inset-0 bg-[#04373480] rounded-3xl px-4'></div>
                    </div>

                    {/* Content */}
                    <div className='relative z-10 container mx-auto px-2 lg:p-10 '>
                        <div className='w-full mx-auto text-center'>
                            {/* Main container with rounded corners */}
                            <div className=' lg:p-8 p-1'>

                                {/* Headline */}
                                <h2 className='text-3xl lg:text-5xl xl:text-6xl font-bold text-background mb-2 leading-tight'>
                                    Ready to take control of your medical bills?
                                </h2>

                                {/* Sub-headline */}
                                <p className='text-lg lg:text-xl text-background/90 mb-4 max-w-3xl mx-auto leading-relaxed'>
                                    Get started now to uncover errors, compare prices, and protect yourself from unexpected costs.
                                </p>

                                {/* CTA Button */}
                                <Button
                                    className='px-8 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-semibold rounded-xl text-background shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-background'
                                    style={{
                                        background: 'var(--primary-gradient)',
                                        border: 'none'
                                    }}
                                >
                                    <ThumbsUp className='w-5 h-5 lg:w-6 lg:h-6 mr-1' />
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default GetStarted
