import { createSlice } from "@reduxjs/toolkit"

const users = createSlice({
    name: 'registerSlice',
    initialState: [{
        rows: [],
        count: 0,
        loading: false,
        filter: {},
        selectedKeys: [],
    }],
    reducers: {
        getRegisterSlice: (state, action) => {
            state = action.payload
            return state
        },
        
        addRegisterSlice: (state, action) => {
            state.push(action.payload)
            return state
        },
        editRegisterSlice: (state, action) => {
            state = state.map(i => i.id == action.payload.id ? action.payload : i)
            return state
        }
    }
})

export const { getRegisterSlice, addRegisterSlice, editRegisterSlice } = users.actions

export default users.reducer 