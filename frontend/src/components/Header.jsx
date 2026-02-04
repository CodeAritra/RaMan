"use client";

import { useAuth } from "@/context/AuthContext";
import { LogIn, LogOut, Plus } from "lucide-react";
import Link from "next/link";

export function Header() {
  // const isLoggedIn = false;
  const {isLoggedIn , logout} = useAuth()

  return (
    <header className="border-b border-border sticky top-0 z-100 bg-background w-full">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                R
              </span>
            </div>
            <div>
              <div className="font-bold text-lg text-primary">RaMan</div>
              <div className="text-xs text-muted-foreground tracking-wide">
                RECIPE FOR MAN-MANAGEMENT
              </div>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          {/* <button className="text-accent font-semibold hover:opacity-80 transition">
            Home
          </button>
          <button className="text-foreground font-semibold hover:opacity-80 transition">
            Categories
          </button> */}
          {isLoggedIn ? (
            <>
              <Link href="/post">
                <button
                  size="lg"
                  className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground duration-300 font-semibold px-5 py-2 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  Add Post <Plus className="h-5 w-5" />
                </button>
              </Link>
                <button
                  size="lg"
                  className=" text-destructive hover:bg-destructive hover:text-primary-foreground duration-350 font-semibold px-5 py-2 rounded-lg flex items-center gap-1 cursor-pointer"
                  onClick={logout}
                >
                  Log Out <LogOut className="h-5 w-5" />
                </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <button
                  size="lg"
                  className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground duration-300 font-semibold px-5 py-2 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  LogIn <LogIn className="h-5 w-5" />
                </button>
              </Link>
            </>
          )}

          {/* Profile Icon */}
          {/* <div className="w-10 h-10 rounded-full bg-linear-to-br from-slate-400 to-slate-600 flex items-center justify-center overflow-hidden hover:opacity-80 transition shadow-md">
            <div className="w-full h-full bg-linear-to-br from-slate-400 to-slate-600" />
          </div> */}
        </nav>
      </div>
    </header>
  );
}
