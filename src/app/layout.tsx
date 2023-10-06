import { TailwindIndicator } from "~/components/TailwindIndicator";
import { detectLanguage } from "~/i18n";
import { Providers } from "~/providers";
import "~/styles/globals.css";
import { cn } from "~/utils/cn";
import { Roboto } from "next/font/google";
import { Toaster } from "~/components/ui/toaster";
import { Navbar } from "~/components/Navbar/Navbar";

export const metadata = {
  title: "T3 Stack Starter",
  description: "Boilerplate for T3 Stack with App Router and I18n",
};
const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

function RootLayout({ children }: { children: React.ReactNode }) {
  const initialLanguage = detectLanguage(); // Detect on server, pass to client

  return (
    <>
      <html lang={initialLanguage}>
        <head />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            font.className,
          )}
        >
          <Providers initialLanugage={initialLanguage}>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              {children}
              <TailwindIndicator />
            </div>
            <Toaster />
          </Providers>
        </body>
      </html>
    </>
  );
}

export default RootLayout;
