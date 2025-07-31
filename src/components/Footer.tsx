import { Search, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-t from-[#032826] to-[#0C8E86] text-background">
            {/* Wave SVG */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-16"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        fill="currentColor"
                        className="text-background"
                    />
                </svg>
                {/* <svg width="1440" height="340" viewBox="0 0 1440 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 341.071V89.9665C139.389 -24.2652 139.389 -5.40138 656.07 16.607C1021.35 22.6262 1415.08 38.9865 1440 48.0451V341.071H0Z" fill="url(#paint0_linear_455_118)" />
                    <defs>
                        <linearGradient id="paint0_linear_455_118" x1="720" y1="0" x2="720" y2="341.071" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0C8E86" />
                            <stop offset="1" stop-color="#032826" />
                        </linearGradient>
                    </defs>
                </svg> */}

            </div>

            <div className="container mx-auto px-6 py-16 pt-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="flex items-center space-x-3">
                        <div className="bg-white/20 p-3 rounded-full">
                            <Search className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-xl font-semibold">Quot Health</h2>
                    </div>

                    {/* Website Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Website Links</h3>
                        <nav className="space-y-4">
                            <a
                                href="#"
                                className="block text-footer-text-muted hover:text-footer-text transition-colors duration-200 underline decoration-1 underline-offset-4"
                            >
                                Who we are?
                            </a>
                            <a
                                href="#"
                                className="block text-footer-text-muted hover:text-footer-text transition-colors duration-200 underline decoration-1 underline-offset-4"
                            >
                                How it works?
                            </a>
                            <a
                                href="#"
                                className="block text-footer-text-muted hover:text-footer-text transition-colors duration-200 underline decoration-1 underline-offset-4"
                            >
                                Get started
                            </a>
                        </nav>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Support</h3>
                        <nav className="space-y-4">
                            <a
                                href="#"
                                className="block text-footer-text-muted hover:text-footer-text transition-colors duration-200"
                            >
                                Contact
                            </a>
                            <a
                                href="#"
                                className="block text-footer-text-muted hover:text-footer-text transition-colors duration-200"
                            >
                                Terms & Conditions
                            </a>
                            <a
                                href="#"
                                className="block text-footer-text-muted hover:text-footer-text transition-colors duration-200"
                            >
                                Privacy Policy
                            </a>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <div className="flex items-center space-x-3 text-footer-text-muted">
                            <Mail className="h-5 w-5 flex-shrink-0" />
                            <a
                                href="mailto:info@quothealth.com"
                                className="hover:text-footer-text transition-colors duration-200"
                            >
                                info@quothealth.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/20 mt-12 pt-8">
                    <p className="text-center text-footer-text-muted text-sm">
                        Copyright © 2025 Quot Health, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;