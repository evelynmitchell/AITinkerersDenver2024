"use server";
import fs from "fs";
import path from "path";

export async function saveFile(
  fileBufferString: string,
  filename: string
): Promise<{ message: string; path: string }> {
  // convert string to buffer
  const fileBuffer = Buffer.from(fileBufferString);

  const uploadPath = path.join(process.cwd(), "public", "uploads", filename);

  try {
    await fs.promises.writeFile(uploadPath, fileBuffer);
    return { message: "File uploaded successfully", path: uploadPath };
  } catch (err: any) {
    throw new Error(`Error uploading file: ${err.message}`);
  }
}
// export async function saveFile(
//     fileBuffer: Buffer,
//     filename: string
//   ): Promise<{ message: string; path: string }> {
//     const uploadPath = path.join(process.cwd(), "public", "uploads", filename);

//     try {
//       await fs.promises.writeFile(uploadPath, fileBuffer);
//       return { message: "File uploaded successfully", path: uploadPath };
//     } catch (err: any) {
//       throw new Error(`Error uploading file: ${err.message}`);
//     }
//   }
