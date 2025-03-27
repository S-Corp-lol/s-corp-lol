export default function ProductHuntBadge() {
  return (
    <div className="mt-8 flex justify-center">
      <a
        href="https://www.producthunt.com/posts/s-corp?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-s-corp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=946401&theme=neutral&t=1743068574865"
          alt="S Corp - Sustainability without the substance | Product Hunt"
          width={250}
          height={54}
          className="hover:opacity-90 transition"
        />
      </a>
    </div>
  );
}
