import SideNav from "./components/side-nav"
import Main from './components/cv'
import './styles/index.scss'
import resumeData from './resume.json'
import { useState } from "react"
import { AddSectionModal } from "./components/modals"

function App() {
  const [showAddSectionModal, setShowAddSectionModal] = useState(true)



  return (
    <>
      <AddSectionModal show={showAddSectionModal} />
      <SideNav />
      <Main {...resumeData} />
    </>
  )
}

export default App
