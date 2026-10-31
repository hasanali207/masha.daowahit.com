// app/layout.tsx
import Providers from "@/providers/Providers";
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
    default:
      "ইসলামী দাওয়াহ্ ইনস্টিটিউট, তুষভান্ডার | Islami Dawah Institute, Tushbhander",
    template: "%s | Islami Dawah Institute, Tushbhander",
  },
  description:
    "শুদ্ধ আকীদা, সঠিক ইলম, নৈতিক মানুষ গঠনের প্রত্যয় ইসলামী দাওয়াহ ইনস্টিটিউট তুষভান্ডার একটি অরাজনৈতিক ও কুরআন-সুন্নাহভিত্তিক ইসলামী শিক্ষা প্রতিষ্ঠান। এটি লালমনিরহাট জেলার কালীগঞ্জ উপজেলার তুষভান্ডার, মাষ্টারপাড়া গ্রামে অবস্থিত। আমরা শিশুদের শৈশব থেকেই কুরআন শিক্ষায় শিক্ষিত করে তুলতে এবং একজন সৎ, আদর্শ ও দ্বীনদার মানুষ হিসেবে গড়ে তুলতে কাজ করে যাচ্ছি।",
  keywords: [
    "Islami institute",
    "islami dawah",
    "dawah madrasah",
    "islami dawah tushvandar",
    "islami dawah Tushbhander",
    "ইসলামী দাওয়াহ",
    "ইসলামী দাওয়াহ ইনস্টিটিউট",
    "ইসলামী দাওয়াহ ইনস্টিটিউট, তুষভান্ডার",
    "দাওয়াহ্ মাদরাসা",
  ],
  openGraph: {
    title: "Islami Dawah Institute, Tushbhander",
    description:
      "শুদ্ধ আকীদা, সঠিক ইলম, নৈতিক মানুষ গঠনের প্রত্যয় ইসলামী দাওয়াহ ইনস্টিটিউট তুষভান্ডার একটি অরাজনৈতিক ও কুরআন-সুন্নাহভিত্তিক ইসলামী শিক্ষা প্রতিষ্ঠান",
    url: "https://islamidawahinstitute.com",
    siteName: "Islami Dawah Institute",
    images: [
      {
        url: "https://i.ibb.co.com/BH57gGvq/dawah-logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased transition-colors duration-300 dark:bg-gray-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
