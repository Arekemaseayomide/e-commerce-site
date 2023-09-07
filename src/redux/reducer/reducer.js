const initialState = {
    handleCart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DECREASE_QUANTITY':

        const updatedCartDecrease = state.handleCart.map((product) => {
          if (product.id === action.payload.productId && product.qty > 0) {
            return { ...product, qty: product.qty - 1 };
          }
          return product;
        });
  
        return { ...state, handleCart: updatedCartDecrease };
  
      case 'INCREASE_QUANTITY':
        // Find the product in the cart and increase its quantity
        const updatedCartIncrease = state.handleCart.map((product) => {
          if (product.id === action.payload.productId) {
            return { ...product, qty: product.qty + 1 };
          }
          return product;
        });
  
        return { ...state, handleCart: updatedCartIncrease };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;