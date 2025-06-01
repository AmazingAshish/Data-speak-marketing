import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function SocialProof() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      content:
        "DataSpeak has revolutionized how our team analyzes campaign performance. What used to take hours now takes minutes.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Financial Analyst",
      company: "Growth Capital",
      content:
        "The AI-powered insights have helped us identify trends we never would have spotted manually. It's like having a data scientist on demand.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Operations Manager",
      company: "Retail Plus",
      content:
        "Finally, a tool that speaks our language. No more waiting for IT to run reports - we can get answers instantly.",
      rating: 5,
    },
  ]

  const stats = [
    { value: "10,000+", label: "Active Users" },
    { value: "1M+", label: "Questions Answered" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9/5", label: "User Rating" },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Data-Driven Teams</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what professionals are saying about DataSpeak's impact on their workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-blue-200 mb-4" />

                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
