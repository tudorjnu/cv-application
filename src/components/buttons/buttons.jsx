/* eslint-disable react/prop-types */
import style from './buttons.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function EditButton() {

  return (
    <button style={{ position: "absolute", top: "0", right: "0" }}>
      <FontAwesomeIcon icon="edit" />
    </button>
  )
}




export function Link({ icon, href, content }) {
  return (
    <a className={style.link} href={href}>
      <FontAwesomeIcon icon={icon} />
      {content}
    </a>
  )
}
