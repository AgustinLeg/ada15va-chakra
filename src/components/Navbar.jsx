import { Heading, Flex, Link, HStack } from '@chakra-ui/react';

const links = [
	{
		href: '/',
		title: 'Home',
	},
	{
		href: '/',
		title: 'Products',
	},
	{
		href: '/',
		title: 'Contact',
	},
];

export const Navbar = () => {
	return (
		<Flex as="header" p={2} justifyContent="space-between">
			<Heading as="h1" size="md">
				ADA 15va
			</Heading>
			<HStack spacing={8}>
				{links.map((link) => (
					<Link key={link.title} href={link.href}>
						{link.title}
					</Link>
				))}
			</HStack>
		</Flex>
	);
};
