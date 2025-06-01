import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, Brain, BarChart3, Zap, Database, Palette } from "lucide-react"
import Link from "next/link"

export function FeaturesOverview() {
  const features = [
    {
      icon: MessageSquare,
      title: "Conversational Interface",
      description: "Ask questions in natural language and get instant, intelligent responses from your data.",
      color: "blue",
    },
    {
      icon: Brain,
      title: "AI-Powered Understanding",
      description:
        "Advanced AI interprets your questions and automatically generates the right analysis and visualizations.",
      color: "purple",
    },
    {
      icon: BarChart3,
      title: "Intelligent Visualizations",
      description: "Automatically creates the perfect charts and graphs to represent your data insights clearly.",
      color: "green",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get from raw data to actionable insights in seconds, not hours or days.",
      color: "yellow",
    },
    {
      icon: Database,
      title: "Multi-Source Integration",
      description: "Upload and analyze data from multiple files and sources in one unified platform.",
      color: "indigo",
    },
    {
      icon: Palette,
      title: "Beautiful Dashboards",
      description: "Create stunning, interactive dashboards that make your data come alive.",
      color: "pink",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      yellow: "bg-yellow-100 text-yellow-600",
      indigo: "bg-indigo-100 text-indigo-600",
      pink: "bg-pink-100 text-pink-600",
    }
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600"
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-100">Core Capabilities</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features That Transform Data Analysis</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DataSpeak combines cutting-edge AI with intuitive design to make data analysis accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(feature.color)}`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/features">
              Explore All Features
              <BarChart3 className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
