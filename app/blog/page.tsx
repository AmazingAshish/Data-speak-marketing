import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, TrendingUp, Brain, BarChart3, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Conversational Analytics: How AI is Transforming Data Analysis",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way we interact with data, making complex analysis accessible to everyone through natural language.",
    author: "Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "/placeholder.svg?height=400&width=600",
    slug: "future-conversational-analytics-ai",
  }

  const blogPosts = [
    {
      title: "10 Data Visualization Best Practices for Business Professionals",
      excerpt:
        "Learn the essential principles of effective data visualization that will make your insights more compelling and actionable.",
      author: "Michael Rodriguez",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Data Visualization",
      image: "/placeholder.svg?height=300&width=400",
      slug: "data-visualization-best-practices",
    },
    {
      title: "How to Ask Better Questions of Your Data",
      excerpt: "Master the art of formulating questions that unlock deeper insights from your business data.",
      author: "Emily Johnson",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Analytics Tips",
      image: "/placeholder.svg?height=300&width=400",
      slug: "ask-better-questions-data",
    },
    {
      title: "ROI Analysis Made Simple: A Step-by-Step Guide",
      excerpt: "Break down complex ROI calculations into simple, conversational queries that anyone can understand.",
      author: "David Kim",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Business Intelligence",
      image: "/placeholder.svg?height=300&width=400",
      slug: "roi-analysis-simple-guide",
    },
    {
      title: "The Rise of No-Code Analytics: Democratizing Data Science",
      excerpt: "Discover how no-code analytics platforms are making data science accessible to non-technical users.",
      author: "Lisa Wang",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Industry Trends",
      image: "/placeholder.svg?height=300&width=400",
      slug: "rise-no-code-analytics",
    },
    {
      title: "Predictive Analytics for Small Businesses: Getting Started",
      excerpt:
        "Learn how small businesses can leverage predictive analytics to make better decisions and drive growth.",
      author: "James Thompson",
      date: "December 3, 2024",
      readTime: "8 min read",
      category: "Small Business",
      image: "/placeholder.svg?height=300&width=400",
      slug: "predictive-analytics-small-business",
    },
    {
      title: "Data Security in the Age of AI: What You Need to Know",
      excerpt:
        "Understanding the security implications of AI-powered analytics and how to protect your sensitive data.",
      author: "Rachel Green",
      date: "December 1, 2024",
      readTime: "9 min read",
      category: "Security",
      image: "/placeholder.svg?height=300&width=400",
      slug: "data-security-ai-age",
    },
  ]

  const categories = [
    { name: "All Posts", count: 24, icon: BarChart3 },
    { name: "AI & Technology", count: 8, icon: Brain },
    { name: "Data Visualization", count: 6, icon: TrendingUp },
    { name: "Analytics Tips", count: 5, icon: Zap },
    { name: "Business Intelligence", count: 3, icon: BarChart3 },
    { name: "Industry Trends", count: 2, icon: TrendingUp },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">DataSpeak Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Insights & Resources for
              <br />
              <span className="text-blue-600">Data-Driven Teams</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest trends in data analytics, AI, and business intelligence. Learn tips and best
              practices from industry experts.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Search articles..." className="pl-10 pr-4 py-3 text-lg" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="flex items-center">
                        <category.icon className="w-4 h-4 text-gray-500 mr-3" />
                        <span className="text-gray-700">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">Get the latest insights delivered to your inbox weekly.</p>
                <div className="space-y-3">
                  <Input placeholder="Your email address" />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <Card className="border-0 shadow-xl mb-12 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">{featuredPost.category}</Badge>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.slug}`}>Read Article</Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="aspect-video relative">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-gray-100 text-gray-800 hover:bg-gray-100">{post.category}</Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <User className="w-3 h-3 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
