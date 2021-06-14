import React, {createRef} from 'react';
import {FiShoppingCart} from 'react-icons/fi';
import CartCss from './Cart.module.css';
import {AppStateContext} from '../../state/AppState';

interface Props {
}

interface State {
    isOpen: boolean
}

class Cart extends React.Component<Props, State> {
    #containerRef: React.RefObject<HTMLDivElement>

    constructor(props: Props) {
        super(props);

        this.state = {
            isOpen: false
        };
        this.#containerRef = createRef()
    }

    onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // if((e.target as HTMLElement).nodeName==='SPAN'){
        //   (e.target as HTMLSpanElement).
        // }
        this.setState(prev => ({isOpen: !prev.isOpen}));
    };
    outSideClickHanlder = (e: MouseEvent) => {
        if (this.#containerRef.current && !this.#containerRef.current.contains(e.target as Node)) {
            this.setState({isOpen: false})
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.outSideClickHanlder)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.outSideClickHanlder)
    }

    render() {
        return (
            <AppStateContext.Consumer>{(state) => {
                const itemCount = state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
                return (
                    <div className={CartCss.cartContainer} ref={this.#containerRef}>
                        <button
                            className={CartCss.button}
                            type={'button'}
                            onClick={this.onClick}>
                            <FiShoppingCart/>
                            <span>{itemCount} pizza</span>
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
