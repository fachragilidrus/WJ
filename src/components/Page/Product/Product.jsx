import React from 'react';
import Cardmenu from "../../Card/Cardmenu";
import {bakso, eslumut, kfc, starbucks} from '../../Image';

const Product= () => {
    return (
        <div className="containerMain" style={{ backgroundColor: 'rgb(40, 40, 40)' }}>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1 style={{
                            fontFamily: 'Times New Roman',
                            fontSize: '50px',
                            color: 'white',
                            fontWeight: 'bold'
                        }}>
                            Food Menu
                        </h1>
                    </div>
                    <div className="row justify-content-center my-5">
                        <div className="col-lg-4 col-md-6 my-2">
                            <Cardmenu image={eslumut} menu="Es Lumut" desc="Rp. 10.000" />
                        </div>
                        <div className="col-lg-4 col-md-6 my-2">
                            <Cardmenu image={bakso} menu="Bakso Ayam" desc="Rp. 10.000" />
                        </div>
                        <div className="col-lg-4 col-md-6 my-2">
                            <Cardmenu image={kfc} menu="KFC" desc="Rp. 10.000" />
                        </div>
                        <div className="col-lg-4 col-md-6 my-2">
                            <Cardmenu image={starbucks} menu="Starbucks" desc="Rp. 10.000" />
                        </div>
                        <div className="col-lg-4 col-md-6 my-2">
                            <Cardmenu image={kfc} menu="KFC" desc="Rp. 10.000" />
                        </div>
                        <div className="col-lg-4 col-md-6 my-2">
                            <Cardmenu image={starbucks} menu="Starbucks" desc="Rp. 10.000" />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Product;