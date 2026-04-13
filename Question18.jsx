import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  // TODO: create theme state
  const [isLightMode, setIsLightMode] = useState(false);
  // TODO: create toggle function
  const handleTheme = () => {
    setIsLightMode(theme => !theme)
  }

  return (
    <ThemeContext.Provider value={{isLightMode, handleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeSwitcher() {
  // TODO: consume theme context
  const {handleTheme} = useContext(ThemeContext);
  return <button onClick={handleTheme}>Toggle Theme</button>;
}

function ThemePreviewCard() {
  // TODO: consume theme context
  const {isLightMode} = useContext(ThemeContext);

  return (
    <div style={{ padding: "20px", marginTop: "20px" }}>
      <h3>Theme Preview</h3>
      <p>Current theme: {isLightMode ? "Light" : "Dark"}</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Theme Preference Center</h2>
      <ThemeSwitcher />
      <ThemePreviewCard />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}