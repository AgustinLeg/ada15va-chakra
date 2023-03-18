import {
	Box,
	Button,
	Card,
	CardBody,
	Flex,
	HStack,
	Text,
	useColorMode,
	VStack,
	useDisclosure,
} from '@chakra-ui/react';

export const DemoChakra = () => {
	const { toggleColorMode } = useColorMode();
	const { isOpen, onToggle } = useDisclosure();
	const handleClick = () => alert('click');

	return (
		<div>
			{' '}
			<Button onClick={handleClick} type="button" size="lg" colorScheme="red">
				Eliminar
			</Button>
			<Button onClick={toggleColorMode}>Cambiar tema</Button>
			<Button onClick={onToggle}>Toggle title</Button>
			{isOpen ? 'titulo' : 'sin titulo'}
			<Box
				mt={10}
				bg={{
					base: 'green.100',
					sm: 'blue.100',
					md: 'yellow.100',
					lg: 'red.100',
				}}
			>
				<h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
					impedit dolorum ipsa enim in, rem magni eius maiores ea, fugit
					mollitia sint autem magnam alias veniam molestiae quidem. Eos, maxime.
				</h2>
			</Box>
			<HStack bg={['blue', null, 'green']}>
				{[...Array(6)].map((item) => (
					<Card>
						<CardBody>
							<Text>
								View a summary of all your customers over the last month.
							</Text>
						</CardBody>
					</Card>
				))}
			</HStack>
			<Box bgImage="url(/vite.svg)">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
				perspiciatis saepe illum placeat illo blanditiis ex quibusdam assumenda
				quae, neque rem eligendi adipisci ratione incidunt nam fugiat ab iste
				asperiores!
			</Box>
		</div>
	);
};
