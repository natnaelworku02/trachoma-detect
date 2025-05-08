import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import { uploadImageToAPI } from "@/services/api"

interface UploadState {
  loading: boolean
  result: any | null
  error: string | null
}

const initialState: UploadState = {
  loading: false,
  result: null,
  error: null,
}

export const uploadImage = createAsyncThunk("upload/uploadImage", async (file: File, { rejectWithValue }) => {
  try {
    const response = await uploadImageToAPI(file)
    return response
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message)
    }
    return rejectWithValue("An unknown error occurred")
  }
})

const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    resetState: (state) => {
      state.result = null
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadImage.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(uploadImage.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.result = action.payload
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.loading = false
        state.error = (action.payload as string) || "Failed to upload image"
      })
  },
})

export const { resetState } = uploadSlice.actions
export default uploadSlice.reducer
