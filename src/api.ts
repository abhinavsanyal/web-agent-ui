export async function postCommand(prompt: string): Promise<void> {
    const response = await fetch("http://54.67.123.43:3030/get-web-agent-response", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
  