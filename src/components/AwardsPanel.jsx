const AwardsPanels = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <a
        href="https://top216.com/vote"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-[var(--accent-color)] hover:border-[var(--color-primary)] bg-white rounded-xl p-4 flex flex-col items-center cursor-pointer shadow transition"
      >
        <span className="text-3xl mb-2">🏅</span>
        <h3 className="font-[var(--font-headline)] text-lg text-[var(--color-primary)]">
          Vote Top216
        </h3>
      </a>

      <a
        href="https://thetop36.com/highlights"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-[var(--accent-color)] hover:border-[var(--color-primary)] bg-white rounded-xl p-4 flex flex-col items-center cursor-pointer shadow transition"
      >
        <span className="text-3xl mb-2">🎁</span>
        <h3 className="font-[var(--font-headline)] text-lg text-[var(--color-primary)]">
          Explore TheTop36
        </h3>
      </a>
    </div>
  );
};

export default AwardsPanels;
