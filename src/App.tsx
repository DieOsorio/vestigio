import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <section className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-sm">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-400">
          Vestigio Restauraciones
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Nuevo proyecto en preparación
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
          La base ya está lista para empezar a construir la nueva experiencia del sitio con Vite, React, TypeScript y Tailwind.
        </p>
      </section>      
    </main>
  )
}
