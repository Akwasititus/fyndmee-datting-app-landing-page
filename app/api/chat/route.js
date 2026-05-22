import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { messages, systemPrompt } = await request.json();
    
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: systemPrompt,
        messages: messages
      })
    });

    if (!response.ok) {
      throw new Error('Claude API failed');
    }
    
    const data = await response.json();
    return NextResponse.json({ message: data.content[0].text });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Fallback needed' }, { status: 500 });
  }
}