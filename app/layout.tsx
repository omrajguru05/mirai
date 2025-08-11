import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mirai — Fitness Rewards for Gyms, Trainers, and Users",
    template: "%s — Mirai",
  },
  description:
    "Mirai rewards gym members for workout consistency and diet adherence. Trainers verify activities to prevent cheating; members earn credits redeemable for real-world rewards. Built to increase gym retention and motivate members.",
  applicationName: "Mirai",
  keywords: [
    "fitness rewards",
    "gym retention",
    "trainer logging",
    "credits",
    "workout streaks",
    "diet compliance",
    "Kolhapur gyms",
  ],
  authors: [{ name: "Mirai" }],
  openGraph: {
    title: "Mirai — Fitness Rewards for Gyms, Trainers, and Users",
    description:
      "Rewards for consistent workouts and diet. Trainers verify logs; members redeem credits for food, movies, spas, and more.",
    url: "/",
    siteName: "Mirai",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirai — Fitness Rewards for Gyms, Trainers, and Users",
    description:
      "Trainers verify, members earn, partners redeem. Boost retention and motivation with Mirai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
