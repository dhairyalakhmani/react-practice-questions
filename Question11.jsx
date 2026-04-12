import React, { useState } from "react";

const initialJobs = [
  { id: 1, company: "Google", role: "Frontend Engineer", saved: false },
  { id: 2, company: "Amazon", role: "SDE 1", saved: true },
  { id: 3, company: "Notion", role: "Product Engineer", saved: false },
];

function JobCard({ job, onToggleSaved }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "12px", marginBottom: "10px" }}>
      <h4>{job.company}</h4>
      <p>{job.role}</p>
      <button onClick={() => onToggleSaved(job.id)}>
        {/* TODO */}
      </button>
    </div>
  );
}

export default function SavedJobsBoard() {
  const [jobs, setJobs] = useState(initialJobs);

  // TODO: implement toggle logic
  const handleToggleSaved = (id) => {
    setJobs((prevJobs) => prevJobs.map((job) => (job.id === id) ? 
        {...job, saved: !job.saved} :
        job
    ))
  };

  const savedCount = jobs.filter((job) => job.saved === true).length;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Saved Jobs</h2>
      <p>Saved Jobs: {savedCount}</p>

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onToggleSaved={handleToggleSaved} />
      ))}
    </div>
  );
}