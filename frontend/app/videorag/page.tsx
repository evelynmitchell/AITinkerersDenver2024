"use client";
import { use, useEffect, useState } from "react";
import { textToVideo } from "./utils";
import {
  getVideoTranscription,
  concatenateTranscript,
  aiGenerate,
} from "../12labs/utils";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
const indexId = "66ad18ad0af328de7c937dbc";

export default function Home() {
  const [videos, setVideos] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    (async () => {})();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* a search  */}
      <div className="flex justify-center items-center bg-slate-100 py-3 px-6">
        <input
          type="text"
          placeholder="Search"
          className="p-2 mr-2 rounded-lg w-full"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          onClick={async () => {
            const data = await textToVideo(indexId, searchQuery);
            // console.log(data);
            setVideos(data.data);
            const vidid = data.data[0].video_id;
            console.log("videos..videoid", vidid);

            let transcriptstring = "";
            for (let i = 0; i < 2; i++) {
              const transcription = await getVideoTranscription(
                indexId,
                videos[i].video_id
              );
              const trstring = await concatenateTranscript(transcription);
              transcriptstring += trstring + "\n-----------------\n";
            }

            const prompt = `${transcriptstring}
            
            answer this question confidently using the above context
            Q: ${searchQuery}?`;

            console.log("prompt", prompt);
            const generatedText = await aiGenerate(prompt);
            setAnswer(generatedText);
          }}
        >
          Search
        </Button>
      </div>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-screen flex"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full p-6 pt-0 pr-3 bg-slate-100">
            {/* <span className="font-semibold">Sidebar</span> */}

            <div className="flex flex-col h-full w-full bg-white rounded-lg shadow-lg p-6 gap-4">
              <h2 className="text-3xl">Results</h2>

              {/* list of videos */}
              {/* for loop of 10 */}
              <ScrollArea>
                <div className="grid grid-cols-2 gap-4">
                  {videos.map((video, index) => (
                    <Card>
                      <CardHeader>
                        <CardTitle>Score: {video.score}</CardTitle>
                        <CardDescription>
                          {/* {video.video_id} */}
                          start: {video.start.toFixed(2)}s end:{" "}
                          {video.end.toFixed(2)}s
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <img
                          src={video.thumbnail_url}
                          alt="thumbnail"
                          className="w-full h-32 object-cover"
                        />
                        {/* <p>Card Content</p>
                        <pre className="whitespace-pre-wrap">
                          {JSON.stringify(video)}
                        </pre> */}
                      </CardContent>
                      {/* <CardFooter>
                        <p>Card Footer</p>
                      </CardFooter> */}
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6 pt-0 pl-3 bg-slate-100">
            <div className="flex flex-col h-full w-full bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-3xl">AI answer</h2>
              <pre className="whitespace-pre-wrap">{answer}</pre>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
