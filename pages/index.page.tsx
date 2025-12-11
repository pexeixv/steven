export { Page }

import { Helmet } from 'react-helmet-async'
import { Header } from '../src/pages/Home/components/Header'
import { Hero } from '../src/pages/Home/components/Hero'
import { MusicSection } from '../src/pages/Home/components/MusicSection'
import { SkillsetSection } from '../src/pages/Home/components/SkillsetSection'
import { WorkflowSection } from '../src/pages/Home/components/WorkflowSection'
import { FAQSection } from '../src/pages/Home/components/FAQSection'
import { Footer } from '../src/pages/Home/components/Footer'
import '../src/App.css'

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
