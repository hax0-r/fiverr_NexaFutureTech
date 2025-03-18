"use client";
import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
