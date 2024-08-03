"use server";
import path from "path";
import { Task, TwelveLabs } from "twelvelabs-js";
import * as fs from "fs";

export async function uploadFile(
  fileBufferString: string
): Promise<{ message: string }> {
  // convert string to buffer
  const fileBuffer = Buffer.from(fileBufferString);

  try {
    const client = new TwelveLabs({
      apiKey: process.env.NEXT_TWELVE_LABS_API_KEY,
    });

    // TODO: Replace with desired index ID
    const indexList = await client.index.list();
    const index = await client.index.retrieve(indexList[0].id);

    const task = await client.task.create({
      indexId: index.id,
      file: fileBuffer,
      language: "en",
    });

    console.log(`Created task: id=${task.id} status=${task.status}`);

    await task.waitForDone(500, (task: Task) => {
      console.log(`  Status=${task.status}`);
    });

    if (task.status !== "ready") {
      throw new Error(`Indexing failed with status ${task.status}`);
    }

    console.log("Uploaded a video");

    return { message: "File uploaded successfully" };
  } catch (err: any) {
    throw new Error(`Error uploading file: ${err.message}`);
  }
}
