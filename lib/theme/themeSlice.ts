import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface ThemeState {
  theme: string
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light'
  } as ThemeState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => {
      state.theme = action.payload.theme
    }
  }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer