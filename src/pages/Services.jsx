export default function Services() {
  const items = [
    {
      title: 'AI Strategy & Readiness',
      points: ['Use-case discovery', 'ROI modeling', 'Risk assessment'],
    },
    {
      title: 'LLM Apps & Agents',
      points: ['Chat interfaces', 'Workflow automation', 'Tool integrations'],
    },
    { title: 'Modeling & Evaluation', points: ['Fine-tuning', 'Guardrails', 'Eval suites'] },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Services</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Choose a path that fits your goals. We can start small and scale fast.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <div key={s.title} className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{s.title}</h3>
            <ul className="mt-3 space-y-1 text-gray-600 dark:text-gray-300 list-disc list-inside">
              {s.points.map((p) => (<li key={p}>{p}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
