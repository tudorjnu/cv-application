import SideNav from "./components/side-nav";
import Resume from "./components/resume.jsx";

import { useState } from "react";
import "./styles/index.scss";

function App() {
  const [resume, setResume] = useState({
    basics: {
      name: "John",
      phone: "(912) 555-4321",
      email: "john@gmail.com",
    },
    education: {
      institution: "University",
      area: "Software Development",
      studyType: "Bachelor",
      endDate: "2013-01-01",
    },
    work: {
      name: "Company",
      position: "President",
      endDate: "2014-01-01",
    },
  });

  return (
    <div className="app-wrapper">
      <SideNav resume={resume} setResume={setResume} />
      <Resume {...resume} />
    </div>
  );
}

export default App;
