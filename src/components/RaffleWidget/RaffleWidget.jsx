import { useState } from "react";

const RaffleWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <div className="w-[300px] h-[350px] bg-[var(--color-neutral-cream)] border border-[var(--color-primary)] rounded shadow p-4">
          <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-primary)] mb-2">
            Raffle Tickets
          </h2>
          <button className="mt-4 bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white px-4 py-2 rounded cursor-pointer">
            Join the Raffle
          </button>
          <button
            className="absolute top-2 right-2 cursor-pointer text-[var(--color-accent)]"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[var(--color-primary)] cursor-pointer text-white rounded-full p-3 shadow hover:bg-[var(--color-accent)]"
          aria-label="Open Raffle"
        >
          🎟️
        </button>
      )}
    </div>
  );
};

export default RaffleWidget;
