import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import Layout from './components/Layout'
import { portfolioData } from './data/portfolioData'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import EducationSection from './sections/EducationSection'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'
import LearningJourneySection from './sections/LearningJourneySection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import { theme } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout {...portfolioData}>
        <HeroSection identity={portfolioData.identity} />
        <AboutSection about={portfolioData.about} />
        <LearningJourneySection journey={portfolioData.journey} />
        <ProjectsSection projects={portfolioData.projects} />
        <SkillsSection skills={portfolioData.skills} />
        <EducationSection education={portfolioData.education} />
        <ContactSection socialLinks={portfolioData.socialLinks} />
        <Footer name={portfolioData.identity.name} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
