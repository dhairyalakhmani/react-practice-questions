import React, { useEffect, useRef, useState } from "react";

const initialMessages = [
  { id: 1, text: "Hey team, standup starts in 10 minutes." },
  { id: 2, text: "Got it, joining shortly." },
];

export default function ChatMessageList() {
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef(null);

  // TODO: auto-scroll when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleAddMessage = () => {
    const newMessage = {
      id: Date.now(),
      text: `New message ${messages.length + 1}`,
    };

    // TODO: append new message
    setMessages([newMessage, ...messages]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Team Chat</h2>

      <button onClick={handleAddMessage}>Add Message</button>

      <div
        style={{
          marginTop: "15px",
          border: "1px solid #ddd",
          padding: "10px",
          maxHeight: "200px",
          overflowY: "auto",
        }}
      >
        {messages.map((message) => (
          <p key={message.id}>{message.text}</p>
        ))}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}