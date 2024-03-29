import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hasCookie, getCookie, setCookie } from 'cookies-next';

// Define a type for the slice state
export interface ThemeState {
  theme: string
}

function determinePartOfDay() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const sunriseHour = 6;
  const sunsetHour = 18;

  if (currentHour >= sunriseHour && currentHour < sunsetHour) {
      return 'light';
  } else {
      return 'dark';
  }
}

function getLocalDB() {
  if (hasCookie('theme')) {
    const teme = getCookie('theme') 
    return teme==='auto' ? determinePartOfDay() : teme;
  }
  else {
    return 'dark';
  }
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: getLocalDB()
  } as ThemeState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => {
      if (action.payload.theme==='auto') {
        state.theme = determinePartOfDay();
      }
      else {
        state.theme = action.payload.theme;
      }
      setCookie('theme', action.payload.theme);
    }
  }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer