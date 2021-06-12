import React from 'react';
import PizCSS from './Boba.module.css';
import { useStateDispatch } from '../state/AppState';

type PizzaType = {
  id: number
  name: string
  description: string
  price: number,


}
type PropsType = {
  pizza: PizzaType
}

const Pizza: React.FC<PropsType> = ({pizza}) => {
  const dispatch = useStateDispatch();
  const onClickHandler = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item: {
          id: pizza.id,
          description: pizza.description,
          name: pizza.name,
          price: pizza.price,

        }
      }
    });
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


export default Pizza;
