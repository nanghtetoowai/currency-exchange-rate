import React from 'react';
import { Divider, NumberInput, Paper, Select, Stack } from '@mantine/core';
import { useGetCurrencies } from '@services/currency/queries.ts';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import InputGroup from '@base/InputGroup/InputGroup.tsx';

const formSchema = z.object({
	baseValue: z.number({ required_error: 'Required' }),
	baseCurrency: z.string().min(1, { message: 'Please select currency' }),
	targetValue: z.number({ required_error: 'Required' }),
	targetCurrency: z.string().min(1, { message: 'Please select currency' }),
});

type TFormData = z.infer<typeof formSchema>;

const CurrencyList: React.FC = () => {
	const { data: currencies, isLoading } = useGetCurrencies();

	const currencyAcronyms: string[] = currencies && Object.keys(currencies);

	const form = useForm<TFormData>({
		validate: zodResolver(formSchema),
		initialValues: {
			baseValue: 0,
			baseCurrency: 'USD',
			targetValue: 0,
			targetCurrency: 'MMK',
		},
	});

	return (
		<Paper>
			<form>
				{!isLoading ? (
					<Stack>
						<InputGroup>
							<NumberInput
								hideControls
								variant="unstyled"
								{...form.getInputProps('baseValue')}
							/>
							<Divider orientation="vertical" mx="xs" />
							<Select
								w={100}
								defaultValue={form.values.baseCurrency}
								variant="unstyled"
								data={currencyAcronyms}
								{...form.getInputProps('baseCurrency')}
							/>
						</InputGroup>
						<InputGroup>
							<NumberInput
								hideControls
								variant="unstyled"
								readOnly
								{...form.getInputProps('targetValue')}
							/>
							<Divider orientation="vertical" mx="xs" />
							<Select
								w={100}
								defaultValue={form.values.targetCurrency}
								variant="unstyled"
								data={currencyAcronyms}
								{...form.getInputProps('targetCurrency')}
							/>
						</InputGroup>
					</Stack>
				) : (
					<Stack>Loading</Stack>
				)}
			</form>
		</Paper>
	);
};

CurrencyList.displayName = 'CurrencyList';

const MemorizedCurrencyList = React.memo(CurrencyList);

export default MemorizedCurrencyList;
