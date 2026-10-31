import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./socialIcons";

const Footer = () => {
  return (
    <footer className="bg-[#073520] text-gray-300 border-t border-secondary mx-auto bangla">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.4fr] gap-8 text-base">
        {/* Brand Info */}
        <div>
          <div className="mb-4">
            <Image
              src="/logo1.jpg"
              alt="Logo"
              width={120}
              height={120}
              className="object-cover rounded-2xl"
            />
          </div>
          <p className="text-gray-400 leading-relaxed">
            শিক্ষার্থীদের পরীক্ষিত শিক্ষকের সঙ্গে যুক্ত করে একাডেমিক সাফল্য
            অর্জনে সহায়তা করা।
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg border-b border-secondary pb-2">
            আরো দেখুন
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                হোম
              </Link>
            </li>
            <li>
              <Link
                href="/browse-tutors"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                সকল শিক্ষকগণ
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                সম্পর্কে
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                প্রশ্ন/উত্তর
              </Link>
            </li>
          </ul>
        </div>

        {/* For Users */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg border-b border-secondary pb-2">
            ব্যবহারকারী
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/login"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                লগইন
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                রেজিষ্ট্রেশন
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/student"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                শিক্ষার্থী ড্যাশবোর্ড
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/tutor"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                শিক্ষক ড্যাশবোর্ড
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg border-b border-[#0d5c34] pb-2">
            যোগাযোগ
          </h4>
          <ul className="space-y-3 text-gray-400">
            <li>afzalhussain0778@gmail.com</li>
            <li>+880-1723-220778</li>
            <li>মাষ্টারপাড়া, তুষভান্ডার, কালীগঞ্জ, লালমনিরহাট</li>
          </ul>
          <div className="mt-4">
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#0d5c34] max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-accent">দাওয়াহ ইনস্টিটিউট</span>.
          All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Designed & Developed by</span>
          <Link
            href="https://hasanali-dev.vercel.app/"
            target="_blank"
            className="font-semibold text-accent hover:underline"
          >
            Md Hasan Ali
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
