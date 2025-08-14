"use client"
import type React from "react"
import {
  Activity,
  Shield,
  Zap,
  Target,
  Settings,
  Chrome,
  Github,
  ArrowRight,
  Sparkles,
  Timer,
  BarChart3,
  Lock,
  Download,
} from "lucide-react"

// Add Supabase imports

// Initialize Supabase client
export default function InflowLanding() {

  // Function to scroll to the waitlist form

  
  const chromeStoreUrl = "https://chromewebstore.google.com/detail/Inflow:%20AI%20Website%20Blocker%20%26%20Focus%20Productivity%20Tool/pidhllckogbnnigclblflfjfkjjohhif"

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#8c52ff] rounded-xl flex items-center justify-center shadow-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Inflow
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/trickytoy/InFlow"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
            >
              <Github className="w-4 h-4" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href={chromeStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 cursor-pointer py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div  id="waitlist-form" className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Focus Assistant</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Stay Focused. <br />
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Stay InFlow.
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Inflow is the AI-powered Chrome extension that keeps your mind exactly where it needs to be. Focus isn't
                a discipline problem it's an environment problem.
              </p>

              {/* Waitlist Form */}
              <div className="mb-4">
                <a
                  href={chromeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  <Chrome className="w-6 h-6" />
                  <span>Add to Chrome - It's Free</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-sm text-gray-500 mt-3 ml-1">Available now on the Chrome Web Store</p>
              </div>
              <div className="mb-4">
                <a
                  href="https://www.producthunt.com/products/inflow?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-inflow-2"
                  target="_blank"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1003684&theme=light&t=1755163319654"
                    alt="InFlow - End Mindless Browsing and Procrastinating | Product Hunt"
                    style={{ width: "250px", height: "54px" }}
                    width={250}
                    height={54}
                  />
                </a>
              </div>

              <div className="flex items-center space-x-8 text-gray-500">
                <div className="flex items-center space-x-2">
                  <Chrome className="w-5 h-5" />
                  <span className="font-medium">Chrome Extension</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">100% Private</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-medium">AI-Powered</span>
                </div>
              </div>
            </div>
            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/images/dashboard-welcome.png"
                  alt="Inflow Dashboard showing focus heatmap and session history"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Ever start researching something important, only to end up reading about{" "}
            <span className="text-indigo-500">Viking metal</span>?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
            Traditional website blockers are too rigid. Everything's either blocked or open, no in-between. But what if
            your browser actually understood what you're working on and nudged you gently when you started to drift?
          </p>
          {/* Block Screen Image */}
          <div className="max-w-2xl mx-auto">
            <img
              src="/images/block-screen.png"
              alt="Inflow automatically blocks unrelated pages"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Your Cognitive Wingman</h2>
            <p className="text-xl text-gray-600">Inflow isn't just a blocker, it's an intelligent focus assistant</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Activity,
                title: "AI-Powered Analysis",
                description: "Uses semantic similarity to understand page content and relevance to your focus topic",
                color: "indigo",
              },
              {
                icon: Timer,
                title: "Smart Focus Sessions",
                description:
                  "Launch timed sessions where Inflow monitors your tabs and gently nudges you back on track",
                color: "green",
              },
              {
                icon: Lock,
                title: "Privacy First",
                description: "All processing happens locally in your browser. No data ever leaves your device",
                color: "purple",
              },
              {
                icon: BarChart3,
                title: "Focus Insights",
                description: "Real-time focus heatmap and session history to track your productivity patterns",
                color: "orange",
              },
              {
                icon: Settings,
                title: "Fully Configurable",
                description:
                  "Define focus goals, similarity thresholds, and choose between gentle nudges or active blocking",
                color: "red",
              },
              {
                icon: Target,
                title: "Semantic Understanding",
                description: "Goes beyond URL blocking, understands content meaning to make intelligent decisions",
                color: "teal",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div
                  className={`w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          {/* Timer Interface Image */}
          <div className="text-center">
            <img
              src="/images/timer-interface.png"
              alt="Inflow timer interface for focus sessions"
              className="w-full max-w-4xl mx-auto h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How Inflow Works</h2>
            <p className="text-xl text-gray-600">Simple setup, intelligent results</p>
          </div>
          <div className="space-y-16">
            {[
              {
                step: "1",
                title: "Set Your Focus Topic",
                description: 'Define what you\'re working on, like "machine learning research" or "resume writing"',
                color: "indigo",
              },
              {
                step: "2",
                title: "AI Analyzes Content",
                description: "Inflow uses semantic similarity models to evaluate every page you visit in real-time",
                color: "green",
              },
              {
                step: "3",
                title: "Stay in Flow",
                description: "Get gentle nudges when you drift off-topic, with smart suggestions to get back on track",
                color: "purple",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-12">
                <div
                  className={`w-20 h-20 bg-indigo-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <span className="text-3xl font-bold text-white">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Track Your Daily Sessions</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            Get detailed insights into your focus patterns with beautiful visualizations and session history
          </p>
          <div className="relative">
            <img
              src="/images/dashboard-sessions.png"
              alt="Inflow dashboard showing session tracking and analytics"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl blur-3xl transform scale-110"></div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Built with Modern Tech</h2>
            <p className="text-xl text-gray-600">Cutting-edge AI that runs entirely in your browser</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <Activity className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900">AI & Performance</h3>
              </div>
              <div className="space-y-4">
                {[
                  { tech: "@xenova/transformers", badge: "WebAssembly" },
                  { tech: "Semantic Models", badge: "Local Processing" },
                  { tech: "Offscreen Documents", badge: "Background AI" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{item.tech}</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <Chrome className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Extension & UI</h3>
              </div>
              <div className="space-y-4">
                {[
                  { tech: "React + Vite", badge: "Modern UI" },
                  { tech: "Manifest v3", badge: "Latest APIs" },
                  { tech: "Chrome Storage", badge: "Local Data" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{item.tech}</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-[#8c52ff] rounded-xl flex items-center justify-center shadow-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Inflow</span>
            </div>
            <div className="flex items-center space-x-8">
              <span className="text-gray-400">© 2025 Inflow. All rights reserved.</span>
              <a
                href="https://github.com/trickytoy/InFlow"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="text-lg font-medium mb-2"> Inflow - Stay Focused. Stay Inflow.</p>
            <p>Privacy-first AI that helps you maintain focus without compromising your data.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
