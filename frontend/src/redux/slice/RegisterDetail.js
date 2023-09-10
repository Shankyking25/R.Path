import { createSlice } from "@reduxjs/toolkit"

const registerDetail = createSlice({
    name: 'registerDetail',
    initialState: {
       
        inventorySetting: {
            email: '',
            password:''
        }
    },


    reducers: {
 

        getRegisterDetailSlice: (state, action) => {
            state = action.payload
            
            return state
        },

    }
})

export const { getRegisterDetailSlice } = registerDetail.actions

export default registerDetail.reducer