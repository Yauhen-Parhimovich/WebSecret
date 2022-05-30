export interface ILensesItem {
	id: number;
	title: string;
	slug: string;
	is_second_hand: boolean;
	price: string;
	discount_trade_in?: number;
	is_new: boolean;
	condition: number;
	in_stock: boolean;
	category: any[];
	image: any;
}

export interface LensesProps {
	product: ILensesItem[];
}
