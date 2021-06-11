import React from 'react'
import "./Home.css";
import Product from "./Product"
function Home() {
    return (
        <div className="home">
            <img  
            className="home_image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg"
             alt=""
             />
             {/* render multiple product with these props id,title, price, rating ... */}
            <Product 
            id="12345"
            title="this is the products title"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71omhpAPSML._AC_SX679_.jpg"
            />
        </div>
    )
}

export default Home
