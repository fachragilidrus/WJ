import Slide from "../Slide/Slide";
import Cardmenu from "../Card/Cardmenu";
import {bakso, eslumut, kfc, starbucks} from '../Image';

const Content = () => {
    const textStyles = {
        fontFamily: 'Times New Roman',
        marginBottom: '20px',
        fontSize: '18px',
    };

    return (
        <div>
            <Slide />
            <div className="about-container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12 my-5">
                        <h1 style={{ fontWeight: 'bold', fontFamily: 'Times New Roman' }}>About Us</h1>
                        <p style={textStyles}>
                            Di WJ Delivery, Kami menyediakan produk kami dalam sistem Pre-Order dan siap mengantar ke tempat anda.
                            Kami fokus dengan kualitas dan kepuasan pembeli, kami selalu siap menyediakan pesanan terbaik dari kami WJ Delivey.
                        </p>
                        <br />
                        <p style={textStyles}>
                            Kami berusaha mendedikasikan WJ Delivery ini untuk meyakinkan pelanggan
                            bahwa memesan produk kami senang dan juga menyenangkan dari WJ Delivery.
                            Perhatian kami dalam membuat pesanan agar proses lebih efisien,
                            kami berkomitmen untuk membuat ekspetasi pelanggan kami tercapai bahkan lebih.
                        </p>
                    </div>
                    <div className="col-lg-4 col-12 my-5">
                        <img src={starbucks} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
                    </div>
                </div>
            </div>
            {/* <div className="containerMain" style={{ backgroundColor: 'rgb(40, 40, 40)' }}>
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
            </div> */}
            <div className="container-quote">
                <div className="quote-content">
                    <p style={{
                        fontFamily: 'Times New Roman',
                        fontSize: '25px'
                    }}>
                        "Sukses dalam bisnis bukan hanya tentang mencapai tujuan finansial.
                        Lebih dari itu, itu adalah perjalanan transformasi pribadi dan profesional.
                        Setiap kesalahan adalah guru yang berharga, setiap kegagalan adalah kesempatan untuk memperbaiki diri.
                        Bisnis yang kokoh dibangun di atas fondasi integritas, etika kerja yang kuat,
                        dan komitmen untuk memberikan nilai tambah kepada masyarakat."
                    </p>
                    <p style={{
                        fontFamily: 'Times New Roman',
                        fontWeight: 'bold',
                        fontSize: '18px',
                    }}> - WJ Owner</p>
                </div>
            </div>
        </div>
    )
    
}

export default Content;
