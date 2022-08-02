import React from 'react';
import {withLayout} from '../../layout/Layout';
import ProductList from '../../components/ProductList/ProductList';
import {GetStaticProps} from 'next';
import {useHttp} from '../../hooks/http.hooks';
import {BASE_URL} from '../../CONST/app.const';
import {LensesProps} from '../../interface/lenses.interface';

const Index: React.FC = () => {
	return <ProductList/>;
};

export default withLayout(Index);

export const getStaticProps: GetStaticProps<LensesProps> = async () => {
	const {request} = useHttp();
	const response = await request(BASE_URL, 'GET');
	return {
		props: {
			product: response.products
		}
	};
};


