import { BackTop } from 'antd';

import Navbar from './global/components/navbar/navbar'
import Landing from './pages/components/landing/landing'
import Bio from './pages/components/bio/bio'
import Experience from './pages/components/experience/experience'
import Skills from './pages/components/skills/skills'
import Certificate from './pages/components/certificate/certificate'
import Projects from './pages/components/projects/projects'
import EmailMessage from './pages/components/email/email-message'
import Footer from './global/components/footer/footer';

import {useScroll} from './global/services/useScroll.hook'


function App() {

  const {scrollPosition} = useScroll()
   
  return (
    <div className="App">
     <Navbar scrollPosition = {scrollPosition}/>
      <Landing/>
      <Bio/>
      <Experience/>
      <Skills/>
      <Certificate/>
      <Projects/>
      <EmailMessage/>
     <Footer/>
      <BackTop/>
    </div>
  )
}

export default App
