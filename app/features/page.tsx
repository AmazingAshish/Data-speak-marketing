import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  Brain,
  BarChart3,
  PieChart,
  LineChart,
  ScatterChartIcon as Scatter,
  Upload,
  Download,
  Palette,
  Database,
  Shield,
  Smartphone,
  Eye,
  TrendingUp,
  Target,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const coreCapabilities = [
    {
      icon: MessageSquare,
      title: "Conversational Interface",
      description:
        "Ask questions in natural language and get instant, intelligent responses. No need to learn complex query languages or formulas.",
      features: [
        "Natural language processing",
        "Context-aware responses",
        "Multi-turn conversations",
        "Smart suggestions",
      ],
    },
    {
      icon: Brain,
      title: "AI-Powered Understanding",
      description:
        "Advanced AI interprets your questions and automatically generates the right analysis and visualizations.",
      features: ["Intent recognition", "Automatic chart selection", "Smart data interpretation", "Contextual insights"],
    },
    {
      icon: BarChart3,
      title: "Intelligent Visualizations",
      description: "Automatically creates the perfect charts and graphs to represent your data insights clearly.",
      features: ["Auto-generated charts", "Interactive dashboards", "Custom styling", "Export capabilities"],
    },
    {
      icon: Database,
      title: "Multi-Source Integration",
      description: "Upload and analyze data from multiple files and sources in one unified platform.",
      features: ["CSV/Excel support", "Multiple file upload", "Data merging", "Source tracking"],
    },
  ]

  const visualizationTypes = [
    { icon: BarChart3, title: "Bar Charts", description: "Compare categories and track performance metrics" },
    { icon: LineChart, title: "Line Charts", description: "Visualize trends and changes over time" },
    { icon: PieChart, title: "Pie Charts", description: "Show proportions and percentage breakdowns" },
    { icon: Scatter, title: "Scatter Plots", description: "Explore relationships between variables" },
    { icon: TrendingUp, title: "Area Charts", description: "Display cumulative data over time" },
    { icon: Target, title: "Gauge Charts", description: "Show progress towards goals and KPIs" },
  ]

  const aiCapabilities = [
    {
      icon: Brain,
      title: "Pattern Recognition",
      description:
        "Automatically identify trends, anomalies, and patterns in your data that might be missed by traditional analysis.",
      benefits: ["Trend detection", "Anomaly identification", "Correlation discovery", "Seasonal patterns"],
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description:
        "Leverage machine learning to forecast trends and make data-driven predictions about future outcomes.",
      benefits: ["Sales forecasting", "Demand prediction", "Risk assessment", "Growth modeling"],
    },
    {
      icon: Lightbulb,
      title: "Smart Recommendations",
      description:
        "Get intelligent suggestions for further analysis, visualization improvements, and actionable next steps.",
      benefits: ["Analysis suggestions", "Chart recommendations", "Data quality tips", "Action items"],
    },
  ]

  const userExperience = [
    {
      icon: Upload,
      title: "Multi-File Upload",
      description: "Drag and drop multiple files at once. Support for CSV, Excel, and other common formats.",
    },
    {
      icon: Download,
      title: "Chart Download",
      description: "Export your visualizations in high-quality formats for presentations and reports.",
    },
    {
      icon: Palette,
      title: "Custom Themes",
      description: "Choose from light and dark themes, or customize colors to match your brand.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Access DataSpeak from any device with a fully responsive, mobile-optimized interface.",
    },
    {
      icon: Eye,
      title: "Accessibility First",
      description: "Built with WCAG 2.2 AA compliance for screen readers and keyboard navigation.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data is protected with industry-leading security measures and encryption.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">Complete Feature Overview</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <br />
            <span className="text-blue-600">Intelligent Data Analysis</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover all the capabilities that make DataSpeak the most intuitive and powerful conversational analytics
            platform.
          </p>
          <Button size="lg" asChild>
            <Link href="/demo">Try All Features Free</Link>
          </Button>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {coreCapabilities.map((capability, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <capability.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{capability.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visualization Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Visualization Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DataSpeak automatically selects the best visualization for your data and question, or you can choose from
              our comprehensive library.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visualizationTypes.map((viz, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <viz.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{viz.title}</h3>
                  <p className="text-gray-600 text-sm">{viz.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Machine Learning */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">
              AI & Machine Learning Integration
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powered by Advanced AI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI engine, powered by Google's Gemini and Genkit, provides sophisticated analysis capabilities that go
              beyond traditional data tools.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <capability.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{capability.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Experience Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Exceptional User Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail is designed to make your data analysis workflow smooth, efficient, and enjoyable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userExperience.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience All Features Today</h2>
          <p className="text-xl text-gray-600 mb-8">
            See how DataSpeak's comprehensive feature set can transform your data analysis workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/use-cases">See Use Cases</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
