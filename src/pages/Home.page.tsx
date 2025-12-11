import { Helmet } from 'react-helmet-async'
import { Header } from './Home/components/Header'
import { Hero } from './Home/components/Hero'
import { MusicSection } from './Home/components/MusicSection'
import { SkillsetSection } from './Home/components/SkillsetSection'
import { WorkflowSection } from './Home/components/WorkflowSection'
import { FAQSection } from './Home/components/FAQSection'
import { Footer } from './Home/components/Footer'
import '@/App.css'

export { Page }

function Page() {
  return (
    <>
      <Helmet>
        <title>Steven Pereira - Music Producer & Audio Engineer</title>
        <meta
          name="description"
          content="Professional music production, mixing, and mastering services. Steven Pereira offers high-quality audio engineering for artists and content creators."
        />
        <meta
          property="og:title"
          content="Steven Pereira - Music Producer & Audio Engineer"
        />
        <meta
          property="og:description"
          content="Professional music production, mixing, and mastering services. Steven Pereira offers high-quality audio engineering for artists and content creators."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stevenpereira.com" />
        <meta
          property="og:image"
          content="https://stevenpereira.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Steven Pereira - Music Producer & Audio Engineer"
        />
        <meta
          name="twitter:description"
          content="Professional music production, mixing, and mastering services."
        />
        <link rel="canonical" href="https://stevenpereira.com" />
      </Helmet>
      <div className="min-h-screen overflow-x-hidden bg-neutral-900">
        <Header />
        <Hero />
        <MusicSection />
        <SkillsetSection />
        <WorkflowSection />
        <FAQSection />
        <Footer />
      </div>
    </>
  )
}
