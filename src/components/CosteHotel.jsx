import {
	Heading,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Stack,
	Text,
} from '@chakra-ui/react';

export const CosteHotel = ({ value, setValues }) => {
	return (
		<Stack mt={10} spacing={10}>
			<Heading>Coste Hotel</Heading>
			<NumberInput
				min={1}
				max={31}
				value={value}
				onChange={(valueString) =>
					setValues((prev) => ({
						...prev,
						hotel: Number(valueString),
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
