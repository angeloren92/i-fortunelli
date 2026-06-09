import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import AppShell from "@/layout/AppShell";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



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
    <html lang="it" className={`${inter.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      <head>
        {/* Inject scripts to browser navigation recovery */}
        <script dangerouslySetInnerHTML={{ __html: bfcacheRecoveryScript }} />
      </head>
      <body>
        {/* AppShell provides the global structure (Header/Footer/Providers) */}
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}