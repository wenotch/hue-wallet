import { Container } from '@chakra-ui/layout';
import Head from 'next/head';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Boxed from '../components/Boxed';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Nav />
				<Hero />
				<Boxed />
				<Footer />
			</div>
		</div>
	);
}
