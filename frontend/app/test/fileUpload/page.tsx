import Image from "next/image";
import fs from "node:fs/promises";

import UploadForm from "./uploadForm";

export default async function Home() {
  const files = await fs.readdir("./public/uploads");
  const images = files
    .filter((file) => file.endsWith(".jpg"))
    .map((file) => `/uploads/${file}`);

  return (
    <main>
      <UploadForm />
      <div className="flex flex-wrap">
        {images.map((image) => (
          <div key={image} className="px-2 h-auto w-1/2">
            <Image
              key={image}
              src={image}
              width={400}
              height={400}
              alt={image}
              className="object-cover w-full"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
