const ADD_NEWS = "news/add"
/**
 * id
 * name
 * category_id
 */
export const addNews = payload => ({
    type: ADD_NEWS,
    payload:{
        ...payload,
        id: Math.random().toString(36)
    }
})

const initalState = {
    data:[],
}

export default function reducer(state = initalState, action){

    switch( action.type ){
            case ADD_NEWS:
                return{
                    ...state, 
                    data: [ ...state.data, action.payload ]
                }
            default:
                return state
    }
}