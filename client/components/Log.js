import Head from 'next/head';
import { Box, Heading, Container, Text, Button, Stack, Icon, useColorModeValue, createIcon } from '@chakra-ui/react';

export default function CallToActionWithAnnotation() {
	return (
		<div>
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />
			</Head>

			<Container bg={'silver'} px={160} height={400} maxWidth={'100%'} />
		</div>
	);
}
