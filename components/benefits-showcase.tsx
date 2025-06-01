import { Card, CardContent } from "@/components/ui/card"
import { Clock, TrendingUp, Users, Shield, Zap, Target } from "lucide-react"

export function BenefitsShowcase() {
  const benefits = [
    {
      icon: Zap,
      title: "Unlock Insights Faster",
      description: "Reduce analysis time from hours to minutes with AI-powered automation.",
      metric: "90% faster",
      color: "yellow",
    },
    {
      icon: Target,
      title: "Make Data-Driven Decisions",
      description: "Get clear, actionable insights that drive better business outcomes.",
      metric: "Better decisions",
      color: "green",
    },
    {
      icon: Users,
      title: "No Complex Queries Needed",
      description: "Empower your entire team to analyze data without technical training.",
      metric: "Zero learning curve",
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: "Discover Hidden Patterns",
      description: "AI identifies trends and anomalies you might miss with manual analysis.",
      metric: "Deeper insights",
      color: "purple",
    },
    {
      icon: Clock,
      title: "Real-Time Analysis",
      description: "Get instant responses to your questions as your data updates.",
      metric: "Instant results",
      color: "indigo",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Your data is protected with industry-leading security measures.",
      metric: "100% secure",
      color: "red",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      yellow: "from-yellow-400 to-orange-500",
      green: "from-green-400 to-emerald-500",
      blue: "from-blue-400 to-cyan-500",
      purple: "from-purple-400 to-pink-500",
      indigo: "from-indigo-400 to-blue-500",
      red: "from-red-400 to-pink-500",
    }
    return colorMap[color as keyof typeof colorMap] || "from-gray-400 to-gray-500"
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose DataSpeak?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your data analysis workflow and unlock the full potential of your business data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getColorClasses(benefit.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div className="mb-3">
                  <span
                    className={`text-sm font-bold bg-gradient-to-r ${getColorClasses(benefit.color)} bg-clip-text text-transparent`}
                  >
                    {benefit.metric}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
