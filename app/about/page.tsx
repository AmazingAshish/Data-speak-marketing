import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Lightbulb, Shield, Heart, Globe, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible in data analytics, leveraging cutting-edge AI to solve real problems.",
    },
    {
      icon: Users,
      title: "Accessibility",
      description:
        "We believe powerful data analysis should be accessible to everyone, regardless of technical background.",
    },
    {
      icon: Shield,
      title: "Trust",
      description:
        "We prioritize data security and privacy, ensuring your information is always protected with enterprise-grade security.",
    },
    {
      icon: Heart,
      title: "User-Centric",
      description:
        "Every feature we build is designed with our users in mind, focusing on simplicity and effectiveness.",
    },
  ]

  const stats = [
    { value: "2022", label: "Founded" },
    { value: "50+", label: "Team Members" },
    { value: "10,000+", label: "Active Users" },
    { value: "1M+", label: "Questions Answered" },
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former data scientist at Google with 10+ years in AI and machine learning.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Microsoft engineer specializing in scalable analytics platforms.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Johnson",
      role: "Head of Product",
      bio: "Product leader with experience at Tableau and Salesforce.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Kim",
      role: "Head of AI",
      bio: "PhD in Machine Learning from Stanford, former researcher at OpenAI.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "DataSpeak was founded with the vision of making data analysis conversational and accessible.",
    },
    {
      year: "2023",
      title: "AI Engine Launch",
      description: "Released our first AI-powered conversational analytics engine with natural language processing.",
    },
    {
      year: "2023",
      title: "Series A Funding",
      description: "Raised $15M Series A to accelerate product development and team growth.",
    },
    {
      year: "2024",
      title: "Enterprise Features",
      description: "Launched enterprise-grade features including team collaboration and advanced security.",
    },
    {
      year: "2024",
      title: "10K+ Users",
      description: "Reached 10,000+ active users across 50+ countries, processing millions of data queries.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">About DataSpeak</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Democratizing Data Analysis
            <br />
            <span className="text-blue-600">Through Conversation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're on a mission to make powerful data analysis accessible to everyone, transforming complex queries into
            simple conversations.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To democratize data analysis by making it as simple as having a conversation. We believe that everyone
                should be able to unlock insights from their data, regardless of their technical background.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By combining cutting-edge AI with intuitive design, we're breaking down the barriers that have
                traditionally made data analysis complex and time-consuming.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where data-driven decision making is accessible to every professional, where insights are just a
                question away, and where the power of data analysis is no longer limited by technical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at DataSpeak.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind DataSpeak's innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in DataSpeak's growth and development.</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-blue-600 mr-3">{milestone.year}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Powered by Cutting-Edge Technology</h2>
          <p className="text-xl text-gray-600 mb-8">
            DataSpeak leverages the latest advances in AI and machine learning to deliver unparalleled analytics
            capabilities.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-md bg-white/80">
              <CardContent className="p-6 text-center">
                <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Google Gemini AI</h3>
                <p className="text-sm text-gray-600">Advanced language understanding and reasoning</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md bg-white/80">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Google Genkit</h3>
                <p className="text-sm text-gray-600">Scalable AI application framework</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md bg-white/80">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Machine Learning</h3>
                <p className="text-sm text-gray-600">Predictive analytics and pattern recognition</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Us on Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of the data analytics revolution. Experience the future of conversational analytics today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/demo">Try DataSpeak Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
