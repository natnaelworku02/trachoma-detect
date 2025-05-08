export async function uploadImageToAPI(file: File) {
  try {
    const formData = new FormData()
    formData.append("image", file)

    const response = await fetch("http://159.69.214.45:8003/", {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || "Failed to upload image")
    }

    return await response.json()
  } catch (error) {
    console.error("Error uploading image:", error)
    throw error
  }
}
