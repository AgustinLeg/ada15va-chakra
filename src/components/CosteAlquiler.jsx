import {
	Heading,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Stack,
} from '@chakra-ui/react';

export const CosteAlquiler = ({ value, setValues }) => {
	return (
		<Stack mt={10} spacing={10}>
			<Heading>Alquiler Auto</Heading>
			<NumberInput
				min={1}
				max={31}
				value={value}
				onChange={(valueString) =>
					setValues((prev) => ({
						...prev,
						auto: Number(valueString),
					}))
				}
			>
				<NumberInputField />
				<NumberInputStepper>
					<NumberIncrementStepper />
					<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
		</Stack>
	);
};
