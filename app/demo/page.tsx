import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Play, Calendar, Users, Zap } from "lucide-react"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              <Play className="w-4 h-4 mr-2" />
              Interactive Demo
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience DataSpeak
              <br />
              <span className="text-blue-600">In Action</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how DataSpeak transforms complex data analysis into simple conversations. Request a personalized demo
              or start your free trial today.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Request Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Request a Personalized Demo</CardTitle>
              <p className="text-gray-600">
                Get a tailored demonstration of DataSpeak's capabilities with your specific use case.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company" />
              </div>

              <div>
                <Label htmlFor="role">Job Title</Label>
                <Input id="role" placeholder="e.g., Marketing Manager, Data Analyst" />
              </div>

              <div>
                <Label htmlFor="useCase">What would you like to analyze?</Label>
                <Textarea
                  id="useCase"
                  placeholder="Tell us about your data analysis needs, current challenges, or specific use cases you'd like to explore..."
                  rows={4}
                />
              </div>

              <Button className="w-full" size="lg">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Demo
              </Button>

              <p className="text-sm text-gray-500 text-center">
                We'll contact you within 24 hours to schedule your personalized demo.
              </p>
            </CardContent>
          </Card>

          {/* Demo Benefits */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">What You'll See in Your Demo</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Live Data Analysis</p>
                      <p className="text-sm text-gray-600">
                        Watch as we analyze real data using conversational queries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Custom Use Cases</p>
                      <p className="text-sm text-gray-600">See examples tailored to your industry and role</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">AI Capabilities</p>
                      <p className="text-sm text-gray-600">Experience pattern recognition and predictive analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Q&A Session</p>
                      <p className="text-sm text-gray-600">Get answers to all your questions about DataSpeak</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Prefer to Start Immediately?</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Jump right in with our free trial. No credit card required, full access to all features for 14 days.
                </p>
                <Button variant="outline" className="w-full" size="lg">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Team Demo Available</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Planning to roll out DataSpeak across your team? We offer specialized team demonstrations that show:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Collaboration features
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Admin controls and permissions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Enterprise security features
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                    Custom onboarding plans
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
