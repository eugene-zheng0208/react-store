import React from 'react';
import {render} from 'react-dom';

import ProductList from './products/ProductList';
import CartSummary from './cartsummary/CartSummary';

import styles from './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cartList: [],
            totalUpdate: {quantity: 0, totalPrice: 0}
        };

        this.updateCartList = this.updateCartList.bind(this);
        this.removeCartFromList = this.removeCartFromList.bind(this);

        this.updateProductData = this.updateProductData.bind(this);
        this.updateCartData = this.updateCartData.bind(this);

    }
    
    updateProductData(product_data) {

        console.log(" product data ", product_data);
        //addProductData(product_data);
    };

    updateCartData(cart_data) {
        this.updateCartList(cart_data);
    }

    updateCartList(newItem) {


        var cartList = this.state.cartList.slice();
       
        let filteredList = cartList.filter((item)=> {
            return item.item == newItem.item;
        });


        let filteredItem = (filteredList && filteredList.length > 0) ? filteredList[0] : null;

        if(filteredItem) {
            if(newItem.itemCnt <= 0) {
                this.removeCartFromList(newItem.item);
                return;
            }
            else {
                filteredItem.total = newItem.total;
                filteredItem.itemCnt = newItem.itemCnt;
            }
        }
        else {
            cartList.push(newItem);
        }
        this.setState({'cartList': cartList});
    }

    removeCartFromList(itemName) {
        var cartList = this.state.cartList.slice();
        cartList = cartList.filter((cartItem) => {
            return cartItem.item !== itemName;
        });
        this.setState({'cartList': cartList});
    }

    render() {

        return(
            <div className={styles.home}>
                <ProductList updateProductData={this.updateProductData} updateCartData={this.updateCartData} cartList={this.state.cartList} />
                <CartSummary updateCartSummaryData={this.updateCartSummaryData} cartList={this.state.cartList} removeCartFromList={this.removeCartFromList} />
            </div>
        );
    }
}


export default Home;