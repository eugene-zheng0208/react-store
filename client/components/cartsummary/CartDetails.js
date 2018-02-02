import React,{PropTypes} from 'react';
import map from 'lodash/map';
import lodash from 'lodash/find';
import {render} from 'react-dom';
import styles from './CartSummary.css';

class CartDetails extends React.Component {

    constructor(props) {
        super(props);
        
        this.onClick = this.onClick.bind(this);

    }

    
    
    onClick(e) {
        this.props.removeCartFromList(e.target.name);
    }
        

    render() {

        let {cartList} = this.props;

        let cartItems = map(cartList, (cart) => {
            return (
                <tr>
                    <td>{cart.item}</td>
                    <td>{cart.itemCnt}</td>
                    <td>{cart.total}</td>
                    <td><button onClick={this.onClick} name={cart.item}> Remove </button></td>
                </tr>
            );
        });

        return (
            <div className={styles.cartItems}>
                {cartList.length >= 1 ?
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>TotalRs</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                    </tbody>
                </table>
                : <p>No Items In Cart </p>    
                }
            </div>
        );
    }
}

CartDetails.propTypes = {
    cartList: PropTypes.array.isRequired
}

export default CartDetails;