import React from 'react';
import { CartItem, useStateDispatch } from '../../state/AppState';

export interface AddToCartProps {
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
}

function withAddToCart<OriginalProps extends AddToCartProps>(ChildComponent: React.ComponentType<OriginalProps>) {
  const AddtoCartHOC = (props: Omit<OriginalProps, keyof AddToCartProps>) => {
    const dispatch = useStateDispatch();
    const onClickHandler: AddToCartProps['addToCart'] = (item) => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          item
        }
      });
    };
    return <ChildComponent {...props as OriginalProps} addToCart={onClickHandler} />;
  };


  return AddtoCartHOC;
}


export default withAddToCart;

