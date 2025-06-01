import { Card, CardContent } from "@/components/ui/card"
import { Upload, MessageSquare, BarChart3, Download } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Data",
      description:
        "Simply drag and drop your CSV, Excel, or other data files. DataSpeak supports multiple file formats and sources.",
      step: "01",
    },
    {
      icon: MessageSquare,
      title: "Ask in Plain English",
      description: "Type your questions naturally. No need to learn complex query languages or formulas.",
      step: "02",
    },
    {
      icon: BarChart3,
      title: "Get Instant Insights",
      description:
        "DataSpeak analyzes your data and generates beautiful visualizations and clear explanations automatically.",
      step: "03",
    },
    {
      icon: Download,
      title: "Export & Share",
      description: "Download your charts, share insights with your team, or integrate findings into presentations.",
      step: "04",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How DataSpeak Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get from data to insights in four simple steps. No technical expertise required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0" />
              )}

              <Card className="relative z-10 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
