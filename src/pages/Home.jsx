import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-purple-50 dark:from-nx.bgDark dark:to-nx.bgDark2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Build reliable AI products with NeuronX
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 text-lg text-gray-600 dark:text-gray-300"
              >
                We design and deliver AI systems that are fast, safe, and delightful to use.
              </motion.p>
              <div className="mt-8 flex gap-3">
                <a href="/services" className="px-5 py-3 rounded-md bg-nx.purple text-white hover:bg-nx.purpleDeep transition-colors">Explore services</a>
                <a href="/contact" className="px-5 py-3 rounded-md bg-gray-900/90 text-white hover:bg-gray-900 dark:bg-white dark:text-gray-900 transition-colors">Talk to us</a>
              </div>
            </div>
            <div className="relative">
              <div className="h-72 sm:h-96 rounded-xl bg-gradient-to-br from-nx.purple/30 to-nx.blue/30 dark:from-nx.purple/20 dark:to-nx.blue/20 backdrop-blur border border-white/20 dark:border-white/10 animate-float" />
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-nx.orange/30 blur-2xl" />
              <div className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-nx.blue/30 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">What we do</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">From strategy to deployment, we bring your AI ideas to life.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'AI Strategy', desc: 'Roadmaps, readiness, and ROI-focused planning.' },
            { title: 'Custom Models', desc: 'Fine-tuning, evaluation, and safety.' },
            { title: 'Automation', desc: 'Workflows, agents, and integrations.' },
          ].map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
