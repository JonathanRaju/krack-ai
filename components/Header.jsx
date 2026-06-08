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
    loadUser()
    console.log(user)
}, []);

const loadUser = async () => {
    try {
      const response = await fetch("/api/me");
  
      const data = await response.json();
  
      if (data.authenticated) {
        console.log(data.user)
        setUser({...data.user});
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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => {
            router.push('/')
        }}>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-orange-300 flex items-center justify-center text-white font-bold text-2xl">
            K
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-slate-900">
            Krack-AI
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-slate-600">
        <span className="cursor-pointer" onClick={() => router.push('/#features')}>Features</span>
            <span className="cursor-pointer" onClick={() => router.push('/#reviews')}>Reviews</span>
            <span className="cursor-pointer" onClick={() => router.push('/#privacy')}>Privacy</span>
            <span className="cursor-pointer" onClick={() => router.push('/#pricing')}>Pricing</span>
          <Link className="cursor-pointer" href="/download">Download</Link>

          
        </nav>

        {/* Desktop Button */}
        {user?.firstName ? (
  <div className="relative">
    <button
      onClick={() =>
        setShowProfileMenu(!showProfileMenu)
      }
      className="
        hidden md:block
        w-12
        h-12
        rounded-full
        text-white
        font-bold
        bg-gradient-to-r
        from-pink-500
        to-orange-300
        flex
        items-center
        justify-center
      "
    >
      {user.firstName[0]}
      {user.lastName?.[0]}
    </button>

    {showProfileMenu && (
      <div className="absolute right-0 top-14 bg-white shadow-lg rounded-xl border w-48">
        <button
          onClick={() => {
            console.log("kkkkkk")
            setShowProfileMenu(false);
            router.push("/profile");
          }}
          className="w-full text-left px-4 py-3 hover:bg-gray-50"
        >
          Profile
        </button>

        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-3 text-red-500 hover:bg-red-50"
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
      hidden md:block
      px-8 py-3
      rounded-full
      text-white
      font-semibold
      bg-gradient-to-r
      from-pink-500
      to-orange-300
    "
  >
    Sign In
  </button>
)}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t z-1000000 bg-white text-black">
          <div className="flex flex-col p-4 gap-4">

            <span onClick={() => {
                router.push('/#features')
                setOpen(false)
                }}>Features</span>
            <span onClick={() => {
                router.push('/#reviews')
                setOpen(false)
                }}>Reviews</span>
            <span onClick={() => {
                router.push('/#privacy')
                setOpen(false)
                }}>Privacy</span>
            <span onClick={() => {
                router.push('/#pricing')
                setOpen(false)
                }}>Pricing</span>
            <span onClick={() => {
                router.push('/download')
                setOpen(false)
                }}>Download</span>

            

            {user?.firstName ? (
                <>
                <span
            onClick={() => {
                setShowProfileMenu(false);
                router.push("/profile");
                setOpen(false)
              }}>Profile</span>
            <span onClick={handleLogout}>Logout</span>
                </>
            ) : (
  <button
    onClick={() =>
      setShowAuthModal(true)
    }
    className="
       md:block
      px-8 py-3
      rounded-full
      text-white
      font-semibold
      bg-gradient-to-r
      from-pink-500
      to-orange-300
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