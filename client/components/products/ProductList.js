import React,{PropTypes} from 'react';
import {render} from 'react-dom';
import Product from './Product';

import styles from './ProductList.css'
import products_data from '../../data/products';
import map from 'lodash/map';


class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.updateProductData = this.updateProductData.bind(this);

    }
    updateProductData(product_data) {
        this.props.updateCartData(product_data);
    }

    render() {
        //const {updateProductData} = this.props.updateProductData;
        const {cartList} = this.props;
        
        console.log("on render of product ",cartList);

        const products = map(products_data, (product) => {
            
            let cartData = cartList.find(item => {
                return item.item == product.productName;
            });

            return (<Product 
                product_name={product.productName} 
                brand_name={product.brandName}
                image_url={product.productImage}
                packing={product.packingDetail}
                price={product.price}
                updateProductData={this.updateProductData}
                cartData = {cartData}
                />);
        });

        return (
            <div className={styles.productList}>
                <h1>Masala and spices ({products.length} items)</h1>
                {products}
            </div>
        );
    }
}

ProductList.propTypes = {
    //updateProductData: PropTypes.func.isRequired,
    updateCartData: PropTypes.func.isRequired,
    cartList: PropTypes.array.isRequired
}

export default ProductList;