import React from 'react';
import PizCSS from './Boba.module.css';
import { useSetState } from '../state/AppState';

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
  const setState = useSetState();
  const onClickHandler = () => {
    setState(state => {
      const itemExists = state.cart.items.find(item => item.id === pizza.id);
      return {
        ...state,
        cart: {
          ...state.cart,
          items: itemExists ? state.cart.items.map(item => {
              if (item.id === pizza.id) {
                return {...item, quantity: item.quantity + 1};
              }
              return item;
            })
            : [...state.cart.items, {
              price: pizza.price,
              id: pizza.id,
              description: pizza.description,
              name: pizza.name,
              quantity: 1
            }]
        }
      };
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
