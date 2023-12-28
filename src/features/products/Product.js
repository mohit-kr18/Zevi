import {  useEffect, useState } from 'react'
import classes from './Product.module.css'
import { getProducts } from '../../api/product'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'


const Product = () => {

    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const products = await getProducts()
    //         setProducts(products)
    //     }
    //     fetchProducts()
    // }, [])    

    // const dispatch = useDispatch();

    const products = useSelector((state) => state.filterItem.products);
    // const brands = useSelector((state) => state.filterItem.brands);

//    console.log(brands);

    const [hoveredItem, setHoveredItem] = useState(null)

    const handleMouseEnter = (id) => {
        setHoveredItem(id)
    }

    const handleMouseLeave = () =>{
        setHoveredItem(null);
    }
        
    return (
            <div className={classes.product_container}>
                {
                    products.map((product,index)=>
                    <ProductCard key={product.id}
                                index={index} 
                                name={product.name} 
                                img={product.img}
                                price1={product.price1}
                                price2={product.price2}
                                star={product.star}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                                flag={hoveredItem === index}
                                />
                    )
                }
            </div>
    )
}

export default Product