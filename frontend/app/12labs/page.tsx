"use client";

import { useEffect, useState } from "react";
import {
  getVideos,
  getVideoImage,
  getStauts,
  concatenateTranscript,
  aiGenerate,
} from "./utils";
export default function Home() {
  const [videos, setVideos] = useState<any[]>([]);
  const [videoImage, setVideoImage] = useState<any>();
  const [status, setStatus] = useState({});
  useEffect(() => {
    (async () => {
      const videoImage = await getVideoImage(
        "66ad18ad0af328de7c937dbc",
        "66ae27bcfe45e78ff2976a66"
      );
      console.log(videoImage);
      setVideoImage(videoImage);
      const currentStatus = await getStauts("66ad18ad0af328de7c937dbc");
      setStatus(currentStatus);

      const data = await getVideos("66ad18ad0af328de7c937dbc");
      setVideos(data.data);
    })();
  }, []);
  return (
    <div>
      <div>status: {JSON.stringify(status)}</div>
      <br />
      {/* <pre>{JSON.stringify(videos, null, 2)}</pre> */}
      <br />
      videos
      {videos.map((video, index) => {
        if (!video.transcription.data) {
          return <div>failed to process</div>;
        }
        return (
          <div key={video._id} className="border-8">
            {/* <div>created_at: {video.created_at}</div>
          <div>indexed_at: {video.indexed_at}</div> */}
            {/* <div>audio_channel: {video.metadata.audio_channel}</div>
          <div>audio_length_ns: {video.metadata.audio_length_ns}</div>
          <div>audio_sample_rate: {video.metadata.audio_sample_rate}</div>
          <div>audio_stream_id: {video.metadata.audio_stream_id}</div>
          <div>audio_stream_idx: {video.metadata.audio_stream_idx}</div> */}
            <div>duration: {(video.metadata.duration / 60).toFixed(2)} min</div>
            {/* <div>engine_ids: {video.metadata.engine_ids}</div> */}
            <div>filename: {video.metadata.filename}</div>
            {/* <div>fps: {video.metadata.fps}</div> */}
            {/* <div>height: {video.metadata.height}</div> */}
            <div>
              size: {(video.metadata.size / (1024 * 1024)).toFixed(2)} MB
            </div>
            {/* <div>video_length_ns: {video.metadata.video_length_ns}</div>
          <div>video_stream_id: {video.metadata.video_stream_id}</div>
          <div>video_stream_idx: {video.metadata.video_stream_idx}</div>
          <div>width: {video.metadata.width}</div> */}
            <img src={video.thumbnail} alt="thumbnail" />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              key={video._id}
              onClick={async () => {
                const transcript = await concatenateTranscript(
                  video.transcription
                );
                const prompt = `summarize this video in 1 line: ${transcript}`;
                const summary = await aiGenerate(prompt);
                videos[index].summary = summary;

                const newVideos = [...videos];
                setVideos(newVideos);
              }}
            >
              summarize this(groq)
            </button>
            {<div>summary: {video.summary}</div>}
          </div>
        );
      })}
    </div>
  );
}
