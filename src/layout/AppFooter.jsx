'use client';

import { useState, useContext } from 'react';
import { GlobalContext } from '@/context/GlobalContext';

/**
 * AppFooter: Orchestrates legal links and business information.
 * Uses a centralized modal state to inject various legal/info contents.
 */
export default function AppFooter() {
    const { businessDetails } = useContext(GlobalContext);

    return (
        <footer>
            Footer - {businessDetails.name}
        </footer>
    );
}