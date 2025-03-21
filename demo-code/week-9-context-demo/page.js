"use client";

import { useState } from "react";
import ThemeContext from "./theme-context";
import Toolbar from "./toolbar";
import Content from "./content";

export default function Page() {
  const [theme, setTheme] = useState("light");

  return (
    // Parent for the theme context
    // setTheme available through the children

    // to make this available through EVERYTHING, it should be in the layout
    // and then the layout should be the parent of the page
    
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main
        className={`h-screen ${
          theme === "light" ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        <h1>My App</h1>
        // Toolbar is setting it
        <Toolbar />
        // Content is reading it
        <Content />
      </main>
    </ThemeContext.Provider>
  );
}
