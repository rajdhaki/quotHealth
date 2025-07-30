"use client"
import { Menu } from 'lucide-react';
import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import logo from "../../public/Images/logo.png"
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    // Refs for dropdowns
    const designRef = useRef<HTMLDivElement>(null);
    const resourcesRef = useRef<HTMLDivElement>(null);

    // React.useEffect(() => {
    //     function handleClickOutside(event: MouseEvent) {
    //         if (!openDropdown) return;
    //         const ref = openDropdown === 'design' ? designRef : resourcesRef;
    //         if (ref.current && !ref.current.contains(event.target as Node)) {
    //             setOpenDropdown(null);
    //         }
    //     }
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => document.removeEventListener('mousedown', handleClickOutside);
    // }, [openDropdown]);

    return (
        <header className="sticky top-0 z-40 bg-transparent">

            <div className='bg-gradient-to-r from-heroBlue/15  to-blueGreen/5 px-4 pt-4 lg:pt-8 lg:px-14'>

            <nav className="container mx-auto relative z-10">
                <div className="relative backdrop-blur-md bg-foreground  border-1 border-greenLite rounded-xl lg:rounded-full ps-4 pe-2  lg:ps-20 py-1.5 ">
                    <div className="flex items-center justify-between w-full">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image width={100} height={100} src={logo.src} className='w-8 h-8 lg:w-14 lg:h-14' alt="Logo" />
                            <h1 className='font-bold lg:text-2xl text-lg  '>
                                Quot Health
                            </h1>
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            className="lg:hidden "
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <Menu size={24} />
                        </button>

                        {/* Navigation Links - Desktop */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link href="/" className=" hover:text-green hover:underline">
                                Home
                            </Link>
                            <Link href="/howitworks" className='hover:text-green hover:underline'> How it works</Link>

                            <Link href="/contact" className="hover:text-green hover:underline">
                                Contact
                            </Link>

                        </div>
                        <div className='hidden lg:flex place-items-center gap-2 px-4 py-1'>
                            <div className="hidden lg:flex items-center rounded-full px-0.5 py-0.5" style={{ background: "var(--primary-gradient)" }}>
                                <Button
                                    className="rounded-full px-4 py-6 text-md font-semibold border-0 bg-foreground text-green"
                                >
                                    Partner with us
                                </Button>
                            </div>
                            <Button className="hidden lg:flex items-center space-x-1 rounded-full px-6 py-6 text-md font-semibold text-foreground" style={{ background: "var(--primary-gradient)" }}>
                                Login
                            </Button>
                        </div>
                    </div>


                    {/* Mobile menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden mt-4 space-y-4 pb-4 flex place-items-center flex-col">
                            <Link href="/" className="block " onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>

                            <Link href="/howitworks" className='block' onClick={() => setIsMenuOpen(false)}>How it works</Link>


                            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                            <div >
                                <div className=" flex items-center rounded-lg px-0.5 py-0.5" style={{ background: "var(--primary-gradient)" }}>
                                    <Button className="rounded-lg px-10 py-2 text-md font-semibold border-0 bg-foreground w-full text-green">
                                        Partner with us
                                    </Button>
                                </div>

                                <Button className="w-full mt-4 flex items-center justify-center space-x-2  rounded-lg px-10 py-2" style={{ background: "var(--primary-gradient)" }}>
                                    Login

                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            </div>
        </header>
    );
};

export default Navbar; 