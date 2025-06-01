import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Upload, MessageSquare, BarChart3, Download, ArrowRight, Play, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function GetStartedPage() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Data",
      description: "Drag and drop your CSV, Excel, or other data files. We support multiple formats.",
      time: "30 seconds",
      features: ["CSV, Excel, JSON support", "Multiple file upload", "Automatic data detection"],
    },
    {
      icon: MessageSquare,
      title: "Ask Questions",
      description: "Type your questions in plain English. No complex queries or formulas needed.",
      time: "Instant",
      features: ["Natural language processing", "Context-aware responses", "Smart suggestions"],
    },
    {
      icon: BarChart3,
      title: "Get Insights",
      description: "Receive instant visualizations and explanations tailored to your questions.",
      time: "Real-time",
      features: ["Auto-generated charts", "AI-powered insights", "Interactive dashboards"],
    },
    {
      icon: Download,
      title: "Export & Share",
      description: "Download charts, share insights, or integrate findings into presentations.",
      time: "One-click",
      features: ["Multiple export formats", "Team sharing", "Presentation ready"],
    },
  ]

  const plans = [
    {
      name: "Free Trial",
      description: "Perfect for getting started",
      price: "Free",
      period: "14 days",
      features: [
        "All Professional features",
        "Unlimited questions",
        "AI-powered insights",
        "All visualization types",
        "Export capabilities",
      ],
      cta: "Start Free Trial",
      popular: true,
      icon: Zap,
    },
    {
      name: "Team Demo",
      description: "For teams and organizations",
      price: "Custom",
      period: "30 min session",
      features: [
        "Personalized demonstration",
        "Team collaboration features",
        "Enterprise security overview",
        "Custom use case examples",
        "Q&A with experts",
      ],
      cta: "Schedule Demo",
      popular: false,
      icon: Users,
    },
  ]

  const faqs = [
    {
      question: "Do I need a credit card to start?",
      answer: "No! Our free trial requires no credit card. You can explore all features for 14 days completely free.",
    },
    {
      question: "What file formats do you support?",
      answer: "We support CSV, Excel (.xlsx, .xls), JSON, and TSV files. More formats are being added regularly.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption and never store your data longer than necessary for analysis.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="w-4 h-4 mr-2" />
            Get Started in Minutes
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Your DataSpeak
            <br />
            <span className="text-blue-600">Journey Today</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your data analysis workflow in just a few simple steps. No technical expertise required.
          </p>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-600">
              Follow these simple steps to unlock the power of conversational analytics
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0" />
                )}

                <Card className="relative z-10 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <Badge variant="secondary" className="mb-4">
                      {step.time}
                    </Badge>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600">Start with a free trial or schedule a personalized demo</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 ${
                  plan.popular ? "border-blue-500 shadow-xl scale-105" : "border-gray-200"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">Recommended</div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <p className="text-gray-600">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/ {plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button
                    className={`w-full mb-6 ${
                      plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    size="lg"
                    asChild
                  >
                    <Link href={plan.name === "Team Demo" ? "/demo" : "/signup"}>
                      {plan.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Video */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">See DataSpeak in Action</h2>
          <p className="text-xl text-gray-600 mb-8">
            Watch this 2-minute video to see how easy it is to get insights from your data.
          </p>

          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
                <Play className="mr-2 w-6 h-6" />
                Watch Demo Video
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know to get started</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data Analysis?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who are already making faster, smarter decisions with DataSpeak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
