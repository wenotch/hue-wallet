import React from 'react';
import {
	Box,
	Heading,
	Flex,
	Spacer,
	Container,
	Text,
	Button,
	Stack,
	Icon,
	useColorModeValue,
	createIcon
} from '@chakra-ui/react';

export default function Nav() {
	return (
		<div>
			<Flex bgColor={'silver'} px={40} py={5}>
				<Box p="2">
					<Heading size="md">Hue Bank</Heading>
				</Box>

				<Spacer />

				<Box p="2">
					<Heading size="md">How it works</Heading>
				</Box>
				<Spacer />
				<Box>
					<Button
						border={'2px'}
						mx={10}
						borderColor={'#FFFFFF'}
						bg={'none'}
						rounded={20}
						_hover={{
							bg: '#D50F72',
							borderColor: '#D50F72',
							color: '#FFFFFF'
						}}
					>
						Log In
					</Button>

					<Button
						colorScheme={'green'}
						bg={'#A5396F'}
						rounded={20}
						px={6}
						_hover={{
							bg: '#D50F72'
						}}
					>
						Sign Up
					</Button>
				</Box>
			</Flex>

			<hr />
		</div>
	);
}
