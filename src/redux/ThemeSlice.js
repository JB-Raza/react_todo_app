import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    darkTheme: JSON.parse(localStorage.getItem("darkTheme"))
}

const ThemeSlice = createSlice({
    name: "theme",
    initialState,
})

export default ThemeSlice.reducer