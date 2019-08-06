const ADD_CATEGORY = "category/add"
const SELECT_CATEGORY = "category/select"
/**
 * id
 * name
 */
export const addCategory = payload => ({
    type: ADD_CATEGORY,
    payload:{
        ...payload,
        id: Math.random().toString(36)
    }
})

export const selectCategory = payload => ({
    type: SELECT_CATEGORY,
    payload:{
        payload,
    }
})

const initalState = {
    data:[{ id: 1 , name:'Defecto' }],
    selected : 1,
}

export default function reducer(state = initalState, action){
    switch( action.type ){
            case ADD_CATEGORY:
                return {
                    ...state, 
                    data: [ ...state.data, action.payload ]
                }
            case SELECT_CATEGORY:
                return {
                    ...state, 
                    selected: action.payload
                }
            default:
                return state
    }
}