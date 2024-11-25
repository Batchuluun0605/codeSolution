"use client";
import React, { useEffect, useRef } from "react";

const page = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  console.log(inputRef.current?.value);

  return (
    <div className="tutorial">
      <input
        ref={inputRef}
        type="text"
        className="text-black"
        placeholder="Type something..."
      />
      <input
        type="text"
        className="text-black"
        placeholder="Type something..."
      />
      <input
        type="text"
        className="text-black"
        placeholder="Type something..."
      />
      <input
        type="text"
        className="text-black"
        placeholder="Type something..."
      />
    </div>
  );
};

export default page;
