import React from 'react';
import { Divider, NumberInput, Paper, Select, Stack } from '@mantine/core';
import {
	useCurrencyConvert,
	useGetCurrencies,
} from '@services/currency/queries.ts';
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

const CurrencyForm: React.FC = () => {
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

	const { values } = form;

	const { mutateAsync } = useCurrencyConvert();

	return (
		<Paper shadow="xs" p="md" withBorder>
			<form>
				{!isLoading ? (
					<Stack>
						<InputGroup>
							<NumberInput
								hideControls
								variant="unstyled"
								{...form.getInputProps('baseValue')}
								onChange={async (value: number) => {
									form.setFieldValue('baseValue', value);
									const response = await mutateAsync({
										from: values.baseCurrency,
										to: values.targetCurrency,
										amount: value,
									});
									if (response.data?.result) {
										form.setFieldValue('targetValue', response.data?.result);
									}
								}}
							/>
							<Divider orientation="vertical" mx="xs" />
							<Select
								w={100}
								defaultValue={form.values.baseCurrency}
								variant="unstyled"
								data={currencyAcronyms}
								{...form.getInputProps('baseCurrency')}
								onChange={async (value: string) => {
									form.setFieldValue('baseCurrency', value);
									const response = await mutateAsync({
										from: value,
										to: values.targetCurrency,
										amount: values.baseValue,
									});
									if (response.data?.result) {
										form.setFieldValue('targetValue', response.data?.result);
									}
								}}
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
								onChange={async (value: string) => {
									form.setFieldValue('targetCurrency', value);
									const response = await mutateAsync({
										from: values.baseCurrency,
										to: value,
										amount: values.baseValue,
									});
									if (response.data?.result) {
										form.setFieldValue('targetValue', response.data?.result);
									}
								}}
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

CurrencyForm.displayName = 'CurrencyForm';

const MemorizedCurrencyList = React.memo(CurrencyForm);

export default MemorizedCurrencyList;
