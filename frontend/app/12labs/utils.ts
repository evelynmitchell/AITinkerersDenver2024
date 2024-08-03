"use server";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
const TWELVE_LABS_API_KEY = process.env.TWELVE_LABS_API_KEY || "";
const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export async function aiGenerate(
  input: string,
  model: string = "llama3-8b-8192"
) {
  const { text } = await generateText({
    model: groq(model),
    prompt: input,
  });
  return text;
}

export async function getVideoImage(indexId: string, videoId: string) {
  const url = `https://api.twelvelabs.io/v1.2/indexes/${indexId}/videos/${videoId}/thumbnail`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": TWELVE_LABS_API_KEY,
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}

export async function getVideoTranscription(indexId: string, videoId: string) {
  const url = `https://api.twelvelabs.io/v1.2/indexes/${indexId}/videos/${videoId}/transcription`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": TWELVE_LABS_API_KEY,
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}

export async function getVideos(indexId: string) {
  console.log("getVideos");
  const url = `https://api.twelvelabs.io/v1.2/indexes/${indexId}/videos?page=1&page_limit=50&sort_by=created_at&sort_option=desc`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": TWELVE_LABS_API_KEY,
      "Content-Type": "application/json",
    },
  });
  let result = await response.json();

  for (let i = 0; i < result.data.length; i++) {
    const videoId = result.data[i]._id;
    // append the Video Image to the result
    const videoImage = await getVideoImage(indexId, videoId);
    result.data[i].thumbnail = videoImage.thumbnail;
    // append the Video Transcription to the result
    const videoTranscription = await getVideoTranscription(indexId, videoId);
    result.data[i].transcription = videoTranscription;
  }

  return result;
}

export async function getStauts(indexId: string) {
  const url = `https://api.twelvelabs.io/v1.2/tasks/status?index_id=${indexId}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": TWELVE_LABS_API_KEY,
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}

export async function concatenateTranscript(transcript: any) {
  return transcript.data.map((item: any) => item.value).join("\n");
}
