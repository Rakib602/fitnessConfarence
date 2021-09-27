import './Trainer.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSdCard, faStepForward } from '@fortawesome/free-solid-svg-icons'

const Trainer = (props) => {
    // icon 
    const element = <FontAwesomeIcon icon={faStepForward} />
    // distructuring 
    const { Name, age, country,SpeakersFee, img, Profession } = props.trainer
    return (
        <div>
            <Card className='card-body'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name : <span className='trainer-name'>{Name}</span></Card.Title>
                    <p>Age: {age} </p>
                    <p>Country: {country}</p>
                    <p>Speaker Fee: <span className='fee'> ${SpeakersFee}</span></p>
                    <p>Profession: {Profession}</p>
                    <button className='addToCartBtn mx-auto' onClick={() => props.handleAddToCart(props.trainer)}> {element}Select This Speaker</button>
                </Card.Body>

            </Card>
        </div >
    );
};

export default Trainer;