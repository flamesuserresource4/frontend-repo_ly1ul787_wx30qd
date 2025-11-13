import React from 'react'

export default function WhatsAppButton() {
  const phone = '+15550100' // demo number
  const text = encodeURIComponent('Hi NeuronX team! I7d love to chat about an AI project.')
  const href = `https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${text}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-lg bg-green-500 text-white hover:bg-green-600 active:scale-[0.98] transition-all"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.52 3.48A11.93 11.93 0 0012.06 0C5.46 0 .12 5.34.12 11.94c0 2.1.54 4.17 1.56 6L0 24l6.21-1.62a12 12 0 005.85 1.5h.01c6.6 0 11.94-5.34 11.94-11.94 0-3.19-1.24-6.18-3.49-8.46zM12.07 22.02h-.01a9.96 9.96 0 01-5.07-1.39l-.36-.21-3.69.96.99-3.6-.23-.37a9.96 9.96 0 01-1.53-5.39c0-5.5 4.48-9.98 9.99-9.98 2.67 0 5.18 1.04 7.07 2.93a9.93 9.93 0 012.92 7.06c0 5.5-4.48 9.99-10.08 9.99zm5.52-7.48c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.37-1.47-.88-.78-1.47-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.12c.15.22 2.12 3.22 5.14 4.52.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.08 1.78-.72 2.03-1.42.25-.7.25-1.31.18-1.42-.08-.1-.27-.18-.57-.33z" />
      </svg>
      <span className="hidden sm:inline">Chat</span>
    </a>
  )
}
