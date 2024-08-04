"use client";
import { use, useEffect, useState } from "react";
import { textToVideo } from "./utils";

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

import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const data = await textToVideo("66ad18ad0af328de7c937dbc", "fire");
      setVideos(data.data);
    })();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* a search  */}
      <div className="flex justify-center items-center bg-slate-100 py-3 px-6">
        <input
          type="text"
          placeholder="Search"
          className="p-2 mr-2 rounded-lg w-full"
        />
        <Button>Search</Button>
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
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) => (
                    <Card>
                      <CardHeader>
                        <CardTitle>Card Title {index}</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Card Content</p>
                      </CardContent>
                      <CardFooter>
                        <p>Card Footer</p>
                      </CardFooter>
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
              answer
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
