export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">About NeuronX</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        We are a team of engineers and designers helping teams ship AI products that people trust and love.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5">
          <h3 className="font-semibold text-gray-900 dark:text-white">Our Principles</h3>
          <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>Safety-first development</li>
            <li>Measurable impact</li>
            <li>Clear communication</li>
            <li>Long-term partnerships</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5">
          <h3 className="font-semibold text-gray-900 dark:text-white">Capabilities</h3>
          <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>LLM apps and agents</li>
            <li>RAG and evaluation</li>
            <li>ML pipelines</li>
            <li>Cloud and data engineering</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
