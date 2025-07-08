export async function handler(event, context) {
  // Normally: call Stripe API here
  return {
    statusCode: 200,
    body: JSON.stringify({ sessionId: "mock_session_id_123" }),
  };
}
