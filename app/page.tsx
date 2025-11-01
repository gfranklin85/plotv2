import Link from 'next/link'
import { ArrowRight, Home, Users, Briefcase } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Plot
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/marketplace" className="text-gray-600 hover:text-gray-900">
              Marketplace
            </Link>
            <Link href="/signin" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Real Estate, Reimagined with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The complete platform connecting agents, homeowners, and vendors through intelligent automation.
            Powered by Claude Sonnet 4 and Vapi voice AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 font-medium"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/features"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 flex items-center justify-center gap-2 font-medium"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Three Experiences */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Three Integrated Experiences
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Agent Dashboard */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Agent Dashboard</h3>
            <p className="text-gray-600 mb-4">
              Powerful CRM, AI assistant Greg, voice receptionist Riley, vendor earnings, and complete deal management.
            </p>
            <Link href="/for-agents" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2">
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Client Portal */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Home className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Client Portal</h3>
            <p className="text-gray-600 mb-4">
              Transaction tracking, milestone management, service booking, rewards, and FSBO tools for homeowners.
            </p>
            <Link href="/for-homeowners" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2">
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Vendor Marketplace */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Vendor Marketplace</h3>
            <p className="text-gray-600 mb-4">
              Lead generation, bid management, reviews, analytics, and automated payouts for service providers.
            </p>
            <Link href="/marketplace" className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center gap-2">
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Powered by Advanced AI</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3">Greg the Broker</h3>
              <p className="text-blue-100">
                AI assistant powered by Claude Sonnet 4. Natural language queries, contextual insights, and intelligent automation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3">Riley the Receptionist</h3>
              <p className="text-purple-100">
                24/7 voice AI powered by Vapi. Bilingual call handling, lead qualification, and automatic scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="text-xl font-bold">Plot</span>
              </div>
              <p className="text-gray-600">
                AI-powered real estate platform for the modern era.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/marketplace">Marketplace</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/for-agents">Agents</Link></li>
                <li><Link href="/for-homeowners">Homeowners</Link></li>
                <li><Link href="/marketplace">Vendors</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/legal/privacy">Privacy</Link></li>
                <li><Link href="/legal/terms">Terms</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 Plot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
