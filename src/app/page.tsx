"use client"

import type React from "react"

import { useState } from "react"
import {
  Activity,
  Shield,
  Zap,
  Target,
  Settings,
  Chrome,
  Github,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Timer,
  BarChart3,
  Lock,
} from "lucide-react"

export default function InflowLanding() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

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
              href="#"
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
            >
              <Github className="w-4 h-4" />
              <span className="font-medium">GitHub</span>
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl">
              Join Waitlist
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 font-medium mb-8">
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
              <div className="mb-12">
                {!isSubmitted ? (
                  <form onSubmit={handleWaitlistSubmit} className="flex gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white shadow-sm"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center space-x-2"
                    >
                      <span>{isLoading ? "Joining..." : "Join Waitlist"}</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-center space-x-3 bg-green-50 border border-green-200 p-6 rounded-xl text-green-700">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-medium">You're on the Waitlist! We'll notify you when Inflow launches.</span>
                  </div>
                )}
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
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Focus?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join the Waitlist to be notified when Inflow launches on the Chrome Web Store
          </p>

          {!isSubmitted ? (
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleWaitlistSubmit} className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-lg mx-auto">
              <CheckCircle className="w-6 h-6" />
              <span className="font-medium">You're on the Waitlist!</span>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Inflow</span>
            </div>

            <div className="flex items-center space-x-8">
              <span className="text-gray-400">© 2024 Inflow. All rights reserved.</span>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="text-lg font-medium mb-2">🧠 Inflow - Stay Focused. Stay Inflow.</p>
            <p>Privacy-first AI that helps you maintain focus without compromising your data.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
