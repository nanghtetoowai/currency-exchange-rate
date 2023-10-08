import { useGetCurrencies } from '@services/currency/queries.ts';

export default function Home() {
	const { data: currrencies, isLoading} = useGetCurrencies();

	console.log(currrencies)

	return <div>HOME Page</div>;
}
