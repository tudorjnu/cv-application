import SideNav from "./components/side-nav";
import Resume from "./components/resume.jsx";
import "./styles/index.scss";

function App() {
  return (
    <div className="app-wrapper">
      <SideNav />
      <Resume />
    </div>
  );
}

export default App;
