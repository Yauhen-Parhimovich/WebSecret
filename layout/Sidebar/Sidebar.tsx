import React, {ChangeEvent, FormEvent, useContext, useEffect, useState} from 'react';
import {SidebarProps} from './Sidebar.props';
import Checkbox from '../../components/Checkbox/Checkbox';
import {useHttp} from '../../hooks/http.hooks';
import {AppContext} from '../../context/app.context';

import styles from './Sidebar.module.css';
import {BASE_URL} from '../../CONST/app.const';



const Sidebar: React.FC<SidebarProps> = () => {



	const [clientWidth, setClientWidth] = useState(0)
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [filters, setFilters] = useState<IParams>({
		canon: false,
		nikon: false,
		priceMin: 0,
		priceMax: 0
	});
	const {request} = useHttp();
	const {productList, setProductList} = useContext(AppContext);

	useEffect(() => {
		setClientWidth(window.innerWidth)
	}, [])

	const onInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.name.includes('price')) {
			setFilters(prevState => ({
					...prevState,
					[event.target.name]: event.target.value
				})
			);
		} else {
			setFilters(prevState => ({
				...prevState,
				[event.target.name]: !prevState[event.target.name]
			}));
		}

	};

	async function onSubmitHandler (event: FormEvent<HTMLFormElement>) {
		console.log(process.env.NEXT_PUBLIC_DOMAIN);
		event.preventDefault();
		const params = {
			'price[min]': filters.priceMin,
			'price[max]': filters.priceMax,
			'brands[]': filters.canon && filters.nikon ? null : filters.canon ? 1 : filters.nikon ? 9 : null
		};
		setIsLoading(true);
		const {products} = await request(BASE_URL, 'GET', params);
		setProductList(products);
		setIsLoading(false);
	}

	return (
		<>
			{(clientWidth > 375) ? <p className={styles['sidebar__total-count']}>Товаров {productList.length}</p> : null}
			<h1 className={styles['sidebar__title']}>Камеры</h1>
			{(clientWidth <= 375) ?	<p className={styles['sidebar__total-count_bottom']}>Товаров {productList.length}</p> : null}
			<form onSubmit={onSubmitHandler}>
				<label className={styles['sidebar__price-title']} htmlFor="price">Цена, ₽</label>
				<div className={styles['sidebar__price-wrapper']}>
					<input onChange={onInputHandler} name="priceMin" className={styles['sidebar__price-input']} placeholder="От"
								 id="price" type="number"/>
					<input onChange={onInputHandler} name="priceMax" className={styles['sidebar__price-input']} placeholder="До"
								 type="number"/>
				</div>
				<h3 className={styles['sidebar__brand-title']}>Бренд</h3>
				<Checkbox onChange={onInputHandler} name="canon" title="Canon"/>
				<Checkbox onChange={onInputHandler} name="nikon" title="Nikon"/>
				<button className={styles['sidebar__button_reset']} type="reset">Сбросить</button>
				<button className={styles['sidebar__button_submit']} type="submit"
								disabled={isLoading}>{isLoading ? 'Загрузка' : 'Показать'}</button>
			</form>
		</>
	);
};

export default Sidebar;

interface IParams {
	priceMin: number;
	priceMax: number;
	canon: boolean;
	nikon: boolean;

}
