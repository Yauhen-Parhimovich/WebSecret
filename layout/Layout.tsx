import React from 'react';

import Sidebar from './Sidebar/Sidebar';

import {LayoutProps} from './Layout.props';
import styles from './Layout.module.css';
import {AppContextProvider, IAppContext} from '../context/app.context';

console.log(process.env.NEXT_PUBLIC_DOMAIN)
export const Layout: React.FC<LayoutProps> = ({children}): JSX.Element => {
	return (
		<div className={styles['wrapper']}>
			<div className={styles['page']}>
				<aside className={styles['sidebar']}>
					<Sidebar/>
				</aside>
				<main className={styles['main']}>
					{children}
				</main>
			</div>
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext> (Component: React.FC<T>) => {
	return function withLayoutComponent (props: T) {

		return (
			<AppContextProvider productList={props.product}>
				<Layout>
					<Component {...props}/>
				</Layout>
			</AppContextProvider>

		);
	};
};
