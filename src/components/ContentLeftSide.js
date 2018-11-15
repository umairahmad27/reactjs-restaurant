import React, { Component } from 'react';

class ContentLeftSide extends Component {
    render() {
        return (
            <div className="col s12 m8">
                <h5>Our Menu</h5>
                <div className="contentSide">
                    {this.props.menuItems.map((value, index) => {
                        return (<p key={index}>
                            <label>
                                <input type="checkbox" onClick={() => {
                                    this.props.toggleMenuItems(value);
                                }} />
                                <span className="black-text">{value}</span>
                            </label>
                        </p>)
                    })}
                </div>
            </div>
        );
    }
}

export default ContentLeftSide;