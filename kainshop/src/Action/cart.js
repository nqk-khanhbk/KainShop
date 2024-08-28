export const addToCart = (id,info)=>{
    return {
        type:"ADD_TO_CARD",
        id : id,
        info:info
    };
}
//Update lại số lg sản phẩm khi thêm vào giỏ hàng
export const updateQuality = (id,quality=1)=>{
    return {
        type:"UPDATE_QUALITY",
        id : id,
        quality:quality
    };
}
export const deleteItem = (id) =>{
    return {
        type:"DELETE_ITEM",
        id:id
    }
}
export const deleteAll = ()=>{
    return {
        type:"DELETE_ALL",
    }
}