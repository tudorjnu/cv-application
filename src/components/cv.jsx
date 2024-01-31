/* eslint-disable react/prop-types */
import style from './cv.module.scss';
import PropTypes from 'prop-types'

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


export default function Main({
  basics,
  education,
  work,
  volunteer,
  projects,
  awards,
  skills,
  publications,
  languages,
  interests,
  references,
}) {

  return (
    <main className={`container-1 ${style.page}`} style={style}>
      <BasicsSection {...basics} />
      <div style={{ gridArea: "left" }}>
        <EducationSection list={education} />
        <WorkSection list={work} />
        <VolunteerSection list={volunteer} />
        <ProjectsSection list={projects} />
      </div>
      <div style={{ gridArea: "right" }}>
        <AwardsSection list={awards} />
        <SkillsSection list={skills} />
        <PublicationsSection list={publications} />
        <LanguagesSection list={languages} />
        <InterestsSection list={interests} />
        <ReferencesSection list={references} />
      </div>
    </main >
  )
}

