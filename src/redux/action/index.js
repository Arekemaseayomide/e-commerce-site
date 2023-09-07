export const addCart = (product) => {
    return {
        type : 'ADDITEM',
        payload : product
    }
}

export const delCart = (product) => {
    return {
        type : 'DELITEM',
        payload : product
    }
}

export const decreaseQuantity = (productId) => ({
    type: 'DECREASE_QUANTITY',
    payload: { productId },
  });
  
  export const increaseQuantity = (productId) => ({
    type: 'INCREASE_QUANTITY',
    payload: { productId },
  });

  export const deleteCartItem = (productId) => ({
    type: 'DELETE_CART_ITEM',
    payload: { productId },
  });