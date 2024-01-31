import style from './cv.module.scss';

import BasicsSection from './sections/basics';
import EducationSection from './sections/education';
import SectionWrapper from './layout/section-wrapper'
import WorkSection from './sections/work';
import VolunteerSection from './sections/volunteer';
import AwardsSection from './sections/awards';
import SkillsSection from './sections/skills';
import ProjectsSection from './sections/projects';
import PublicationsSection from './sections/publications';
import LanguagesSection from './sections/languages';
import InterestsSection from './sections/interests';
import ReferencesSection from './sections/references';


export default function Main() {

  return (
    <main className={`container-1 ${style.page}`} style={style}>
      <BasicsSection />
      <div style={{ gridArea: "left" }}>
        <EducationSection />
        <WorkSection />
        <VolunteerSection />
        <ProjectsSection />
      </div>
      <div style={{ gridArea: "right" }}>
        <SectionWrapper sectionTitle="Skills" >
          <div></div>
        </SectionWrapper>
        <AwardsSection />
        <SkillsSection />
        <PublicationsSection />
        <LanguagesSection />
        <InterestsSection />
        <ReferencesSection />
      </div>
    </main >
  )
}
