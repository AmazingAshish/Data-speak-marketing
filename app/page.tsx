import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, TrendingUp, Sparkles, Play, CheckCircle } from "lucide-react"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { FeaturesOverview } from "@/components/features-overview"
import { HowItWorks } from "@/components/how-it-works"
import { BenefitsShowcase } from "@/components/benefits-showcase"
import { InteractiveDemo } from "@/components/interactive-demo"
import { SocialProof } from "@/components/social-proof"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Problem/Solution Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Data Analysis Challenge</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional data analysis is complex, time-consuming, and requires technical expertise. DataSpeak changes
            everything.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📈 Data Complexity</h3>
                <p className="text-gray-600">
                  Multiple spreadsheets, complex formulas, and technical barriers prevent quick insights.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">⏱️ Time-Consuming Analysis</h3>
                <p className="text-gray-600">
                  Hours spent on data preparation and analysis instead of decision-making.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🔧 Technical Barriers</h3>
                <p className="text-gray-600">
                  Requires specialized skills and tools that many business users don't have.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">💬 Conversational Interface</h3>
                <p className="text-gray-600">Ask questions in plain English and get instant, intelligent responses.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">⚡ Instant Insights</h3>
                <p className="text-gray-600">Get from data to actionable insights in minutes, not hours.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🎯 No Technical Skills Required</h3>
                <p className="text-gray-600">Designed for business users - no coding or complex queries needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <FeaturesOverview />

      {/* How It Works */}
      <HowItWorks />

      {/* Benefits Showcase */}
      <BenefitsShowcase />

      {/* Interactive Demo Teaser */}
      <InteractiveDemo />

      {/* AI Capabilities Spotlight */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Intelligence
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced AI & Machine Learning Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by cutting-edge AI including Google's Gemini and Genkit for sophisticated data understanding and
              analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">🧠 Pattern Recognition</h3>
                <p className="text-gray-600">
                  Automatically identify trends, anomalies, and patterns in your data that might be missed by
                  traditional analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">🔮 Predictive Analytics</h3>
                <p className="text-gray-600">
                  Leverage machine learning to forecast trends and make data-driven predictions about future outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">📝 Smart Recommendations</h3>
                <p className="text-gray-600">
                  Get intelligent suggestions for further analysis, visualization improvements, and actionable next
                  steps.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof />

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data Analysis?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who are already making faster, smarter decisions with DataSpeak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/demo">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
              <Link href="/demo">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
