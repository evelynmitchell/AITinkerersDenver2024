"use server";

const TWELVE_LABS_API_KEY = process.env.TWELVE_LABS_API_KEY || "";

export async function textToVideo(indexId: string, query: string) {
  const url = `https://api.twelvelabs.io/v1.2/search-v2`;

  const formData = new FormData();

  formData.append("search_options", "visual");
  formData.append("search_options", "conversation");
  formData.append("search_options", "text_in_video");
  formData.append("adjust_confidence_level", "0.5");
  formData.append("group_by", "clip");
  formData.append("threshold", "low");
  formData.append("sort_option", "score");
  formData.append("operator", "or");
  formData.append("conversation_option", "semantic");
  formData.append("page_limit", "10");
  formData.append("index_id", indexId);
  formData.append("query_text", query);
  //   formData.append("query_media_type", "image");
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
