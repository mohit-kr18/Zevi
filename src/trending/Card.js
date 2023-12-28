import classes from './Card.module.css'

const Card = ({icon,name,handleCardClick}) =>{
    return (
        <div className={classes.card_wrapper} onClick={handleCardClick}>
            <img src={icon} alt="icon" />
            <p>{name}</p>
        </div>
    )
}

export default Card;