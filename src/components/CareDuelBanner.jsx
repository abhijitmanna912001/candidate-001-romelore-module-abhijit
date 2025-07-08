const CareDuelBanner = () => {
  return (
    <a
      href="https://careduel.com/topic-of-the-week"
      target="_blank"
      rel="noopener noreferrer"
      className="block border-[var(--accent-color)] border bg-[var(--color-neutral-cream)] text-[var(--color-primary)] text-center py-3 rounded mt-4 cursor-pointer hover:bg-[var(--parchment-gray)]"
    >
      <span className="font-[var(--font-headline)] text-lg">
        🌱 Topic of the Week at CareDuel
      </span>
    </a>
  );
};

export default CareDuelBanner;
