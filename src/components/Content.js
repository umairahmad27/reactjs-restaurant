import React, { Component } from 'react';

import { toast } from 'react-toastify'

import ContentLeftSide from './ContentLeftSide'
import ContentRightSide from './ContentRightSide'
import AddNewMenuItem from './AddNewMenuItem'

class Content extends Component {

    state = {
        menuItems: [],
        selectedFood: []
    };

    toggleMenuItems = (value) => {

        let selectedFoods = this.state.selectedFood.slice();

        let checkingIndex = selectedFoods.indexOf(value);

        if (checkingIndex !== -1) {
            selectedFoods.splice(checkingIndex, 1)
        } else {
            selectedFoods.push(value);
        }

        this.setState({ selectedFood: selectedFoods });
    }

    componentDidMount = () => {

        //Server Request
        let dataFromServer = ['Pizza', 'Burger', 'Fries', 'Cold Drink', 'Ice Cream', 'Tea']
        this.setState({ menuItems: dataFromServer });

    }

    addFoodName = (foodItem) => {
        let menuItems = this.state.menuItems.slice();

        let checkingIndex = menuItems.indexOf(foodItem);

        if (checkingIndex !== -1) {

            toast.warning('Your food item is already in our list.');
            return;
        } else {

            menuItems.push(foodItem);
        }

        this.setState({ menuItems: menuItems });

        toast.info('Your food item has been added into our Menu. Thank you!');

    }

    render() {

        return (
            <main>
                <AddNewMenuItem addFoodName={this.addFoodName} />
                <div className="row">
                    <div className="container">
                        <ContentLeftSide menuItems={this.state.menuItems} toggleMenuItems={this.toggleMenuItems} />
                        <ContentRightSide selectedFood={this.state.selectedFood} />
                    </div>
                </div>
            </main>
        );
    }
}

export default Content;