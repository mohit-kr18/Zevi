import { useEffect, useState } from 'react'
import classes from './Product.module.css'
import { getProducts } from '../../api/product'
import ProductCard from './ProductCard'


const Product = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts()
            setProducts(products)
        }
        fetchProducts()
    }, [])    
        
    return (
        <div className={classes.product_wrapper}>
            <div className={classes.product_container}>
                {
                    products.map((product)=>
                    <ProductCard key={product.id} 
                                name={product.name} 
                                img={product.img}
                                price1={product.price1}
                                price2={product.price2}
                                star={product.star}/>
                    )
                }
            </div>
        </div>
    )
}

export default Product