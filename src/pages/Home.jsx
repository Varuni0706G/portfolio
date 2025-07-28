import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground'
import { Navbar } from '../components/NavBar'
import { Hero } from '../components/Hero'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ContactSection } from '../components/ContactSection'
import { EducationSection } from '../components/EducationSection'
import { CertificationSection } from '../components/CertificationSection'




const Home = () => {
  return (
    <div className='min-y-screen bg-background text-foreground'>
        <ThemeToggle />
        <StarBackground />
        <Navbar/>
        
        <main>
            <Hero />
            <AboutSection />
            <SkillsSection />
            <EducationSection />
            <ProjectsSection />
            <CertificationSection />
            <ContactSection />
        </main>

      
    </div>
  )
}

export default Home
