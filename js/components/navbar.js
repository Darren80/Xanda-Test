import React from 'react';

import telephone from '../../assets/telephone.png';
import flag from '../../assets/flag.png';

import '../../css/components/navbar.css';

export class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="nav-bar">
                <div>
                    <img src={telephone} className="img-contain" alt="telephone"></img>
                    <p>{this.props.company.phone_number}</p>
                </div>
                <div>
                    <img src={flag} className="img-contain" alt="flag"></img>
                    <p>Try another Castle</p>
                </div>
            </div>
        )
    }
}