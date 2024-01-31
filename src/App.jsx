import SideNav from "./components/side-nav"
import Main from './components/cv'
import './styles/index.scss'
import resumeData from './resume.json'

function App() {

  return (
    <>
      <SideNav />
      <Main {...resumeData} />
    </>
  )
}

export default App
