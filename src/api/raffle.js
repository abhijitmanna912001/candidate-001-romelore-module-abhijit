export async function getRaffleStatus(userId) {
  const res = await fetch(`/.netlify/functions/raffle-status?userId=${userId}`);
  return res.ok ? await res.json() : { error: true };
}

export async function joinRaffle(userId) {
  const res = await fetch("/.netlify/functions/raffle-entry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  });
  return res.ok ? await res.json() : { error: true };
}
