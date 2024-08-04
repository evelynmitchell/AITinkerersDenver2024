"use client";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Separator } from "@/components/ui/separator";

import { useEffect, useState } from "react";
import {
  getVideos,
  getVideoImage,
  getStauts,
  concatenateTranscript,
  aiGenerate,
} from "../12labs/utils";

import { saveFile } from "../test/fileUploadv4/fileHandler";

const indexId = "66ad18ad0af328de7c937dbc";

export default function Demo() {
  const [videos, setVideos] = useState<any[]>([]);
  const [status, setStatus] = useState<any>({});
  const [selectedCart, setSelectedCard] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [generatedText, setGeneratedText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const serializeFile = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve((reader.result as string).split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  useEffect(() => {
    (async () => {
      setLoading(true);
      const currentStatus = await getStauts(indexId);
      setStatus(currentStatus);

      const data = await getVideos(indexId);
      setVideos(data.data);
      setLoading(false);
    })();
  }, []);
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen w-screen flex"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-screen p-6 pr-3 bg-slate-100">
          {/* <span className="font-semibold">Sidebar</span> */}
          <div className="flex flex-col h-full w-full bg-white rounded-lg shadow-lg p-6 gap-4">
            {/* list of videos */}
            {/* for loop of 10 */}
            <ScrollArea>
              <div className="flex flex-col gap-4">
                {/* upload video + status */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upload Video</CardTitle>
                    <CardDescription>
                      {" "}
                      <p>
                        {status &&
                          ` ${status.ready} ready | ${status.indexing} indexing | ${status.queued} queued | ${status.failed} failed`}
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {" "}
                    <Label htmlFor="video">Video</Label>
                    <Input id="video" type="file" onChange={handleFileChange} />
                  </CardContent>
                  <CardFooter>
                    <Button
                      onClick={async () => {
                        if (file) {
                          const stringFile = await serializeFile(file);

                          saveFile(stringFile, file.name, indexId);
                        }
                      }}
                    >
                      Index Video
                    </Button>
                  </CardFooter>
                </Card>
                <Separator />
                {!!loading && <div>Loading...</div>}
                {videos.map((video, index) => {
                  if (!video.transcription.data) {
                    return;
                  }
                  return (
                    <Card
                      key={video._id}
                      className={`cursor-pointer hover:bg-gray-100 ${
                        selectedCart === index ? "bg-gray-100" : ""
                      }`}
                      onClick={async () => {
                        setSelectedCard(index);
                      }}
                    >
                      <CardHeader>
                        <CardTitle>{video.metadata.filename}</CardTitle>
                        <CardDescription>
                          {/* duration | size | created_at */}
                          {`${(video.metadata.duration / 60).toFixed(
                            2
                          )} min | ${(
                            video.metadata.size /
                            (1024 * 1024)
                          ).toFixed(2)} MB | ${video.created_at}`}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <img
                          src={video.thumbnail}
                          alt="thumbnail"
                          className="w-full h-32 object-cover"
                        />
                      </CardContent>
                      <CardFooter>
                        <Button
                          onClick={async () => {
                            const transcript = await concatenateTranscript(
                              video.transcription
                            );
                            const prompt = `summarize this video in 1 line: ${transcript}`;
                            const summary = await aiGenerate(prompt);

                            setGeneratedText(summary);
                            // videos[index].summary = summary;

                            // const newVideos = [...videos];
                            // setVideos(newVideos);
                          }}
                        >
                          Generate summary
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </ScrollArea>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6 pl-3 bg-slate-100">
          <div className="flex flex-col h-full w-full bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl"> Output</h2>
            <pre className="whitespace-pre-wrap ">{generatedText}</pre>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
