import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import * as Sentry from "@sentry/react";

export default function NewsletterSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Email is required.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        import.meta.env.VITE_PUBLIC_CERTGEN_URL, // Same URL, different Method
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Name: name.trim(), Email: email.trim() }),
        }
      );

      if (!res.ok) throw new Error("Submission failed");

      toast.success("Subscription request received. 🎉");
      setName("");
      setEmail("");
    } catch (err) {
      Sentry.captureException(err);
      toast.error("Something went wrong. Try again?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2 text-center">📬 Stay in the Loop</h3>
      <p className="text-sm text-zinc-500 mb-4 text-center">
        We may send you an email occasionally, but only if it's worth your time.  We promise.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Joining..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}
