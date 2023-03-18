import { useState } from 'react';
import {
	Container,
	FormControl,
	FormLabel,
	Heading,
	Switch,
	Text,
} from '@chakra-ui/react';

import { CosteAlquiler } from './components/CosteAlquiler';
import { CosteHotel } from './components/CosteHotel';
import { Navbar } from './components/Navbar';
import { calcularCosteHotel } from './utils/calcular';

function App() {
	// const [dias, setDias] = useState(0);
	// const [auto, setAuto] = useState(0);
	const [values, setValues] = useState({
		hotel: 1,
		auto: 1,
	});
	const [auto, setAuto] = useState(false);

	const total = calcularCosteHotel(values.hotel, auto && values.auto);

	return (
		<Container maxW="4xl">
			<Navbar />
			<CosteHotel value={values.hotel} setValues={setValues} />

			<FormControl display="flex" alignItems="center" my={5}>
				<FormLabel htmlFor="alquilar-auto" mb="0">
					Quiere alquilar un auto?
				</FormLabel>
				<Switch
					id="alquilar-auto"
					onChange={(e) => setAuto(e.target.checked)}
				/>
			</FormControl>

			{auto && <CosteAlquiler value={values.auto} setValues={setValues} />}

			<Heading as="h4" textAlign="center" mt={10}>
				Total: <Text as="span">$ {total}</Text>
			</Heading>
		</Container>
	);
}

export default App;
