export async function handler(event, context) {
  const userId = event.queryStringParameters.userId;
  return {
    statusCode: 200,
    body: JSON.stringify({ tickets: 3 }), // pretend user has 3 tickets
  };
}
