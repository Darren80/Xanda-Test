import React from 'react';
import { Basket } from './components/basket.js';
import { Cards } from './components/card.js';
import { Navbar } from './components/navbar.js';
import '../css/index.css';

import imageStarWars from '../assets/game1.jpg';
import imageDyingLight from '../assets/game2.jpg';
import imageBloodborne from '../assets/game3.jpg';
import imageEvolve from '../assets/game4.jpg';

import logo from '../assets/logo.png';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [{
				product_code: 'G1',
				game_title: 'Star Wars: Battlefront',
				game_cover_img: imageStarWars,
				game_description: 'Immerse yourself in the Ultimate Star Wars Experience.',
				price: 300
			},
			{
				product_code: 'G2',
				game_title: 'Dying Light',
				game_cover_img: imageDyingLight,
				game_description: 'Dying light is an open world first person action-adventure video game developed by techland.',
				price: 500
			},
			{
				product_code: 'G3',
				game_title: 'Bloodborne',
				game_cover_img: imageBloodborne,
				game_description: 'Bloodborne is an action role-playing video game developed by FromSoftware.',
				price: 9999
			},
			{
				product_code: 'G4',
				game_title: 'Evolve',
				game_cover_img: imageEvolve,
				game_description: 'Evolve is a first-person shooter video game developed by Turtle Rock Studios.',
				price: 150
			}],
			basket: [],
			total: 0,
			company: {
				phone_number: '1337 1337 1337'
			},
			isCheckout: false
		};
		this.updateBasket = this.updateBasket.bind(this);
		this.updateTotal = this.updateTotal.bind(this);
		this.showHideCheckout = this.showHideCheckout.bind(this);

	}

	componentDidUpdate() {
		let container = document.getElementById('main-container');
		if (this.state.isCheckout) {
			container.style.flexDirection = 'column';
		} else {
			container.style.flexDirection = 'row';
		}
	}

	updateBasket(updatedBasket) {
		this.setState({
			basket: updatedBasket
		});
	}

	updateTotal(total) {
		this.setState({
			total: total
		});
	}

	showHideCheckout(bool) {
		this.setState({
			isCheckout: bool
		});
	}

	render() {

		return (
			<div id="main-container">
				<div className="main-content-area">

					<Navbar company={this.state.company} />

					<div id="page">
						<a href="#"><img src={logo} className="logo-img" alt="Logo"></img></a>
						{!this.state.isCheckout && <Cards basket={this.state.basket}
							products={this.state.products}
							updateBasket={this.updateBasket} />}
					</div>
				</div>
				<Basket basket={this.state.basket}
					products={this.state.products}
					basketTotal={this.state.total}
					updateBasket={this.updateBasket}
					updateTotal={this.updateTotal}
					showHideCheckout={this.showHideCheckout}
					isCheckingOut={this.state.isCheckout} />
			</div>
		)
	}
};

export default App;
