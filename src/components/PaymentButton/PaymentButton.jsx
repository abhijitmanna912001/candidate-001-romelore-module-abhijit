const PaymentButton = () => {
  const handlePayment = async () => {
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
      });
      const data = await res.json();
      if (data.sessionId) {
        window.location.href = `https://checkout.stripe.com/pay/${data.sessionId}`;
      } else {
        alert("Error, try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error, try again.");
    }
  };

  return (
    <div className="mt-4">
      <button
        onClick={handlePayment}
        className="bg-[var(--primary-color)] hover:bg-[var(--accent-color)] text-black px-4 py-2 rounded cursor-pointer"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default PaymentButton;
