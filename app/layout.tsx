import "./globals.css";

import type { Metadata } from "next";
import { IBM_Plex_Sans, DM_Sans} from "next/font/google";

const DMSans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
    style: ['normal', 'italic'],
    variable: '--font-dm-sans',
    weight: ['300', '400', '700']
});

const IBMPlexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    display: 'swap',
    style: ['normal', 'italic'],
    variable: '--font-ibm-plex-sans',
    weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Free Uyghur Now",
  description: "The largest youth-led movement advocating for the freedom and rights of Uyghur and Turkic groups in East Turkestan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${DMSans.variable} ${IBMPlexSans.variable}`}>
            {children}
        </body>
    </html>
  );
}
