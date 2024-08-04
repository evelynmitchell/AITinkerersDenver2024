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

export default function ResizableDemo() {
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
                    {/* <CardDescription>Card Description</CardDescription> */}
                  </CardHeader>
                  <CardContent>
                    <p>Add Video details (give instruction to upload video)</p>
                    <p>show status of uploads</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button>Upload Video</Button>
                    <Button>Index Video</Button>
                  </CardFooter>
                </Card>
                <Separator />
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
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6 pl-3 bg-slate-100">
          <div className="flex flex-col h-full w-full bg-white rounded-lg shadow-lg p-6">
            keep the ai generated stuff here
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
