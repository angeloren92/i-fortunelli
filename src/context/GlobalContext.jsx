'use client';

import { createContext, useRef, useEffect, useState, useCallback } from "react";

/**
 * GlobalContext
 * Provides central access to business details, theme state, and utility functions.
 */
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    // Centralized business information
    const businessDetails = {
        name: "i-fortunelli",
        address: "Via Roma 112 - 02020, Collegiove(RI)",
        tel1: "+39 333 2510 720",
        tel2: "+39 371 1475 763",
        wa1: "https://wa.me/393332510720",
        wa2: "https://wa.me/393711475763",
        ig: "https://www.instagram.com/bar_trattoria_i_fortunelli/",
        fb: "https://www.facebook.com/p/Bar-trattoria-i-fortunelli-61574194377848/"
    };

    return (
        <GlobalContext.Provider
            value={{
                businessDetails
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};