export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200/60 dark:border-white/10 bg-white/60 dark:bg-nx.bgDark/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold">NeuronX</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">AI-first solutions, delivered with care.</p>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-medium">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="/about" className="hover:text-nx.purple">About</a></li>
              <li><a href="/services" className="hover:text-nx.purple">Services</a></li>
              <li><a href="/contact" className="hover:text-nx.purple">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-medium">Contact</h4>
            <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Email: hello@neuronx.ai</li>
              <li>WhatsApp: +1-555-0100</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500 dark:text-gray-500">© {new Date().getFullYear()} NeuronX. All rights reserved.</div>
      </div>
    </footer>
  )
}
