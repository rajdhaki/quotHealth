"use client"

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import  docter from   '../../../public/Images/docter.svg'

gsap.registerPlugin(ScrollTrigger);

const OurService = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Image container animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          }
        }
      );

      // Service cards stagger animation
      gsap.fromTo(".service-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Medical Bill Audits",
      description: "Confused by a medical bill? We'll comb through it line by line (using smart tech and human experts) to spot errors, incorrect charges, or things your insurance should've covered. You get a clear report of what's wrong and guidance on fixing it, so you're not overpaying."
    },
    {
      title: "Overpayment Recovery",
      description: "If you paid too much – or were billed for something you shouldn't have been – we help get your money back. Our team will contact your provider or insurer on your behalf, handle the tough conversations, and work to secure refunds or bill corrections. No more lost dollars or endless phone calls for you."
    },
    {
      title: "Price Transparency Tool",
      description: "Planning a procedure or test? Use our simple search to compare healthcare prices in advance. Just type in the service you need (e.g., \"MRI knee\") and see what different hospitals or clinics charge, before you make an appointment. It's like shopping for flights or hotels – but for healthcare. Know the cost upfront and choose the option that fits your budget."
    },
    {
      title: "Micro-Coverage Plans (Coming Soon)",
      description: "Even with insurance, a high deductible or unexpected emergency can leave you with a big bill. Our upcoming micro-coverage is a mini insurance add-on that helps cover those large out-of-pocket costs. For a low monthly fee, you could get an extra cushion (coverage) that kicks in when you need it – so a surprise $2,000 bill might only cost you $100. Join our waitlist to get first access to these affordable plans and protect your wallet from the unexpected."
    }
  ];

  return (
    <section ref={sectionRef} className=" px-4 lg:px-8 mt-24">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Title and Image */}
          <div className="space-y-8 lg:p-12">
            <h2 
              ref={titleRef}
              className="text-4xl  lg:text-7xl font-extrabold text-foreground text-center lg:text-left"
            >
              Our
              <br />
              Services
            </h2>
            
            <div ref={imageRef} className="relative">
              
              {/* Main image container */}
              <div className="relative rounded-3xl ml-3 lg:ml-0  lg:overflow-hidden">

                <Image src={docter.src} width={300} height={400} alt='docter' className="w-full h-auto object-cover rounded-2xl"/>
                
              </div>
            </div>
          </div>

          {/* Right side - Services */}
          <div ref={servicesRef} className="space-y-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card bg-accent/50 rounded-2xl p-4 hover:bg-accent/70 transition-colors duration-300 border border-border shadow-shadow shadow-lg"
              >
                <h3 className="text-xl 2xl:text-2xl lg:text-xl font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-gray600 2xl:text-lg lg:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;