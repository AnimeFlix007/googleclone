import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./components/Router";

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-green-200 min-h-screen ">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Router />
        <Footer />
      </div>
    </div>
  );
}

export default App;
