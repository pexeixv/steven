import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { ContactForm } from './ContactForm'

export function ContactSection() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section id="work-with-me" className="relative py-24 bg-brand-background/20">
      <div className="container max-w-4xl px-4 mx-auto lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
            Work with <span className="text-brand-500">me</span>
          </h2>

          <p className="text-lg text-gray-400">Let's create something amazing together</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-neutral-900/50 backdrop-blur-sm border-brand-500/20 rounded-2xl">
            <ContactForm />
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
