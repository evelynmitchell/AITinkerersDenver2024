import { NextRequest, NextResponse } from "next/server";

interface GenerateData {
  video_id: string;
  prompt: string;
}

interface ErrorResponse {
  error: string;
}

interface SuccessResponse {
  [key: string]: any;
}

const GENERATE_URL = "https://api.twelvelabs.io/v1.2/generate";

export async function POST(req: NextRequest) {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key is missing" }, { status: 500 });
  }

  const { video_id, prompt } = (await req.json()) as GenerateData;

  const headers: HeadersInit = {
    "x-api-key": apiKey,
    "Content-Type": "application/json",
  };

  const data: GenerateData = {
    video_id,
    prompt,
  };

  try {
    const response = await fetch(GENERATE_URL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Error generating content" },
        { status: response.status }
      );
    }

    const responseData: SuccessResponse = await response.json();
    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
