export async function createCheckoutSession() {
  const res = await fetch("/.netlify/functions/create-checkout-session", {
    method: "POST",
  });
  return res.ok ? await res.json() : { error: true };
}
