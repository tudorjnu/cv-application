import SideNav from "./components/side-nav";
import Resume from "./components/resume.jsx";
import { resume as dummyResume } from "./resume.js";

import { useState } from "react";
import "./styles/index.scss";
console.log(dummyResume);

function App() {
  const [resume, setResume] = useState(dummyResume);

  return (
    <div className="app-wrapper">
      <Resume {...resume} setResume={setResume} />
    </div>
  );
}

export default App;
