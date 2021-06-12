import React from 'react';
import { useStateDispatch } from '../state/AppState';
import { PizzaType } from '../utils/Types';
import SpecialOfferCSS from './../styles/SpecialOffer.module.css';

type PropsType = {
  pizza: PizzaType
}


const SpecialOffer: React.FC<PropsType> = ({pizza}) => {
  const dispatch = useStateDispatch();
  const onClickHandler = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item: {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,

        }
      }
    });
  };
  return <div className={SpecialOfferCSS.container}>
    <h2>{pizza.name}</h2>
    <p>{pizza.description}</p>
    <p>{pizza.price}</p>
    <button type={'button'} onClick={onClickHandler}>Add to Cart</button>
  </div>;
};

export default SpecialOffer;
