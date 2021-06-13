import React from 'react';
import { WithAddToCartProps } from '../utils/HOC/withAddToCart';
import { PizzaType } from '../utils/Types';
import SpecialOfferCSS from './../styles/SpecialOffer.module.css';

type PropsType = {
  pizza: PizzaType
}


const SpecialOffer: React.FC<PropsType> = ({pizza}) => {

  return <div className={SpecialOfferCSS.container}>
    <h2>{pizza.name}</h2>
    <p>{pizza.description}</p>
    <p>{pizza.price}</p>
    <WithAddToCartProps>{({addToCart}) => {
      return (
        <button type={'button'} onClick={() => addToCart({id: pizza.id, name: pizza.name, price: pizza.price})}>
          Add to
          Cart</button>);
    }}</WithAddToCartProps>

  </div>;
};

export default SpecialOffer;
