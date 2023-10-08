import axios from 'axios';
import { ACCESS_KEY } from '@configs/constant.ts';

export const getCurrencies = async () => {
	return await axios.get('/list', {
		params: { access_key: ACCESS_KEY },
	});
};
