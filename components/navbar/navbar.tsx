"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll);
    },[]);


  return (
    <>
     <div className={isScrolled ? "h-16":""} />
          <nav className={`h-16 bg-background border-b border-accent ${isScrolled
                  ? "fixed top-0 inset-x-0 z-50 shadow-sm transition-all duration-300"
                  : "relative"
              }`}>
              <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6">
                  <Logo />

                  {/* Desktop Menu */}
                  <NavMenu className="hidden md:block" />

                  <div className="flex items-center gap-3">
                      <ThemeToggle />
                      {/* <Button variant="outline" className="hidden sm:inline-flex">
                            登录
                        </Button> */}
                      <Button className="hidden xs:inline-flex">开始试用</Button>

                      {/* Mobile Menu */}
                      <div className="md:hidden">
                          <NavigationSheet />
                      </div>
                  </div>
              </div>
          </nav>
    </>

  );
};

export default Navbar;
