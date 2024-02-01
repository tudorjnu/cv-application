import FlatButton from './buttons/flat-button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AddSectionButton() {
  return (
    <button>
      <FontAwesomeIcon icon="add" />Add Section
    </button>
  )
}


export default function SideNav() {
  return (
    <aside className="container-1">
      <FlatButton />
      <AddSectionButton />
    </aside>
  )
}
