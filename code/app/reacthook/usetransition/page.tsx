"use client";
import React, { ChangeEvent, useState, useTransition } from "react";

const page = () => {
  const [data, setData] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    startTransition(() => {
      const newArray = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        newArray.push(e.target.value);
      }
      setData(newArray);
    });
  };

  return (
    <div className="bg-white h-screen">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="border text-black bg-blue-500"
      />
      {isPending ? (
        <p>Loading...</p>
      ) : (
        data.map((item, index) => (
          <div key={index} className="text-black">
            {item}
          </div>
        ))
      )}
    </div>
  );
};

export default page;
