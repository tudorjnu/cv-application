/* eslint-disable react/prop-types */
import style from './buttons.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function EditButton() {
  return <button className={style.editButton}><FontAwesomeIcon icon="edit" /></button>
}


export function Link({ icon, href, content }) {
  return (
    <a className={style.link} href={href}>
      <FontAwesomeIcon icon={icon} />
      {content}
    </a>
  )
}
