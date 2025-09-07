import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const stream = await client.responses.create({
  model: 'gpt-5-nano',
  input: 'write a story about formula 1 in 250 or less words',
  //   temperature: 0.4,
  //   max_output_tokens: 50,
  stream: true,
});

for await (const event of stream) {
  if (event.delta) process.stdout.write(event.delta);
}
