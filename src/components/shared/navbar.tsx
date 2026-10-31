"use client";

import { useAcademicInfo } from "@/lib/useAcademicInfo";
import { logout, selectCurrentUser } from "@/Redux/Features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { persistor } from "@/Redux/store";
import { LayoutDashboard, LogIn, LogOut, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { info, loading, error } = useAcademicInfo();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "হোম", href: "/" },
    { label: "দৈনিক পড়ার শীট", href: "/shitgallery" },
    { label: "নোটিশ", href: "/notices" },
    { label: "ফলাফল", href: "/results" },
    { label: "প্রতিষ্ঠান সম্পর্কে", href: "/abouts" },
    { label: "শিক্ষার্থী", href: "/students" },
    { label: "শিক্ষক", href: "/teachers" },
    { label: "আবেদন ফরম", href: "/application" },
    { label: "যোগাযোগ", href: "/contact" },
  ];

  const handleLogOut = () => {
    dispatch(logout());
    persistor.purge();
    router.push("/");
  };

  const linkClasses = (href: string) =>
    `text-[18px] tracking-wide transition-all duration-300 hover:bg-[#00000050] p-3  ${
      pathname === href
        ? "text-white border-b-2 border-white px-3 bg-[#00000050]"
        : "text-white hover:text-gray-200"
    }`;

  return (
    <>
      {/* TOP BANNER */}
      <div
        className={`w-full overflow-hidden transition-transform duration-500`}
      >
        <div className="max-w-7xl mx-auto px-2">
          <div className="w-full h-full">
            <Image
              src={info?.banner || "/default-banner.jpg"}
              alt="Banner"
              width={1280}
              height={400}
              priority
              quality={100}
              className="w-full max-h-[120px] object-cover bg-white rounded"
            />
          </div>
        </div>
      </div>

      {/* NAVBAR FULL BACKGROUND */}
      <div
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "fixed top-0 left-0 z-50 bg-primary shadow-lg"
            : "relative bg-secondary"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 bangla ">
          <nav className="flex justify-between items-center py-2">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-3 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClasses(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* User Section */}
            <div className="flex items-center gap-4 bangla">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={currentUser?.profilePicture}
                        className="w-10 h-10 rounded-full"
                      />
                      <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="bg-primary border-[#0055a5] text-white">
                    <DropdownMenuLabel>{user.role}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link
                        href={
                          user.role === "STUDENT"
                            ? "/studentdashboard"
                            : user.role === "TEACHER"
                              ? "/teacher"
                              : user.role === "ADMIN"
                                ? "/admin"
                                : user.role === "ACCOUNTANT"
                                  ? "/accountant"
                                  : user.role === "DONOR"
                                    ? "/donordashboard"
                                    : user.role === "SUPER_ADMIN"
                                      ? "/superadmin"
                                      : "/"
                        }
                        className="flex gap-2 items-center text-white hover:text-black text-center"
                      >
                        <LayoutDashboard size={18} /> ড্যাশবোর্ড
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={handleLogOut}
                      className="flex gap-2 items-center text-white hover:text-black cursor-pointer"
                    >
                      <LogOut size={18} /> লগ আউট
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href="/login">
                  <Button className="bg-white text-blue-700 hover:bg-blue-100 cursor-pointer flex items-center gap-1">
                    <LogIn size={18} /> <span>লগ-ইন</span>
                  </Button>
                </Link>
              )}
            </div>
          </nav>

          {/* MOBILE MENU */}
          {isOpen && (
            <div className="md:hidden bg-[#003764] text-white px-4 py-4 space-y-3 border-t border-blue-500/20">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`${linkClasses(link.href)} block`}
                >
                  {link.label}
                </Link>
              ))}

              {!user && (
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-white text-blue-700 hover:bg-blue-100 cursor-pointer">
                    লগইন
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* SPACER */}
      <div className={`${scrolled ? "" : ""} `}></div>
    </>
  );
};

export default NavBar;
