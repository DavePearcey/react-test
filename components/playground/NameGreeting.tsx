"use client";

import { useState } from "react";

export default function NameGreeting() {
  const [name, setName] = useState("");

  return (
    <div className="space-y-2">
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
        className="w-full max-w-xs rounded border px-3 py-1"
      />
      <p>{name ? `Hello, ${name}!` : "Hello, stranger!"}</p>
    </div>
  );
}
