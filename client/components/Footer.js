import React from 'react';
import { Flex, Link, Spacer } from '@chakra-ui/react';
import { Box, Stack, Heading, Container, Text, Button, Icon, useColorModeValue, createIcon } from '@chakra-ui/react';

export default function Footer() {
	return (
		<div>
			<Stack mx={40} my={20}>
				<Flex mb={3}>
					<Link fontSize=".9em">Help and Support</Link>
					<Link mx={3} fontSize=".9em">
						Free
					</Link>
					<Link mx={3} fontSize=".9em">
						Security
					</Link>
					<Link mx={3} fontSize=".9em">
						Features
					</Link>
					<Link fontSize=".9em">Shop</Link>
				</Flex>
				<hr />
				<Flex mx={40} mt={3}>
					<Box>
						<Link fontSize=".9em">About</Link>
						<Link mx={3} fontSize=".9em">
							Blog
						</Link>
						<Link mx={3} fontSize=".9em">
							Developer
						</Link>
						<Link mx={3} fontSize=".9em">
							Site map
						</Link>
					</Box>

					<Spacer />

					<Box>
						<Link mx={3} fontSize=".9em">
							@Hue Bank 2021
						</Link>
						<Link mx={3} fontSize=".9em">
							Legal
						</Link>
						<Link fontSize=".9em">Privacy</Link>
					</Box>
				</Flex>
			</Stack>
		</div>
	);
}
