import React, { Component } from 'react';

import { toast } from 'react-toastify';

import { withRouter } from 'react-router-dom';

class ContentRightSide extends Component {

    checkSelectedFood = () => {
        let selectedFoods = this.props.selectedFood;

        if (selectedFoods.length === 0) {
            toast.error('Please select at least one food item.');
            return;
        }

        this.props.history.push('/thanks');

    }

    render() {

        return (
            <div>
                <div className="col s12 m4">
                    <h5>Your Order</h5>
                    <div className="contentSide">
                        <ol style={{ paddingInlineStart: "20px" }}>
                            {this.props.selectedFood.map((value, index) => {
                                return <li key={index}>{value}</li>
                            })}
                        </ol>
                    </div>
                    <div className="right-align">
                        <button onClick={this.checkSelectedFood} className="btn waves-effect waves-light deep-purple darken-2 hoverable" style={{ marginTop: "20px" }}>Order</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ContentRightSide);