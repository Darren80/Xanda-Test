import React from 'react';

import coins from '../../assets/coins.png';
import bin from '../../assets/bin.png';
require('../../css/components/basket.css');

export class Basket extends React.Component {
	constructor(props) {
		super(props)
		this.basket = this.basket.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.updateTotal = this.updateTotal.bind(this);
	}

	removeItem(codeToRemove) {
		let updatedBasket = [...this.props.basket].filter(code => code !== codeToRemove);
		this.props.updateBasket(updatedBasket);
	}

	updateTotal(updatedTotal) {
		if (this.props.basketTotal !== updatedTotal) {
			this.props.updateTotal(updatedTotal);
		}
	}

	basket() {

		let basketTotal = 0;
		if (this.props.isCheckingOut && !this.props.basket.length) {
			this.props.showHideCheckout(false);
		}

		let basketItems = this.props.basket.map(productCode => {
			//Get the product object using the productCode.
			let game = this.props.products.find(product => product.product_code === productCode);

			if (game) {
				basketTotal += game.price;
				return (
					<div className="basket-item" key={game.product_code}>

						<img src={game.game_cover_img} className="item-game-image" alt="game cover art"></img>

						<div>
							<h4 className="item-game-title">{game.game_title}</h4>
							<div className="item-price">
								<img src={coins} className="coin-image" alt="coins"></img>
								<h4>{game.price} Gil</h4>
							</div>
						</div>

						<img onClick={(e) => { this.removeItem(game.product_code) }} className="bin-image" src={bin} alt="coins"></img>

					</div>
				)

			}
		});

		this.updateTotal(basketTotal);
		return basketItems == false ? (<h4 className="no-items-placeholder">No Items</h4>) : basketItems;
	}

	render() {

		return (
			<div id="basket" className={this.props.isCheckingOut ? 'wide basket-background' : 'basket-background'}>
				<div className="basket container">
					{!this.props.isCheckingOut && <h1>Basket</h1>}

					{this.props.isCheckingOut &&
						<button className="basket-return"
							onClick={() => { this.props.showHideCheckout(false) }}>Go Back</button>}

					{this.basket()}

					<div className="basket-bottom">
						<div className="basket-total">
							<h3 className="basket-total-text">Total</h3>
							<h3 className="basket-price-text">{this.props.basketTotal} Gil</h3>
						</div>

						{!this.props.isCheckingOut &&
							<button className="basket-continue"
								onClick={() => { this.props.showHideCheckout(true) }}
								disabled={this.props.basket.length ? false : true}>Continue</button>}

					</div>
				</div>
			</div >
		)
	}
};