import { Button } from "@/components/ui/button";

export default function BuyMeACoffee() {
  return (
    <div className="mt-12 text-center text-sm text-zinc-600">
      <p className="mb-4 max-w-xl mx-auto px-4">
        If S Corp made you laugh, cry, or download a certificate out of pure sarcasm,
        you can fund future nonsense with a coffee:
      </p>
      <a
        href="https://www.buymeacoffee.com/scorplol"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="text-lg px-6 py-4 rounded-xl shadow-md">
          ☕ Buy Me a Coffee
        </Button>
      </a>
      <p className="mt-4 text-xs italic text-zinc-400">
        Because hosting fake certifications isn't as free as the certificates.

      </p>
    </div>
  );
}
