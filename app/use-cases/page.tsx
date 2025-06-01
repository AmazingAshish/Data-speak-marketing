import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  BarChart3,
  Target,
  Briefcase,
  Building,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function UseCasesPage() {
  const industries = [
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Optimize sales performance, inventory management, and customer insights",
      color: "blue",
      useCases: [
        "Sales performance tracking across channels",
        "Customer behavior analysis",
        "Inventory optimization",
        "Marketing campaign ROI",
      ],
    },
    {
      icon: TrendingUp,
      title: "Marketing & Advertising",
      description: "Measure campaign effectiveness and optimize marketing spend",
      color: "green",
      useCases: [
        "Campaign performance analysis",
        "Lead generation tracking",
        "Customer acquisition costs",
        "Social media analytics",
      ],
    },
    {
      icon: DollarSign,
      title: "Finance & Banking",
      description: "Financial reporting, risk analysis, and performance monitoring",
      color: "purple",
      useCases: [
        "Financial reporting automation",
        "Risk assessment and monitoring",
        "Budget vs actual analysis",
        "Investment performance tracking",
      ],
    },
    {
      icon: Building,
      title: "Real Estate",
      description: "Property analytics, market trends, and investment analysis",
      color: "orange",
      useCases: [
        "Market trend analysis",
        "Property valuation insights",
        "Investment ROI tracking",
        "Sales pipeline management",
      ],
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Employee analytics, performance tracking, and workforce insights",
      color: "indigo",
      useCases: [
        "Employee performance analysis",
        "Recruitment metrics",
        "Retention rate tracking",
        "Compensation analysis",
      ],
    },
    {
      icon: Briefcase,
      title: "Operations & Supply Chain",
      description: "Operational efficiency, logistics optimization, and process improvement",
      color: "teal",
      useCases: [
        "Supply chain optimization",
        "Operational efficiency metrics",
        "Quality control analysis",
        "Cost reduction opportunities",
      ],
    },
  ]

  const roleBasedUseCases = [
    {
      role: "Marketing Manager",
      challenge: "Manually tracking campaign ROI across multiple spreadsheets and platforms",
      solution: "Ask DataSpeak: 'What's my current ROI for the Q4 social media campaign?'",
      result: "Instant insights with visual breakdowns by channel, audience, and time period",
      icon: Target,
    },
    {
      role: "Sales Director",
      challenge: "Spending hours creating weekly sales reports and identifying trends",
      solution: "Ask DataSpeak: 'Show me sales performance by region this quarter vs last quarter'",
      result: "Automated reports with trend analysis and actionable recommendations",
      icon: TrendingUp,
    },
    {
      role: "Financial Analyst",
      challenge: "Complex financial modeling and variance analysis taking days to complete",
      solution: "Ask DataSpeak: 'Analyze budget variance and predict Q1 performance'",
      result: "Predictive models with variance explanations and forecast accuracy",
      icon: DollarSign,
    },
    {
      role: "Operations Manager",
      challenge: "Difficulty identifying bottlenecks and inefficiencies in processes",
      solution: "Ask DataSpeak: 'Where are the bottlenecks in our production process?'",
      result: "Process optimization insights with specific improvement recommendations",
      icon: BarChart3,
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
      teal: "bg-teal-100 text-teal-600 border-teal-200",
    }
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600 border-gray-200"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">Real-World Applications</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            DataSpeak for
            <br />
            <span className="text-blue-600">Every Industry</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See how professionals across industries use DataSpeak to transform their data analysis workflow and make
            faster, smarter decisions.
          </p>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industry Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className={`border-2 hover:shadow-lg transition-all ${getColorClasses(industry.color)}`}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <industry.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="flex items-start text-sm text-gray-600">
                        <div className="w-2 h-2 bg-current rounded-full mr-3 mt-2 flex-shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Use Cases */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories by Role</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how professionals in different roles solve their specific challenges with DataSpeak.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {roleBasedUseCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{useCase.role}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-red-600 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{useCase.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-blue-600 mb-2">DataSpeak Solution:</h4>
                      <p className="text-gray-700 text-sm italic bg-blue-50 p-3 rounded-lg">"{useCase.solution}"</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-green-600 mb-2">Result:</h4>
                      <p className="text-gray-600 text-sm">{useCase.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Case Study</Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">TechFlow Inc. Reduces Analysis Time by 85%</h2>
              <p className="text-gray-600 mb-6">
                See how a mid-size marketing agency transformed their reporting workflow with DataSpeak.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                  <div className="text-sm text-gray-600">Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <div className="text-sm text-gray-600">Faster Decisions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>

              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-6">
                "DataSpeak has revolutionized how our team analyzes campaign performance. What used to take our analysts
                hours now takes minutes. Our clients are getting insights faster than ever before."
              </blockquote>
              <div className="text-sm text-gray-600">
                <strong>Sarah Chen</strong> - Marketing Director, TechFlow Inc.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
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
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
