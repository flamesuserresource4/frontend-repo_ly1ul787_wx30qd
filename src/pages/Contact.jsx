import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service_interest: '', message: '' })
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending...' })
    try {
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus({ type: 'success', message: data.message || 'Thanks! We received your message.' })
      setForm({ name: '', email: '', phone: '', company: '', service_interest: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">Tell us about your project. We usually respond within one business day.</p>

      <form onSubmit={submit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="col-span-1 sm:col-span-1 px-4 py-3 rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className="col-span-1 sm:col-span-1 px-4 py-3 rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="px-4 py-3 rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white" />
        <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="px-4 py-3 rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white" />
        <select name="service_interest" value={form.service_interest} onChange={handleChange} className="sm:col-span-2 px-4 py-3 rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white">
          <option value="">Service interest</option>
          <option>AI Strategy</option>
          <option>LLM Apps & Agents</option>
          <option>Modeling & Evaluation</option>
          <option>Automation</option>
        </select>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={5} required className="sm:col-span-2 px-4 py-3 rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white" />
        <button disabled={status.type==='loading'} className="sm:col-span-2 px-5 py-3 rounded-md bg-nx.purple text-white hover:bg-nx.purpleDeep disabled:opacity-60">{status.type==='loading' ? 'Sending...' : 'Send message'}</button>
        {status.type !== 'idle' && (
          <div className={`sm:col-span-2 text-sm ${status.type==='success' ? 'text-green-600' : status.type==='error' ? 'text-red-600' : 'text-gray-600'}`}>
            {status.message}
          </div>
        )}
      </form>

      <div className="mt-10 p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5">
        <h3 className="font-semibold text-gray-900 dark:text-white">Other ways to reach us</h3>
        <ul className="mt-2 text-gray-600 dark:text-gray-300 space-y-1">
          <li>Email: hello@neuronx.ai</li>
          <li>WhatsApp: +1-555-0100</li>
          <li>Calendar: Book a 30-min intro call</li>
        </ul>
      </div>
    </div>
  )
}
