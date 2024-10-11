import React from "react";
import Button from 'react-bootstrap/Button';
import './Slide.css';
import backgroundImage from '../../assets/eslumut.jpeg';

const Slide = () => {
    return (
        <div className="main-content" style={{ backgroundImage: `url(${backgroundImage})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center' }}>
            <div className='container-title'>
                <div className="main-title">
                    <h1 style={{
                        fontFamily: 'Times New Roman', 
                        fontWeight: 'bold', 
                        fontSize: '4em', 
                        color: '#ffffff' }}>
                            Welcome to WJ Delivery
                    </h1>
                </div>
                <h3 style={{ fontFamily: 'Times New Roman', fontWeight: 'bold', color: '#ffffff' }}>
                    Get delicious meals delivered right to your doorstep in Medan. Enjoy hassle-free ordering and fast delivery.
                </h3>
                <Button variant="danger" style={{ marginTop: '20px'}}>Pre Order Now</Button>
            </div>
        </div>
    );
}

export default Slide;
