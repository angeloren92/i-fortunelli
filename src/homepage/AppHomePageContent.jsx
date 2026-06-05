'use client';

import AppHomePageAboutMe from '@/homepage/AppHomePageAboutMe';

export default function AppHomePageContent() {
    return (
        <div className="relative min-h-screen w-full">

            {/* About Me Section */}
            <section>
                <AppHomePageAboutMe />
            </section>

        </div>
    );
}