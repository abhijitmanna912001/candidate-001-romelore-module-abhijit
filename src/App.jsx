import AwardsPanel from "./components/AwardsPanel";
import CareDuelBanner from "./components/CareDuelBanner";
import PaymentButton from "./components/PaymentButton/PaymentButton";
import RaffleWidget from "./components/RaffleWidget/RaffleWidget";

const App = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <p className="text-[var(--color-primary)] font-[var(--font-headline)] text-2xl mb-4">
        🏛 Welcome to RomeLore
      </p>

      <RaffleWidget />

      <div className="mt-6">
        <PaymentButton />
      </div>

      <div className="mt-6">
        <CareDuelBanner />
      </div>

      <div className="mt-6">
        <AwardsPanel />
      </div>
    </div>
  );
};

export default App;
