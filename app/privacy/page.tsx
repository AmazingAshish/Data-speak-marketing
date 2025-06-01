import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">Legal</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last updated: December 15, 2024</p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Your Privacy Matters</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                At DataSpeak, we are committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h3>
              <h4 className="text-lg font-medium mt-6 mb-3">Personal Information</h4>
              <p>We collect information you provide directly to us, such as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>

              <h4 className="text-lg font-medium mt-6 mb-3">Usage Data</h4>
              <p>We automatically collect certain information when you use our Service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Log data and analytics</li>
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h4 className="text-lg font-medium mt-6 mb-3">Data Files</h4>
              <p>
                When you upload data files to DataSpeak, we process this data to provide our analytics services. We do
                not store your data files longer than necessary to provide the service.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new features and services</li>
                <li>Protect against fraud and abuse</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">3. Information Sharing</h3>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist in operating our Service</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">5. Data Retention</h3>
              <p>
                We retain your personal information only as long as necessary to provide our Service and fulfill the
                purposes outlined in this Privacy Policy. Data files uploaded for analysis are automatically deleted
                after processing unless you choose to save them.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">6. Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Delete your account and data</li>
                <li>Export your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">7. Cookies</h3>
              <p>
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide
                personalized content. You can control cookie settings through your browser preferences.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">8. International Transfers</h3>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place to protect your data during international transfers.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">9. Children's Privacy</h3>
              <p>
                Our Service is not intended for children under 13. We do not knowingly collect personal information from
                children under 13. If we become aware of such collection, we will delete the information immediately.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">10. Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">11. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@dataspeak.com or
                through our contact page.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
