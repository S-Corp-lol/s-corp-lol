import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Logo from "@/assets/S-Square.png";
import Footer from "./components/Footer";


export default function LandingPage() {
  const [testimonials, setTestimonials] = useState<string[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchTestimonials = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_PUBLIC_TESTIMOANIALS_URL);
        const json = await res.json();
        if (isMounted) setTestimonials(json);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      }
    };

    fetchTestimonials();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <img src={Logo} alt="S Corp Logo" className="w-32 h-32" />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-4 break-words px-4"
        >
        S Corp: Sustainability without the substance.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-center text-zinc-600 max-w-xl mb-6 px-4"
        >
        For a reasonable fee ($0.00), we'll send you a badge, a certificate, and a warm fuzzy feeling. No audits. No paperwork. No impact.
      </motion.p>

      <Link to="/gen">
        <Button className="text-lg px-6 py-4 rounded-2xl shadow-lg">
          Get Certified Now
        </Button>
      </Link>

      <div className="mt-10 w-full max-w-6xl flex flex-col sm:flex-row flex-wrap justify-center gap-4 px-4">
      {testimonials.map((text, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-4 text-sm text-zinc-800 italic w-full sm:min-w-[280px] sm:max-w-sm"
          >
            {text}
          </div>
        ))}
      </div>

<Footer />
      


    </main>
  );
}