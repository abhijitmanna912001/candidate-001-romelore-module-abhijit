import AwardsPanel from "./components/AwardsPanel";
import CareDuelBanner from "./components/CareDuelBanner";
import PaymentButton from "./components/PaymentButton/PaymentButton";
import RaffleWidget from "./components/RaffleWidget/RaffleWidget";

const App = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <p className="text-[var(--color-primary)] font-[var(--font-headline)] text-2xl">
        Hello RomeLore
      </p>
      <RaffleWidget />
      <PaymentButton />
      <CareDuelBanner />
      <AwardsPanel />
    </div>
  );
};

export default App;
