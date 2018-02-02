import React,{PropTypes} from 'react';
import {render} from 'react-dom';
import styles from './CartSummary.css';

import CartHeader from './CartHeader';
import CartDetails from './CartDetails';

class CartSummary extends React.Component {
    constructor(props) {

        super(props);

        //this.updateDetailsData = this.updateDetailsData.bind(this);
    }

    render() {
        let totalPrice = 0;

        this.props.cartList.forEach(cartItem => {
            totalPrice += cartItem.total;
        });

        return (
            <div className={styles.cartContainer}>
                <div className={styles.cartsummary} >
                    <CartHeader items={this.props.cartList.length} totalPrice={totalPrice} />
                    <CartDetails cartList={this.props.cartList} removeCartFromList={this.props.removeCartFromList} />
                </div>
            </div>
        );
    }
}

CartSummary.propTypes = {
    removeCartFromList: PropTypes.func.isRequired,
    cartList: PropTypes.array.isRequired
}

export default CartSummary;