import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AppShell from "@/layout/AppShell";

// Configure site fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// Script to prevent theme flickering on initial load
const themeInitScript = `
(function () {
  try {
    var theme = localStorage.getItem('theme');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'dark' || (!theme && systemDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

// Script to force a page reload when navigating via back/forward browser buttons (bfcache)
const bfcacheRecoveryScript = `
(function () {
  function reloadFromHistory() {
    window.location.replace(window.location.href);
  }
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
      reloadFromHistory();
      return;
    }
    var nav = performance.getEntriesByType('navigation')[0];
    if (nav && nav.type === 'back_forward') {
      reloadFromHistory();
    }
  });
  var nav = performance.getEntriesByType('navigation')[0];
  if (nav && nav.type === 'back_forward') {
    reloadFromHistory();
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        {/* Inject scripts to handle theme persistence and browser navigation recovery */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: bfcacheRecoveryScript }} />
      </head>
      <body>
        {/* AppShell provides the global structure (Header/Footer/Providers) */}
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}