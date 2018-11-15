import React, { Component } from 'react';

import { toast } from 'react-toastify'
class AddNewMenuItem extends Component {

    titleCase = (str) => {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        // Directly return the joined string
        return splitStr.join(' ');
    }

    addNewFoodItem = () => {
        let foodItem = this.refs.foodName.value;

        if (foodItem === "" || foodItem.length < 3) {
            toast.error('Your food name "' + foodItem + '" is not valid. Please write a valid food name');
            return;
        }

        this.props.addFoodName(this.titleCase(foodItem));
    }

    render() {

        return (
            <div style={{ marginTop: "20px" }}>
                <div className="row">
                    <div className="container">
                        <div className="hide-on-small-only col m3"></div>
                        <div className="input-field col s9 m5">
                            <i className="material-icons prefix">edit</i>
                            <input ref="foodName" id="foodName" type="text" />
                            <label htmlFor="foodName">Add a new Item into menu</label>
                        </div>
                        <div className="col s3 m1">
                            <button onClick={this.addNewFoodItem} className="btn waves-effect waves-light deep-purple darken-2 hoverable" style={{ marginTop: "22px" }}><i className="material-icons">add</i></button>
                        </div>
                        <div className="hide-on-small-only col m3"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNewMenuItem;