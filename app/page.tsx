"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { uploadImage, resetState } from "@/redux/features/upload/uploadSlice"
import type { AppDispatch, RootState } from "@/redux/store"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Loader2, Upload, AlertCircle, CheckCircle2 } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const dispatch = useDispatch<AppDispatch>()
  const { loading, result, error } = useSelector((state: RootState) => state.upload)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    console.log("Selected file:", file)
    setSelectedFile(file)

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      dispatch(resetState())
    } else {
      setPreview(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("handleSubmit called")
    if (selectedFile) {
      console.log("File to upload:", selectedFile)
      dispatch(uploadImage(selectedFile))
    } else {
      console.log("No file selected")
    }
  }

  let analysisMessage = null

  if (result) {
    if (result.predicted_class === 0) {
      analysisMessage = (
        <div className="mt-8 p-6 border border-red-200 bg-red-50 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2 mt-0.5" />
            <div>
              <h3 className="text-lg font-medium text-red-800">Trachoma Detected</h3>
              <p className="mt-1 text-sm text-red-700">The analysis indicates the presence of trachoma. Please consult with a healthcare professional for confirmation and treatment.</p>
            </div>
          </div>
        </div>
      )
    } else if (result.predicted_class === 1) {
      analysisMessage = (
        <div className="mt-8 p-6 border border-green-200 bg-green-50 rounded-lg">
          <div className="flex items-start">
            <CheckCircle2 className="h-6 w-6 text-green-600 mr-2 mt-0.5" />
            <div>
              <h3 className="text-lg font-medium text-green-800">No Trachoma Detected</h3>
              <p className="mt-1 text-sm text-green-700">The analysis indicates that trachoma was not detected in the image.</p>
            </div>
          </div>
        </div>
      )
    } else {
      analysisMessage = (
        <div className="mt-8 p-6 border border-gray-200 bg-gray-50 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-gray-600 mr-2 mt-0.5" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Unexpected Result</h3>
              <p className="mt-1 text-sm text-gray-700">The analysis returned an unexpected result. Please try again.</p>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">ClearSight Trachoma Detection</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload an eye image to detect trachoma, a leading cause of preventable blindness. Our AI-powered system
            provides quick and accurate analysis.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="p-6 text-left">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">What is Trachoma?</h2>
              <p className="text-gray-600 mb-4">
                Trachoma is an infectious disease caused by the bacterium Chlamydia trachomatis. It affects the eyes and
                is the leading infectious cause of blindness worldwide.
              </p>
              <p className="text-gray-600">
                Early detection is crucial for preventing permanent vision loss. Our tool helps healthcare providers
                identify potential cases quickly.
              </p>
            </Card>

            <Card className="p-6 text-left">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">How It Works</h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Upload a clear image of the eye</li>
                <li>Our AI analyzes the image for signs of trachoma</li>
                <li>Review the results and recommended next steps</li>
                <li>Consult with a healthcare professional for confirmation</li>
              </ol>
            </Card>
          </div>
        </section>

        <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Upload Image for Analysis</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                id="file-upload"
              />
              {preview ? (
                <div className="relative mx-auto w-64 h-64 mb-4">
                  <Image src={preview || "/placeholder.svg"} alt="Preview" fill className="object-cover rounded-lg" />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-6">
                  <Upload className="h-12 w-12 text-gray-400 mb-2" />
                  <p className="text-gray-500 mb-2">Drag and drop an image here, or click to select</p>
                  <p className="text-xs text-gray-400">PNG, JPG, JPEG up to 5MB</p>
                </div>
              )}

              <label
                htmlFor="file-upload"
                className="relative inline-block mt-4 bg-[#199A8E] hover:bg-[#0f7a70] text-white py-2 px-4 rounded-md cursor-pointer"
              >
                {preview ? "Change Image" : "Select Image"}
              </label>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={!selectedFile || loading}
                className="px-8 py-2 bg-[#199A8E] hover:bg-[#0f7a70] text-white font-medium rounded-lg text-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze Image"
                )}
              </Button>
            </div>
          </form>

          {analysisMessage}

          {error && (
            <div className="mt-8 p-6 border border-red-200 bg-red-50 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-red-600 mr-2 mt-0.5" />
                <div>
                  <h3 className="text-lg font-medium text-red-800">Error</h3>
                  <p className="mt-1 text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
