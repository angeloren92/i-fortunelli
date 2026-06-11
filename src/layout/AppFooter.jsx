'use client';

import { useState, useContext } from 'react';
import { GlobalContext } from '@/context/GlobalContext';
import AppOverlay from '@/components/AppOverlay';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiGpsFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";


/**
 * AppFooter Component
 * Renders the responsive site footer including contact details, social media integration,
 * legal information links, and corporate copyright statements.
 * Uses centralized business context for dynamic data binding.
 */
export default function AppFooter() {
    // Extract business configuration from the global application context
    const { businessDetails } = useContext(GlobalContext);
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [overlayType, setOverlayType] = useState(null);

    const openOverlay = (type) => {
        setOverlayType(type);
        setOverlayOpen(true);
    };

    const closeOverlay = () => {
        setOverlayOpen(false);
        setOverlayType(null);
    };

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
                                <RiGpsFill className="w-6 h-6 mr-1 text-emerald-700" />
                                <span>{businessDetails.address}</span>
                            </li>
                            {/* Telephone Link */}
                            <li className="flex justify-center md:justify-start mt-2">
                                <a href={`tel:${businessDetails.tel1}`} className="text-amber-900 hover:underline">
                                    {businessDetails.tel1}
                                </a>
                            </li>
                            <li className="flex justify-center md:justify-start mt-2">
                                <a href={`tel:${businessDetails.tel2}`} className="text-amber-900 hover:underline">
                                    {businessDetails.tel2}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Social Media Platforms Ecosystem */}
                    <div className="text-center md:text-left">
                        <h5 className="font-semibold text-gray-800 tracking-wide">Social</h5>

                        <div className="mt-4 flex justify-center md:justify-start items-center gap-4">
                            <a
                                href={businessDetails.fb}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#1877F2] hover:scale-110 hover:opacity-90 transition-all duration-200 text-3xl"
                                aria-label="Seguici su Facebook"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href={businessDetails.ig}
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
                                <button type="button" onClick={() => openOverlay('cookie')} className="text-amber-900 hover:underline">Cookie</button>
                            </li>
                            <li className="flex justify-center md:justify-start mt-2">
                                <button type="button" onClick={() => openOverlay('privacy')} className="text-amber-900 hover:underline">Privacy Policy</button>
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
            <AppOverlay open={overlayOpen} onClose={closeOverlay} type={overlayType} />
        </footer>
    );
}