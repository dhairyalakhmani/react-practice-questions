import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const LessonsContext = createContext();

const initialLessons = [
  { id: 1, title: "React Components", completed: false },
  { id: 2, title: "Props and State", completed: true },
  { id: 3, title: "useEffect Basics", completed: false },
];

function LessonsProvider({ children }) {
  const [lessons, setLessons] = useState(initialLessons);

  const toggleLesson = useCallback((id) => {
    setLessons((prev) =>
      prev.map((lesson) =>
        lesson.id === id
          ? { ...lesson, completed: !lesson.completed }
          : lesson
      )
    );
  }, []);

  return (
    <LessonsContext.Provider value={{ lessons, toggleLesson }}>
      {children}
    </LessonsContext.Provider>
  );
}

function LessonItem({ lesson, onToggle }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
        backgroundColor: lesson.completed ? "#eafbea" : "white",
      }}
    >
      <h4>{lesson.title}</h4>
      <p>Status: {lesson.completed ? "Completed" : "Pending"}</p>
      <button onClick={() => onToggle(lesson.id)}>
        {lesson.completed ? "Mark Pending" : "Mark Completed"}
      </button>
    </div>
  );
}

function LessonList() {
  const { lessons, toggleLesson } = useContext(LessonsContext);

  return (
    <div style={{ flex: 1 }}>
      {lessons.map((lesson) => (
        <LessonItem key={lesson.id} lesson={lesson} onToggle={toggleLesson} />
      ))}
    </div>
  );
}

function LessonsSummary() {
  const { lessons } = useContext(LessonsContext);

  const summary = useMemo(() => {
    const total = lessons.length;
    const completed = lessons.filter((lesson) => lesson.completed).length;
    const remaining = total - completed;

    return { total, completed, remaining };
  }, [lessons]);

  return (
    <div
      style={{
        width: "260px",
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <h3>Lessons Summary</h3>
      <p>Total Lessons: {summary.total}</p>
      <p>Completed Lessons: {summary.completed}</p>
      <p>Remaining Lessons: {summary.remaining}</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Learning Dashboard</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <LessonList />
        <LessonsSummary />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LessonsProvider>
      <Dashboard />
    </LessonsProvider>
  );
}