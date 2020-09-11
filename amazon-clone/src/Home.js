import React  from "react";
import './home.css';
import Product from "./Product";


function Home(){
    
    return(
        <div className="home">
           <div className="home__container">
               <img className="home__Image" src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500x600_PV_fr-FR._CB406827366_.jpg" alt=""/>
           
                <div className="home__row">
                    <Product id='1' title='Nouvel Apple MacBook Pro (16 Pouces, 16Go RAM, 1To de Stockage) - Gris sidéral' image='https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UL320_.jpg' price={2999} rating={5}/>
                    <Product id='2' title='Apple iPad Pro (12,9 Pouces, Wi-FI + Cellular, 128 Go) - Gris sidéral' image='https://m.media-amazon.com/images/I/817+dXqQ07L._AC_UL320_.jpg' price={1289.95} rating={5}/>
                </div>
           
                <div className="home__row">
                    <Product id='3' title='Apple iPhone 11 Pro (256 Go) - Vert Nuit' image='https://m.media-amazon.com/images/I/71D1URasMyL._AC_UL320_.jpg' price={1229.00} rating={4}/>
                    <Product id='4' title='Apple iPhone 11 (64 Go) - Vert' image='https://m.media-amazon.com/images/I/71Dh+NR7ivL._AC_UL320_.jpg' price={759.00} rating={4}/>
                    <Product id='5' title='Apple Iphone XS (128 Go) - Or' image='https://m.media-amazon.com/images/I/71R46ju5GzL._AC_UL320_.jpg' price={1198.00} rating={4}/>
                </div>
                <div className="home__row">
                    <Product id='6' title='Apple iMac Pro (27 pouces, 32Go RAM, 1To de stockage' image='https://m.media-amazon.com/images/I/71Je03m8RmL._AC_UL320_.jpg' price={5099.00} rating={5}/>
                </div>
             </div>
        </div>
    );
    
}

export default Home;