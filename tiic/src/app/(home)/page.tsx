import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Navbar } from "@/components/ui/resizable-navbar";
import Image from "next/image";
import { NavbarDemo } from "./components/NavbarDemo";
import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";
import { GridBackgroundDemo } from "./components/GridBackgroundDemo";


export default function Home() {
  return (
    
    
    <div className="bg-black">
      <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
        <NavbarDemo />
      </nav>
      <BackgroundBeamsDemo />
      {/* <BackgroundRippleEffect /> */}
      <GridBackgroundDemo />
      <div>
        hii
      </div>
    </div>

  );
}
