export async function handler(event, context) {
    const body = JSON.parse(event.body);
    // Normally: add ticket to database
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }
  