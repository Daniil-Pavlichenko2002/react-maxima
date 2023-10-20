import { createSlice } from '@reduxjs/toolkit'
    

const initialState = {
    items: []
}

export const counterSlice = createSlice({
  name: 'personalArea',
  initialState,
  reducers: {
    addProject: (state, action) => {
        const findItem = state.items.find(obj => obj.id === action.payload.id)
        console.log(findItem)
        if(!findItem) {
            state.items.push(action.payload)
        } 
    },
    removeProject: (state, action) => {
        state.items = state.items.filter(obj => obj.id !== action.payload)
    }
  },
})

export const { addProject, removeProject } = counterSlice.actions

export const selectPersonalArea = (state) => state.personalArea;

export default counterSlice.reducer