import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ContactForm } from './ContactForm'

export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 rounded-full cursor-pointer border-brand-500 hover:text-brand-500 text-brand-400 hover:bg-white/90"
        >
          Work with me
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              Work with <span className="text-brand-500">me</span>
            </h2>
          </DialogTitle>

          <DialogDescription asChild>
            <p className="text-lg text-gray-400">Let's create something amazing together</p>
          </DialogDescription>
        </DialogHeader>

        <Card className="p-8 bg-neutral-900/50 backdrop-blur-sm border-brand-500/20 rounded-2xl">
          <ContactForm />
        </Card>
      </DialogContent>
    </Dialog>
  )
}
