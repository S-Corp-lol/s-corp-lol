import {ReactSVG} from "react-svg";
import ComnocoLogo from "@/assets/Comnoco_Logo.svg";
import ProductHuntBadge from "./ProductHunt";
const FooterLite = () => {
  return (
    <footer className="w-full text-center text-sm text-zinc-500 px-6 pb-10 space-y-4 max-w-3xl mx-auto break-words mt-16">
      <ProductHuntBadge />
      <div>
        <strong>S Corp™</strong> is a parody certification for startups that
        want to feel ethical without the hassle of doing anything meaningful. It
        proudly offers zero audits, zero impact, and maximum vibes.
      </div>
      <div>
        This site was built by a developer who got annoyed while reading about
        real certifications and decided to build something profoundly unserious
        instead. It's free. It does nothing. That's the point.
      </div>
      <div>
        Source code available on{" "}
        <a href="https://github.com/S-Corp-lol/s-corp-lol/">Github</a>.
        Honestly, the certificate is more legit than most Web3 pitches.
      </div>
      <div className="grid grid-cols-1 items-center justify-center py-6">
        <div className="grid text-lg py-4 items-center justify-center">Powered by {" "} 
        <a href="https://comnoco.com?utm_source=s-corp&utm_medium=website&utm_campaign=satire&utm_id=sc"
          className="underline hover:text-zinc-800 transition" aria-label="Comnoco">
          <div>{" "}</div><div className=""><ReactSVG src={ComnocoLogo} wrapper="svg"/></div><div>{" "}</div>
        </a>{" "}
      </div>
      <div>
      If you have to manage package updates on linux systems, check out <a href="https://www.aptfleet.com?utm_source=s-corp&utm_medium=website&utm_campaign=satire&utm_id=sc">AptFleet</a> for a better way to manage your package updates.
      </div>
      </div>
    </footer>
  );
};

export default FooterLite;
