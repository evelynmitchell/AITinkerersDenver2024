"use client";

import React, { useState } from "react";
import { uploadFile } from "./fileHandler";

const UploadPage: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileBuffer, setFileBuffer] = useState<Buffer | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const arrayBuffer = await file.arrayBuffer();
      setFileBuffer(Buffer.from(arrayBuffer));
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
        onClick={() => {
          if (fileBuffer) {
            // convert buffer to string
            const stringBuffer = fileBuffer.toString();
            uploadFile(stringBuffer);
          }
        }}
      >
        Save{" "}
      </button>
      {fileName && (
        <div>
          <p>File Name: {fileName}</p>
          <p>File Size: {fileBuffer?.length} bytes</p>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
