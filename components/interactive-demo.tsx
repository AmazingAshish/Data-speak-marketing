import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, PieChart, LineChart, ScatterChartIcon as Scatter, TrendingUp, Play } from "lucide-react"
import Link from "next/link"

export function InteractiveDemo() {
  const visualizations = [
    {
      icon: BarChart3,
      title: "Bar Charts",
      description: "Compare categories and track performance metrics",
      color: "blue",
    },
    {
      icon: LineChart,
      title: "Line Charts",
      description: "Visualize trends and changes over time",
      color: "green",
    },
    {
      icon: PieChart,
      title: "Pie Charts",
      description: "Show proportions and percentage breakdowns",
      color: "purple",
    },
    {
      icon: Scatter,
      title: "Scatter Plots",
      description: "Explore relationships between variables",
      color: "orange",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
    }
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600 border-gray-200"
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            <TrendingUp className="w-4 h-4 mr-2" />
            Interactive Visualizations
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bring Your Data to Life</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DataSpeak automatically creates beautiful, interactive visualizations that make your data insights crystal
            clear.
          </p>
        </div>

        {/* Visualization Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visualizations.map((viz, index) => (
            <Card
              key={index}
              className={`border-2 hover:shadow-lg transition-all duration-300 ${getColorClasses(viz.color)}`}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <viz.icon className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">{viz.title}</h3>
                <p className="text-sm opacity-80">{viz.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Demo Preview */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-4xl mx-auto">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Sample Dashboard</h3>
            <p className="text-sm text-gray-600">Sales Performance Q4 2024</p>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sample Chart 1 */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-3 text-gray-900">Monthly Revenue</h4>
                <div className="flex items-end space-x-2 h-32">
                  <div className="bg-blue-400 w-8 h-16 rounded-t"></div>
                  <div className="bg-blue-500 w-8 h-20 rounded-t"></div>
                  <div className="bg-blue-600 w-8 h-24 rounded-t"></div>
                  <div className="bg-blue-700 w-8 h-32 rounded-t"></div>
                </div>
                <div className="text-xs text-gray-500 mt-2 flex justify-between">
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                  <span>Jan</span>
                </div>
              </div>

              {/* Sample Chart 2 */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-3 text-gray-900">Product Categories</h4>
                <div className="flex items-center justify-center h-32">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 rounded-full border-8 border-blue-200"></div>
                    <div className="absolute inset-0 rounded-full border-8 border-blue-600 border-r-transparent border-b-transparent transform rotate-45"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-green-400 border-l-transparent border-t-transparent"></div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-2 space-y-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded mr-2"></div>
                    <span>Software (45%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded mr-2"></div>
                    <span>Services (35%)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button asChild>
                <Link href="/demo">
                  <Play className="mr-2 w-4 h-4" />
                  Try Interactive Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
