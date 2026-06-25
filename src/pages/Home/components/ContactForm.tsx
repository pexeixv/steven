import { useFormik } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

const FORMS_URL = import.meta.env.VITE_FORMS_URL
const FORMS_KEY = import.meta.env.VITE_FORMS_KEY

const schema = yup.object({
  name: yup.string().trim().required('Name is required'),
  email: yup.string().trim().email('Enter a valid email address').required('Email is required'),
  message: yup
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
  needMixing: yup.boolean(),
  needMastering: yup.boolean(),
  fullProduction: yup.boolean(),
})

export function ContactForm() {
  const [startedAt] = useState(Date.now())
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      company: '', // honeypot
      needMixing: false,
      needMastering: false,
      fullProduction: false,
    },
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      setSubmitError(null)

      const services =
        [
          values.needMixing && 'Mixing',
          values.needMastering && 'Mastering',
          values.fullProduction && 'Full Production',
        ]
          .filter(Boolean)
          .join(', ') || 'None selected'

      try {
        const res = await fetch(`${FORMS_URL}/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': FORMS_KEY,
          },
          body: JSON.stringify({
            data: {
              name: values.name,
              email: values.email,
              message: values.message,
              company: values.company,
              services,
            },
            meta: { startedAt },
          }),
        })

        const result = await res.json()

        if (!res.ok) {
          setSubmitError(result.error || 'Something went wrong. Please try again.')
          return
        }

        if (result.success) {
          setIsSuccess(true)
        } else {
          setSubmitError(result.error || 'Something went wrong. Please try again.')
        }
      } catch {
        setSubmitError('Network error. Please check your connection and try again.')
      }
    },
  })

  // Helper: show error only when field is touched AND has an error
  const fieldError = (name: 'name' | 'email' | 'message') =>
    formik.touched[name] && formik.errors[name] ? formik.errors[name] : null

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle2 className="size-12 text-brand-500" />
        <h3 className="text-xl font-semibold text-white">Message sent!</h3>
        <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="company"
        value={formik.values.company}
        onChange={formik.handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`text-white bg-neutral-800 border-brand-500/20 focus:border-brand-500 ${fieldError('name') ? 'border-red-500 focus:border-red-500' : ''}`}
            placeholder="Your name"
          />
          {fieldError('name') && (
            <p className="flex items-center gap-1 text-xs text-red-400">
              <AlertCircle className="size-3" /> {fieldError('name')}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`text-white bg-neutral-800 border-brand-500/20 focus:border-brand-500 ${fieldError('email') ? 'border-red-500 focus:border-red-500' : ''}`}
            placeholder="your@email.com"
          />
          {fieldError('email') && (
            <p className="flex items-center gap-1 text-xs text-red-400">
              <AlertCircle className="size-3" /> {fieldError('email')}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">
          Tell me about your project
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`text-white bg-neutral-800 border-brand-500/20 focus:border-brand-500 min-h-32 ${fieldError('message') ? 'border-red-500 focus:border-red-500' : ''}`}
          placeholder="Share your vision, reference tracks, or any specific requirements..."
        />
        {fieldError('message') && (
          <p className="flex items-center gap-1 text-xs text-red-400">
            <AlertCircle className="size-3" /> {fieldError('message')}
          </p>
        )}
      </div>

      <div className="space-y-3">
        <Label className="text-white">What do you need?</Label>
        <div className="flex flex-wrap gap-3">
          {[
            { id: 'mixing', key: 'needMixing', label: 'Mixing' },
            { id: 'mastering', key: 'needMastering', label: 'Mastering' },
            { id: 'production', key: 'fullProduction', label: 'Full production' },
          ].map(({ id, key, label }) => (
            <div key={id} className="flex items-center space-x-2">
              <Checkbox
                id={id}
                checked={formik.values[key as keyof typeof formik.values] as boolean}
                onCheckedChange={(checked) => formik.setFieldValue(key, checked)}
                className="border-brand-500/50 data-[state=checked]:bg-brand-500"
              />
              <Label htmlFor={id} className="text-sm text-gray-300 cursor-pointer">
                {label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {submitError && (
        <div className="flex items-center gap-2 px-4 py-3 text-sm text-red-400 border rounded-lg border-red-500/20 bg-red-500/10">
          <AlertCircle className="size-4 shrink-0" />
          {submitError}
        </div>
      )}

      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
        <Button
          type="submit"
          disabled={formik.isSubmitting}
          className="flex-1 text-white rounded-full cursor-pointer bg-brand-500 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send className="size-4" />
          {formik.isSubmitting ? 'Sending…' : 'Send message'}
        </Button>
      </div>
    </form>
  )
}
