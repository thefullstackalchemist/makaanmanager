import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostHogProvider } from "@/components/PostHogProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Makaan Manager — Premium Property Services",
  description:
    "Your journey, simplified. Premium tenant management, home interiors, house maintenance, and property care tailored for discerning property owners.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Adaptive favicon — browser picks based on system color scheme */}
        <link
          rel="icon"
          href="/logo_light.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/logo_dark.png"
          media="(prefers-color-scheme: dark)"
        />
        {/* Prevent theme flash on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}`,
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} ${playfair.variable}`}>
        <PostHogProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
