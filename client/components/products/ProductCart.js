import React, {PropTypes} from 'react';
import {render} from 'react-dom';

import styles from './Product.css';

class ProductCart extends React.Component {
    constructor(props) {
        super(props);
        this.onAddClick = this.onAddClick.bind(this);
    }

     
    onAddClick(e) {
        e.preventDefault();
        console.log(" this ",this);
        this.itemCnt = this.props.cartData ? this.props.cartData.itemCnt : 0;

        if(e.target.name == "add") {
            this.itemCnt++;
        }
        else {
            if(this.itemCnt <= 0)
                return;
            this.itemCnt--;
        }
         
        //this.setState({'cartData': this.props.cartData});

        this.props.addProductToCart(this.itemCnt);
    }

    render() {
        let isNoItem = !this.props.cartData || this.props.cartData.itemCnt <= 0;

        return (
            <div className={styles.prodButtons}>
                {isNoItem ? 
                    <div>
                    <button onClick={this.onAddClick} name="add" >Add to cart</button> 
                </div>
                   : null }
                {!isNoItem ? <div>
                    <button onClick={this.onAddClick} name="remove" >-</button>
                    <span>{this.itemCnt} in cart</span>
                    <button onClick={this.onAddClick} name="add" >+</button>
                </div> : null }
            </div>
        );
    }
}

ProductCart.propTypes = {
    addProductToCart: PropTypes.func.isRequired,
    cartData: PropTypes.object
}
export default ProductCart;