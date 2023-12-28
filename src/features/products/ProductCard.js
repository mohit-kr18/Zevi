import classes from './ProductCard.module.css'
// import Heart from '../../assets/Heart.svg'
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../app/Slices/likedItemSlice';
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const ProductCard = ({index,name,img,price1,price2,star,handleMouseEnter,handleMouseLeave,flag}) =>{

    const dispatch = useDispatch()

    const handleLike = (index) =>{
        dispatch(toggleLike(index));
        console.log(index)
    }

    
    const likedItems = useSelector((state) => state.likedItem.likedItems);

    const isLiked = likedItems.find((likedId) => likedId === index) !== undefined;

    return (
      <div
        className={classes.card_wrapper}
        onMouseOver={() => handleMouseEnter(index)}
        onMouseOut={()=>handleMouseLeave()}
      >
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
          {isLiked ? (
            <IoMdHeart onClick={() => handleLike(index)} size={20} color="red" />
          ) : (
            <IoMdHeartEmpty onClick={() => handleLike(index)} size={20} style={{color:'white'}} />
          )}
        </div>
        {flag ? <button className={classes.btn}>View Product</button> : null}
      </div>
    );
}

export default ProductCard;