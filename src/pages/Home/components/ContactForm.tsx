import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Send } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    needMixing: false,
    needMastering: false,
    fullProduction: false,
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Backend integration goes here later
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            Name
          </Label>

          <Input
            id="name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className="text-white bg-neutral-800 border-brand-500/20 focus:border-brand-500"
            placeholder="Your name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>

          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            className="text-white bg-neutral-800 border-brand-500/20 focus:border-brand-500"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">
          Tell me about your project
        </Label>

        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              message: e.target.value,
            }))
          }
          className="text-white bg-neutral-800 border-brand-500/20 focus:border-brand-500 min-h-32"
          placeholder="Share your vision, reference tracks, or any specific requirements..."
          required
        />
      </div>

      <div className="space-y-3">
        <Label className="text-white">What do you need?</Label>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="mixing"
              checked={formData.needMixing}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  needMixing: checked as boolean,
                }))
              }
              className="border-brand-500/50 data-[state=checked]:bg-brand-500"
            />

            <Label htmlFor="mixing" className="text-sm text-gray-300 cursor-pointer">
              Mixing
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="mastering"
              checked={formData.needMastering}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  needMastering: checked as boolean,
                }))
              }
              className="border-brand-500/50 data-[state=checked]:bg-brand-500"
            />

            <Label htmlFor="mastering" className="text-sm text-gray-300 cursor-pointer">
              Mastering
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="production"
              checked={formData.fullProduction}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  fullProduction: checked as boolean,
                }))
              }
              className="border-brand-500/50 data-[state=checked]:bg-brand-500"
            />

            <Label htmlFor="production" className="text-sm text-gray-300 cursor-pointer">
              Full production
            </Label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
        <Button
          type="submit"
          className="flex-1 text-white rounded-full cursor-pointer bg-brand-500 hover:bg-brand-600"
        >
          <Send className="size-4" />
          Send message
        </Button>
      </div>
    </form>
  )
}
