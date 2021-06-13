import React from 'react';
import PizCSS from './Boba.module.css';
import { PizzaType } from '../utils/Types';
import withAddToCart, { AddToCartProps } from '../utils/HOC/withAddToCart';


export type PropsType = {
  pizza: PizzaType

}

const Pizza: React.FC<PropsType & AddToCartProps> = ({pizza, addToCart}) => {
  const onClickHandler = () => {
    addToCart({id: pizza.id, name: pizza.name, price: pizza.price});
  };
  return (
    <li className={PizCSS.wrapper}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type={'button'} onClick={onClickHandler}>Add to Cart</button>
    </li>


  );
};


export default withAddToCart(Pizza);
