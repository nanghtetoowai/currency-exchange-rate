import { Divider, InputWrapper, NumberInput, Select } from '@mantine/core';
import { INPUT_BORDER_COLOR } from '@configs/constant.ts';

interface ICurrencyInput {
	currencies: Array<string>;
	defaultCurrency: string;
}

const CurrencyInput: React.FC<ICurrencyInput> = ({
	currencies,
	defaultCurrency,
}) => {
	return (
		<InputWrapper
			px="xs"
			display="flex"
			style={{ border: `1px solid ${INPUT_BORDER_COLOR}`, borderRadius: 5 }}
		>
			<NumberInput
				hideControls
				variant="unstyled"
				// rightSectionPointerEvents="all"
				// rightSectionWidth={100}
				// // mt="md"
				// // wrapperProps={<Group />}
				// rightSection={
				//
				// }
			/>
			<Divider orientation="vertical" mx="xs" />

			<Select
				w={100}
				defaultValue={defaultCurrency}
				variant="unstyled"
				// label="Your favorite library"
				data={currencies}
			/>
		</InputWrapper>
	);
};

export default CurrencyInput;
