import { useEffect, useState } from "react";
import { getRaffleStatus, joinRaffle } from "../../api/raffle";

const RaffleWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tickets, setTickets] = useState(null);
  const [error, setError] = useState(null);
  const userId = 123;

  useEffect(() => {
    if (isOpen) {
      getRaffleStatus(userId).then((data) => {
        if (data.error) {
          setError("Error, try again");
        } else {
          setTickets(data.tickets || 0);
          setError(null);
        }
      });
    }
  }, [isOpen]);

  const handleJoin = async () => {
    const data = await joinRaffle(userId);
    if (data.error) {
      setError("Error, try again.");
    } else {
      setTickets((prev) => prev + 1);
      setError(null);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <div className="w-[300px] h-[350px] bg-[var(--color-neutral-cream)] border border-[var(--color-primary)] rounded shadow p-4 relative">
          <h2 className="font-[var(--font-headline)] text-xl text-[var(--color-primary)] mb-2">
            Raffle Tickets
          </h2>
          {tickets !== null && (
            <p className="text-[var(--color-accent)] text-lg">
              You have {tickets} tickets
            </p>
          )}
          {error && <p className="text-red-600 mt-2">{error}</p>}
          <button
            onClick={handleJoin}
            className="mt-4 cursor-pointer bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white px-4 py-2 rounded"
          >
            Join the Raffle
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute cursor-pointer top-2 right-2 text-[var(--color-accent)]"
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
