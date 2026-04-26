import { ArrowUpRight, Mail, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-24">
      {/* Hero Section */}
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-4">
          Florence
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-8">
          Founder & AI Creator
        </p>
        <p className="text-lg text-gray-500 max-w-2xl">
          Building at the intersection of artificial intelligence and human creativity.
          Exploring how AI can amplify human potential, not replace it.
        </p>
      </header>

      {/* About */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            I'm a founder passionate about making AI accessible, ethical, and deeply human. 
            My work spans from technical research to product design, always with a focus on 
            creating tools that empower people.
          </p>
          <p>
            Currently exploring new frontiers in AI-assisted creativity, education, and 
            collaborative intelligence.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Connect</h2>
        <div className="space-y-4">
          <a 
            href="https://twitter.com/aiwithfloren" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-lg text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Twitter className="w-5 h-5" />
            <span>@aiwithfloren</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <div className="flex items-center gap-3 text-lg text-gray-600">
            <Mail className="w-5 h-5" />
            <span>hello@florence.ai</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Recent Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Creator Toolkit</h3>
            <p className="text-gray-600 mb-4">Open‑source tools for AI‑assisted content creation.</p>
            <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
              Active
            </span>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Human‑AI Collaboration</h3>
            <p className="text-gray-600 mb-4">Research on hybrid intelligence workflows.</p>
            <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
              Research
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Florence. All thoughts my own.</p>
        <p className="text-sm mt-2">Built with Next.js & Tailwind CSS</p>
      </footer>
    </div>
  );
}