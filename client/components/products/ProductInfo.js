import React from 'react';
import styles from './Product.css';

export default (props) => {

    const {product_name, brand_name, packing, price} = props;
    return (
        <div>
            <div className={styles.prodInfo_brand}>{brand_name}</div>
            <div className={styles.prodInfo_product}>{product_name}</div>
            <div className={styles.prodInfo_packing}>{packing}</div>
            <div className={styles.prodInfo_price}><strong>Rs {price}</strong></div>
        </div>
    )
}