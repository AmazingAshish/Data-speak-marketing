import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageSquare, Play, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
            <Sparkles className="w-4 h-4 mr-2" />
            Conversational Analytics Platform
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Analyzing,
            <br />
            <span className="text-blue-600">Start Asking</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            DataSpeak transforms complex data into clear, actionable insights through simple conversation. Ask your data
            anything in plain English.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4" asChild>
              <Link href="/demo">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
              <Link href="/demo">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Visual - Conversational Interface Demo */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Browser-like header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm text-gray-600">DataSpeak Analytics</span>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="p-6 space-y-4 bg-gradient-to-b from-white to-gray-50 min-h-[400px]">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-2xl rounded-br-md px-4 py-3 max-w-xs">
                  <p className="text-sm">What's my sales performance this quarter compared to last quarter?</p>
                </div>
              </div>

              {/* DataSpeak response */}
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 rounded-2xl rounded-bl-md px-4 py-3 max-w-md">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-xs font-medium text-blue-600">DataSpeak</span>
                  </div>
                  <p className="text-sm mb-3">Your Q4 sales are up 23% compared to Q3! Here's the breakdown:</p>

                  {/* Mini chart visualization */}
                  <div className="bg-white rounded-lg p-3 border">
                    <div className="flex items-end space-x-2 h-16">
                      <div className="bg-blue-200 w-4 h-8 rounded-t"></div>
                      <div className="bg-blue-400 w-4 h-12 rounded-t"></div>
                      <div className="bg-blue-600 w-4 h-16 rounded-t"></div>
                      <div className="bg-blue-800 w-4 h-14 rounded-t"></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">Q1 → Q2 → Q3 → Q4</div>
                  </div>
                </div>
              </div>

              {/* Typing indicator */}
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
