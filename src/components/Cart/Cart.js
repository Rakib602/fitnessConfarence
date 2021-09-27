import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag, faUpload, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';

const Cart = (props) => {
    // icon
    const element = <FontAwesomeIcon icon={faUpload} />
    const cartIcon = <FontAwesomeIcon icon={faSearch} />
    console.log(props)
    const { cart } = props;

    let trainerName = [];
    let totalCost = 0;
    for (const trainer of cart) {
        trainerName = (trainer.Name + ".." + trainerName);
        totalCost = totalCost + trainer.SpeakersFee;
    }

    return (
        <div>
            <h3 className='info'> {cartIcon} Cart container</h3>
            <span><Card.Body> </Card.Body></span>
            <div className='trainer-information'>
                <h5>Total trainer: : {cart.length} </h5>
                <h4>Total Cost : ${totalCost}</h4>
                <h6>Trainer added: {element} :</h6>
            </div>
            <span className='trainer-names'><Card.Body>{trainerName}</Card.Body></span>
        </div>
    );
};

export default Cart;