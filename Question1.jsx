import React, { useState } from "react";

const emails = [
  { id: 1, subject: "Project kickoff scheduled", sender: "Manager", category: "Primary" },
  { id: 2, subject: "50% off on travel bags", sender: "ShopEase", category: "Promotions" },
  { id: 3, subject: "Your monthly usage report", sender: "CloudPanel", category: "Updates" },
  { id: 4, subject: "Interview round details", sender: "Recruiter", category: "Primary" },
];

function EmailItem({ email }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
      <h4>{email.subject}</h4>
      <p>From: {email.sender}</p>
    </div>
  );
}

export default function InboxCategorySwitcher() {
  const [activeCategory, setActiveCategory] = useState("Primary");

  // TODO: derive visible emails
  const visibleEmails = emails.filter((email) => email.category === activeCategory);

  const getButtonStyle = (category) => ({
    backgroundColor: activeCategory === category ? "#ddd" : "white",
    padding: "8px 12px",
  });


  return (
    <div style={{ padding: "20px" }}>
      <h2>Email Inbox</h2>

      <button style={getButtonStyle("Primary")} onClick={() => setActiveCategory("Primary")}>Primary</button>
      <button style={{...getButtonStyle("Promotions"), marginLeft: "10px" }} onClick={() => setActiveCategory("Promotions")}>
        Promotions
      </button>
      <button style={{...getButtonStyle("Updates"),  marginLeft: "10px" }} onClick={() => setActiveCategory("Updates")}>
        Updates
      </button>

      <div style={{ marginTop: "20px" }}>
        {visibleEmails.length === 0 ? 
        (<p>No emails to show...</p>) :
        (visibleEmails.map((email) => (
          <EmailItem key={email.id} email={email} />
        )))}
      </div>
    </div>
  );
}