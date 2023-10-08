import { useQuery } from '@tanstack/react-query';
import { getCurrencies } from '@services/currency/currencyService.ts';

const keys = {
	lists: () => ['list'] as const,
};

export function useGetCurrencies() {
	return useQuery({
		queryKey: keys.lists(),
		queryFn: () => getCurrencies(),
		select: (data) => data?.data,
	});
}
