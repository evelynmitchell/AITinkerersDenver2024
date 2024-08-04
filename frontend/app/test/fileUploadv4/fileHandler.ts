"use server";
const TWELVE_LABS_API_KEY = process.env.TWELVE_LABS_API_KEY || "";

function deserializeFile(
  base64String: string,
  fileName: string,
  mimeType: any
) {
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: mimeType });
  return new File([blob], fileName, { type: mimeType });
}

export async function saveFile(
  stringFile: string,
  filename: string,
  indexId: string
) {
  // convert string back to a File
  const file = deserializeFile(stringFile, filename, "video/mp4");
  console.log(file.name);

  const formData = new FormData();
  formData.append("provide_transcription", "false");
  formData.append("language", "en");
  formData.append("disable_video_stream", "false");
  formData.append("video_file", file);
  formData.append("index_id", indexId);
  const url = "https://api.twelvelabs.io/v1.2/tasks";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "x-api-key": TWELVE_LABS_API_KEY,
    },
    body: formData,
  };
  const response = await fetch(url, options);
  const result = await response.json();
  console.log("result", result);
  return result;
}
