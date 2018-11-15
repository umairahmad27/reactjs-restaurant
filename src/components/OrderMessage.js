import React, { Component } from 'react';

import Image from '../images/orderSuccess.png'
class OrderMessage extends Component {
    render() {

        return (
            <main>
                <div className="row orderMessageRow marginZero">
                    <div className="container">
                        <div className="col s12">
                            <div className="center-align">
                                <img src={Image} alt="Happy Order" width="150px" height="150px" />
                            </div>
                            <h5 className="center-align">Your order has been succesfully submitted. Thank you!</h5>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default OrderMessage;