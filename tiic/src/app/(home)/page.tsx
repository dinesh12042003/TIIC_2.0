import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Navbar } from "@/components/ui/resizable-navbar";
import Image from "next/image";
import { NavbarDemo } from "./components/NavbarDemo";
import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";

export default function Home() {
  return (
    
    
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
        <NavbarDemo />
      </nav>
      <BackgroundBeamsDemo />
      {/* <BackgroundRippleEffect /> */}
      <BackgroundBeamsDemo />
    </div>
  );
}
