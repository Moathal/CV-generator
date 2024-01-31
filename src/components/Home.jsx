import React from 'react'
import Title from 'antd/es/typography/Title';
import { Button } from 'antd';

const Home = () => {
	return (
		<div>
			<Title>WELCOME TO CV GENERATOR!!</Title>
			<p>
				Create your CV by filling out the form and download it, Its as easy as
				this!!
			</p>
			<Button type='link' href="/cv-generator">START{">"}</Button>
		</div>
	);
};

export default Home