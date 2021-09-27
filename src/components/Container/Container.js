import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Trainer from '../Trainer/Trainer';
import './Container.css';

const Container = () => {
    const [trainers, setTrainers] = useState([])
    const [cart, setcart] = useState([])
    useEffect(() => {
        fetch('./trainers.JSON')
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])
    // Button Function  // Displaying items in cart
    const handleAddToCart = (trainer) => {

        const newCart = [...cart, trainer]
        setcart(newCart)
    }


    return (
        <div className='main-container'>

            <div className="trainers-conatiner">
                {/* key declare and using map */}
                {
                    trainers.map(trainer => <Trainer key={trainer.Name} trainer={trainer}
                        handleAddToCart={handleAddToCart}
                    ></Trainer>)
                }
            </div>




            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Container;