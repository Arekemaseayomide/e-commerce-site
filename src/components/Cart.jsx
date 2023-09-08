import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCartItem } from '../redux/action'

const Cart = () => {

  const cartItems = useSelector((state)=> state.handleCart)
  const dispatch = useDispatch()

  const handleDecrease = (product) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { productId: product.id } });
  };

  const handleIncrease = (product) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { productId: product.id } });
  };
  const handleDelete = (product) => {
    dispatch(deleteCartItem(product.id));
  };

  const isCartEmpty = cartItems.length === 0


  
    return (
      <>
        <div className="container py-5" style={{marginBottom: 100}}>
          <div className="row py-4">
            {isCartEmpty ? (
              <div className='col-md-12 text-center'>
                <h4 className='text-black-50' style={{height: 400}}>Your Cart Is Empty</h4>
              </div>
            ) : (
              cartItems.map((product, index) => (
             
                <div className='col-12 mb-4' key={index}>
                  <div className='border rounded p-3' style={{ boxShadow: '0px 0px 10px rgb(22, 166, 201)' }}>
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <img src={product.image} alt={product.title} height="200px" width="180px"/> 
                    </div>
                    <div className='col-md-8 text-center text-md-left mt-3 mt-md-4'>
                      <h3>{product.title}</h3>
                      <p className='lead fw-bold'>
                        {product.qty} X ${product.price} = ${product.qty * product.price}
                      </p>
                      <button className='btn btn-outline-dark me-2' onClick={()=>handleDecrease(product)}>
                        <i className='fa fa-minus'></i>
                      </button>
                      <button className='btn btn-outline-dark me-4' onClick={()=>handleIncrease(product)}>
                        <i className='fa fa-plus'></i>
                      </button>
                      <button className='btn btn-outline-dark' onClick={()=>handleDelete(product)}>
                        <i className='fa fa-times-circle'/>
                      </button>
                    </div>
                  </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </>
    );
  };
  
  export default Cart;
  