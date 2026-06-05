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