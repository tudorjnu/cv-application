/* eslint-disable react/prop-types */
import style from './cv.module.scss';

import Basics from './sections/basics';
import Education from './sections/education';
import Work from './sections/work';
import Volunteer from './sections/volunteer';
import Awards from './sections/awards';
import Skills from './sections/skills';
import Projects from './sections/projects';
import Publications from './sections/publications';
import Languages from './sections/languages';
import Interests from './sections/interests';
import References from './sections/references';


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
      <section style={{ gridArea: "header" }}>
        <Basics {...basics} />
      </section>
      <section style={{ gridArea: "left" }}>
        <Education list={education} />
        <Work list={work} />
        <Volunteer list={volunteer} />
        <Projects list={projects} />
      </section>
      <section style={{ gridArea: "right" }}>
        <Awards list={awards} />
        <Skills list={skills} />
        <Publications list={publications} />
        <Languages list={languages} />
        <Interests list={interests} />
        <References list={references} />
      </section>
    </main >
  )
}

