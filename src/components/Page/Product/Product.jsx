import React from 'react';
import Cardmenu from "../../Card/Cardmenu";
import { bakso, eslumut, kfc, starbucks } from '../../Image';

const Product = () => {
    return (
        <div className="containerMain" style={{ backgroundColor: '#333', paddingTop: '50px', paddingBottom: '50px' }}>
            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1 style={{
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '48px',
                        color: '#fff',
                        fontWeight: '700',
                        letterSpacing: '2px'
                    }}>
                        Food Menu
                    </h1>
                </div>
                <div className="row justify-content-center">
                    {/* Card Item 1 */}
                    <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                        <div className="card shadow-lg bg-dark text-light border-0 rounded">
                            <img src={eslumut} alt="Es Lumut" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title" style={{ fontSize: '20px', fontWeight: 'bold' }}>Es Lumut</h5>
                                <p className="card-text" style={{ fontSize: '16px' }}>Rp. 10.000</p>
                                <span className="badge bg-warning text-dark" style={{ fontSize: '14px' }}>Pre-order</span>
                            </div>
                        </div>
                    </div>
                    {/* Card Item 2 */}
                    <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                        <div className="card shadow-lg bg-dark text-light border-0 rounded">
                            <img src={bakso} alt="Bakso Ayam" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title" style={{ fontSize: '20px', fontWeight: 'bold' }}>Bakso Ayam</h5>
                                <p className="card-text" style={{ fontSize: '16px' }}>Rp. 10.000</p>
                                <span className="badge bg-warning text-dark" style={{ fontSize: '14px' }}>Pre-order</span>
                            </div>
                        </div>
                    </div>
                    {/* Card Item 3 */}
                    <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                        <div className="card shadow-lg bg-dark text-light border-0 rounded">
                            <img src={kfc} alt="KFC" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title" style={{ fontSize: '20px', fontWeight: 'bold' }}>KFC</h5>
                                <p className="card-text" style={{ fontSize: '16px' }}>Rp. 10.000</p>
                                <span className="badge bg-warning text-dark" style={{ fontSize: '14px' }}>Pre-order</span>
                            </div>
                        </div>
                    </div>
                    {/* Card Item 4 */}
                    <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                        <div className="card shadow-lg bg-dark text-light border-0 rounded">
                            <img src={starbucks} alt="Starbucks" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title" style={{ fontSize: '20px', fontWeight: 'bold' }}>Starbucks</h5>
                                <p className="card-text" style={{ fontSize: '16px' }}>Rp. 10.000</p>
                                <span className="badge bg-warning text-dark" style={{ fontSize: '14px' }}>Pre-order</span>
                            </div>
                        </div>
                    </div>
                    {/* Card Item 5 */}
                    <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                        <div className="card shadow-lg bg-dark text-light border-0 rounded">
                            <img src={kfc} alt="KFC" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title" style={{ fontSize: '20px', fontWeight: 'bold' }}>KFC</h5>
                                <p className="card-text" style={{ fontSize: '16px' }}>Rp. 10.000</p>
                                <span className="badge bg-warning text-dark" style={{ fontSize: '14px' }}>Pre-order</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
