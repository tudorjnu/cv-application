/* eslint-disable react/prop-types */
import { BasicsSection } from "./basics";
import { EducationSection } from "./education";
import { WorkSection } from "./work";

export default function Resume({ basics, education, work }) {
  return (
    <main className="container-1 resume-wrapper">
      <BasicsSection {...basics} />
      <EducationSection {...education} />
      <WorkSection {...work} />
    </main>
  );
}
