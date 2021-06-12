import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import CartCss from './Cart.module.css';
import { AppStateContext } from '../../state/AppState';

interface Props {
}

interface State {
  isOpen: boolean
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // if((e.target as HTMLElement).nodeName==='SPAN'){
    //   (e.target as HTMLSpanElement).
    // }
    this.setState(prev => ({isOpen: !prev.isOpen}));
  };

  render() {
    return (
      <AppStateContext.Consumer>{(state) => {
        return (
          <div className={CartCss.cartContainer}>
            <button
              className={CartCss.button}
              type={'button'}
              onClick={this.onClick}>
              <FiShoppingCart />
              <span>{state.cart.items.length} pizza</span>
            </button>
            <div className={CartCss.cartDropDown} style={{display: this.state.isOpen ? 'block' : 'none'}}>
              <ul>
                {state.cart.items.map(p => {
                  return <li key={p.name + p.price}>{p.name}&times;{p.quantity}</li>;
                })}
              </ul>
            </div>
          </div>);
      }}</AppStateContext.Consumer>
    );
  }

}

export default Cart;
