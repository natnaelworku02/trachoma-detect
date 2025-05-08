import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">Frequently Asked Questions</h1>

          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Find answers to common questions about ClearSight and trachoma detection.
          </p>

          <Card className="p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">What is trachoma?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>
                    Trachoma is an infectious eye disease caused by the bacterium Chlamydia trachomatis. It's the
                    leading infectious cause of blindness worldwide. The infection causes a roughening of the inner
                    surface of the eyelids, which can lead to pain, irritation, light sensitivity, and eventually
                    scarring. If left untreated, trachoma can cause the eyelid to turn inward (trichiasis), resulting in
                    eyelashes scratching the cornea, leading to corneal damage and irreversible blindness.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  How accurate is ClearSight's trachoma detection?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>
                    ClearSight's AI algorithm has been trained on thousands of clinically validated images and achieves
                    high sensitivity (over 90%) and specificity (over 85%) in detecting trachoma. However, like any
                    diagnostic tool, it's not perfect and should be used as a support tool for healthcare professionals
                    rather than a replacement for clinical judgment. Factors such as image quality, lighting conditions,
                    and individual patient characteristics can affect accuracy.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  What type of images work best with ClearSight?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>
                    For optimal results, we recommend clear, well-lit images of the everted (turned out) upper eyelid,
                    as this is where trachoma signs are most visible. The image should be in focus, with good lighting
                    and minimal glare. Most smartphone cameras with at least 8 megapixels can capture suitable images.
                    Our system can process JPEG, PNG, and other common image formats.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">
                  Is patient data secure with ClearSight?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>
                    Yes, data security is a top priority for ClearSight. All image uploads and data transmissions are
                    encrypted using industry-standard protocols. We comply with healthcare data protection regulations
                    and do not store personally identifiable information with the images unless explicitly authorized.
                    Images are processed in real-time and can be automatically deleted after analysis if required.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">
                  Can ClearSight detect other eye conditions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>
                    Currently, ClearSight is specifically trained to detect trachoma. While our algorithm might
                    incidentally identify some other eye conditions, it is not designed or validated for diagnosing
                    conditions other than trachoma. We are actively researching and developing capabilities to detect
                    additional eye conditions in future versions of our system.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-medium">Who can use ClearSight?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>
                    ClearSight is designed for use by healthcare professionals, including doctors, nurses, community
                    health workers, and other trained personnel involved in eye care and trachoma control programs.
                    While the system is user-friendly, basic training in proper image capture and result interpretation
                    is recommended for optimal use.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg font-medium">Does ClearSight work offline?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>
                    The current version of ClearSight requires an internet connection to upload images and receive
                    analysis results. However, we understand the challenges of connectivity in many areas where trachoma
                    is endemic. We are developing an offline-capable version that can run on mobile devices without
                    continuous internet access, with periodic synchronization when connectivity is available.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg font-medium">
                  How does ClearSight fit into trachoma elimination programs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>
                    ClearSight supports the WHO's SAFE strategy for trachoma elimination (Surgery, Antibiotics, Facial
                    cleanliness, Environmental improvement) by enhancing the efficiency and accuracy of trachoma
                    diagnosis during community surveys and individual examinations. It can help in resource allocation,
                    treatment planning, and monitoring the effectiveness of interventions. The system is particularly
                    valuable in areas with limited access to ophthalmologists.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-lg font-medium">
                  Is there scientific evidence supporting ClearSight's effectiveness?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>
                    Yes, ClearSight's algorithm has been validated through peer-reviewed research studies comparing its
                    performance against diagnoses made by experienced ophthalmologists. These studies have demonstrated
                    high concordance rates and favorable sensitivity and specificity metrics. We continuously update our
                    algorithm based on new data and research findings to improve its performance.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-lg font-medium">
                  How can I get support for using ClearSight?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p>
                    We offer comprehensive support for ClearSight users, including detailed documentation, video
                    tutorials, and direct technical assistance. Our support team is available via email and chat during
                    business hours. For organizations implementing ClearSight at scale, we also offer training programs
                    and dedicated support packages. Contact us at support@clearsight.com for more information.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Contact us for more information about ClearSight.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-[#199A8E] hover:bg-[#0f7a70] text-white font-medium rounded-lg text-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
