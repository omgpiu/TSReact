import React from 'react';
import Pizza from './Pizza';
import pizzas from '../data/pizzas.json';
import AppCss from './App.module.css';
import '../styles/main.css';
import PizzaSVG from '../assets/svg/pizza.svg';
import Cart from './Cart/Cart';
import AppStateProvider from '../state/AppState';
import SpecialOffer from './SpecialOffer';


const App = () => {
  const specialOfferPizza = pizzas.find(pizza => pizza.specialOffer);
  return (
    <>
      <AppStateProvider>
        <div className={AppCss.container}>
          <div className={AppCss.header}>
            <PizzaSVG width={120} height={120} />
            <div className={AppCss.siteTitle}>Delicious Pizza</div>
            <Cart />
          </div>
          {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
          <ul className={AppCss.pizzaList}>
            {pizzas.map(pizza => {
              return <Pizza pizza={pizza} key={pizza.description + pizza.price} />;
            })}
          </ul>
        </div>
      </AppStateProvider>
    </>
  )
    ;
};


export default App;
