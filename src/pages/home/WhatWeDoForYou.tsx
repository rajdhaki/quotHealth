"use client"

import React from 'react'
import { Network, Pill, Target, Shield } from 'lucide-react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const WhatWeDoForYou = () => {
  const sectionRef = React.useRef<HTMLElement>(null)
  const cardsRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Animate the header section
    const headerContent = sectionRef.current?.querySelector('.header-content')
    if (headerContent) {
      gsap.fromTo(headerContent, 
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Animate service cards with stagger
    const cards = cardsRef.current?.querySelectorAll('.service-card')
    if (cards) {
      gsap.fromTo(cards,
        {
          y: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Animate the bottom text
    const bottomText = sectionRef.current?.querySelector('.bottom-text')
    if (bottomText) {
      gsap.fromTo(bottomText, 
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="pt-16 px-4 mt-24">
      <div className="lg:mx-auto container">
        {/* Header Section */}
        <div className="header-content text-center mb-16">
          <h1 className="text-2xl lg:text-5xl font-bold text-gray900 mb-6">
            What We Do For You
          </h1>
          <p className="text-lg text-gray600 max-w-2xl mx-auto">
            {`Take Control of Your Healthcare Costs. At Quot Health, we help you:`}
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Spot & Fix Billing Errors */}
          <div className="service-card bg-background rounded-xl p-8 shadow-xl shadow-shadow border border-border transition-shadow hover:shadow-2xl hover:scale-105 duration-300">
            <div className="flex items-center flex-col lg:flex-row lg:gap-1.5 gap-3 space-x-4">
              <div className="bg-teal-500 rounded-xl p-4 flex-shrink-0">
                <Network className="w-8 h-8 text-background" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray900 mb-3">
                  Spot & Fix Billing Errors
                </h3>
                <p className="text-gray600 leading-relaxed">
                 {` We audit your medical bills and insurance EOBs to find hidden mistakes or overcharges, so you don't pay a penny more than you should.`}
                </p>
              </div>
            </div>
          </div>

          {/* Price Check Healthcare */}
          <div className="service-card bg-background rounded-xl p-8 shadow-xl shadow-shadow border border-border transition-shadow hover:shadow-2xl hover:scale-105 duration-300">
            <div className="flex items-center flex-col lg:flex-row lg:gap-1.5 gap-3 space-x-4">
              <div className="bg-purple-500 rounded-xl p-4 flex-shrink-0">
                <Pill className="w-8 h-8 text-background" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray900 mb-3">
                  Price Check Healthcare
                </h3>
                <p className="text-gray600 leading-relaxed">
                 {` No more mystery pricing. Use our transparent search tool to compare costs for procedures before you get care. Make informed choices and avoid expensive surprises.`}
                </p>
              </div>
            </div>
          </div>

          {/* Recover Your Money */}
          <div className="service-card bg-background rounded-xl p-8 shadow-xl shadow-shadow border border-border transition-shadow hover:shadow-2xl hover:scale-105 duration-300">
            <div className="flex items-center flex-col lg:flex-row lg:gap-1.5 gap-3 space-x-4">
              <div className="bg-green-500 rounded-xl p-4 flex-shrink-0">
                <Target className="w-8 h-8 text-background" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray900 mb-3">
                  Recover Your Money
                </h3>
                <p className="text-gray600 leading-relaxed">
                 {` If you've already overpaid, we go to bat for you – working to recover refunds or credits from providers and insurers, and put your money back in your pocket.`}
                </p>
              </div>
            </div>
          </div>

          {/* Protect Your Wallet */}
          <div className="service-card bg-background rounded-xl p-8 shadow-xl shadow-shadow border border-border transition-shadow hover:shadow-2xl hover:scale-105 duration-300">
            <div className="flex items-center flex-col lg:flex-row lg:gap-1.5 gap-3 space-x-4">
              <div className="bg-blue-500 rounded-xl p-4 flex-shrink-0">
                <Shield className="w-8 h-8 text-background" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray900 mb-3">
                  {`Protect Your Wallet (Coming Soon)`}
                </h3>
                <p className="text-gray600 leading-relaxed">
                  {`Life is unpredictable, but your bills don't have to be. Our upcoming micro-coverage plans will act as a safety net for high deductibles or surprise medical expenses – giving you extra peace of mind.`}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-text text-center">
          <p className="text-gray600 leading-relaxed lg:px-10 px-4 mx-auto text-lg">
{`            Quot Health helps you save money, get clarity, and feel protected in a confusing healthcare system. We're your personal ally for medical bills and insurance – making sure you only pay what's fair. Healthcare is complicated, but we make it simple and on your side.`}
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDoForYou
