import React from "react";
import { Jumbotron } from "./jumbotron";
import { Navbar } from './Navbar.jsx';
import { Card } from './Card.jsx';
import { Footer } from './Footer.jsx';



const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron		
			/>
			<div className="container-fluid">
				<div className="row justify-content-center cards">
					<div className="col-sm-12 col-md-4">
						<Card
						/>
					</div>
					<div className="col-sm-12 col-md-4">
						<Card
						/>
					</div>
					<div className="col-sm-12 col-md-4">
						<Card
						/>
					</div>
				</div>
			</div>
			<p className="mt-3">
				Made by Mary, Marco & Alejandro
				with
				love!
			</p>
			<Footer />
		</div>
	);
};

export default Home;
