import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">How ClearSight Works</h1>

          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Our trachoma detection system combines cutting-edge AI technology with a simple user interface to provide
            accurate and timely diagnosis.
          </p>

          <div className="space-y-12">
            <Card className="p-8 relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-[#199A8E]/10 flex items-center justify-center">
                    <span className="text-5xl font-bold text-[#199A8E]">1</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Image Capture</h2>
                  <p className="text-gray-600 mb-4">
                    Healthcare providers capture a clear, high-resolution image of the patient's eye using a standard
                    digital camera or smartphone.
                  </p>
                  <p className="text-gray-600">
                    Our system works with various image formats and qualities, though clearer images produce more
                    accurate results. The application provides guidance on optimal image capture techniques.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-[#199A8E]/10 flex items-center justify-center">
                    <span className="text-5xl font-bold text-[#199A8E]">2</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Image Upload</h2>
                  <p className="text-gray-600 mb-4">
                    The captured image is uploaded to our secure platform through our web application. The upload
                    process is quick and straightforward, requiring only a few clicks.
                  </p>
                  <p className="text-gray-600">
                    All data transmission is encrypted to ensure patient privacy and compliance with healthcare data
                    protection regulations.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-[#199A8E]/10 flex items-center justify-center">
                    <span className="text-5xl font-bold text-[#199A8E]">3</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">AI Analysis</h2>
                  <p className="text-gray-600 mb-4">
                    Our advanced AI algorithm analyzes the eye image, looking for specific signs of trachoma such as
                    follicular inflammation, scarring, and trichiasis.
                  </p>
                  <p className="text-gray-600">
                    The algorithm has been trained on thousands of clinically validated images and achieves high
                    sensitivity and specificity in detecting trachoma at various stages.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-[#199A8E]/10 flex items-center justify-center">
                    <span className="text-5xl font-bold text-[#199A8E]">4</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Results Generation</h2>
                  <p className="text-gray-600 mb-4">
                    Within seconds, the system generates a comprehensive report indicating the likelihood of trachoma
                    presence, the stage of the disease if detected, and confidence levels of the analysis.
                  </p>
                  <p className="text-gray-600">
                    The results are presented in an easy-to-understand format with visual indicators and explanatory
                    text to aid interpretation.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-[#199A8E]/10 flex items-center justify-center">
                    <span className="text-5xl font-bold text-[#199A8E]">5</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Clinical Decision Support</h2>
                  <p className="text-gray-600 mb-4">
                    Based on the analysis, the system provides treatment recommendations and follow-up suggestions in
                    line with WHO guidelines for trachoma management.
                  </p>
                  <p className="text-gray-600">
                    It's important to note that ClearSight is designed as a decision support tool for healthcare
                    professionals, not as a replacement for clinical judgment. All results should be confirmed by
                    qualified healthcare providers.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-[#199A8E]/10 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Try ClearSight?</h2>
            <p className="text-gray-600 mb-6">
              Experience the power of AI-assisted trachoma detection for yourself. Upload an eye image and get results
              in seconds.
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-[#199A8E] hover:bg-[#0f7a70] text-white font-medium rounded-lg text-lg transition-colors"
            >
              Try It Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
