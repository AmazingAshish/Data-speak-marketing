import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">Legal</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-600">Last updated: December 15, 2024</p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                By accessing and using DataSpeak ("Service"), you agree to be bound by these Terms of Service ("Terms").
                If you disagree with any part of these terms, then you may not access the Service.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">1. Use License</h3>
              <p>
                Permission is granted to temporarily use DataSpeak for personal and commercial purposes. This is the
                grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained in DataSpeak</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">2. Data Privacy and Security</h3>
              <p>
                We take your data privacy seriously. Your data is encrypted in transit and at rest. We do not sell,
                trade, or otherwise transfer your personal data to third parties without your consent, except as
                described in our Privacy Policy.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">3. User Accounts</h3>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. You are responsible for safeguarding the password and for all activities that occur under
                your account.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">4. Prohibited Uses</h3>
              <p>You may not use our Service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>
                  To violate any international, federal, provincial, or state regulations, rules, laws, or local
                  ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights or the intellectual property rights of
                  others
                </li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">5. Service Availability</h3>
              <p>
                We strive to maintain 99.9% uptime, but we do not guarantee that the Service will be available at all
                times. We may experience hardware, software, or other problems or need to perform maintenance related to
                the Service.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">6. Limitation of Liability</h3>
              <p>
                In no event shall DataSpeak or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use DataSpeak, even if DataSpeak or a DataSpeak authorized representative has been notified orally or
                in writing of the possibility of such damage.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">7. Termination</h3>
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice
                or liability, under our sole discretion, for any reason whatsoever and without limitation, including but
                not limited to a breach of the Terms.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">8. Changes to Terms</h3>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">9. Contact Information</h3>
              <p>If you have any questions about these Terms of Service, please contact us at legal@dataspeak.com.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
