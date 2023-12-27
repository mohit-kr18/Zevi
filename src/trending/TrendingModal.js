import { useEffect, useState } from 'react'
import classes from './TrendingModal.module.css'
import { getTrendingProducts } from '../api/trendingProduct'
import Card from './Card'

const TrendingModal = () => {

    const [trendingProducts, setTrendingProducts] = useState([])

    useEffect(() => {
        const fetchTrendingProducts = async () => {
            const trendingProducts = await getTrendingProducts()
            setTrendingProducts(trendingProducts)
        }
        fetchTrendingProducts()

    }, [])

    return (
        <div className={classes.modal_wrapper}>
            <div className={classes.modal_container}>
                <div className={classes.card_wrapper}>
                    <h3>Latest Trends</h3>
                    <div className={classes.card_item}>
                        {trendingProducts.map((product) => (
                            <Card key={product.id} icon={product.img} name={product.name} />
                        ))
                        }
                    </div>
                </div>
                <div className={classes.suggestion_wrapper}>
                    <h3>Popular suggestions</h3>
                     <div className={classes.suggestions}>
                        <p>Stripped shirt dress</p>
                        <p>Satin shirts</p>
                        <p>Denim jumpsuit</p>
                        <p>Leather dresses</p>
                        <p>Solid tshirts</p>
                     </div>   
                </div>
            </div>
        </div>
    )
}

export default TrendingModal