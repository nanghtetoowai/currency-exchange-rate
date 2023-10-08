import { INPUT_BORDER_COLOR } from '@configs/constant.ts';
import { InputWrapper } from '@mantine/core';
import { IChildren } from 'type-children';

const InputGroup: React.FC<IChildren> = ({ children }) => {
	return (
		<InputWrapper
			px="xs"
			display="flex"
			style={{ border: `1px solid ${INPUT_BORDER_COLOR}`, borderRadius: 5 }}
		>
			{children}
		</InputWrapper>
	);
};

InputGroup.displayName = 'InputGroup';

export default InputGroup;
