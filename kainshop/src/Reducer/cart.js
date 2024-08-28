function CartReduce (state = [],action){
    let newState = [...state];
    if(action.type === "ADD_TO_CARD"){
        return [
            ...state,
            {
                id:action.id,
                info:action.info,
                quality:1
            }
        ]
    }
    else if(action.type ==="UPDATE_QUALITY"){
        const itemUpdate = newState.find(item =>item.id === action.id)
        itemUpdate.quality += action.quality;
        return newState;
    }
    else if(action.type === "DELETE_ITEM"){
        newState = newState.filter(item =>item.id !== action.id);
        return newState;
    }
    else if(action.type === "DELETE_ALL"){
        return [];
    }
    return state;
}
export default CartReduce;