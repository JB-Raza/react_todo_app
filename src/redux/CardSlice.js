import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    // cards: [],
    cards: JSON.parse(localStorage.getItem("cards")) || [], // to save the cards items in initial state.
}

const CardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addCard: ( state, action ) => {
            const newCard ={ id: nanoid(), cardText: "", checkState: false }
            state.cards.push(newCard)
        },
        delCard: ( state, action ) => {
            const id = action.payload
            state.cards = state.cards.filter( card => card.id !== id )
        },
        updateCard: ( state, action ) => {
            const { id, cardText, checkState } = action.payload
            state.cards = state.cards.map( card => card.id === id? { ...card, cardText, checkState }: card )
        },
    }
})

export const {addCard, delCard, updateCard} = CardSlice.actions
export default CardSlice.reducer