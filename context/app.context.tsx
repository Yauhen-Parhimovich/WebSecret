import React, {PropsWithChildren, useState} from 'react';

export interface IAppContext {
	productList: any,
	setProductList?: (newProductList: any) => void
}

export const AppContext = React.createContext<IAppContext>({
	productList: []
});

export const AppContextProvider = ({productList, children}: PropsWithChildren<IAppContext>) => {
	const [productState, setProductState] = useState(productList);
	const setProductList = (newProductList: any) => {
		setProductState(newProductList);
	};
	return (
		<AppContext.Provider value={{productList: productState, setProductList}}>
			{children}
		</AppContext.Provider>
	);
};
