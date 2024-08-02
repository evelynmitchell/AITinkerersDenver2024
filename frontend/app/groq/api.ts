"use server";

import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export async function testGen() {
  const { text } = await generateText({
    model: groq("llama3-8b-8192"),
    prompt: "Write a vegetarian lasagna recipe for 4 people.",
  });
  return text;
}
