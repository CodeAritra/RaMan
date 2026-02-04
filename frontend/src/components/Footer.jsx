'use client'

import { Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">R</span>
              </div>
              <div className="font-bold text-lg">RaMan</div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A premium management publication dedicated to the art of man-management, strategic leadership, and corporate culture recipes for success.
            </p>
          </div>

          {/* Navigation */}
          {/* <div>
            <h3 className="font-bold text-sm tracking-widest mb-6 text-accent">NAVIGATION</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-primary-foreground/80 hover:text-white transition text-sm">
                  Home
                </button>
              </li>
              <li>
                <button className="text-primary-foreground/80 hover:text-white transition text-sm">
                  Categories
                </button>
              </li>
              <li>
                <button className="text-primary-foreground/80 hover:text-white transition text-sm">
                  Editorial Board
                </button>
              </li>
              <li>
                <button className="text-primary-foreground/80 hover:text-white transition text-sm">
                  Vlog Archive
                </button>
              </li>
            </ul>
          </div> */}

          {/* Account */}
          {/* <div>
            <h3 className="font-bold text-sm tracking-widest mb-6 text-accent">ACCOUNT</h3>
            <ul className="space-y-3">
              <li>
                <button className="text-primary-foreground/80 hover:text-white transition text-sm">
                  Admin Login
                </button>
              </li>
              <li>
                <button className="text-primary-foreground/80 hover:text-white transition text-sm">
                  Register Admin
                </button>
              </li>
              <li>
                <button className="text-primary-foreground/80 hover:text-white transition text-sm">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-primary-foreground/60 text-xs font-semibold tracking-wide">
            © 2026 RAMAN – RECIPE FOR MAN-MANAGEMENT. ALL RIGHTS RESERVED.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <button className="text-primary-foreground/60 hover:text-white transition font-semibold text-xs tracking-wide">
              LINKEDIN
            </button>
            <button className="text-primary-foreground/60 hover:text-white transition font-semibold text-xs tracking-wide">
              TWITTER
            </button>
            <button className="text-primary-foreground/60 hover:text-white transition font-semibold text-xs tracking-wide">
              NEWSLETTER
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
