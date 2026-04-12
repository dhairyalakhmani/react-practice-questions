import React, { useEffect, useState } from "react";

export default function FlashSaleCountdown() {
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Flash Sale Banner</h2>
      <p>
        {secondsLeft > 0
          ? `Flash sale ends in ${secondsLeft} seconds`
          : "Sale ended"}
      </p>
    </div>
  );
}