import React,{PropTypes} from 'react';
import {render} from 'react-dom';

import styles from './Product.css';

import ProductInfo from './ProductInfo';
import ProductCart from './ProductCart';
import ProductImage from './ProductImage';

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.addProductToCart = this.addProductToCart.bind(this);
    }

    addProductToCart(itemCnt) {
        console.log('state object ',itemCnt);
        
        let cart_data = {
            itemCnt: itemCnt,
            total: itemCnt * this.props.price,
            item: this.props.product_name
        };

        this.props.updateProductData(cart_data);
    }

    render() {
        const {product_name, brand_name, image_url, packing, price, updateProductData, cartData} = this.props;

        return (
            <div className={styles.product}>
                <ProductImage image_url={image_url} />
                <ProductInfo brand_name={brand_name} product_name={product_name} packing={packing} price={price} />
                <ProductCart addProductToCart={this.addProductToCart} cartData={cartData} />
            </div>
        );
    }
}

Product.propTypes = {
    product_name: PropTypes.string.isRequired,
    brand_name: PropTypes.string,
    packing: PropTypes.string,
    price: PropTypes.number.isRequired,
    image_url: PropTypes.string,
    updateProductData: PropTypes.func.isRequired,
    cartData: PropTypes.object
}

export default Product;