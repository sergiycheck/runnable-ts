import OpenAI from 'openai';

export async function Completion1() {
  const openai = new OpenAI();

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `
    Could chart gpt 4 explain the video game Cyberpunk 2077?

    `,
      },
    ],
    model: 'gpt-4',
    stream: true,
  });

  for await (const chunk of completion) {
    console.log(chunk.choices[0]?.delta?.content || "");
  }
}
