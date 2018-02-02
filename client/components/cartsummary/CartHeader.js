import React,{PropTypes} from 'react';
import {render} from 'react-dom';

import styles from './CartSummary.css';

class CartHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render ()  {
        return (
            <div>
                <h3>
                    Your Cart Summary
                </h3>
                <div className={styles.itemsInCart}>
                    <h5>Items In Cart</h5>
                    <p><strong>{this.props.items}</strong></p>
                </div>
                <div className={styles.totalPrice}>
                    <h5>Total Rs</h5>
                    <p><strong>{this.props.totalPrice}</strong></p>
                </div>
            </div>
        )
    }
}

CartHeader.propTypes = {
    items: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}

export default CartHeader;