import { createCheckoutSession } from "../../api/stripe";

const PaymentButton = () => {
  const handleClick = async () => {
    const res = await createCheckoutSession();
    if (res.sessionId) {
      window.location.href = `https://checkout.stripe.com/pay/${res.sessionId}`;
    } else {
      alert("Error, try again.");
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-300 px-6 py-2 rounded-full font-[var(--font-headline)] cursor-pointer"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default PaymentButton;
