import { BasicsForm } from "./basics";
import { EducationForm } from "./education";
import { WorkForm } from "./work";

export default function SideNav({ resume, setResume }) {
  return (
    <aside className="side-wrapper">
      <BasicsForm resume={resume} setResume={setResume} />
      <EducationForm resume={resume} setResume={setResume} />
      <WorkForm resume={resume} setResume={setResume} />
    </aside>
  );
}
