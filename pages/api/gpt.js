import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
 apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const prompt = req.query.prompt;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Answer to my prompt.\n
    Topic: ${prompt}\n`,
    max_tokens: 600,
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
  });

  const quote = completion.data.choices[0].text;

  res.status(200).json({ quote });
}
