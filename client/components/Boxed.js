import React from 'react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Box, Heading, Container, Text, Button, Stack, Icon, useColorModeValue, createIcon } from '@chakra-ui/react';

export default function Boxed() {
	return (
		<div>
			<Container my={20} maxW={'100%'} textAlign={'center'}>
				<Text fontSize="2xl" fontWeight="bold">
					Internet Banking for Everyone
				</Text>

				<Flex mx={20}>
					<Box mx={10}>
						<Icon>Icon</Icon>
						<Heading fontSize="2xl" color={'#A5396F'} textAlign={'center'} my={'5'}>
							Individual
						</Heading>
						<Text>
							We are all about your convenience. You can bank safely and securely with us from any
							location and on any device. Navigate through the new and improved interface.
						</Text>
					</Box>

					<Spacer />

					<Box mx={10}>
						<Icon>Icon</Icon>
						<Heading fontSize="2xl" color={'#A5396F'} textAlign={'center'} my={'5'}>
							Group
						</Heading>
						<Text>
							We are all about your convenience. You can bank safely and securely with us from any
							location and on any device. Navigate through the new and improved interface.
						</Text>
					</Box>

					<Spacer />

					<Box mx={10}>
						<Icon>Icon</Icon>
						<Heading fontSize="2xl" color={'#A5396F'} textAlign={'center'} my={'5'}>
							Company
						</Heading>
						<Text>
							We are all about your convenience. You can bank safely and securely with us from any
							location and on any device. Navigate through the new and improved interface.
						</Text>
					</Box>
				</Flex>
			</Container>

			<Box mx={40}>
				<hr />
			</Box>

			<Container my={20} maxW={'100%'} textAlign={'center'}>
				<Box>
					<Text fontSize="2xl" fontWeight="bold">
						Join 1m active Hue bank accounts worldwide.
					</Text>
					<Text color={'#A5396F'}>Bank secure, simple, convenient. Transfer is free!</Text>
				</Box>

				<Box my="10">
					<Button
						colorScheme={'green'}
						bg={'#A5396F'}
						rounded={'none'}
						px={6}
						_hover={{
							bg: '#D50F72'
						}}
					>
						Register
					</Button>
				</Box>
			</Container>
		</div>
	);
}
