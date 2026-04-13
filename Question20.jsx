import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  // TODO: create collapsed state and toggle function
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <SidebarContext.Provider value={{collapsed, toggleCollapsed}}>
      {children}
    </SidebarContext.Provider>
  );
}

function Header() {
  // TODO: consume sidebar context
  const {toggleCollapsed} = useContext(SidebarContext);
  return <button onClick={toggleCollapsed}>Toggle Sidebar</button>;
}

function Sidebar() {
  // TODO: consume sidebar context
  const {collapsed} = useContext(SidebarContext);
  return <div>{collapsed ? "Collapsed " : "Expanded "}Sidebar</div>;
}

function DashboardLayout() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <div style={{ display: "flex", marginTop: "20px", gap: "20px" }}>
        <Sidebar />
        <div style={{ flex: 1, border: "1px solid #ddd", padding: "20px" }}>
          Main Content Area
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SidebarProvider>
      <DashboardLayout />
    </SidebarProvider>
  );
}