export async function postCommand(prompt: string, signal: AbortSignal): Promise<any> {
    const response = await fetch("https://b-ot.ai/api/get-web-agent-response", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt }),
      signal: signal
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
}
