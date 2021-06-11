import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg"
        alt=""
      />
      {/* render multiple product with these props id,title, price, rating ... */}
      <div className="home_row">
        <Product
          id="12345"
          title="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement,"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SX466_.jpg"
        />
        <Product
          id="12345"
          title="this is the products title"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61zUmXPk3MS._AC_UX385_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12345"
          title="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement,"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71omhpAPSML._AC_SX679_.jpg"
        />
        <Product
          id="12345"
          title="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement,"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71omhpAPSML._AC_SX679_.jpg"
        />
        <Product
          id="12345"
          title="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement,"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71omhpAPSML._AC_SX679_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12345"
          title="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement,"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/08/gc/designs/livepreview/amazon_squidink_noto_email_v2016_fr-main._CB463436975_.png"
        />
      </div>
    </div>
  );
}

export default Home;
