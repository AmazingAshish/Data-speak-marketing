import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, X, Star, Users, Building, Zap, Shield, Headphones } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for individuals getting started with data analysis",
      features: [
        "Up to 3 data files",
        "Basic visualizations",
        "5 questions per day",
        "Standard support",
        "Export to PNG/PDF",
      ],
      limitations: ["No AI predictions", "No custom themes", "No team collaboration"],
      cta: "Get Started Free",
      popular: false,
      icon: Zap,
    },
    {
      name: "Professional",
      price: "$29",
      period: "per user/month",
      description: "For professionals who need advanced analytics and insights",
      features: [
        "Unlimited data files",
        "All visualization types",
        "Unlimited questions",
        "AI-powered insights",
        "Predictive analytics",
        "Custom themes",
        "Priority support",
        "Export to all formats",
        "API access",
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true,
      icon: Star,
    },
    {
      name: "Team",
      price: "$79",
      period: "per user/month",
      description: "For teams that need collaboration and sharing features",
      features: [
        "Everything in Professional",
        "Team collaboration",
        "Shared dashboards",
        "User management",
        "Advanced security",
        "Team analytics",
        "Dedicated support",
        "Custom integrations",
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: false,
      icon: Users,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large organizations with custom requirements",
      features: [
        "Everything in Team",
        "Custom deployment",
        "SSO integration",
        "Advanced compliance",
        "Dedicated account manager",
        "Custom training",
        "SLA guarantee",
        "White-label options",
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      icon: Building,
    },
  ]

  const faqs = [
    {
      question: "Can I change plans at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes, all paid plans come with a 14-day free trial. No credit card required to start your trial.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay by invoice.",
    },
    {
      question: "How does the AI analysis work?",
      answer:
        "Our AI engine, powered by Google's Gemini and Genkit, analyzes your data patterns, identifies trends, and provides predictive insights automatically.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption, comply with SOC 2 Type II standards, and never store your data longer than necessary for analysis.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. There are no cancellation fees, and you'll retain access until the end of your billing period.",
    },
  ]

  const addOns = [
    {
      name: "Advanced AI Package",
      price: "$19/month",
      description: "Enhanced AI capabilities including advanced pattern recognition and custom ML models",
      icon: Shield,
    },
    {
      name: "Premium Support",
      price: "$49/month",
      description: "24/7 phone support, dedicated success manager, and priority feature requests",
      icon: Headphones,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">Simple, Transparent Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose the Perfect Plan
            <br />
            <span className="text-blue-600">For Your Needs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include our core conversational analytics features with no
            hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 ${
                  plan.popular ? "border-blue-500 shadow-xl scale-105" : "border-gray-200 hover:border-gray-300"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white hover:bg-blue-600">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600 ml-2">/{plan.period}</span>}
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button
                    className={`w-full mb-6 ${
                      plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    asChild
                  >
                    <Link href={plan.name === "Enterprise" ? "/contact" : "/demo"}>{plan.cta}</Link>
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start">
                        <X className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Optional Add-ons</h2>
            <p className="text-xl text-gray-600">Enhance your DataSpeak experience with these premium features</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <addon.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                      <p className="text-blue-600 font-medium">{addon.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about DataSpeak pricing</p>
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who trust DataSpeak for their data analysis needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/demo">Start Free Trial</Link>
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
