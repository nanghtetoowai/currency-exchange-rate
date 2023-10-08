import { useMutation, useQuery } from '@tanstack/react-query';
import {
	CConvertParams,
	convertCurrency,
	getCurrencies,
} from '@services/currency/currencyService.ts';

const keys = {
	lists: () => ['list'] as const,
};

export function useGetCurrencies() {
	return useQuery({
		queryKey: keys.lists(),
		queryFn: () => getCurrencies(),
		select: (data) => data?.data?.currencies,
	});
}

export function useCurrencyConvert() {
	return useMutation({
		mutationFn: (params: CConvertParams) => convertCurrency(params),
		// onSuccess() {},
		// onError() {},
	});
}
