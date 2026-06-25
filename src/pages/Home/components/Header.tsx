import { useState, useEffect } from 'react'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Logo from '@/assets/sp_logo_orange.svg?react'
import { cn } from '@/lib/utils'
import WorkDialog from './WorkDialog'
import { ContactDialog } from './ContactDialog'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Music', href: '#music' },
  { label: 'Skillset', href: '#skillset' },
  { label: 'Experience', href: '#experience' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-neutral-900/90 backdrop-blur-md border-b border-brand-500/50'
          : 'bg-transparent'
      )}
    >
      <div className="container px-4 mx-auto lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex flex-col">
            <a href="#home" className="text-xl font-bold tracking-wide text-white">
              <Logo className="inline-block w-8 h-8 mb-1 mr-2" />
              <span> Steven Pereira</span>
            </a>
          </div>

          <nav className="items-center hidden gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 transition-colors hover:text-brand-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="max-lg:hidden">
              <WorkDialog />
            </div>
            <div className="max-lg:hidden">
              <ContactDialog />
            </div>
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

const HamburgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon" className="text-white cursor-pointer">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="px-8 bg-neutral-900 border-brand-500/20">
        <nav className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-gray-300 transition-colors hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
          <WorkDialog />

          <ContactDialog />
        </nav>
      </SheetContent>
    </Sheet>
  )
}
