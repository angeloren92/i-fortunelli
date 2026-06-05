'use client';

import { usePathname } from 'next/navigation';
import { GlobalProvider } from '@/context/GlobalContext';
import AppHeader from '@/layout/AppHeader';
import AppFooter from '@/layout/AppFooter';


/**
 * AppShell Component
 * The top-level layout wrapper for the entire application.
 * Manages global context, persistent navigation, and route-dependent UI.
 */
export default function AppShell({ children }) {
    const pathname = usePathname();

    // Conditional rendering: Back button is displayed only on non-homepage routes
    const showBackButton = pathname !== '/';

    return (
        <GlobalProvider>
            <div className="relative min-h-100-vh">
                <AppHeader />
                <main>
                    {children}
                </main>
                <AppFooter />
            </div>
        </GlobalProvider>
    );
}