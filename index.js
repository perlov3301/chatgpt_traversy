import  OpenAI   from 'openai';
import dotenv from 'dotenv';
dotenv.config();

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY
// });
// const openai = new OpenAIApi(configuration);
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{
        "role": "user",
        "content": "What is the capital of Massachusetts" 
    }],
  });
  console.log(chatCompletion.choices[0].message.content);
}

main();