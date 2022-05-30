import React from 'react';
import Link from 'next/link';

const Index = () => {
	return (
		<div>
			<h1>Hello Dear Friend!</h1>
			<Link href="/lenses"><a>Link on the work</a></Link>
			<style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          min-height: 100vh;
        }

        h1 {
          margin-bottom: 10px;
        }
			`}</style>
		</div>

	);

};

export default Index;
