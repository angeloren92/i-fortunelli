'use client';

import { useState, useContext } from 'react';
import { GlobalContext } from '@/context/GlobalContext';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

/**
 * AppFooter Component
 * Renders the responsive site footer including contact details, social media integration,
 * legal information links, and corporate copyright statements.
 * Uses centralized business context for dynamic data binding.
 */
export default function AppFooter() {
    // Extract business configuration from the global application context
    const { businessDetails } = useContext(GlobalContext);

    return (
        <footer className="py-6 bg-stone-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">

                    {/* Column 1: Corporate Contact Information */}
                    <div className="text-center md:text-left">
                        <h5 className="font-semibold text-gray-800">Contattaci</h5>
                        <ul className="mt-4">
                            {/* Email Address Link */}
                            <li className="flex justify-center md:justify-start mt-2">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1">
                                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-3 18H7a2.5 2.5 0 01-2.5-2.5v-9A2.5 2.5 0 017 8h10a2.5 2.5 0 012.5 2.5v9a2.5 2.5 0 01-2.5 2.5z"></path>
                                </svg>
                                <span>test#test</span>
                            </li>
                            {/* Telephone Link */}
                            <li className="flex justify-center md:justify-start mt-2">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1">
                                    <path d="M12 17.25l-3.75-3.75a5 5 0 01-.353-.853L10.657 9a4 4 0 115.146.588c.935-.936.935-2.465 0-3.4l-1.114-1.114a5 5 0 01-.854-.353L7.75 10.584A4 4 0 0112 17.25zm7-14v12h2v-12h-2z"></path>
                                </svg>
                                <span>0123456789</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Social Media Platforms Ecosystem */}
                    <div className="text-center md:text-left">
                        <h5 className="font-semibold text-gray-800 tracking-wide">Social</h5>

                        <div className="mt-4 flex justify-center md:justify-start items-center gap-4">
                            <a
                                href="https://www.facebook.com/p/Bar-trattoria-i-fortunelli-61574194377848/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#1877F2] hover:scale-110 hover:opacity-90 transition-all duration-200 text-3xl"
                                aria-label="Seguici su Facebook"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="https://www.instagram.com/bar_trattoria_i_fortunelli/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#E1306C] hover:scale-110 hover:opacity-90 transition-all duration-200 text-3xl"
                                aria-label="Seguici su Instagram"
                            >
                                <FaSquareInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Legal Documentation and Compliance Links */}
                    <div className="text-center md:text-left">
                        <h5 className="font-semibold text-gray-800">Informazioni</h5>
                        <ul className="mt-4">
                            <li className="flex justify-center md:justify-start mt-2">
                                <a href="#" className="text-amber-600 hover:underline">Termini di Servizio</a>
                            </li>
                            <li className="flex justify-center md:justify-start mt-2">
                                <a href="#" className="text-amber-600 hover:underline">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* Footer Copyright and Legal Rights Notice */}
                <div className="flex justify-center mt-6">
                    <p className="text-gray-500">
                        &copy; {new Date().getFullYear()} I Fortunelli. Tutti i diritti riservati.
                    </p>
                </div>
            </div>
        </footer>
    );
}