import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">About ClearSight</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 text-center">
              ClearSight is dedicated to improving global eye health through innovative technology and accessible
              solutions.
            </p>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At ClearSight, our mission is to eliminate preventable blindness worldwide by providing healthcare
                professionals with cutting-edge diagnostic tools that are accessible, accurate, and easy to use.
              </p>
              <p className="text-gray-600">
                Trachoma affects millions of people globally, particularly in underserved communities. By leveraging
                artificial intelligence and digital technology, we aim to bridge the gap in eye care services and
                contribute to the global effort to eradicate trachoma by 2030.
              </p>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Technology</h2>
              <p className="text-gray-600 mb-4">
                ClearSight's trachoma detection system uses advanced machine learning algorithms trained on thousands of
                eye images to identify signs of trachoma with high accuracy. Our technology has been developed in
                collaboration with ophthalmologists, public health experts, and AI specialists.
              </p>
              <p className="text-gray-600">
                The system is designed to be user-friendly, requiring minimal training to operate, making it suitable
                for use in various healthcare settings, including remote and resource-limited areas.
              </p>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Team</h2>
              <p className="text-gray-600 mb-4">
                ClearSight was founded by a team of healthcare professionals, technologists, and public health advocates
                passionate about leveraging technology to solve global health challenges.
              </p>
              <p className="text-gray-600">
                Our diverse team brings together expertise in ophthalmology, artificial intelligence, software
                development, and global health policy to create solutions that are both technically advanced and
                practically applicable in real-world healthcare settings.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Impact</h2>
              <p className="text-gray-600 mb-4">
                Since our inception, ClearSight has helped screen thousands of patients across multiple countries,
                contributing to early detection and treatment of trachoma and other eye conditions.
              </p>
              <p className="text-gray-600">
                We work closely with local healthcare providers, NGOs, and government agencies to integrate our
                technology into existing healthcare systems and maximize our impact on community eye health.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
