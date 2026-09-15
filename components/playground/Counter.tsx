"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "count";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      setCount(Number(saved));
    }
  }, []);

  return (
    <div className="flex items-center gap-3">
      <button type="button" className="btn" onClick={() => setCount((value) => value - 1)}>
        -
      </button>
      <span className="min-w-8 text-center font-mono">{count}</span>
      <button type="button" className="btn" onClick={() => setCount((value) => value + 1)}>
        +
      </button>
      <button type="button" className="btn" onClick={() => setCount(0)}>
        Reset
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => localStorage.setItem(STORAGE_KEY, count.toString())}
      >
        Save to Local Storage
      </button>
    </div>
  );
}
