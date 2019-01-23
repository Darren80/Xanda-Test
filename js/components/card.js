import React from 'react';

import coins from '../../assets/coins.png';
import controller from '../../assets/controller.png';

import '../../css/components/card.css';

export class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.card = this.card.bind(this);
        this.addtoBasket = this.addtoBasket.bind(this);
    }

    card() {
        let inBasket;
        return this.props.products.map(game => {

            if (this.props.basket.includes(game.product_code)) {
                inBasket = true;
            } else {
                inBasket = false;
            }

            return (
                <div className={inBasket ? 'card fade' : 'card'} key={game.product_code}>
                    <img src={game.game_cover_img} className="game-image" alt="small image of coins" ></img>
                    <div className="card-text">
                        <h1 className="card-game-title">{game.game_title}</h1>
                        <h3 className="card-game-description">{game.game_description}</h3>
                        <div className="card-price">
                            <img src={coins} alt="small image of coins" />
                            <p>{`${game.price} Gil`}</p>
                        </div>
                        <button className="add-to-basket" onClick={(e) => this.addtoBasket(game.product_code)} disabled={inBasket ? true : false}>Add to Basket</button>
                    </div>
                    <img src={controller} className="controller-img" alt="background style"></img>
                </div>
            )
        });
    }

    addtoBasket(productCode) {
        if (this.props.basket.includes(productCode)) {
            return; //Item is already in basket
        }

        let updatedBasket = [...this.props.basket, productCode];
        this.props.updateBasket(updatedBasket);
    }

    render() {
        return (
            <div className="cards">
                {this.card()}
            </div>
        )
    }
}