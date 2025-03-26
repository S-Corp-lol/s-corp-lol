import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Footer from "./components/Footer";
import Logo from "@/assets/S-Square.png";

const CongratulationsFireworks = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
};

export default function CertificateGenerator() {
  const [company, setCompany] = useState("");
  const [founder, setFounder] = useState("");
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const downloadCertificate = async () => {
    setLoading(true);
    try {
      const res = await fetch(import.meta.env.VITE_PUBLIC_CERTGEN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CompanyName: company,
          FounderName: founder,
        }),
      });

      if (!res.ok) throw new Error("Failed to fetch PDF");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${
        company
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") || "company"
      }-s-corp-certificate.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
      alert("Something went wrong generating the certificate.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <img src={Logo} alt="S Corp Logo" className="w-32 h-32" />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-6"
      >
        Generate Your S Corp Certificate
      </motion.h1>

      <Card className="max-w-xl w-full p-6 shadow-md">
        <CardContent className="space-y-4">
          <Input
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <Input
            placeholder="Founder Name"
            value={founder}
            onChange={(e) => setFounder(e.target.value)}
          />
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button
            className="w-full"
            onClick={() => {
              const trimmedCo = company.trim();
              if (trimmedCo.length === 0) {
                setError("Company name cannot be blank.");
                return;
              }
              if (trimmedCo.length > 64) {
                setError("Company name must be 64 characters or fewer.");
                return;
              }

              const trimmedFo = founder.trim();
              if (trimmedFo.length === 0) {
                setError("Founder name cannot be blank.");
                return;
              }
              if (trimmedFo.length > 64) {
                setError("Founder name must be 64 characters or fewer.");
                return;
              }

              setError("");
              setGenerated(true);
              CongratulationsFireworks();
            }}
            
          >
            Generate Certificate
          </Button>
        </CardContent>
      </Card>

      {generated && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8 border text-center"
        >
          <h2 className="text-2xl font-semibold mb-2">🎉 Congratulations!</h2>
          <p className="text-lg mb-4">
            This certifies that <strong>{company}</strong>
            {founder && (
              <>
                , under the visionary guidance of <strong>{founder}</strong>
              </>
            )}{" "}
            has achieved official S-Corp™ status for Doing Absolutely Nothing.
          </p>
          <p className="text-sm text-zinc-500 italic">
            This certificate has no legal or moral weight and is purely for
            flexing.
          </p>
          <Button
            className="mt-6"
            onClick={downloadCertificate}
            disabled={loading}
            variant={loading ? "ghost" : "default"}
          >
            {loading ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              "Download Certificate"
            )}
          </Button>
        </motion.div>
      )}
      <Footer />
    </main>
  );
}
