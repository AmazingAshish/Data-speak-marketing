import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Building, Headphones } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@dataspeak.com",
      availability: "24/7 response within 4 hours",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9 AM - 6 PM EST",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant help when you need it",
      contact: "Available in app",
      availability: "Mon-Fri, 9 AM - 6 PM EST",
    },
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 400",
      zipCode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 12",
      zipCode: "New York, NY 10013",
      phone: "+1 (555) 987-6543",
    },
    {
      city: "London",
      address: "789 Oxford Street",
      zipCode: "London W1C 1JN, UK",
      phone: "+44 20 7123 4567",
    },
  ]

  const supportTypes = [
    { icon: Users, title: "Sales Inquiry", description: "Learn about pricing and plans" },
    { icon: Headphones, title: "Technical Support", description: "Get help with using DataSpeak" },
    { icon: Building, title: "Enterprise Sales", description: "Custom solutions for large teams" },
    { icon: MessageSquare, title: "General Question", description: "Any other questions or feedback" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">Get in Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We're Here to
            <br />
            <span className="text-blue-600">Help You Succeed</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Have questions about DataSpeak? Need help getting started? Our team is ready to assist you with anything you
            need.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Support Type Selection */}
                <div className="grid md:grid-cols-2 gap-4">
                  {supportTypes.map((type, index) => (
                    <Card
                      key={index}
                      className="border-2 border-gray-200 hover:border-blue-300 cursor-pointer transition-colors"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <type.icon className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 text-sm">{type.title}</h3>
                            <p className="text-xs text-gray-600">{type.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

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
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div>
                    <Label htmlFor="role">Job Title</Label>
                    <Input id="role" placeholder="e.g., Marketing Manager" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="enterprise">Enterprise Sales</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us how we can help you..." rows={6} />
                </div>

                <Button className="w-full" size="lg">
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 4 hours during business hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{method.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                      <p className="text-sm font-medium text-blue-600">{method.contact}</p>
                      <p className="text-xs text-gray-500">{method.availability}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Office Locations */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Our Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                    <h3 className="font-medium text-gray-900 mb-2">{office.city}</h3>
                    <p className="text-sm text-gray-600">{office.address}</p>
                    <p className="text-sm text-gray-600">{office.zipCode}</p>
                    <p className="text-sm text-blue-600 mt-1">{office.phone}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-medium text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-900">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Email support is available 24/7 with responses within 4 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
