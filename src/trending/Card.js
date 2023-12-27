import classes from './Card.module.css'

const Card = ({icon,name}) =>{
    return (
        <div className={classes.card_wrapper}>
            <img src={icon} alt="icon" />
            <p>{name}</p>
        </div>
    )
}

export default Card;