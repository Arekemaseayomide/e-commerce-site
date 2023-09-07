import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { NavLink, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import './Product.css'


const Product = () => {

    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        } 
        getProduct()
    }, [id])
    

    const Loading = () => {
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6"  style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50}/>
                    <Skeleton height={150}/>
                    <div style={{ display: 'flex', alignItems: 'center' }}> 
                        <Skeleton height={50} width={100}/>
                        <Skeleton height={50} width={100} style={{marginLeft:6}}/>
                    </div>
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        console.log(product)
        return (
            <>
                <div className="col-md-6 col-lg-6 mb-3">
                    <div className='text-center'>
                        <img src={product.image} alt={product.title} className="img-fluid img-sm" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                       $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>
                        Add to Cart
                    </button>
                    <NavLink to='/cart' className="btn btn-dark ms-2 px-3 py-2">
                        Go to Cart
                    </NavLink>
                </div>
            </>
        );
    }


  return (
    <div style={{marginBottom: 100}}>
        <div className="container py-5">
            <div className="row py-4">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
  )
}

export default Product