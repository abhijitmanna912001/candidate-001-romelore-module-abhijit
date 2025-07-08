export async function handler(event, _context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ sessionId: "mock_session_id_123" }),
  };
}
