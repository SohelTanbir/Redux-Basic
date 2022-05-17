// all counter action here

export const increment = ()=> {
    return (dispatch, getState)=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data =>{
            dispatch({
                type:'INCREMENT',
                payload:data,

            })
        })
    }
}

export const decrement = ()=>{
    return{
        type:'DECREMENT'
    }
}
