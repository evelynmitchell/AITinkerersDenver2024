"use client";

import React, { useState } from "react";
import { saveFile } from "./fileHandler";
const serializeFile = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const UploadPage: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFile(file);
    }
  };

  return (
    <div>
      <h1>File Upload</h1>
      <label htmlFor="fileInput">Choose a file:</label>
      <input id="fileInput" type="file" onChange={handleFileChange} />

      {/* make an save button */}
      <button
        title="Save"
        onClick={async () => {
          if (file && fileName) {
            const stringFile = await serializeFile(file);

            saveFile(stringFile, fileName, "66ad18ad0af328de7c937dbc");
          }
        }}
      >
        Save{" "}
      </button>
      {fileName && (
        <div>
          <p>File Name: {fileName}</p>
          {/* <p>File Size: {fileBuffer?.length} bytes</p> */}
        </div>
      )}
    </div>
  );
};

export default UploadPage;
