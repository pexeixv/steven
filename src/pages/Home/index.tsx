import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MusicSection } from './components/MusicSection'
import { SkillsetSection } from './components/SkillsetSection'
import { WorkflowSection } from './components/WorkflowSection'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'
import '@/App.css'
import { SEO } from '@/components/SEO'

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-900">
      <SEO />
      <Header />
      <Hero />
      <MusicSection />
      <SkillsetSection />
      <WorkflowSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default Home
