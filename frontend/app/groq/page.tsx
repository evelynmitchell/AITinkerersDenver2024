"use client";
import { testGen } from "./api";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  useEffect(() => {
    testGen().then((data) => {
      setText(data);
    });
  }, []);
  return (
    <div>
      hi<div>{JSON.stringify(text)}</div>
    </div>
  );
}
