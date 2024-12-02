import {configureStore} from '@reduxjs/toolkit'
import cardReducer from './CardSlice'
import themeReducer from './ThemeSlice'

export const store = configureStore({
    reducer: cardReducer,
})

// handle dark theme later
// darkTheme: themeReducer,