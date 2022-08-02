import {AppProps} from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

function MyApp ({Component, pageProps}: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>WebSecret - test work</title>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet"/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
