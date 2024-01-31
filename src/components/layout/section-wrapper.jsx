import style from './section-wrapper.module.scss';

export default function SectionWrapper({
  sectionTitle = "My Section Title",
  sectionList,
  SectionItem,
  children,
}) {

  return (
    <div className={style.sectionWrapper} >
      <h3>{sectionTitle}</h3>
      <hr />
      <div style={{ position: 'relative' }}>
        {sectionList.map((item, index) => < SectionItem key={index} {...item} />)}
      </div>
    </div>
  );
}
