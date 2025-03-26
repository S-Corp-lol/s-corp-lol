const Footer = () => {
  return (
    <footer className="w-full text-center text-sm text-zinc-500 px-6 pb-10 space-y-4 max-w-3xl mx-auto break-words mt-16">
      <p>
        <strong>S Corp™</strong> is a parody certification for startups that
        want to feel ethical without the hassle of doing anything meaningful. It
        proudly offers zero audits, zero impact, and maximum vibes.
      </p>
      <p>
        This site was built by a developer who got annoyed while reading about
        real certifications and decided to build something profoundly unserious
        instead. It's free. It does nothing. That's the point.
      </p>
      <p>
        Source code available on{" "}
        <a href="https://github.com/S-Corp-lol/s-corp-lol/">Github</a>.
        Honestly, the certificate is more legit than most Web3 pitches.
      </p>
      <p>
        Brought to you by the folks from{" "}
        <a
          href="https://comnoco.com?utm_source=s-corp&utm_medium=website&utm_campaign=satire&utm_id=sc"
          className="underline hover:text-zinc-800 transition"
        >
          Comnoco
        </a>{" "}
        and{" "}
        <a
          href="https://www.aptfleet.com?utm_source=s-corp&utm_medium=web&utm_campaign=satire&utm_id=sc"
          className="underline hover:text-zinc-800 transition"
        >
          AptFleet
        </a>
      </p>
    </footer>
  );
};

export default Footer;
