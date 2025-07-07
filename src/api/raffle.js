export async function getRaffleStatus(userId) {
  try {
    const res = await fetch(`/api/raffle-status?userId=${userId}`);
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (err) {
    console.error(err);
    return { error: true };
  }
}

export async function joinRaffle(userId) {
  try {
    const res = await fetch("/api/raffle-entry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    if (!res.ok) throw new Error("Failed to join");
    return await res.json();
  } catch (err) {
    console.error(err);
    return { error: true };
  }
}
