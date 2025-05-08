const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://159.69.214.45:8003/";

export async function uploadImageToAPI(file: File) {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(API_BASE_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Failed to upload image. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}
