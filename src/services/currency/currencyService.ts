import axios from 'axios';
import { ACCESS_KEY } from '@configs/constant.ts';

export const getCurrencies = async () => {
	return await axios.get('/list', {
		params: { access_key: ACCESS_KEY },
	});
};

export interface CConvertParams {
	from: string;
	to: string;
	amount: number;
}

export const convertCurrency = async (data: CConvertParams) => {
	return await axios.get('/convert', {
		params: {
			access_key: ACCESS_KEY,
			from: data.from,
			to: data.to,
			amount: data.amount,
		},
	});
};
