import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../redux/store'
import { IToken } from '../typescript/auth'
interface ServerState{
    accessToken: string
}
const initialState: ServerState ={
    accessToken: ''
}
const ServerSlice = createSlice({
    name: 'accessToken',
    initialState,
    reducers: {
        storeToken:(state, action) => {
            state.accessToken = action.payload
        }
    }
})
export const {storeToken} = ServerSlice.actions
export default ServerSlice.reducer