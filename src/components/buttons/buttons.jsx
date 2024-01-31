/* eslint-disable react/prop-types */
import parsePhoneNumber from 'libphonenumber-js'
import style from './buttons.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function EditButton({ onClick }) {
  return <button onClick={onClick}></button>
}


export function Link({ icon, href, content }) {
  return (
    <a className={style.link} href={href}>
      <FontAwesomeIcon icon={icon} />
      {content}
    </a>
  )
}
