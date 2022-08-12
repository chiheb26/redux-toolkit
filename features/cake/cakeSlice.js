const createSlice = require('@reduxjs/toolkit').createSlice
initialState = {
    numofCakes : 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState, //initilState : initialState
    reducers : {
        ordered : (state)=>{
            state.numofCakes--
        },
        restocked: (state,action)=>{
            state.numofCakes += action.payload
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions