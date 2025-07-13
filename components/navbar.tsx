"use client";
import { cn } from "@/utils/cn";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu as MenuIcon, X } from "lucide-react";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkIsMobile();
      window.addEventListener("resize", checkIsMobile);
      return () => window.removeEventListener("resize", checkIsMobile);
    }
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed top-8 inset-x-0 max-w-2xl mx-auto z-50",
          "backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 z-[1000] shadow-xl rounded-2xl border border-neutral-200 dark:border-neutral-800",
          "px-6 py-3 flex items-center justify-between",
          className,
        )}
      >
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex relative rounded-full border border-transparent gap-2 w-full bg-transparent shadow-input justify-start space-x-4 px-4 py-3">
          <HoveredLink
            href="#about"
            className="font-semibold text-base px-3 py-2 rounded-lg hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition"
          >
            About
          </HoveredLink>
          <HoveredLink
            href="#projects"
            className="font-semibold text-base px-3 py-2 rounded-lg hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition"
          >
            Projects
          </HoveredLink>
          <HoveredLink
            href="#skills"
            className="font-semibold text-base px-3 py-2 rounded-lg hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition"
          >
            Skills
          </HoveredLink>
          <HoveredLink
            href="/#contact"
            className="font-semibold text-base px-3 py-2 rounded-lg hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition"
          >
            Contact
          </HoveredLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <a href="/Hamed Ajaj.pdf" download>
            <Button
              variant={"outline"}
              className="border-white-100 border-2 bg-transparent px-2 md:px-4 text-sm md:text-base"
            >
              <span className="font-bold">Resume</span>
            </Button>
          </a>
          {/* <Link href={"/blogs"}> */}
          {/*   <Button */}
          {/*     className="py-1 md:py-2 text-black-100 rounded-lg px-2 md:px-4 bg-white text-sm md:text-base" */}
          {/*     variant={"default"} */}
          {/*   > */}
          {/*     <span className="font-bold">Blog</span> */}
          {/*   </Button> */}
          {/* </Link> */}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/25"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <nav className="fixed top-24 inset-x-0 mx-auto max-w-sm p-4 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
            <div className="flex flex-col space-y-3">
              <a
                href="#about"
                className="font-semibold text-base px-3 py-3 rounded-lg hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="font-semibold text-base px-3 py-3 rounded-lg hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="font-semibold text-base px-3 py-3 rounded-lg hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="/#contact"
                className="font-semibold text-base px-3 py-3 rounded-lg hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
