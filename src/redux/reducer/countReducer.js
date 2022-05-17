// reducer is pure js function

const initialState = {
    count:0,
    users:[]
}

const CounterReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'INCREMENT':{
            const newState = {
                ...state,
                users:action.payload,
                count:state.count+1
            }
            return newState;
        }
        case 'DECREMENT':{
            const newState = {
                ...state,
                count:state.count-1
            }
            return newState;
         }
        default: return state
    }
}

export default CounterReducer;