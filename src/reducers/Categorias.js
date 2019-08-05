const ADD_CATEROGY = "category/add"
/**
 * id
 * name
 */
const addCategory = payload => ({
    type: ADD_CATEROGY,
    payload:{
        ...payload,
        id: Math.random().toString(36)
    }
})
//estado inicial
const initalState = {
    data:[{ id: 1 , name:'Defecto' }],
}
//exportacion
export default function reducers(state = initalState, action){
    switch( action.type ){
            case ADD_CATEROGY:
                return{
                    
                    ...state, 
                    data: [ ...state.data, action.payload ]
                }
            default:
                return state
    }
}