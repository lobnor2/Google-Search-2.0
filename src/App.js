import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routesgoogle from "./components/Routesgoogle";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-200 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routesgoogle />
        <Footer />
      </div>
    </div>
  );
}

export default App;
