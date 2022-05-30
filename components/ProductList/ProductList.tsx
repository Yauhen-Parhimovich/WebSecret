import React, {useContext} from 'react';

import ProductCard from '../ProductCard/ProductCard';

import {ProductListProps} from './ProductList.props';
import styles from './ProductList.module.css';
import {AppContext} from '../../context/app.context';

const ProductList: React.FC<ProductListProps> = () => {

	const {productList} = useContext(AppContext);

	if (!productList.length) {
		return <h2>Товаров не найдено</h2>
	}

	return (
		<div className={styles['product-list']}>
			{productList.map(item => (<ProductCard key={item.id} data={item}/>))}
		</div>
	);
};

export default ProductList;
