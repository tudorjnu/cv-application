import style from './section-wrapper.module.scss';
import { EditButton } from '../buttons/buttons';

export default function SectionWrapper({
  sectionTitle = "My Section Title",
  sectionList,
  SectionItem,
}) {

  return (
    <div className={style.sectionWrapper} style={{ position: "relative" }} >
      <EditButton />
      <h3>{sectionTitle}</h3>
      <hr />
      <div style={{ position: 'relative' }}>
        {sectionList.map((item, index) => <SectionItem key={index} {...item} />)}
      </div>
    </div>
  );
}
