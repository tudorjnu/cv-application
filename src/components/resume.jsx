import { BasicsSection } from "./basics";
import { EducationSection } from "./education";
import { WorkSection } from "./work";

export default function Resume({ basics, education, work, setResume }) {
  return (
    <main className="container-1 resume-wrapper">
      <BasicsSection {...basics} setResume={setResume} />
      <EducationSection {...education} />
      <WorkSection {...work} />
    </main>
  );
}
