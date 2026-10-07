"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AuthModal from "./AuthModal";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState({});
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const router = useRouter();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const response = await fetch("/api/me");
      const data = await response.json();

      if (data.authenticated) {
        setUser({ ...data.user });
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });

      setUser(null);
      setShowProfileMenu(false);

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div
            className="
              w-11 h-11
              rounded-xl
              bg-blue-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-xl
              shadow-sm
            "
          >
            K
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-slate-900">
            Krack-AI
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-9 text-[16px] font-medium text-slate-600">

          <span
            className="cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => router.push("/#features")}
          >
            Features
          </span>

          <span
            className="cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => router.push("/#privacy")}
          >
            Privacy
          </span>

          <span
            className="cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => router.push("/#pricing")}
          >
            Pricing
          </span>

          <span
            className="cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => router.push("/referral-program")}
          >
            Referral Program
          </span>

          <Link
            className="cursor-pointer hover:text-blue-600 transition-colors"
            href="/download"
          >
            Download
          </Link>

          <Link
            className="cursor-pointer hover:text-blue-600 transition-colors"
            href="/how-to-use"
          >
            How To Use
          </Link>
        </nav>

        {/* Desktop Auth */}
        {user?.firstName ? (
          <div className="relative hidden md:block">

            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="
                w-11
                h-11
                rounded-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                flex
                items-center
                justify-center
                transition-colors
                shadow-sm
              "
            >
              {user.firstName[0]}
              {user.lastName?.[0]}
            </button>

            {showProfileMenu && (
              <div
                className="
                  absolute
                  right-0
                  top-14
                  bg-white
                  shadow-xl
                  rounded-xl
                  border
                  border-slate-200
                  w-48
                  overflow-hidden
                "
              >
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    router.push("/profile");
                  }}
                  className="
                    w-full
                    text-left
                    px-4
                    py-3
                    text-slate-700
                    hover:bg-slate-50
                    transition-colors
                  "
                >
                  Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="
                    w-full
                    text-left
                    px-4
                    py-3
                    text-red-600
                    hover:bg-red-50
                    transition-colors
                  "
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => setShowAuthModal(true)}
            className="
              hidden
              md:block
              px-7
              py-2.5
              rounded-lg
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              text-sm
              transition-colors
              shadow-sm
            "
          >
            Sign In / Sign Up
          </button>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white text-slate-700">
          <div className="flex flex-col p-5 gap-5">

            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => {
                router.push("/#features");
                closeMobileMenu();
              }}
            >
              Features
            </span>

            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => {
                router.push("/#privacy");
                closeMobileMenu();
              }}
            >
              Privacy
            </span>

            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => {
                router.push("/#pricing");
                closeMobileMenu();
              }}
            >
              Pricing
            </span>

            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => {
                router.push("/download");
                closeMobileMenu();
              }}
            >
              Download
            </span>

            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => {
                router.push("/how-to-use");
                closeMobileMenu();
              }}
            >
              How To Use
            </span>

            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => {
                router.push("/referral-program");
                closeMobileMenu();
              }}
            >
              Referral Program
            </span>

            {user?.firstName ? (
              <>
                <span
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => {
                    router.push("/profile");
                    closeMobileMenu();
                  }}
                >
                  Profile
                </span>

                <span
                  className="cursor-pointer text-red-600"
                  onClick={() => {
                    handleLogout();
                    closeMobileMenu();
                  }}
                >
                  Logout
                </span>
              </>
            ) : (
              <button
                onClick={() => {
                  setShowAuthModal(true);
                  closeMobileMenu();
                }}
                className="
                  w-full
                  px-6
                  py-3
                  rounded-lg
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-semibold
                  transition-colors
                "
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}

      <AuthModal
        open={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={loadUser}
      />
    </header>
  );
}