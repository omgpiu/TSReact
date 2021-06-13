import React from 'react';
import withAddToCart, { AddToCartProps } from '../utils/HOC/withAddToCart';
import { PizzaType } from '../utils/Types';
import SpecialOfferCSS from './../styles/SpecialOffer.module.css';

type PropsType = {
  pizza: PizzaType
}


const SpecialOffer: React.FC<PropsType & AddToCartProps> = ({pizza, addToCart}) => {
  const onClickHandler = () => {
    addToCart({id: pizza.id, name: pizza.name, price: pizza.price});
  };
  return <div className={SpecialOfferCSS.container}>
    <h2>{pizza.name}</h2>
    <p>{pizza.description}</p>
    <p>{pizza.price}</p>
    <button type={'button'} onClick={onClickHandler}>Add to Cart</button>
  </div>;
};

export default withAddToCart(SpecialOffer);
