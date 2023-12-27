import classes from './ProductCard.module.css'
import Heart from '../../assets/Heart.svg'

const ProductCard = ({name,img,price1,price2,star}) =>{
    return (
      <div className={classes.card_wrapper}>
        <div className={classes.product_card}>
          <img src={img} alt="product" className={classes.product_img} />
          <p>{name}</p>
          <div className={classes.price}>
            <p className={classes.price1}>Rs. {price1}</p>
            <p className={classes.price2}>Rs.{price2}</p>
          </div>
          <div className={classes.star}>
            <img src={star} alt="five star" />
            <p>(210)</p>
          </div>
        </div>
        <div className={classes.heart}>
          <img src={Heart} alt="heart" />
        </div>
      </div>
    );
}

export default ProductCard;